
(function(){
  const box=document.getElementById('bsp'); if(!box||!window.Matter) return;
  const {Engine,Bodies,Body,Composite,Constraint,Sleeping,Events}=Matter;
  const tidy=document.getElementById('bsp-tidy');
  const PLANT='<svg viewBox="0 0 100 150" aria-hidden="true"><defs><linearGradient id="sL1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#4F7A4A"/><stop offset=".5" stop-color="#8DB57E"/><stop offset=".8" stop-color="#A9C597"/><stop offset="1" stop-color="#DA8B84"/></linearGradient><linearGradient id="sL2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#46703F"/><stop offset=".5" stop-color="#80A872"/><stop offset=".8" stop-color="#9DBC8B"/><stop offset="1" stop-color="#D3827C"/></linearGradient><linearGradient id="sL3" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3F663A"/><stop offset=".5" stop-color="#739C66"/><stop offset=".8" stop-color="#92B281"/><stop offset="1" stop-color="#CC7B76"/></linearGradient><radialGradient id="sPot" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#FBF8F1"/><stop offset=".6" stop-color="#EEE7DA"/><stop offset="1" stop-color="#CFC5B4"/></radialGradient><radialGradient id="sSoil" cx=".5" cy=".5" r=".6"><stop offset="0" stop-color="#8B7A66"/><stop offset="1" stop-color="#5E5042"/></radialGradient></defs><ellipse cx="50" cy="89" rx="40" ry="5.5" fill="url(#sSoil)"/><g fill="#B8A88F"><circle cx="30" cy="89" r="1.3"/><circle cx="38" cy="91" r="1.1"/><circle cx="62" cy="91" r="1.2"/><circle cx="70" cy="89" r="1.3"/><circle cx="22" cy="89.5" r="1"/><circle cx="78" cy="89.5" r="1"/></g><path d="M7 89Q7 83 50 83Q93 83 93 89Q93 95 50 95Q7 95 7 89ZM11 89Q11 93 50 93Q89 93 89 89Q89 85 50 85Q11 85 11 89Z" fill="#F6F1E8" fill-rule="evenodd"/><g transform="translate(50 83) rotate(-22)"><path d="M0 0C11 -10.8 8.8 -28.8 0 -36C-8.8 -28.8 -11 -10.8 0 0Z" fill="url(#sL3)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.3Q1.3 -18.0 0 -32.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 83) rotate(22)"><path d="M0 0C11 -10.8 8.8 -28.8 0 -36C-8.8 -28.8 -11 -10.8 0 0Z" fill="url(#sL3)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.3Q1.3 -18.0 0 -32.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 83) rotate(0)"><path d="M0 0C11 -10.8 8.8 -28.8 0 -36C-8.8 -28.8 -11 -10.8 0 0Z" fill="url(#sL3)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.3Q1.3 -18.0 0 -32.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 84) rotate(-42)"><path d="M0 0C12 -10.8 9.6 -28.8 0 -36C-9.6 -28.8 -12 -10.8 0 0Z" fill="url(#sL2)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.3Q1.4 -18.0 0 -32.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 84) rotate(42)"><path d="M0 0C12 -10.8 9.6 -28.8 0 -36C-9.6 -28.8 -12 -10.8 0 0Z" fill="url(#sL2)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.3Q1.4 -18.0 0 -32.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 85) rotate(-62)"><path d="M0 0C13 -10.2 10.4 -27.2 0 -34C-10.4 -27.2 -13 -10.2 0 0Z" fill="url(#sL2)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.1Q1.6 -17.0 0 -30.6" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 85) rotate(62)"><path d="M0 0C13 -10.2 10.4 -27.2 0 -34C-10.4 -27.2 -13 -10.2 0 0Z" fill="url(#sL2)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.1Q1.6 -17.0 0 -30.6" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 87) rotate(-84)"><path d="M0 0C13 -9.9 10.4 -26.4 0 -33C-10.4 -26.4 -13 -9.9 0 0Z" fill="url(#sL1)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.0Q1.6 -16.5 0 -29.7" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 87) rotate(84)"><path d="M0 0C13 -9.9 10.4 -26.4 0 -33C-10.4 -26.4 -13 -9.9 0 0Z" fill="url(#sL1)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -4.0Q1.6 -16.5 0 -29.7" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 89) rotate(-30)"><path d="M0 0C12 -7.8 9.6 -20.8 0 -26C-9.6 -20.8 -12 -7.8 0 0Z" fill="url(#sL1)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -3.1Q1.4 -13.0 0 -23.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 89) rotate(30)"><path d="M0 0C12 -7.8 9.6 -20.8 0 -26C-9.6 -20.8 -12 -7.8 0 0Z" fill="url(#sL1)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -3.1Q1.4 -13.0 0 -23.4" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><g transform="translate(50 90) rotate(0)"><path d="M0 0C11 -6.6 8.8 -17.6 0 -22C-8.8 -17.6 -11 -6.6 0 0Z" fill="url(#sL1)" stroke="#44683F" stroke-width=".9" stroke-linejoin="round"/><path d="M0 -2.6Q1.3 -11.0 0 -19.8" stroke="#E4EEDC" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".55"/></g><path d="M7 89C5 110 9 134 21 145Q30 150 50 150Q70 150 79 145C91 134 95 110 93 89Q93 95 50 95Q7 95 7 89Z" fill="url(#sPot)"/><path d="M7 89Q7 95 50 95Q93 95 93 89L89 89Q89 93 50 93Q11 93 11 89Z" fill="#F6F1E8"/><path d="M14 100C13 116 17 130 26 139" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".55"/><g fill="#5B4A3A" opacity=".55"><circle cx="29.9" cy="99.4" r="0.9"/><circle cx="48.4" cy="98.7" r="0.45"/><circle cx="42.5" cy="141.7" r="0.45"/><circle cx="28.9" cy="121.9" r="0.75"/><circle cx="71.3" cy="137.0" r="0.75"/><circle cx="28.3" cy="142.2" r="0.75"/><circle cx="72.8" cy="104.1" r="0.75"/><circle cx="34.0" cy="139.1" r="0.75"/><circle cx="18.6" cy="125.5" r="0.9"/><circle cx="50.5" cy="103.2" r="0.9"/><circle cx="33.3" cy="143.1" r="0.75"/><circle cx="12.5" cy="109.2" r="0.75"/><circle cx="76.5" cy="120.4" r="0.9"/><circle cx="46.3" cy="106.1" r="0.75"/><circle cx="73.8" cy="96.2" r="0.45"/><circle cx="47.2" cy="145.9" r="0.9"/><circle cx="65.3" cy="101.5" r="0.6"/><circle cx="26.0" cy="116.7" r="0.75"/><circle cx="60.2" cy="104.3" r="0.75"/><circle cx="19.7" cy="97.2" r="0.6"/><circle cx="33.1" cy="124.3" r="0.6"/><circle cx="34.1" cy="95.3" r="0.75"/><circle cx="65.0" cy="140.6" r="0.75"/><circle cx="67.9" cy="143.9" r="0.45"/><circle cx="23.6" cy="127.9" r="0.45"/><circle cx="34.3" cy="104.0" r="0.9"/><circle cx="34.2" cy="107.0" r="0.6"/><circle cx="37.2" cy="94.5" r="0.45"/><circle cx="73.1" cy="145.9" r="0.45"/><circle cx="45.4" cy="104.8" r="0.6"/><circle cx="20.6" cy="97.2" r="0.6"/><circle cx="57.3" cy="144.5" r="0.45"/><circle cx="53.5" cy="124.3" r="0.75"/><circle cx="87.8" cy="100.4" r="0.75"/><circle cx="70.8" cy="115.3" r="0.6"/><circle cx="48.3" cy="106.6" r="0.9"/><circle cx="49.4" cy="105.4" r="0.9"/><circle cx="30.9" cy="140.2" r="0.6"/><circle cx="49.9" cy="95.6" r="0.75"/><circle cx="70.7" cy="115.7" r="0.75"/><circle cx="22.8" cy="96.7" r="0.75"/><circle cx="55.0" cy="145.5" r="0.9"/><circle cx="78.2" cy="131.3" r="0.45"/><circle cx="49.6" cy="98.8" r="0.6"/><circle cx="82.7" cy="123.8" r="0.6"/><circle cx="37.6" cy="128.2" r="0.75"/></g><circle cx="36" cy="113" r="2.3" fill="#3E2E24"/><circle cx="64" cy="113" r="2.3" fill="#3E2E24"/><path d="M44 119Q50 124.5 56 119" stroke="#3E2E24" stroke-width="1.6" stroke-linecap="round" fill="none"/><ellipse cx="29" cy="121" rx="4.4" ry="2.6" fill="#E59C95" opacity=".7"/><ellipse cx="71" cy="121" rx="4.4" ry="2.6" fill="#E59C95" opacity=".7"/><path d="M81 141Q84 128 83 112" stroke="#8C5A45" stroke-width="1.1" fill="none" stroke-linecap="round"/><path d="M83 118Q76 115 76 109Q82 110 83 118Z" fill="#7C9A64"/><path d="M83 114Q86 106 90 105Q90 112 83 114Z" fill="#6E8C58"/></svg>';
  let engine,els=[],bodies=[],W=0,H=0,S=1,running=false,raf=0,drag=null,visible=false,messy=false;
  const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function build(){
    cancelAnimationFrame(raf); running=false;
    box.innerHTML=''; els=[]; bodies=[];
    W=box.clientWidth; S=W<600?.66:W<900?.86:1; H=Math.round(360*S); const small=W<600;
    box.style.height=H+'px';
    engine=Engine.create({enableSleeping:true,positionIterations:10,velocityIterations:8}); engine.gravity.y=1; engine.gravity.scale=0.0072;
    const shelfY=H-14, shelfL=0, shelfR=W;
    const plank=document.createElement('div'); plank.className='bsp-plank'; plank.style.cssText=`left:${shelfL}px;top:${shelfY}px;width:${shelfR-shelfL}px`; box.appendChild(plank);
    const bracket=(x)=>{ const b=document.createElement('div'); b.className='bsp-bracket'; b.style.cssText=`left:${x}px;top:${shelfY+14}px`; box.appendChild(b); };
    const floor=document.createElement('div'); floor.className='bsp-floor'; box.appendChild(floor);
    const st={isStatic:true,friction:.9,restitution:.05};
    Composite.add(engine.world,[
      Bodies.rectangle((shelfL+shelfR)/2,shelfY+7,shelfR-shelfL,14,st),
      Bodies.rectangle(W/2,H+30,W*3,60,st),
      Bodies.rectangle(-30,H/2,60,H*4,st),
      Bodies.rectangle(W+30,H/2,60,H*4,st),
      Bodies.rectangle(W/2,-30,W*3,60,st)
    ]);
    const up=BOOKS.filter(b=>b.author!=='Austin Kleon'), flat=BOOKS.filter(b=>b.author==='Austin Kleon');
    const Hh=b=>(b.title.length>24?262:b.title.length>14?214:190)*S, Ww=b=>Math.max(34,Math.min(46,b.width+6))*S;
    let x=shelfL+(small?6:24)*S;
    const add=(el,body,w,h)=>{ el.style.width=w+'px'; el.style.height=h+'px'; box.appendChild(el); els.push(el); bodies.push(body); body.plugin={w,h,el}; Composite.add(engine.world,body); el._b=body; };
    up.forEach((b,i)=>{
      const w=Ww(b), h=Hh(b), el=document.createElement('div');
      el.className='bsc-spine bsp-body'; el.setAttribute('role','img'); el.setAttribute('aria-label',b.title);
      el.style.backgroundColor=b.color; el.style.color=b.ink; el.style.setProperty('--acc',b.accent);
      el.innerHTML='<span style="max-height:'+Math.round(h-38*S)+'px">'+esc(b.title)+'</span>';
      const last=i===up.length-1;
      const cx=x+w/2+(last?h*.08:0), cy=shelfY-h/2-(last?1:0.5);
      const body=Bodies.rectangle(cx,cy,w,h,{friction:.7,frictionStatic:1.1,frictionAir:.012,restitution:.02,density:.004,slop:.02,chamfer:{radius:2}});
      if(last) Body.setAngle(body,-.12);
      add(el,body,w,h); x+=w+(last?10*S:1.5*S);
    });
    let sx=x+(small?8:18)*S; const fy=shelfY;
    flat.forEach((b,j)=>{
      const w=(196-j*12)*S*(small?.52:.9), h=30*S, el=document.createElement('div');
      el.className='bsc-flat bsp-body'; el.setAttribute('role','img'); el.setAttribute('aria-label',b.title);
      el.style.backgroundColor=b.color; el.style.color=b.ink; el.style.setProperty('--acc',b.accent); el.style.fontSize=Math.round(11*S)+'px';
      el.innerHTML='<span>'+esc(b.title)+'</span>';
      const body=Bodies.rectangle(sx+w/2+j*4*S,fy-h/2-j*(h+1)-.5,w,h,{friction:.8,frictionStatic:1.2,frictionAir:.012,restitution:.02,density:.004,slop:.02,chamfer:{radius:2}});
      add(el,body,w,h);
    });
    const pw=(small?70:88)*S, ph=pw*67/86, px=small?sx+(196*S*.52)/2:Math.min(shelfR-pw/2-8*S, sx+(196*S*.9)+pw/2+30*S);
    const plantEl=document.createElement('div'); plantEl.className='bsp-body bsp-plant'; plantEl.setAttribute('role','img'); plantEl.setAttribute('aria-label','A succulent in a smiling speckled pot');
    plantEl.innerHTML=PLANT;
    const pb=Bodies.rectangle(px,(small?fy-3*(30*S+1):fy)-ph/2-.5,pw,ph,{friction:.9,frictionStatic:1.4,frictionAir:.015,restitution:0,density:.009,slop:.02,chamfer:{radius:6}});
    add(plantEl,pb,pw,ph);
    plantEl.style.setProperty('--vw',(100/86*pw)+'px'); plantEl.style.setProperty('--vh',(150/86*pw)+'px');
    // settle quickly, then sleep
    for(let i=0;i<360;i++) Engine.update(engine,1000/240);
    draw(); messy=false; tidy.hidden=true;
    if(visible) start();
  }
  function draw(){
    for(const b of bodies){ const {w,h,el}=b.plugin; el.style.transform=`translate(${b.position.x-w/2}px,${b.position.y-h/2}px) rotate(${b.angle}rad)`; }
  }
  let last=0;
  function tick(t){
    const dt=Math.min(33,last?t-last:16.7); last=t;
    const n=Math.max(2,Math.ceil(dt/4)); for(let i=0;i<n;i++){ Engine.update(engine,dt/n); if(drag){ const hb=drag.el._b; Body.setAngularVelocity(hb,0); Body.setAngle(hb,hb.angle+(drag.a0-hb.angle)*.35); } }
    draw();
    const awake=bodies.some(b=>!b.isSleeping)||drag;
    if(awake&&visible){ raf=requestAnimationFrame(tick); } else { running=false; last=0; }
  }
  function start(){ if(running) return; running=true; last=0; raf=requestAnimationFrame(tick); }
  const pt=e=>{ const r=box.getBoundingClientRect(); return {x:Math.max(6,Math.min(W-6,e.clientX-r.left)),y:Math.max(6,Math.min(H-6,e.clientY-r.top))}; };
  box.addEventListener('pointerdown',e=>{
    const el=e.target.closest('.bsp-body'); if(!el) return;
    e.preventDefault();
    const b=el._b, p=pt(e);
    Sleeping.set(b,false);
    const local={x:p.x-b.position.x,y:p.y-b.position.y}, c=Math.cos(-b.angle), s2=Math.sin(-b.angle);
    const c1=Constraint.create({pointA:p,bodyB:b,pointB:{x:local.x*c-local.y*s2,y:local.x*s2+local.y*c},stiffness:.9,damping:.25,length:0}); b._air=b.frictionAir; b.frictionAir=.25;
    Composite.add(engine.world,c1); drag={c:c1,el,id:e.pointerId,a0:Math.abs(b.angle)<.35?0:b.angle}; el.classList.add('grab'); box.classList.add('dragging');
    try{ box.setPointerCapture(e.pointerId); }catch(err){}
    if(!messy){ messy=true; tidy.hidden=false; }
    bodies.forEach(x=>Sleeping.set(x,false));
    start();
  });
  box.addEventListener('pointermove',e=>{ if(!drag||e.pointerId!==drag.id) return; drag.c.pointA=pt(e); });
  const end=e=>{ if(!drag) return; Composite.remove(engine.world,drag.c);
    { const b=drag.el._b; b.frictionAir=b._air||.012; const v=b.velocity, k=.45, sp=Math.hypot(v.x,v.y)*k, max=5; const f=sp>max?max/sp*k:k; Body.setVelocity(b,{x:v.x*f,y:v.y*f}); Body.setAngularVelocity(b,Math.max(-.05,Math.min(.05,b.angularVelocity*.4))); } drag.el.classList.remove('grab'); box.classList.remove('dragging'); drag=null; try{ box.releasePointerCapture(e.pointerId); }catch(err){} start(); };
  box.addEventListener('pointerup',end); box.addEventListener('pointercancel',end);
  tidy.addEventListener('click',build);
  if('IntersectionObserver' in window) new IntersectionObserver(([en])=>{ visible=en.isIntersecting; if(visible) start(); },{rootMargin:'100px'}).observe(box); else visible=true;
  let rw=0; new ResizeObserver(()=>{ const w=box.clientWidth; if(Math.abs(w-rw)>40){ rw=w; build(); } }).observe(box);
})();
