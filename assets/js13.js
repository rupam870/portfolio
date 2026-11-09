
(function(){
  /* Portrait as living ASCII art: tiny coloured characters on a dark card, gently shimmering.
     Laptop: hover turns the photo into characters. Phone: it fades between the two while on screen. */
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const RAMP=" .·:-=+*o#%@";
  function wire(){
    const fig=document.querySelector('#app .ab-portrait'); if(!fig||fig.dataset.asc) return;
    const btn=fig.querySelector('.zoom'), img=btn.querySelector('img'); if(!img) return; fig.dataset.asc='1';
    const cv=document.createElement('canvas'); cv.className='ab-asc'; cv.setAttribute('aria-hidden','true'); btn.appendChild(cv);
    const ctx=cv.getContext('2d'); let W=0,H=0,D=1, cells=null, cols=0, rows=0, cw=0, ch=0, raf=0, on=false, t=0, timer=0;
    const ok=()=>img.complete&&img.naturalWidth>60;
    function build(){
      const r=btn.getBoundingClientRect(); D=Math.min(2,devicePixelRatio||1); W=Math.round(r.width*D); H=Math.round(r.height*D); cv.width=W; cv.height=H;
      cols=Math.round(r.width/4.4); cw=W/cols; ch=cw*1.25; rows=Math.ceil(H/ch);
      const o=document.createElement('canvas'); o.width=cols; o.height=rows; const ox=o.getContext('2d',{willReadFrequently:true});
      const ir=img.naturalWidth/img.naturalHeight, cr=W/H; let sx=0,sy=0,sw=img.naturalWidth,sh=img.naturalHeight;
      if(ir>cr){ sw=sh*cr; sx=(img.naturalWidth-sw)/2; } else { sh=sw/cr; sy=(img.naturalHeight-sh)/2; }
      ox.drawImage(img,sx,sy,sw,sh,0,0,cols,rows); const d=ox.getImageData(0,0,cols,rows).data; cells=[];
      for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){ const i=(y*cols+x)*4, R=d[i],G=d[i+1],B=d[i+2]; let L=Math.pow((R*.299+G*.587+B*.114)/255,.55);
        // keep only Rupam (head + body), like a figure lit on a dark stage
        const u=(x+.5)/cols, v=(y+.5)/rows, head=((u-.52)/.16)**2+((v-.37)/.19)**2<1, l=v<.44?0:.31+(.37-.31)*(v-.44)/.56, rr=v<.44?0:.67-(.67-.62)*(v-.44)/.56, body=v>=.44&&u>l&&u<rr;
        if(!(head||body)) continue; if(head&&!body) L=Math.min(1,L*1.3); if(L<.1) continue; const k=Math.min(1,(L-.1)/.75), m=1.3+.5*(1-k);
        cells.push({x:x*cw+cw/2,y:y*ch+ch/2,L:k,c:`rgb(${Math.min(255,R*m)|0},${Math.min(255,G*m)|0},${Math.min(255,B*m)|0})`,ph:Math.random()*6.28,g:Math.round(k*(RAMP.length-1))}); }
      ctx.font=`${Math.round(ch*.9)}px "Geist Mono",ui-monospace,Menlo,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle';
    }
    function draw(){
      ctx.fillStyle='#0A0A0D'; ctx.fillRect(0,0,W,H);
      for(const c of cells){ let g=c.g; if(!RM&&Math.sin(t*1.7+c.ph*9)>.985) g=Math.max(1,Math.min(RAMP.length-1,g+(Math.random()<.5?-1:1)));
        ctx.globalAlpha=RM?.9:.72+.28*Math.sin(t*1.3+c.ph); ctx.fillStyle=c.c; ctx.fillText(RAMP[g],c.x,c.y); }
      ctx.globalAlpha=1;
    }
    function loop(now){ raf=0; t=now/1000; draw(); if(on||cv.classList.contains('on')) raf=requestAnimationFrame(loop); }
    function show(v){ if(!ok()) return; if(!cells) build(); on=v; cv.classList.toggle('on',v); if(v&&!raf) raf=requestAnimationFrame(loop); if(v&&window.rwTrack) rwTrack('Portrait ASCII Viewed'); }
    const hover=matchMedia('(hover:hover)').matches;
    if(hover){ btn.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse') show(true); }); btn.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') show(false); }); }
    else { const io=new IntersectionObserver(([e])=>{ clearInterval(timer); if(e.isIntersecting&&!RM){ timer=setInterval(()=>show(!on),3400); } else show(false); },{threshold:.5}); io.observe(btn); }
    addEventListener('resize',()=>{ cells=null; if(on) build(); });
  }
  new MutationObserver(()=>setTimeout(wire,0)).observe(document.getElementById('app'),{childList:true}); wire();
})();
