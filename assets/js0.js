
/* ---------- Analytics (Mixpanel HTTP API, no library). Paste the project token to turn it on. ---------- */
(function(){
  var MIXPANEL_TOKEN = '6696b5ff4c67937ac90bac32597f369c'; // rupam.work project (public client token)
  var q=[], did, sess=Date.now().toString(36)+Math.random().toString(36).slice(2,7), sent={};
  function ls(k,v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){ return null; } }
  did = ls('rw-did'); if(!did){ did='rw-'+Date.now().toString(36)+Math.random().toString(36).slice(2,10); ls('rw-did',did); }
  var first = !ls('rw-seen'); ls('rw-seen','1');
  var u=new URLSearchParams(location.search), utm={}; ['utm_source','utm_medium','utm_campaign','ref'].forEach(function(k){ if(u.get(k)) utm[k]=u.get(k); });
  var ref=document.referrer||'', refHost=''; try{ refHost=ref?new URL(ref).hostname:''; }catch(e){}
  function base(){ var w=innerWidth; return Object.assign({ token:MIXPANEL_TOKEN, distinct_id:did, $device_id:did, time:Math.floor(Date.now()/1000), $insert_id:Math.random().toString(36).slice(2)+Date.now().toString(36),
    $current_url:location.href, page:(__route()||'home').split('/')[0]||'home', route:location.pathname+location.hash, session_id:sess, $referrer:ref, $referring_domain:refHost,
    device:w<620?'mobile':w<1024?'tablet':'desktop', $screen_width:screen.width, first_visit:first, theme:document.documentElement.getAttribute('data-theme')||'auto' }, utm); }
  function flush(){ if(!MIXPANEL_TOKEN||!q.length) return; var batch=q.splice(0,50);
    try{ fetch('https://api-js.mixpanel.com/track?ip=1&verbose=0',{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'data='+encodeURIComponent(JSON.stringify(batch))}).catch(function(){}); }catch(e){} }
  window.rwTrack=function(name,props){ if(!MIXPANEL_TOKEN) return; q.push({event:name,properties:Object.assign(base(),props||{})}); clearTimeout(window.__rwT); window.__rwT=setTimeout(flush,400); };
  window.rwTrackOnce=function(key,name,props){ if(sent[key]) return; sent[key]=1; rwTrack(name,props); };
  addEventListener('pagehide',flush);
  var t0=Date.now(), lastPage=null;
  function pv(){ var p=base().page; if(lastPage) rwTrack('Page Left',{left_page:lastPage,seconds:Math.round((Date.now()-t0)/1000)}); lastPage=p; t0=Date.now(); sent={}; rwTrack('Page Viewed',{title:document.title}); }
  addEventListener('hashchange',function(){ setTimeout(pv,50); }); addEventListener('rw:route',function(){ setTimeout(pv,50); }); addEventListener('DOMContentLoaded',function(){ setTimeout(pv,50); });
  addEventListener('pagehide',function(){ if(lastPage){ rwTrack('Page Left',{left_page:lastPage,seconds:Math.round((Date.now()-t0)/1000)}); flush(); } });
  addEventListener('scroll',function(){ var h=document.documentElement, d=(h.scrollTop+innerHeight)/h.scrollHeight; [25,50,75,100].forEach(function(n){ if(d*100>=n-1) rwTrackOnce('sd'+n,'Scroll Depth',{percent:n}); }); },{passive:true});
  addEventListener('click',function(e){ var el=e.target.closest&&e.target.closest('a,button'); if(!el) return;
    var label=(el.getAttribute('aria-label')||el.textContent||'').trim().replace(/\s+/g,' ').slice(0,60);
    if(el.matches('[data-rw="copy"]')) return rwTrack('Email Copied');
    if(el.matches('[data-rw="calendly"]')) return rwTrack('Call Booking Clicked');
    if(el.matches('[data-resume]')) return rwTrack('Resume Opened',{from:el.className||'link'});
    if(el.id==='rvd-dl') return rwTrack('Resume Downloaded');
    if(el.matches('[data-flsnd]')) return rwTrack('Video Sound Toggled',{video:'corner-florist'});
    if(el.matches('[data-vtsnd]')) return rwTrack('Video Sound Toggled',{video:'video-teaser'});
    if(el.matches('[id^="tab-"]')) return rwTrack('Work Tab Viewed',{tab:el.id.slice(4)});
    if(el.matches('[data-skim]')) return rwTrack('2-min Version Toggled');
    if(el.matches('[data-zoom]')) return rwTrack('Image Enlarged',{image:el.dataset.zoom});
    if(el.matches('[data-xsel]')) return rwTrack('X Post Previewed',{index:+el.dataset.xsel});
    var href=el.getAttribute('href')||'';
    if(/^https?:/.test(href)){ var host=''; try{ host=new URL(href).hostname; }catch(err){} return rwTrack('Outbound Link Clicked',{url:href,host:host,label:label}); }
    if(/^mailto:/.test(href)) return rwTrack('Email Link Clicked');
    if(href.indexOf('#/')===0) return rwTrack('Internal Link Clicked',{to:href,label:label});
  },true);
  addEventListener('copy',function(){ rwTrack('Text Copied'); });
})();
