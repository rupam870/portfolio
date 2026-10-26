
(function () {
  // ---- CONFIG ----
  var WEB3FORMS_KEY = 'd1de9669-8371-45ea-ba7d-466785a234b7'; // free key from web3forms.com, tied to rupamuxdesign@gmail.com
  var CALENDLY_URL = 'https://calendly.com/rupam_g-ma/30min';
  var MY_EMAIL = 'rupamuxdesign@gmail.com';
  var PEEK_DELAY_MS = 1400;
  var REPLY_DELAY_MS = 900;

  var TOPICS = {
    hiring:    { chip: 'I’m hiring for a role',      ask: 'Exciting! Tell me a bit more: what’s the role, which company, and is it remote or on-site?', ph: 'Role, company, remote or on-site…' },
    freelance: { chip: 'I have a freelance project', ask: 'Love that. What’s the project about, and roughly when do you need it done?',                ph: 'What it is, timeline, budget…' },
    hi:        { chip: 'Just saying hi',             ask: 'Hi back! Anything on your mind? My work, a design question, anything at all.',              ph: 'Ask me anything…' },
    other:     {                                     ask: 'Thanks for writing! Could you share a little more: what it’s about, and any timeline?',      ph: 'A bit more context, timeline…' }
  };
  var GREETING = [
    'Hi, how can I help you?',
    'Ask about a project, a role, or just say hello. Whatever you send here lands straight in my inbox.'
  ];

  var root = document.getElementById('rw-chat');
  var $ = function (k) { return root.querySelector('[data-rw="' + k + '"]'); };
  var el = { peek: $('peek'), panel: $('panel'), thread: $('thread'), composer: $('composer'), input: $('input'), send: $('send'),
             launch: $('launch'), fab: $('fab-close'), badge: $('badge'), copyLabel: $('copy-label'), calendly: $('calendly') };
  el.calendly.href = CALENDLY_URL;

  // stage: chat -> details -> askEmail -> done
  var S = { open: false, stage: 'chat', topic: null, typing: false, email: '', transcript: [], sentOnce: false };

  function show(node, on) { node.classList.toggle('rw-hidden', !on); }
  function scrollDown() { el.thread.scrollTop = el.thread.scrollHeight; }
  function bubble(text, me) {
    var d = document.createElement('div');
    d.className = 'rw-msg ' + (me ? 'rw-me' : 'rw-them');
    d.textContent = text;
    el.thread.appendChild(d);
    S.transcript.push((me ? 'Visitor: ' : 'Rupam (auto): ') + text);
    scrollDown();
  }
  function typing(on) {
    S.typing = on;
    var t = el.thread.querySelector('.rw-typing');
    if (on && !t) {
      t = document.createElement('div');
      t.className = 'rw-typing'; t.setAttribute('aria-label', 'Rupam is typing');
      t.innerHTML = '<span class="rw-dot"></span><span class="rw-dot"></span><span class="rw-dot"></span>';
      el.thread.appendChild(t); scrollDown();
    } else if (!on && t) { t.remove(); }
    refreshSend();
  }
  function removeChips() { var c = el.thread.querySelector('.rw-chips'); if (c) c.remove(); }
  function renderChips() {
    var wrap = document.createElement('div'); wrap.className = 'rw-chips';
    ['hiring', 'freelance', 'hi'].forEach(function (k) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'rw-chip'; b.textContent = TOPICS[k].chip;
      b.addEventListener('click', function () { send(TOPICS[k].chip, k); });
      wrap.appendChild(b);
    });
    el.thread.appendChild(wrap);
  }
  function renderEmailForm() {
    var f = document.createElement('form'); f.className = 'rw-email';
    f.innerHTML = '<label for="rw-email">Your email, so I can reply</label>' +
      '<div class="rw-email-row"><input id="rw-email" type="email" autocomplete="email" placeholder="you@company.com" required>' +
      '<button type="submit" class="rw-primary">Send</button></div>' +
      '<span class="rw-error rw-hidden" role="alert">That doesn’t look like an email. Mind checking it?</span>';
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = f.querySelector('input').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { show(f.querySelector('.rw-error'), true); return; }
      f.remove(); S.email = v; S.stage = 'done'; show(el.composer, true);
      bubble(v, true); typing(true);
      deliver('New portfolio chat: ' + topicLabel());
      setTimeout(function () {
        typing(false);
        bubble('Sent to my inbox. I’ll reply at ' + v + ', usually within a day. Add anything else here and it comes along too.', false);
      }, REPLY_DELAY_MS);
    });
    f.querySelector('input').addEventListener('input', function () { show(f.querySelector('.rw-error'), false); });
    el.thread.appendChild(f); scrollDown();
    setTimeout(function () { f.querySelector('input').focus(); }, 50);
  }
  function topicLabel() { return S.topic && TOPICS[S.topic].chip ? TOPICS[S.topic].chip : 'Message'; }

  function deliver(subject) {
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY.indexOf('YOUR_') === 0) { console.warn('[rw-chat] Set WEB3FORMS_KEY to receive messages.'); return; }
    window.rwTrack&&rwTrack('Message Sent',{topic:topicLabel(),follow_up:subject.indexOf('follow-up')>-1});
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: subject,
        from_name: 'rupam.work chat',
        replyto: S.email,
        email: S.email,
        topic: topicLabel(),
        page: location.href,
        message: S.transcript.join('\n\n')
      })
    }).catch(function (err) { console.warn('[rw-chat] delivery failed', err); });
  }

  function send(text, topicKey) {
    var t = (text || '').trim();
    if (!t || S.typing) return;
    removeChips();
    bubble(t, true);
    el.input.value = ''; refreshSend();
    typing(true);
    setTimeout(function () {
      typing(false);
      if (S.stage === 'chat') {
        // Always ask for more details after the first message (chip or typed).
        S.topic = topicKey || 'other'; S.stage = 'details'; window.rwTrack&&rwTrack('Message Started',{topic:S.topic});
        bubble(TOPICS[S.topic].ask, false);
        el.input.placeholder = TOPICS[S.topic].ph;
      } else if (S.stage === 'details' && !S.email) {
        S.stage = 'askEmail';
        bubble('Got it, thanks for the details. Where should I reply to you?', false);
        show(el.composer, false); el.input.placeholder = 'Write a message…';
        renderEmailForm();
      } else {
        bubble('Added to our thread. It’s in my inbox too.', false);
        deliver('Portfolio chat follow-up: ' + topicLabel());
      }
    }, REPLY_DELAY_MS);
  }

  function refreshSend() {
    var ready = !!el.input.value.trim() && !S.typing;
    el.send.disabled = !ready; el.send.classList.toggle('is-ready', ready);
  }

  function setOpen(on) {
    S.open = on;
    show(el.panel, on); show(el.fab, on); show(el.launch, !on);
    if (on) window.rwTrack&&rwTrack('Message Panel Opened');
    if (on) { peeked = true; show(el.peek, false); show(el.badge, false); setTimeout(function () { (el.thread.querySelector('#rw-email') || el.input).focus(); }, 50); }
  }

  // init thread
  var day = document.createElement('span'); day.className = 'rw-day'; day.textContent = 'Today'; el.thread.appendChild(day);
  GREETING.forEach(function (g) { bubble(g, false); });
  S.transcript = [];
  renderChips();

  el.launch.addEventListener('click', function () { setOpen(true); });
  el.fab.addEventListener('click', function () { setOpen(false); });
  $('close').addEventListener('click', function () { setOpen(false); });
  $('open').addEventListener('click', function () { setOpen(true); });
  $('dismiss').addEventListener('click', function () { show(el.peek, false); peeked = true; });
  el.input.addEventListener('input', refreshSend);
  el.input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(el.input.value); } });
  el.composer.addEventListener('submit', function (e) { e.preventDefault(); send(el.input.value); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && S.open) setOpen(false); });
  $('copy').addEventListener('click', function () {
    try { navigator.clipboard.writeText(MY_EMAIL); } catch (err) {}
    el.copyLabel.textContent = 'Copied!';
    setTimeout(function () { el.copyLabel.textContent = 'Copy email'; }, 1600);
  });

  // Show the greeting once, when the visitor reaches the Dribbble explorations section.
  var peeked = false;
  function checkPeek() {
    if (peeked) return;
    var target = document.getElementById('panel-ui');
    if (!target) return;
    if (target.getBoundingClientRect().top <= window.innerHeight * 0.6) {
      peeked = true;
      window.removeEventListener('scroll', onPeekScroll);
      setTimeout(function () { if (!S.open) show(el.peek, true); }, 300);
    }
  }
  var peekTick = false;
  function onPeekScroll() { if (peekTick) return; peekTick = true; requestAnimationFrame(function () { peekTick = false; checkPeek(); }); }
  window.addEventListener('scroll', onPeekScroll, { passive: true });
  window.addEventListener('hashchange', function () { setTimeout(checkPeek, 400); });
  setTimeout(checkPeek, PEEK_DELAY_MS);
})();
