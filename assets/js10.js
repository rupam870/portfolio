
(function(){
  const cv=document.getElementById('dl-cv'), ctx=cv.getContext('2d');
  const root=document.documentElement;
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MODES=['steady','twinkle','chase','breathe'];
  let maxY=0, on=false, mode=2, prevTheme=null, onAt=0, W=0, H=0, DPR=1, strands=[], led=[], t=0, last=performance.now(), raf=0, homeVisible=false;
  const store=(k,v)=>{ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v); }catch(e){ return null; } };

  /* ---------- glow sprites ---------- */
  function sprite(r,g,b,size){ const c=document.createElement('canvas'); c.width=c.height=size; const x=c.getContext('2d'); const gr=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
    gr.addColorStop(0,`rgba(${r},${g},${b},1)`); gr.addColorStop(.12,`rgba(${r},${g},${b},.75)`); gr.addColorStop(.35,`rgba(${r},${g},${b},.22)`); gr.addColorStop(1,`rgba(${r},${g},${b},0)`); x.fillStyle=gr; x.fillRect(0,0,size,size); return c; }
  const WARM=sprite(255,196,110,96), GOLD=sprite(255,170,70,160), BLUE=sprite(110,170,255,64);

  /* ---------- geometry: strands live only in the side gutters ---------- */
  function gutter(){ const w=document.querySelector('.wrap'); if(!w) return 40; const r=w.getBoundingClientRect(); const pl=parseFloat(getComputedStyle(w).paddingLeft)||0; return Math.max(10, r.left+pl-12); }
  function rnd(a,b){ return a+Math.random()*(b-a); }
  function build(){
    DPR=Math.min(2,devicePixelRatio||1); W=innerWidth; H=innerHeight; cv.width=W*DPR; cv.height=H*DPR;
    const g=gutter(); strands=[]; led=[]; maxY=0;
    const gap=W<620?9:22, n=W<620?Math.max(1,Math.floor((g-4)/gap)):Math.max(1,Math.floor((g-4)/gap)-3);
    for(const side of [-1,1]){
      for(let i=0;i<n;i++){
        const x0= side<0 ? 6+i*gap+rnd(-2,2) : W-6-i*gap+rnd(-2,2);
        // longer strands near the outer edge, shorter toward the content, like a curtain
        const frac=n===1?.7:1-i/(n-1)*.55; const len=H*rnd(.32,.56)*frac+H*.16;
        const seg=W<620?16:20, cnt=Math.max(4,Math.round(len/seg));
        const pts=[]; for(let k=0;k<=cnt;k++) pts.push({x:x0,y:4+k*seg,px:x0,py:4+k*seg});
        maxY=Math.max(maxY,4+cnt*seg+40); strands.push({pts,seg,x0,globe:rnd(4.2,6.2),ph:Math.random()*6.28,flick:0,dead:0,idx:strands.length});
      }
    }
  }

  /* ---------- physics ---------- */
  let mx=-999,my=-999,pmx=-999,pmy=-999,grab=null,downAt=null,lastScroll=scrollY,scrollKick=0;
  function step(dt){
    const breeze=RM?0:Math.sin(t*.65)*.009+Math.sin(t*1.8)*.004;
    for(const s of strands){
      const P=s.pts;
      for(let k=1;k<P.length;k++){ const p=P[k]; const vx=(p.x-p.px)*.965, vy=(p.y-p.py)*.965; p.px=p.x; p.py=p.y;
        p.x+=vx+breeze*(k/P.length)*(1+Math.sin(s.ph)*.4)+scrollKick*(k/P.length)*Math.sin(s.ph+k*.2); p.y+=vy+.35; }
      if(grab&&grab.s===s){ const p=P[grab.k]; p.x=mx; p.y=my; }
      for(let it=0;it<6;it++){
        P[0].x=s.x0; P[0].y=4;
        for(let k=1;k<P.length;k++){ const a=P[k-1], b=P[k]; const dx=b.x-a.x, dy=b.y-a.y, d=Math.hypot(dx,dy)||1, diff=(d-s.seg)/d;
          if(k===1){ b.x-=dx*diff; b.y-=dy*diff; } else { a.x+=dx*diff*.5; a.y+=dy*diff*.5; b.x-=dx*diff*.5; b.y-=dy*diff*.5; } }
        if(grab&&grab.s===s){ const p=P[grab.k]; p.x=mx; p.y=my; }
      }
      // keep strands in the gutters so they never swing over the content
      const g=gutter(); for(const p of P){ if(s.x0<W/2) p.x=Math.min(p.x,g+6); else p.x=Math.max(p.x,W-g-6); }
      if(s.flick>0) s.flick-=dt;
    }
    scrollKick*=.9;
  }
  function pushFromPointer(){
    if(mx<0||grab) return; const dx=mx-pmx, dy=my-pmy; if(!dx&&!dy) return;
    for(const s of strands) for(let k=1;k<s.pts.length;k++){ const p=s.pts[k]; const d=Math.hypot(p.x-mx,p.y-my); if(d<42){ const f=(1-d/42)*.28; p.px-=dx*f; p.py-=dy*f*.32; } }
  }
  function hit(x,y){ let best=null,bd=22; for(const s of strands) for(let k=2;k<s.pts.length;k++){ const p=s.pts[k]; const d=Math.hypot(p.x-x,p.y-y); if(d<bd){bd=d;best={s,k};} } return best; }

  /* ---------- brightness ---------- */
  function level(s,k,n){
    const age=(performance.now()-onAt)/1000; const warm=Math.min(1,Math.max(0,(age*7-k*.35-s.idx*.08))); // lights come on top-down
    if(warm<=0) return 0;
    let b=1; const m=MODES[mode];
    if(m==='twinkle') b=.45+.55*(.5+.5*Math.sin(t*2.6+s.ph*7+k*1.7));
    else if(m==='chase') b=.2+.8*Math.pow(Math.max(0,Math.sin(t*3.2-k*.55-s.idx*.25)),3);
    else if(m==='breathe') b=.35+.65*(.5+.5*Math.sin(t*1.4));
    else b=.92+.08*Math.sin(t*9+k*3+s.ph*5);
    if(s.flick>0) b*=(Math.sin(s.flick*60)>0?.08:1);
    if(warm<1) b*=warm*(Math.random()<.3?.4:1);
    return RM?Math.min(b,1):b;
  }

  /* ---------- draw ---------- */
  function draw(){
    ctx.setTransform(DPR,0,0,DPR,0,0); ctx.clearRect(0,0,W,H); const sy=scrollY; if(sy>maxY) return; ctx.setTransform(DPR,0,0,DPR,0,-sy*DPR);
    // soft warm spill in the gutters
    const g=gutter();
    for(const side of [-1,1]){ const x=side<0?0:W; const gr=ctx.createRadialGradient(x,H*.3,0,x,H*.3,Math.max(120,g*1.6)); gr.addColorStop(0,'rgba(255,170,80,.10)'); gr.addColorStop(1,'rgba(255,170,80,0)'); ctx.fillStyle=gr; ctx.fillRect(side<0?0:W-g*2,0,g*2,H); }
    // wires
    ctx.lineWidth=1; ctx.strokeStyle='rgba(60,52,40,.85)';
    for(const s of strands){ ctx.beginPath(); s.pts.forEach((p,k)=>k?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.stroke(); }
    ctx.globalCompositeOperation='lighter';
    // bulbs
    for(const s of strands){ const P=s.pts, n=P.length;
      for(let k=1;k<n;k++){ const p=P[k], b=level(s,k,n); if(b<=.01){ continue; }
        const last=k===n-1; const sz=last?s.globe*10:26;
        ctx.globalAlpha=Math.min(1,b); ctx.drawImage(last?GOLD:WARM,p.x-sz/2,p.y-sz/2,sz,sz); }
    }
    ctx.globalCompositeOperation='source-over';
    for(const s of strands){ const P=s.pts, n=P.length;
      for(let k=1;k<n;k++){ const p=P[k], b=level(s,k,n), last=k===n-1;
        if(last){ // glass globe like the ones in the photo
          const r=s.globe; ctx.globalAlpha=1; ctx.fillStyle='rgba(60,52,40,1)'; ctx.fillRect(p.x-1.5,p.y-r-2,3,3);
          const gr=ctx.createRadialGradient(p.x-r*.3,p.y-r*.3,0,p.x,p.y,r); gr.addColorStop(0,`rgba(255,250,230,${.35+.65*b})`); gr.addColorStop(.6,`rgba(255,200,110,${.25+.6*b})`); gr.addColorStop(1,`rgba(255,170,70,${.15+.4*b})`);
          ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(p.x,p.y,r,0,7); ctx.fill();
          ctx.fillStyle='rgba(255,255,255,.6)'; ctx.beginPath(); ctx.arc(p.x-r*.35,p.y-r*.35,r*.22,0,7); ctx.fill();
        } else { ctx.globalAlpha=.25+.75*b; ctx.fillStyle=b>.3?'#fff5dc':'#7d6a4c'; ctx.beginPath(); ctx.arc(p.x,p.y,1.6,0,7); ctx.fill(); }
      }
    }
    ctx.globalAlpha=1;
  }
  function frame(now){ const dt=Math.min(.05,(now-last)/1000); last=now; t+=dt;
    if(!RM){ pushFromPointer(); step(dt); } pmx=mx; pmy=my; draw(); raf=requestAnimationFrame(frame); }

  /* ---------- input ---------- */
  addEventListener('pointermove',e=>{ mx=e.clientX; my=e.clientY+scrollY; if(grab) e.preventDefault(); },{passive:false});
  addEventListener('pointerleave',()=>{ mx=my=pmx=pmy=-999; });
  addEventListener('pointerdown',e=>{ if(!on||!homeVisible) return; const h=hit(e.clientX,e.clientY+scrollY); if(!h) return;
    mx=pmx=e.clientX; my=pmy=e.clientY+scrollY; grab=h; downAt={x:e.clientX,y:e.clientY,t:performance.now()}; e.preventDefault(); },{passive:false});
  addEventListener('touchmove',e=>{ if(grab) e.preventDefault(); },{passive:false});
  const release=e=>{ if(!grab) return; const moved=downAt&&Math.hypot(e.clientX-downAt.x,e.clientY-downAt.y)>6;
    if(!moved){ grab.s.flick=.45; const p=grab.s.pts[grab.k]; p.px=p.x+rnd(-3.5,3.5); } // tap: the loose-bulb flicker, and a little swing
    grab=null; downAt=null; };
  addEventListener('pointerup',release); addEventListener('pointercancel',release);
  
  addEventListener('resize',()=>{ if(on) build(); });

  /* ---------- on in dark mode during Diwali season, home page only ---------- */
  function setOn(v){
    on=v; root.classList.toggle('dl-on',v);
    if(v){ build(); onAt=performance.now(); if(!raf){ last=performance.now(); raf=requestAnimationFrame(frame); } }
    else { if(raf){ cancelAnimationFrame(raf); raf=0; } ctx.clearRect(0,0,cv.width,cv.height); }
    dispatchEvent(new Event('dl:change'));
  }
  function check(){ homeVisible=!!document.querySelector('#app .intro'); const want=!!window.__diwali&&homeVisible&&root.getAttribute('data-theme')==='dark'; if(want!==on) setOn(want); }
  new MutationObserver(check).observe(document.getElementById('app'),{childList:true});
  new MutationObserver(check).observe(root,{attributes:true,attributeFilter:['data-theme']});
  window.__dl={isOn:()=>on&&homeVisible,mode:()=>MODES[mode],onAt:()=>onAt};
  check();
})();
