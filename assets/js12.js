
(function(){
  const INK={light:[[46,125,79],[35,64,200],[194,65,12]],dark:[[134,211,166],[148,168,247],[244,165,116]]};
  const SRC=['/img/pl-ph-roorkee.webp','/img/pl-ph-gcr.webp','/img/pl-ph-sf.webp'];
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const W=1400,H=594; let pics=null, rnd=null, DX=null, DY=null, JIT=null, loading=null;
  function seeds(){ // per-dot randomness: which photo a dot shows, where it drifts, how much it sparkles
    const N=W*H, g=90, gw=Math.ceil(W/g)+2, gh=Math.ceil(H/g)+2, cx=new Float32Array(gw*gh), cy=new Float32Array(gw*gh);
    for(let k=0;k<gw*gh;k++){ const a=Math.random()*6.283; cx[k]=Math.cos(a); cy[k]=Math.sin(a); }
    const lerp=(f,x,y)=>{ const fx=x/g, fy=y/g, ix=fx|0, iy=fy|0, tx=fx-ix, ty=fy-iy, sx=tx*tx*(3-2*tx), sy=ty*ty*(3-2*ty), k=iy*gw+ix;
      const a=f[k]+(f[k+1]-f[k])*sx, b=f[k+gw]+(f[k+gw+1]-f[k+gw])*sx; return a+(b-a)*sy; };
    rnd=new Float32Array(N); DX=new Float32Array(N); DY=new Float32Array(N); JIT=new Float32Array(N);
    for(let y=0;y<H;y++) for(let x=0;x<W;x++){ const i=y*W+x, a=Math.random()*6.283, m=Math.random();
      rnd[i]=Math.random(); DX[i]=lerp(cx,x,y)*.8+Math.cos(a)*m*.6; DY[i]=lerp(cy,x,y)*.8+Math.sin(a)*m*.6; JIT[i]=Math.random()*2-1; } }
  function load(){ if(loading) return loading;
    loading=Promise.all(SRC.map(src=>new Promise(res=>{ const im=new Image(); im.onload=()=>{ const c=document.createElement('canvas'); c.width=W; c.height=H; const x=c.getContext('2d'); x.drawImage(im,0,0,W,H);
      res(x.getImageData(0,0,W,H).data); }; im.onerror=()=>res(new Uint8ClampedArray(W*H*4)); im.src=src; })))
      .then(a=>{ pics=a; seeds(); }); return loading; }
  const ss=t=>t<=0?0:t>=1?1:t*t*(3-2*t);
  // which two photos are mixing at scroll k, and how far along (-1 = nothing yet)
  function stage(k){
    if(k<.35) return [-1,0,ss((k+.15)/.5)];
    if(k<.6) return [0,0,1];
    if(k<1) return [0,1,ss((k-.6)/.4)];
    if(k<1.6) return [1,1,1];
    if(k<2) return [1,2,ss((k-1.6)/.4)];
    return [2,2,1]; }
  function wire(){
    const jr=document.querySelector('[data-jr]'); if(!jr||jr.dataset.wired) return; jr.dataset.wired='1';
    const cv=jr.querySelector('[data-jrcv]'), ctx=cv.getContext('2d'); cv.width=W; cv.height=H;
    const img=ctx.createImageData(W,H), px=img.data, plane=jr.querySelector('[data-jrplane]'), route=jr.querySelector('.jr-route'), done=jr.querySelector('.jr-done'), pins=[...jr.querySelectorAll('.jr-pin')];
    const L=done.getTotalLength(); done.style.strokeDasharray=`2 7`; let lastK=-1, raf=0;
    function draw(k){
      const dark=document.documentElement.getAttribute('data-theme')==='dark', inks=INK[dark?'dark':'light'];
      const [sa,sb,m]=stage(k), A=sa<0?null:pics[sa], B=pics[sb], amp=sa<0?1-m:Math.sin(Math.PI*m), R=70*amp, SP=amp*120, GAP=amp*.4;
      if(amp<.003){ px.set(B); }
      else for(let y=0,i=0;y<H;y++) for(let x=0;x<W;x++,i++){
        const o=i*4, r=rnd[i]; const src=r<m?B:A;
        if(!src||((r*9.7)%1)<GAP){ px[o+3]=0; continue; }
        let sx=(x+DX[i]*R)|0, sy=(y+DY[i]*R)|0; sx=sx<0?0:sx>=W?W-1:sx; sy=sy<0?0:sy>=H?H-1:sy;
        const j=(sy*W+sx)*4, al=src[j+3]; if(!al){ px[o+3]=0; continue; }
        const d=JIT[i]*SP; px[o]=src[j]+d; px[o+1]=src[j+1]+d; px[o+2]=src[j+2]+d; px[o+3]=al; }
      ctx.putImageData(img,0,0);
      // route, plane, pins
      const t=Math.min(1,Math.max(0,k/2)); const pt=done.getPointAtLength(L*t), rr=route.getBoundingClientRect(), sv=done.ownerSVGElement.getBoundingClientRect();
      const cur=Math.min(2,Math.max(0,Math.floor(k+.15))); const [r,g,b]=inks[cur]; jr.style.setProperty('--jr',`rgb(${r},${g},${b})`);
      done.style.strokeDashoffset=0; done.style.clipPath=`inset(0 ${100-t*100}% 0 0)`;
      const x=pt.x/1000*sv.width, y=sv.top-rr.top+pt.y/60*sv.height; const ahead=done.getPointAtLength(Math.min(L,L*t+4)); const ang=Math.atan2(ahead.y-pt.y,(ahead.x-pt.x)*sv.width/1000*1000/sv.width||1)*180/Math.PI;
      plane.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%) rotate(${ang}deg)`;
      pins.forEach((p,i)=>p.classList.toggle('on',i===cur));
    }
    function prog(){ const r=jr.getBoundingClientRect(), total=jr.offsetHeight-innerHeight; return RM?Math.round(Math.min(1,Math.max(0,-r.top/Math.max(1,total)))*2):Math.min(1,Math.max(0,-r.top/Math.max(1,total)))*2.6-.15; }
    function tick(){ raf=0; if(!pics) return; const k=Math.max(0,prog()); if(Math.abs(k-lastK)<.002) return; lastK=k; draw(k); }
    const on=()=>{ if(!raf) raf=requestAnimationFrame(tick); };
    // keep the normal section gap above and below the drawing (the sticky stage is a full screen tall)
    const fit=()=>{ const st=jr.querySelector('.jr-stick'); const kids=[...st.children]; const top=Math.min(...kids.map(k=>k.getBoundingClientRect().top)), bot=Math.max(...kids.map(k=>k.getBoundingClientRect().bottom)); const pad=Math.max(0,(st.offsetHeight-(bot-top))/2-8); jr.style.marginTop=jr.style.marginBottom=(-pad)+'px'; };
    fit(); setTimeout(fit,300);
    addEventListener('scroll',on,{passive:true}); addEventListener('resize',()=>{fit();lastK=-1;on();});
    new MutationObserver(()=>{lastK=-1;on();}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting) load().then(()=>{lastK=-1;on();}); },{rootMargin:'600px'}); io.observe(jr);
  }
  new MutationObserver(wire).observe(document.getElementById('app'),{childList:true}); wire();
})();
