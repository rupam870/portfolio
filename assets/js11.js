
(function(){
  const GLOW=(()=>{const c=document.createElement('canvas');c.width=c.height=48;const x=c.getContext('2d');const g=x.createRadialGradient(24,24,0,24,24,24);
    g.addColorStop(0,'rgba(255,214,140,1)');g.addColorStop(.18,'rgba(255,190,100,.7)');g.addColorStop(.5,'rgba(255,170,70,.16)');g.addColorStop(1,'rgba(255,170,70,0)');x.fillStyle=g;x.fillRect(0,0,48,48);return c;})();
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let drawn=0, drawDir=0, wires=[], h1=null, cv=null, ctx=null, bulbs=[], raf=0, t=0, last=0, mx=-1e4, my=-1e4, sweep=-1, DPR=1;

  function wrapWords(h){
    if(h.querySelector('.dl-word')) return;
    const want=['product','designer'];
    const tw=document.createTreeWalker(h,NodeFilter.SHOW_TEXT); const nodes=[]; let n; while((n=tw.nextNode())) nodes.push(n);
    for(const node of nodes){ for(const w of want){ const i=node.nodeValue.indexOf(w); if(i<0) continue;
      const r=document.createRange(); r.setStart(node,i); r.setEnd(node,i+w.length); const sp=document.createElement('span'); sp.className='dl-word'; r.surroundContents(sp); break; } }
  }
  // a short string of bulbs hanging under the words, like an underline
  function underline(els,ox,oy){
    const rs=els.map(e=>e.getBoundingClientRect()); const lines=[];
    rs.forEach((r,i)=>{ const L=lines.find(l=>Math.abs(l.b-r.bottom)<4); if(L){ L.l=Math.min(L.l,r.left); L.r=Math.max(L.r,r.right); L.fs=parseFloat(getComputedStyle(els[i]).fontSize); } else lines.push({l:r.left,r:r.right,b:r.bottom,fs:parseFloat(getComputedStyle(els[i]).fontSize)}); });
    const out=[];
    for(const L of lines){ const gap=Math.max(9,L.fs*.3), w=L.r-L.l, n=Math.max(4,Math.round(w/gap)), sag=L.fs*.07, y0=L.b-oy-L.fs*.06;
      for(let i=0;i<=n;i++){ const u=i/n; out.push({x:L.l-ox+u*w, y:y0+Math.sin(Math.PI*u)*sag, ph:Math.random()*6.28, r:Math.max(1.6,L.fs*.04)}); }
      out.wire=(out.wire||[]).concat([[L.l-ox-L.fs*.15,y0-L.fs*.05],[L.r-ox+L.fs*.15,y0-L.fs*.05],sag]); }
    return out;
  }
  function layout(){
    if(!h1) return; const hr=h1.getBoundingClientRect(); DPR=Math.min(2,devicePixelRatio||1);
    cv.style.width=hr.width+'px'; cv.style.height=hr.height+'px'; cv.width=hr.width*DPR; cv.height=hr.height*DPR;
    const u=underline([...h1.querySelectorAll('.dl-word')],hr.left,hr.top); bulbs=u.map((p,i)=>Object.assign(p,{o:i})); wires=u.wire||[];
  }
  function level(p){
    const st=window.__dl; const age=(performance.now()-st.onAt())/1000, m=st.mode();
    const warm=Math.min(1,Math.max(0,age*1.6-.5-p.o/Math.max(1,bulbs.length)*1.2)); if(warm<=0) return 0;
    let b=1;
    if(m==='twinkle') b=.5+.5*(.5+.5*Math.sin(t*2.4+p.ph*5));
    else if(m==='chase') b=.25+.75*Math.pow(Math.max(0,Math.sin(t*3-p.o*.7)),4);
    else if(m==='breathe') b=.4+.6*(.5+.5*Math.sin(t*1.4));
    else b=.93+.07*Math.sin(t*8+p.ph*4);
    if(sweep>=0){ const d=Math.abs(p.o-sweep); if(d<3) b=Math.min(1.6,b+(1-d/3)*.9); }
    const dm=Math.hypot(p.x-mx,p.y-my); if(dm<60) b=Math.min(1.7,b+(1-dm/60)*.7);
    return (RM?Math.min(b,1):b)*(warm<1&&Math.random()<.25?.4:warm);
  }
  function frame(now){ const dt=Math.min(.05,(now-last)/1000); last=now; t+=dt;
    if(sweep>=0){ sweep+=dt*bulbs.length*.9; if(sweep>bulbs.length+3) sweep=-1; }
    if(drawDir){ drawn=Math.min(1,Math.max(0,drawn+drawDir*dt/(drawDir>0?.9:.45))); if(drawn===0||drawn===1){ if(drawn===1&&drawDir>0) sweep=0; drawDir=0; h1&&h1.classList.remove('dl-drawing'); } }
    ctx.setTransform(DPR,0,0,DPR,0,0); ctx.clearRect(0,0,cv.width,cv.height);
    ctx.strokeStyle='rgba(90,76,56,.9)'; ctx.lineWidth=1;
    if(drawn>0) for(let i=0;i<wires.length;i+=3){ const a=wires[i], b2=wires[i+1], sg=wires[i+2]; ctx.save(); ctx.beginPath(); ctx.rect(a[0]-4,a[1]-40,(b2[0]-a[0]+8)*drawn,sg*4+80); ctx.clip(); ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.quadraticCurveTo((a[0]+b2[0])/2,a[1]+sg*2.4,b2[0],b2[1]); ctx.stroke(); ctx.restore(); }
    let sum=0; const L=bulbs.map(p=>{ const v=level(p); sum+=v; const k=(p.o+.5)/Math.max(1,bulbs.length); return k<=drawn?v:0; }); if(h1) h1.style.setProperty('--dlg',(bulbs.length?Math.min(1.3,sum/bulbs.length):0).toFixed(2));
    ctx.globalCompositeOperation='lighter';
    for(const [i,p] of bulbs.entries()){ const b=L[i]; if(b<=.02) continue; const s=p.r*9*(.8+.25*Math.min(b,1.4)); ctx.globalAlpha=Math.min(1,b*.85); ctx.drawImage(GLOW,p.x-s/2,p.y-s/2,s,s); }
    ctx.globalCompositeOperation='source-over';
    for(const [i,p] of bulbs.entries()){ const b=L[i]; if(b<=0&&((p.o+.5)/bulbs.length)>drawn) continue; ctx.globalAlpha=1; ctx.fillStyle=b>.35?`rgba(255,${238+Math.min(17,b*10)|0},${200+Math.min(55,b*40)|0},${Math.min(1,.35+b*.65)})`:'rgba(120,100,70,.55)'; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill(); }
    raf=requestAnimationFrame(frame);
  }
  function stop(){ drawn=0; drawDir=0; if(raf) cancelAnimationFrame(raf); raf=0; if(cv) cv.remove(); cv=null; if(h1) h1.style.removeProperty('--dlg'); h1=null; }
  function start(){
    const h=document.querySelector('#app .intro h1.lead'); if(!h){ stop(); return; }
    if(h!==h1){ stop(); h1=h; wrapWords(h1); if(getComputedStyle(h1).position==='static') h1.style.position='relative';
      cv=document.createElement('canvas'); cv.id='dl-word-cv'; cv.setAttribute('aria-hidden','true'); h1.appendChild(cv); ctx=cv.getContext('2d');
      h1.addEventListener('pointermove',e=>{ const r=h1.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; });
      h1.addEventListener('pointerleave',()=>{ mx=my=-1e4; });
      h1.querySelectorAll('.dl-word').forEach(w=>w.addEventListener('click',()=>{ if(window.__dl.isOn()&&drawn===1) sweep=0; }));

      layout(); (document.fonts&&document.fonts.ready||Promise.resolve()).then(layout); }
    if(!raf){ last=performance.now(); raf=requestAnimationFrame(frame); }
  }
  // the pencil's own click effect (purple underline + "Thinks like a founder") becomes a string of lights + a yellow note
  let pill=null, pillT=0;
  function note(ic){
    clearTimeout(pillT); if(pill){ pill.remove(); pill=null; }
    const ir=ic.getBoundingClientRect(), lead=ic.closest('.lead'); const d=document.createElement('div'); d.className='hpill'; d.setAttribute('role','status'); d.style.setProperty('--tc','#E8A317'); d.textContent='Thinks like a founder';
    document.body.appendChild(d); const w=d.offsetWidth; const left=Math.max(12,Math.min(ir.left+ir.width/2-w/2,innerWidth-w-12));
    d.style.left=(left+scrollX)+'px'; const below=ir.bottom>lead.getBoundingClientRect().bottom-ir.height*1.2; d.classList.toggle('dn',below);
    d.style.top=(below?ir.bottom+scrollY+10:ir.top+scrollY-d.offsetHeight-10)+'px'; d.style.setProperty('--ax',(ir.left+ir.width/2-left)+'px');
    requestAnimationFrame(()=>d.classList.add('on')); pill=d; pillT=setTimeout(()=>{ d.classList.remove('on'); setTimeout(()=>d.remove(),220); if(pill===d) pill=null; },2600);
  }
  function penClick(e){
    if(!window.__dl||!window.__dl.isOn()||!h1) return; const ic=e.target.closest&&e.target.closest('.intro .lead .i-pen'); if(!ic) return;
    if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ') return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    ic.animate([{transform:'scale(1)'},{transform:'scale(.86)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
    const drawing=!(drawn>.5||drawDir>0); drawDir=drawing?1:-1; h1.classList.add('dl-drawing'); if(drawing) note(ic);
  }
  addEventListener('click',penClick,true); addEventListener('keydown',penClick,true);
  function sync(){ if(window.__dl&&window.__dl.isOn()) start(); else stop(); }
  addEventListener('dl:change',sync); addEventListener('resize',()=>{ if(h1) layout(); });
  new MutationObserver(()=>setTimeout(sync,0)).observe(document.getElementById('app'),{childList:true});
  sync();
})();
