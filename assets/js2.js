
/* ---------- mockups ---------- */
const hills = `<svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true"><path class="h1" d="M0 40 Q40 10 80 34 T160 26 T200 30 V80 H0Z"/><path class="h2" d="M0 60 Q50 34 100 54 T200 46 V80 H0Z"/></svg>`;
const M = {
  ai: () => `<div class="mock m-ai" data-ai role="img" aria-label="AI Edit demo: a prompt turns a daytime shot into golden hour">
    <div class="ai-scene"><div class="sky"></div><div class="gold"></div><div class="sun"></div>${hills}<span class="badge">Shot 3</span></div>
    <div class="ai-chat"><div class="ai-head">AI Edit</div><div class="ai-msg"><span class="ai-typed"></span><span class="caret"></span></div><div class="ai-reply">Done. Shot 3 is now at golden hour.</div><div class="ai-chips"><span>Slow zoom in</span><span>Add rain</span><span>Warmer tones</span></div></div>
  </div>`,
  cast: () => `<div class="mock m-cast" role="img" aria-label="Casting side sheet with a character library">
    <div class="cast-canvas"><b></b><b></b><b></b><b></b><b></b><b></b></div>
    <div class="cast-sheet"><div class="cast-tabs"><span>Library</span><span>Upload</span><span>Generate</span></div>
    <div class="avatars"><i style="--a:#F7B89A;--b:#E0703A"></i><i style="--a:#A9C7F2;--b:#4F79C9"></i><i style="--a:#C9E6B5;--b:#6BA34F"></i><i style="--a:#E9C2EE;--b:#A55BB3"></i><i style="--a:#F6DC92;--b:#D19B24"></i><i style="--a:#B9E3E0;--b:#3F9C95"></i></div>
    <div class="sheet-btn">Use character</div></div>
  </div>`,
  save: () => `<div class="mock m-save" data-save role="img" aria-label="Cancellation flow that offers something based on the reason">
    <div class="save-modal"><div class="save-q">Before you go, what's the reason?</div>
    <div class="save-opts"><span class="on">It's too expensive</span><span>I'm taking a break</span><span>I don't need this much</span></div>
    <div class="save-offer"><b class="save-t">Take a discount on your next months</b><em>See offer</em></div></div>
  </div>`,
  music: () => `<div class="mock m-music" role="img" aria-label="Three music video concepts to choose from">
    ${[['Paper boats','Soft, hand-drawn','linear-gradient(150deg,#FFD6A5,#FF8FA3)'],['Neon lullaby','Night city, slow','linear-gradient(150deg,#4B3F9E,#E26FD6)'],['Garden choir','Bright, playful','linear-gradient(150deg,#B8F2C9,#3DAF8A)']].map(c=>`<div class="concept"><div class="cover" style="--g:${c[2]}"></div><b>${c[0]}</b><small>${c[1]}</small><div class="eq"><i></i><i></i><i></i><i></i><i></i></div></div>`).join('')}
  </div>`,
  tile: (title, tint, glyph) => `<div class="mock m-tile" style="--tint:${tint}"><span class="big">${title}</span>${glyph}</div>`,
  connect: () => `<div class="mock m-connect" role="img" aria-label="Connect Fireblocks workspace, step 2: paste API key">
    <div class="x-steps"><span class="done">Choose custodian</span><span class="cur">Paste API key</span><span>Set transaction policy</span><span>Done</span></div>
    <div class="x-form"><h5>Connect your Fireblocks workspace</h5><span class="hint">Your key connects the workspace. Xalts never stores it.</span>
    <div class="field">••••••••••••••••••7f3a</div>
    <ol><li>Open Fireblocks settings</li><li>Go to API users and create a key</li><li>Paste it above</li></ol>
    <span class="btn">Connect workspace</span></div>
  </div>`,
  console: () => `<div class="mock m-console" role="img" aria-label="Organisation console wallets table with truncated addresses">
    <div class="c-kpis"><div>Wallets<b>24</b></div><div>Networks<b>3</b></div><div>Users<b>11</b></div></div>
    <div class="c-tabs"><span>Primary wallets</span><span>Org SCW</span><span>User SCW</span></div>
    <div class="c-table"><div><span>Network</span><span>Role</span><span>Address</span><span>Custody</span></div>
    <div><span>Polygon</span><span>Admin</span><code>0x71C7656E…F3a9f5ecB2</code><span>Fireblocks</span></div>
    <div><span>Avalanche</span><span>Owner</span><code>0x2B5AD5c4…9e2C3d1A7f</code><span>Fireblocks</span></div>
    <div><span>Polygon</span><span>Co-signer</span><code>0xAb8483F6…4dC2b7E90c</code><span>Fireblocks</span></div></div>
  </div>`
};
const G = {
  split:`<svg viewBox="0 0 120 50" fill="none" stroke="#1A1A1F" stroke-width="2" aria-hidden="true"><path d="M2 25 L20 12 L34 34 L48 8 L60 30 L74 16 L88 36 L102 14 L118 25"/><line x1="60" y1="2" x2="60" y2="48" stroke-dasharray="3 3"/></svg>`,
  voice:`<svg viewBox="0 0 120 50" fill="#1A1A1F" aria-hidden="true"><rect x="4" y="18" width="6" height="14" rx="3"/><rect x="16" y="10" width="6" height="30" rx="3"/><rect x="28" y="4" width="6" height="42" rx="3"/><rect x="40" y="14" width="6" height="22" rx="3"/><rect x="52" y="8" width="6" height="34" rx="3"/><rect x="64" y="18" width="6" height="14" rx="3"/></svg>`,
  gift:`<svg viewBox="0 0 120 50" fill="none" stroke="#1A1A1F" stroke-width="2" aria-hidden="true"><rect x="60" y="18" width="50" height="30" rx="4"/><path d="M60 28 H110 M85 18 V48"/><path d="M85 18 C75 4 64 12 85 18 C106 12 95 4 85 18"/></svg>`,
  door:`<svg viewBox="0 0 120 50" fill="none" stroke="#1A1A1F" stroke-width="2" aria-hidden="true"><rect x="70" y="4" width="34" height="44" rx="3"/><path d="M40 26 H62 M54 18 L62 26 L54 34"/></svg>`,
  stars:`<svg viewBox="0 0 120 50" fill="#1A1A1F" aria-hidden="true"><path d="M70 6l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z"/><path d="M100 18l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" opacity=".45"/></svg>`
};
const phones = {
  radio:`<div class="screen s-radio"><span class="st">Now playing</span><span class="freq">98.3</span><div class="dial"></div><span class="st">City FM · Morning show</span><span class="play"><svg width="14" height="16" viewBox="0 0 14 16" fill="#fff" aria-hidden="true"><path d="M0 0 L14 8 L0 16Z"/></svg></span></div>`,
  wallet:`<div class="screen s-wallet"><span style="font-weight:600;font-size:13px">Wallet</span><div class="bal">Total balance<b>$12,480.20</b><svg viewBox="0 0 100 24" width="100%" height="24" fill="none" stroke="#fff" stroke-width="1.5" aria-hidden="true"><path d="M0 18 L14 14 L26 16 L40 8 L54 12 L68 5 L82 9 L100 2"/></svg></div><div class="row2"><span>ETH</span><b>2.41</b></div><div class="row2"><span>USDC</span><b>4,200</b></div><div class="row2"><span>MATIC</span><b>1,050</b></div></div>`,
  med:`<div class="screen s-med"><span style="font-weight:600;font-size:13px">Today</span><div class="ring"><span><span><b>12</b>day streak</span></span></div><span style="color:#7A6456">10 min · Breathing</span><span class="btn">Begin</span></div>`,
  taxi:`<div class="screen s-taxi"><div class="map"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M20 85 L50 85 L50 33 L80 33" fill="none" stroke="#1A1A1F" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="85" r="4" fill="#1A1A1F"/><circle cx="80" cy="33" r="5" fill="#F2C94C" stroke="#1A1A1F" stroke-width="2"/></svg></div><div class="sheet"><b>Arriving in 4 min</b><span style="color:#6B6B66">White hatchback · DL 3C 4417</span><span class="go">Share ride</span></div></div>`
};
const board = (big) => `<svg viewBox="0 0 520 300" role="img" aria-label="Whiteboard sketch of a product problem" font-family="Caveat, cursive">
  <rect width="520" height="300" fill="#FFFFFF"/>
  <text x="24" y="44" font-size="${big?30:28}" font-weight="700" fill="#1F3A93">Why do people stop at step 3?</text>
  <path d="M24 54 C120 58 220 50 330 56" stroke="#1F3A93" stroke-width="2" fill="none"/>
  <g transform="rotate(-3 90 130)"><rect x="34" y="92" width="120" height="78" fill="#FFE98A"/><text x="46" y="124" font-size="20" fill="#1A1A1F">too many</text><text x="46" y="148" font-size="20" fill="#1A1A1F">choices?</text></g>
  <g transform="rotate(2 250 140)"><rect x="196" y="98" width="120" height="78" fill="#FFC9D6"/><text x="208" y="130" font-size="20" fill="#1A1A1F">unclear</text><text x="208" y="154" font-size="20" fill="#1A1A1F">cost</text></g>
  <g transform="rotate(-2 420 130)"><rect x="360" y="92" width="120" height="78" fill="#BFE7FF"/><text x="372" y="124" font-size="20" fill="#1A1A1F">slow</text><text x="372" y="148" font-size="20" fill="#1A1A1F">preview</text></g>
  <path d="M96 176 C110 226 180 246 250 246" stroke="#C0392B" stroke-width="2.5" fill="none"/>
  <path d="M256 180 L256 228" stroke="#C0392B" stroke-width="2.5"/>
  <path d="M420 176 C410 226 330 246 262 246" stroke="#C0392B" stroke-width="2.5" fill="none"/>
  <ellipse cx="256" cy="262" rx="98" ry="24" stroke="#1A1A1F" stroke-width="2" fill="none"/>
  <text x="186" y="270" font-size="22" font-weight="700" fill="#1A1A1F">show 1 good default</text>
</svg>`;
const thumb = (a,b,c) => `<svg viewBox="0 0 160 90" aria-hidden="true" font-family="Caveat, cursive"><rect width="160" height="90" fill="#fff"/><text x="10" y="24" font-size="16" font-weight="700" fill="#1F3A93">${a}</text><rect x="12" y="36" width="42" height="30" fill="${b}" transform="rotate(-4 33 51)"/><rect x="66" y="40" width="42" height="30" fill="${c}" transform="rotate(3 87 55)"/><path d="M116 56 C130 50 140 60 150 52" stroke="#C0392B" stroke-width="2" fill="none"/></svg>`;
const plant = `<svg class="plant" viewBox="0 0 34 34" aria-hidden="true"><path d="M10 24 H24 L22 32 H12Z" fill="#C98B5B"/><path d="M17 24 V14" stroke="#4F8A5B" stroke-width="2"/><path class="leaf l1" d="M17 16 C11 16 8 12 8 8 C13 8 17 11 17 16Z" fill="#6BAF72"/><path class="leaf l2" d="M17 14 C23 14 26 10 26 6 C21 6 17 9 17 14Z" fill="#6BAF72"/></svg>`;

const IMG = {"cp1": {"src": "/m/fbebeff72722.webp#cp1", "w": 528, "h": 1177}, "cp2": {"src": "/m/6115c64d5cf4.webp#cp2", "w": 528, "h": 1179}, "cp3": {"src": "/m/825b8911fbb8.webp#cp3", "w": 528, "h": 1179}, "cl": {"src": "/m/a3de50e3b4aa.webp#cl", "w": 1600, "h": 1012}, "x1": {"src": "/m/f26ee8e195a1.webp#x1", "w": 1200, "h": 775}, "x2": {"src": "/m/b518b99ac3b8.webp#x2", "w": 1200, "h": 813}, "cf1": {"src": "/m/dff04fa0be54.webp#cf1", "w": 2000, "h": 1192}, "cf2": {"src": "/m/7655d0e6da25.webp#cf2", "w": 1950, "h": 1000}, "cf3": {"src": "/m/1abcd12c6be8.webp#cf3", "w": 1950, "h": 980}, "6": {"src": "/m/c92c9f3bbf45.webp#6", "w": 640, "h": 1333}, "1": {"src": "/m/2c23a70ecaa5.webp#1", "w": 640, "h": 1386}, "11": {"src": "/m/76777d423a3c.webp#11", "w": 640, "h": 1386}, "2": {"src": "/m/050a211f5314.webp#2", "w": 640, "h": 1386}, "0": {"src": "/m/e1be96ccf0b5.webp#0", "w": 640, "h": 1386}, "4": {"src": "/m/34f70bc0b627.webp#4", "w": 640, "h": 1386}, "8": {"src": "/m/6ff8d50cd481.webp#8", "w": 640, "h": 1386}, "9": {"src": "/m/3120a0f3368d.webp#9", "w": 640, "h": 1386}, "13": {"src": "/m/ab8e40a3e1e2.webp#13", "w": 640, "h": 1386}, "10": {"src": "/m/46dc912e6165.webp#10", "w": 1244, "h": 903}, "12": {"src": "/m/1960dcd6472d.webp#12", "w": 1400, "h": 1145}, "7": {"src": "/m/d49f59b2fd91.webp#7", "w": 1400, "h": 1170}, "3": {"src": "/m/02e16e25fcae.webp#3", "w": 1400, "h": 995}, "5": {"src": "/m/bb631e6fb04d.webp#5", "w": 1400, "h": 909}, "al1": {"src": "/m/352aaac0ebd3.webp#al1", "w": 1440, "h": 900}, "al2": {"src": "/m/11b2250dc324.webp#al2", "w": 1628, "h": 888}, "tn1": {"src": "/m/fe59b06317e5.webp#tn1", "w": 602, "h": 1308}, "tn2": {"src": "/m/f0cead439d0d.webp#tn2", "w": 602, "h": 1307}, "ns1": {"src": "/m/4c9d4891e161.webp#ns1", "w": 700, "h": 1523}, "ns2": {"src": "/m/f0e73f8be245.webp#ns2", "w": 700, "h": 1523}, "at_mini": {"src": "/m/db249e1b1485.webp#at_mini", "w": 1600, "h": 910}, "at_music": {"src": "/m/6381349989ce.webp#at_music", "w": 1600, "h": 911}, "at_expl": {"src": "/m/00f5282117db.webp#at_expl", "w": 1600, "h": 912}, "at_time": {"src": "/m/5f03f41430fe.webp#at_time", "w": 1600, "h": 913}, "at_broll": {"src": "/m/b85b53b0a0d2.webp#at_broll", "w": 1600, "h": 913}, "at_export": {"src": "/m/fa7e44f183a1.webp#at_export", "w": 862, "h": 1096}, "at_share": {"src": "/m/4e912620b378.webp#at_share", "w": 1600, "h": 911}, "abPortrait": {"src": "/m/47f174aa4ff4.webp#abPortrait", "w": 579, "h": 700}, "abDesignathon": {"src": "/m/345da5046ecc.webp#abDesignathon", "w": 619, "h": 1100}, "abExplorin": {"src": "/m/0180cef3762e.webp#abExplorin", "w": 790, "h": 552}, "abEsummit": {"src": "/m/4459baac3b38.webp#abEsummit", "w": 1000, "h": 742}, "abClearfeed": {"src": "/m/12f7e0a9b0e2.webp#abClearfeed", "w": 1000, "h": 665}, "abXalts": {"src": "/m/75b0ec073125.webp#abXalts", "w": 1000, "h": 736}, "ci_hero": {"src": "/m/823e2bd8defb.webp", "w": 2000, "h": 1139}, "ci_menus": {"src": "/m/993690724bd0.webp", "w": 2000, "h": 988}, "ci_shell": {"src": "/m/4f6a593d948e.webp", "w": 2000, "h": 1136}, "ci_picker": {"src": "/m/b0ea16dc0cfb.webp", "w": 874, "h": 1110}, "ci_refs": {"src": "/m/424402592ee6.webp", "w": 880, "h": 808}, "ci_gen": {"src": "/m/e3808040dcb1.webp", "w": 880, "h": 331}, "ci_grid": {"src": "/m/bcaa30435e87.webp", "w": 1200, "h": 898}, "ci_film": {"src": "/m/0538125a0bbc.webp", "w": 1200, "h": 898}, "ci_list": {"src": "/m/1f23254af750.webp", "w": 1200, "h": 898}, "ci_hover": {"src": "/m/2c9d4187655a.webp", "w": 691, "h": 688}, "ci_next": {"src": "/m/28b386970ad2.webp", "w": 874, "h": 342}, "ci_empty": {"src": "/m/ca2fe5435e6f.webp", "w": 1800, "h": 684}, "ci_menua": {"src": "/m/f4c646124cc2.webp", "w": 1000, "h": 1012}, "ci_menub": {"src": "/m/53bb6a7cbf25.webp", "w": 1000, "h": 1012}, "ci_hike": {"src": "/m/59e03f560fed.webp", "w": 560, "h": 312}, "ci_sh_create": {"src": "/m/b490dcf8a769.webp", "w": 1190, "h": 645}, "ci_sh_video": {"src": "/m/b21d57f9492b.webp", "w": 1190, "h": 645}, "ci_sh_upscale": {"src": "/m/c293d838c52d.webp", "w": 1190, "h": 645}, "ci_sh_reframe": {"src": "/m/cdd9a8d78b05.webp", "w": 1190, "h": 645}, "dp_thumb": {"src": "/m/d775ea3862d3.webp", "w": 1200, "h": 800}, "dp_aiedit": {"src": "/m/6e06fe152008.webp", "w": 668, "h": 743}, "dp_valid": {"src": "/m/0e8b3f49c546.webp", "w": 932, "h": 405}, "tn_home_old": {"src": "/img/tn_home_old.webp", "w": 1512, "h": 728}, "tn_home_new": {"src": "/img/tn_home_new.webp", "w": 1512, "h": 728}, "tn_wiz_old": {"src": "/img/tn_wiz_old.webp", "w": 1512, "h": 728}, "tn_wiz_new": {"src": "/img/tn_wiz_new.webp", "w": 1512, "h": 728}, "tn_ed_old": {"src": "/img/tn_ed_old.webp", "w": 1512, "h": 728}, "tn_ed_new": {"src": "/img/tn_ed_new.webp", "w": 1512, "h": 728}, "tn_edit_new": {"src": "/img/tn_edit_new.webp", "w": 1512, "h": 728}, "vt_teaser": {"src": "/img/vt_teaser.webp", "w": 1512, "h": 805}, "tn_wiz_old2": {"src": "/img/tn_wiz_old2.webp", "w": 1512, "h": 728}, "ed_story": {"src": "/img/ed_story.webp", "w": 1800, "h": 1024}, "ed_scene": {"src": "/img/ed_scene.webp", "w": 1800, "h": 1025}, "ed_export": {"src": "/img/ed_export.webp", "w": 956, "h": 1232}, "ed_credits": {"src": "/img/ed_credits.webp", "w": 1040, "h": 760}, "ed_breakdown": {"src": "/img/ed_breakdown.webp", "w": 1800, "h": 1026}, "ed_gen": {"src": "/img/ed_gen.webp", "w": 1800, "h": 1024}, "ed_broll": {"src": "/img/ed_broll.webp", "w": 1100, "h": 1514}, "ed_assets": {"src": "/img/ed_assets.webp", "w": 1800, "h": 1029}, "ed_chars": {"src": "/img/ed_chars.webp", "w": 1100, "h": 1254}, "ed_timeline": {"src": "/img/ed_timeline.webp", "w": 1800, "h": 1025}, "ed_captions": {"src": "/img/ed_captions.webp", "w": 1800, "h": 1038}, "vt_fstart": {"src": "/img/vt_fstart.webp", "w": 1600, "h": 971}, "vt_fend": {"src": "/img/vt_fend.webp", "w": 1100, "h": 647}, "vt_fpage": {"src": "/img/vt_fpage.webp", "w": 1800, "h": 1027}, "wk0": {"src": "/img/wk0.webp", "w": 1800, "h": 1025}, "wk1": {"src": "/img/wk1.webp", "w": 1800, "h": 1025}, "wk2": {"src": "/img/wk2.webp", "w": 1800, "h": 1025}, "wk3": {"src": "/img/wk3.webp", "w": 1800, "h": 1025}, "wk4": {"src": "/img/wk4.webp", "w": 1800, "h": 1025}, "wk5": {"src": "/img/wk5.webp", "w": 1800, "h": 1025}, "wk6": {"src": "/img/wk6.webp", "w": 1800, "h": 1025}, "wk7": {"src": "/img/wk7.webp", "w": 1800, "h": 1025}, "wk8": {"src": "/img/wk8.webp", "w": 1800, "h": 1025}, "wk9": {"src": "/img/wk9.webp", "w": 1800, "h": 1025}, "wk10": {"src": "/img/wk10.webp", "w": 1800, "h": 1025}, "xp1": {"src": "/img/xp1.webp", "w": 900, "h": 1125}, "xp2": {"src": "/img/xp2.webp", "w": 900, "h": 521}, "xp3": {"src": "/img/xp3.webp", "w": 900, "h": 436}, "xp4": {"src": "/img/xp4.webp", "w": 900, "h": 584}, "xp5": {"src": "/img/xp5.webp", "w": 900, "h": 675}, "xp6": {"src": "/img/xp6.webp", "w": 768, "h": 1024}, "ae1": {"src": "/img/ae1.webp", "w": 1800, "h": 1063}, "ae2": {"src": "/img/ae2.webp", "w": 1800, "h": 1063}, "ae3": {"src": "/img/ae3.webp", "w": 1800, "h": 1063}, "ae4": {"src": "/img/ae4.webp", "w": 1800, "h": 1063}, "wkae": {"src": "/img/wkae.webp", "w": 1800, "h": 1025}, "tl_image": {"src": "/img/tl_image.webp", "w": 1800, "h": 1025}, "tl_settings": {"src": "/img/tl_settings.webp", "w": 1800, "h": 1025}, "tl_split": {"src": "/img/tl_split.webp", "w": 1800, "h": 1025}, "tl_broll": {"src": "/img/tl_broll.webp", "w": 1800, "h": 1025}, "tl_captions": {"src": "/img/tl_captions.webp", "w": 1800, "h": 1025}, "tl_lip": {"src": "/img/tl_lip.webp", "w": 1800, "h": 1025}, "tl_audio": {"src": "/img/tl_audio.webp", "w": 1800, "h": 1025}, "tl_motion": {"src": "/img/tl_motion.webp", "w": 1800, "h": 1025}, "vt_s1": {"src": "/img/vt_s1.webp", "w": 480, "h": 306}, "vt_s2": {"src": "/img/vt_s2.webp", "w": 480, "h": 306}, "vt_s3": {"src": "/img/vt_s3.webp", "w": 480, "h": 306}, "vt_s4": {"src": "/img/vt_s4.webp", "w": 480, "h": 306}, "vt_start": {"src": "/img/vt_start.webp", "w": 1600, "h": 942}, "vt_plans": {"src": "/img/vt_plans.webp", "w": 1600, "h": 962}, "vt_gen": {"src": "/img/vt_gen.webp", "w": 1000, "h": 859}, "vr1": {"src": "/img/vr1.webp", "w": 420, "h": 735}, "vr2": {"src": "/img/vr2.webp", "w": 420, "h": 735}, "vr3": {"src": "/img/vr3.webp", "w": 420, "h": 735}, "vr4": {"src": "/img/vr4.webp", "w": 420, "h": 735}, "vr5": {"src": "/img/vr5.webp", "w": 420, "h": 735}, "vt_page": {"src": "/img/vt_page.webp", "w": 1600, "h": 911}, "vt_banner": {"src": "/img/vt_banner.webp", "w": 1100, "h": 214}};
Object.assign(IMG,{"ns_tonight": {"src": "/m/fffa6c3e45ff.webp#ns_tonight", "w": 760, "h": 1654}, "ns_story": {"src": "/m/1d5fa2a9c739.webp#ns_story", "w": 760, "h": 1654}, "ns_session": {"src": "/m/085bdebf0374.webp#ns_session", "w": 760, "h": 1654}, "ns_done": {"src": "/m/822af039ca79.webp#ns_done", "w": 760, "h": 1654}, "ns_grid": {"src": "/m/bc5514ff841f.webp#ns_grid", "w": 1005, "h": 598}, "ns_s1": {"src": "/m/693a2ef450a5.webp#ns_s1", "w": 520, "h": 1128}, "ns_s2": {"src": "/m/b5001dc07092.webp#ns_s2", "w": 520, "h": 1128}, "ns_s3": {"src": "/m/fc638efecf5f.webp#ns_s3", "w": 520, "h": 1128}, "ns_s4": {"src": "/m/6e3b92bbb03e.webp#ns_s4", "w": 520, "h": 1128}, "ns_s5": {"src": "/m/2c0b5ed3e622.webp#ns_s5", "w": 520, "h": 1128}, "ns_i_read": {"src": "/m/628a8de37b8f.webp#ns_i_read", "w": 700, "h": 501}, "ns_i_med": {"src": "/m/2d0a8d970a64.webp#ns_i_med", "w": 700, "h": 501}, "ns_i_jour": {"src": "/m/71a64607a272.webp#ns_i_jour", "w": 700, "h": 526}, "ns_i_story": {"src": "/m/1fceee55131c.webp#ns_i_story", "w": 700, "h": 389}, "al_hover": {"src": "/m/5618051a338e.webp#al_hover", "w": 519, "h": 656}, "al_pour": {"src": "/m/afabd824b288.webp#al_pour", "w": 800, "h": 573}, "al_release": {"src": "/m/a622b32c87cd.webp#al_release", "w": 679, "h": 469}, "alv_desk": {"src": "/m/dda9bee2c765.webp#alv_desk", "w": 960, "h": 600}});
Object.assign(IMG,{"cl_qr": {"src": "/m/2cd3d3c80296.webp#cl_qr", "w": 1600, "h": 798}, "cl_enrol": {"src": "/m/2710ce09f343.webp#cl_enrol", "w": 2000, "h": 941}, "cl_win1": {"src": "/m/144b4d0624ad.webp#cl_win1", "w": 1100, "h": 1049}, "cl_win2": {"src": "/m/48ee85019d22.webp#cl_win2", "w": 1100, "h": 1050}, "cl_dash1": {"src": "/m/4ea43c55b2dc.webp#cl_dash1", "w": 1100, "h": 1087}, "cl_dash2": {"src": "/m/2953141a9bda.webp#cl_dash2", "w": 1100, "h": 1081}, "cl_how1": {"src": "/m/a4d729afbe61.webp#cl_how1", "w": 1400, "h": 886}, "cl_how2": {"src": "/m/bab258e9154a.webp#cl_how2", "w": 613, "h": 1262}, "cl_edge1": {"src": "/m/5c5eff763c2e.webp#cl_edge1", "w": 683, "h": 1555}, "cl_edge2": {"src": "/m/6391dd0532f0.webp#cl_edge2", "w": 680, "h": 1555}, "cl_final": {"src": "/m/4558b733274e.webp#cl_final", "w": 2000, "h": 1265}, "cl_bank": {"src": "/m/2777f4af8691.webp#cl_bank", "w": 1300, "h": 1278}, "cl_cards": {"src": "/m/071b78cbaba7.webp#cl_cards", "w": 2000, "h": 1265}, "cl_ftux": {"src": "/m/17da9f222b51.webp#cl_ftux", "w": 2000, "h": 1265}, "cl_limits": {"src": "/m/604bfac62cb2.webp#cl_limits", "w": 2000, "h": 1125}, "clv_scratch": {"src": "/m/ce76a2b17d33.webp#clv_scratch", "w": 622, "h": 1378}, "clv_limit": {"src": "/m/836e26d0921b.webp#clv_limit", "w": 640, "h": 1381}, "clv_success": {"src": "/m/f7b6c040a9a1.webp#clv_success", "w": 622, "h": 1378}, "clv_empty": {"src": "/m/1b2157f6e988.webp#clv_empty", "w": 1400, "h": 836}});
Object.assign(IMG,{"xa_connect": {"src": "/m/0b6249bc1b97.webp#xa_connect", "w": 2000, "h": 1292}, "xa_success": {"src": "/m/a853e8bd279c.webp#xa_success", "w": 2000, "h": 1292}, "xa_meet": {"src": "/m/0113205a3be1.webp#xa_meet", "w": 1800, "h": 1155}, "xa_sketch": {"src": "/m/6e1b1f41ae58.webp#xa_sketch", "w": 1800, "h": 1462}, "xa_api1": {"src": "/m/b03f2401c93c.webp#xa_api1", "w": 1400, "h": 908}, "xa_api2": {"src": "/m/eb119d926222.webp#xa_api2", "w": 1400, "h": 908}, "xa_tap1": {"src": "/m/043eef1b78da.webp#xa_tap1", "w": 1400, "h": 908}, "xa_tap2": {"src": "/m/b70be010008c.webp#xa_tap2", "w": 1400, "h": 908}, "xa_console": {"src": "/m/1f3b9dad5533.webp#xa_console", "w": 2000, "h": 1292}, "xa_wallets": {"src": "/m/8a563973fda5.webp#xa_wallets", "w": 2000, "h": 1389}, "xa_uscw": {"src": "/m/9a41c8e8d69c.webp#xa_uscw", "w": 2000, "h": 1216}, "xa_networks": {"src": "/m/b12cc7081c65.webp#xa_networks", "w": 2000, "h": 1674}, "xa_netw": {"src": "/m/4fe7415eafd6.webp#xa_netw", "w": 2000, "h": 1497}, "xa_users": {"src": "/m/17b373556ce8.webp#xa_users", "w": 2000, "h": 1656}, "xa_userw": {"src": "/m/55071d4ba242.webp#xa_userw", "w": 2000, "h": 1230}});
Object.assign(IMG,{"cf_sketch": {"src": "/m/e70d152745d5.webp#cf_sketch", "w": 1612, "h": 735}, "cf_it1": {"src": "/m/8d45ae174e45.webp#cf_it1", "w": 1400, "h": 839}, "cf_it2": {"src": "/m/f03782827486.webp#cf_it2", "w": 1400, "h": 836}, "cf_it3": {"src": "/m/97e6d9ce4942.webp#cf_it3", "w": 1400, "h": 839}, "cf_it4": {"src": "/m/5ae7fdd2c498.webp#cf_it4", "w": 1400, "h": 839}, "cf_it5": {"src": "/m/c13d788d11f1.webp#cf_it5", "w": 1400, "h": 840}, "cf_it6": {"src": "/m/a936fbd0f51d.webp#cf_it6", "w": 1400, "h": 839}, "cf_fs1": {"src": "/m/1c07046d2181.webp#cf_fs1", "w": 2000, "h": 1198}, "cf_fs2": {"src": "/m/8e4c0a9e81db.webp#cf_fs2", "w": 2000, "h": 1296}, "cf_fs3": {"src": "/m/64f15fc6867e.webp#cf_fs3", "w": 2000, "h": 1199}, "cf_fs4": {"src": "/m/5aadf8da192f.webp#cf_fs4", "w": 2000, "h": 1125}, "cf_slack1": {"src": "/m/8449b79e92e7.webp#cf_slack1", "w": 2000, "h": 1346}, "cf_slack2": {"src": "/m/2fc865031212.webp#cf_slack2", "w": 2000, "h": 647}, "cf_ex1": {"src": "/m/21229c6b20f9.webp#cf_ex1", "w": 2000, "h": 1204}, "cf_ex2": {"src": "/m/f060e143dba1.webp#cf_ex2", "w": 2000, "h": 1279}, "cf_multi": {"src": "/m/b3ad5e222448.webp#cf_multi", "w": 2000, "h": 1335}});
let imgReady=false;
function swapImgs(root){ if(!imgReady) return; (root||document).querySelectorAll('img[src*="#"]').forEach(im=>{ const a=im.getAttribute('src'); const k=a.slice(a.lastIndexOf('#')+1); if(IMG[k]&&IMG[k].src!==a&&(a.startsWith('data:')||a.startsWith('/m/'))) im.src=IMG[k].src; }); }
const mobileShots = [['6','FM radio'],['1','Crypto wallet'],['11','Meditation'],['2','Taxi booking'],['0','Banking home'],['4','Spending statistics'],['8','Bank onboarding'],['9','Payments onboarding'],['13','Finance sign-up']];
const webShots = [['10','Analytics dashboard'],['12','Payments landing page'],['7','Ad platform landing page'],['3','Design assets marketplace'],['5','Cleaning services']];
const phoneShot = ([k,l]) => `<div><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${l}"><div class="phone"><img loading="lazy" decoding="async" class="shot" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l} screen"></div></button><div class="cap">${l}</div></div>`;
const webShot = ([k,l]) => `<div><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${l}"><div class="webshot"><div class="bar"><i></i><i></i><i></i></div><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l}"></div></button><div class="cap">${l}</div></div>`;

const dev = (k,l) => `<button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${l}"><span class="device"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l} screen"></span></button>`;
const web = (k,l) => `<button class="zoom webcard" type="button" data-zoom="${k}" aria-label="Enlarge ${l}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l}"></button>`;
const tile = (bg, cap, inner, full) => `<figure class="tile${full?' full':''}" style="--bg:${bg}"><div class="stage">${inner}</div><figcaption>${cap}</figcaption></figure>`;

const ctile = (bg, name, line, inner, full, href) => `<figure class="tile${full?' full':''}" style="--bg:${bg}"><div class="stage">${inner}</div><figcaption><b>${name}</b><span class="cl"> · ${line}</span></figcaption>${href?`<a class="case" href="${href}">Case study</a>`:''}</figure>`;

const pcWeb = (k,l,st) => `<button class="pc" type="button" data-zoom="${k}" aria-label="Enlarge ${l}" style="${st}"><span class="webframe"><span class="bbar" aria-hidden="true"><i></i><i></i><i></i><em></em></span><img loading="lazy" decoding="async" class="shot-web" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l}"></span></button>`;
const pcPhone = (k,l,st) => `<button class="pc" type="button" data-zoom="${k}" aria-label="Enlarge ${l}" style="${st}"><span class="device"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${l}"></span></button>`;
const tileInk = bg => { const h=bg.replace('#',''); const n=parseInt(h.length===3?h.split('').map(c=>c+c).join(''):h,16); const r=n>>16&255,g=n>>8&255,b=n&255; return (0.2126*r+0.7152*g+0.0722*b)/255>0.6?'#17171A':bg; };

/* ---------- The Corner Florist (side project) ---------- */
const FLORIST_VIDEO = '/corner-florist-v3.mp4'; // launch video URL (mp4/webm). Empty shows the placeholder.
const FLORIST_URL = 'https://rupam870.github.io/corner-florist/';   // live app URL. Empty hides the Try now button.
const floristTile = () => `<figure class="tile comp-tile full fl-tile" style="--bg:#EADBC8"${FLORIST_URL?` data-newtab="1" data-label="Try it ↗" data-color="#7A3E2B"`:''}>
  <div class="stage"><div class="comp fl-stage">
    <span class="webframe fl-frame"><span class="fl-bar" aria-hidden="true"><i></i><i></i><i></i></span>
    <video class="fl-vid" src="${FLORIST_VIDEO}" poster="/corner-florist-v3.jpg" muted loop playsinline autoplay preload="auto" aria-label="The Corner Florist launch video: picking stems from buckets, wrapping them in kraft paper, adding a gift tag"></video><button type="button" class="fl-snd" data-flsnd aria-label="Turn sound on"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path class="off" d="M17 9l5 5M22 9l-5 5"/><path class="on" d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg></button>
    </span>
  </div></div>
  <figcaption><b>The Corner Florist</b><span class="cl"> · Pick stems from the buckets, wrap them in kraft paper, send a bouquet.</span></figcaption>
  ${FLORIST_URL?`<a class="case fl-cta" href="${FLORIST_URL}" target="_blank" rel="noopener">Try now ↗</a>`:''}
</figure>`;
const compTile = (bg,name,line,inner,full,href) => `<figure class="tile comp-tile${full?' full':''}" style="--bg:${bg}"${href?` data-label="${/^https?:/.test(href)?'Open on Behance ↗':'Read case study'}" data-color="${tileInk(bg)}"`:''}><div class="stage">${inner}</div><figcaption><b>${name}</b><span class="cl"> · ${line}</span></figcaption>${href?`<a class="case" href="${href}">Case study</a>`:''}</figure>`;
const beforeAtlabs = () => `<div class="bento">
  ${compTile('#1E3A5F','Xalts','Letting banks bring their own vault', `<div class="comp comp-x">
     ${pcWeb('x1','Xalts connect custodian screen','left:2%;top:2%;width:64%;z-index:1;--hx:-2%;--hy:-3%')}
     ${pcWeb('x2','Xalts user wallets console','left:34%;top:30%;width:64%;z-index:2;--hx:2%;--hy:3%')}
   </div>`, true, '#/xalts')}
  ${compTile('#1F7AE8','Curelink','Scratch-card rewards for doctors', `<div class="comp comp-c">
     ${pcPhone('cp1','Curelink rewards dashboard','left:1%;top:13%;width:36%;z-index:1;--hx:-3%').replace('class="pc"','class="pc side"')}
     ${pcPhone('cp3','Curelink reward won','left:63%;top:13%;width:36%;z-index:1;--hx:3%').replace('class="pc"','class="pc side"')}
     ${pcPhone('cp2','Curelink scratch card','left:28%;top:3%;width:44%;z-index:2;--hy:-2%')}
   </div>`, false, '#/curelink')}
  ${compTile('#5B44F2','ClearFeed','GPT answers for Slack support', `<div class="comp comp-f">
     ${pcWeb('cf1','ClearFeed automated answers intro','left:0;top:6%;width:78%;z-index:1;--hx:-3%;--hy:-2%')}
     ${pcWeb('cf3','ClearFeed indexing state','left:24%;top:46%;width:76%;z-index:2;--hx:3%;--hy:2%')}
   </div>`, false, '#/clearfeed')}
</div>`;
const financeRow = () => tile('#EFE8DC','Fintech app: wallet, home, stats', dev('1','Crypto wallet')+dev('0','Banking home')+dev('4','Spending statistics'), true);
/* ---------- data ---------- */
const shot = (k,port) => () => `<div class="mock m-shot${port?' port':''}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></div>`;
const projects = [
  {id:'video-teaser', href:'#/video-teaser', lab:'Video teaser · where people upgrade', c:'#C2410C', t:'Video teaser', tag:'Growth', d:'Free users watch the first 25 seconds of their story; the rest stays blurred. It became the main place people upgrade.', mock:shot('vt_teaser')},
  {id:'mini-apps', href:'#/create-image', c:'#C2410C', t:'Create Image', tag:'Creation', d:'One calm surface for 24 AI models. ~55k images from ~6.8k creators, as of Oct 2026.', mock:shot('ci_hero')},
  {id:'editing', href:'#/editing-experience', lab:'Editing experience · 3 levels, 9 tools', c:'#23734A', t:'Editing experience', tag:'Editor', d:'Story page, scene editor, timeline, credits, export and publishing: one editor where every story gets finished.', mock:shot('ed_story')},
  {id:'designing', href:'#/designing-in-production', c:'#2F5BD3', t:'Designing in production', tag:'Editor', d:'68 merged PRs into production, written with Claude Code and shipped through CI. As of Oct 2026.', mock:shot('dp_thumb')}
];
const card = p => `<a class="card wtile${p.span?' span2':''}" href="${p.href||'#/case/'+p.id}" data-label="${p.lab||p.t}" data-color="${p.c}" aria-label="${p.t}. ${p.d}">${p.mock()}<span class="tlabel" aria-hidden="true" style="background:${p.c}">${p.t}</span></a>`;
const episodes = [
  ['3','Why do people stop at step 3?','8:42','#FFE98A','#FFC9D6'],
  ['2','Redesigning a metro ticket machine','11:05','#BFE7FF','#FFE98A'],
  ['1','What makes an empty state helpful?','7:18','#FFC9D6','#BFE7FF']
];
const epRow = e => `<a href="#/whiteboarding"><span class="th">${thumb('Ep '+e[0],e[3],e[4])}</span><span><span class="n">Episode ${e[0]}</span><span class="et">${e[1]}</span></span><span class="du">${e[2]}</span></a>`;
const contact = `<section class="foot text"><p class="big">Still reading? That's a good sign.</p><p>Write to <a href="mailto:rupamuxdesign@gmail.com">rupamuxdesign@gmail.com</a> or <a href="https://calendly.com/rupam_g-ma/30min">book 30 minutes</a>. I reply to everyone.</p></section>`;


/* ---------- On X: edit posts here ---------- */
const XLOGO = `<svg class="xlogo" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0F1419" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
const xImg=(k,alt,video)=>()=>`<div class="xmwrap${video?' vid':''}"><img loading="lazy" decoding="async" src="${IMG[k].src}" alt="${alt}">${video?'<span class="xplay" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg></span>':''}</div>`;
const TWEETS = [
  { date:'18 Sept 2026', text:'I\u2019ve stopped prototyping complex interactions in Figma. Here\u2019s what I do instead.<br><br>For our new AI chat panel, I built the whole experience as an HTML artifact instead. Figma would have taken a couple of days. This took a few hours.', media:xImg('xp1','Video: the AI chat panel prototype built as an HTML artifact',1), url:'https://x.com/rupam_gumber/status/2100954755304652985' },
  { date:'21 Aug 2026', text:'Testing two versions of our Biweekly Newsletter. Which one do you think will perform better- A or B?', media:xImg('xp2','Video: two versions of the Atlabs newsletter, A and B',1), url:'https://x.com/rupam_gumber/status/2090809973295264018' },
  { date:'14 Aug 2026', text:'Joined the trend purely for vibes \u{1F469}\u200D\u{1F4BB}', media:xImg('xp3','Video post',1), url:'https://x.com/rupam_gumber/status/2088251735584514325' },
  { date:'12 Aug 2026', text:'Finishing a video used to mean leaving the tool. Download \u2192 open YouTube \u2192 upload \u2192 write a title \u2192 hunt for a thumbnail.<br><br>We put publishing inside the export panel. And since we already have the full context, the title &amp; description write themselves, one click thumbnail gen.', media:xImg('xp4','Video: publishing to YouTube from the Atlabs export panel',1), url:'https://x.com/rupam_gumber/status/2087605939100926133' },
  { date:'8 Aug 2025', text:'Went to the IITR Gurgaon meetup last Saturday. Caught up with old friends, met some amazing folks, and left with a lot to reflect on.<br><br>Big thanks to the organisers \u2014 and to @vaibhavrawat for the real talk on designing in early-stage and working as Founding Designer. \u{1F64C}', media:xImg('xp5','Photo from the IIT Roorkee alumni meetup in Gurgaon'), url:'https://x.com/rupam_gumber/status/1953758630161133768' },
  { date:'7 Aug 2025', text:'Office vibe for Today! Love when it starts getting colorful. @AtlabsAI', media:xImg('xp6','Photo of the Atlabs office'), url:'https://x.com/rupam_gumber/status/1953364797828841955' },
  { date:'24 Oct 2024', text:'My portfolio just got featured into wall of portfolios. What better feeling could it be, to be able of showcase your work among elite group of designers!! \u{1F973}', media:()=>`<div class="xlink"><span>wallofportfolios.in</span><b>Rupam Gumber - Wall of portfolios</b><em>Hey! check out Rupam Gumber Portfolio featured on wall of portfolios.</em></div>`, url:'https://x.com/rupam_gumber/status/1849424455422107826' },
  { date:'23 Oct 2024', text:'Right? It\u2019s wild how much creativity comes out of Roorkee, even without a formal design degree. We just kinda figure things out as we go, but it\u2019s the best way to learn! Proud to be part of this crazy talented community \u{1F604}', media:()=>`<div class="xquote"><p><b>Charmie Kapoor</b> <span>@charmiekapoor \u00b7 18 Sept 2023</span></p><p>IIT Roorkee is absolutely killing it with the talent pool it brings to our design ecosystem every year.</p></div>`, url:'https://x.com/rupam_gumber/status/1849059656704143732' }
];
const xPost = t => `<a class="xpost" href="${t.url}" target="_blank" rel="noopener">
  <div class="xhead"><span class="xav" aria-hidden="true">R</span><span><span class="xname">Rupam</span><span class="xhandle">@rupam_gumber</span></span>${XLOGO}</div>
  <div class="xtext">${t.text}</div>
  ${t.media?`<div class="xmedia">${t.media()}</div>`:''}
  <div class="xfoot"><span>View on X</span>${t.date?`<time>${t.date}</time>`:''}</div>
</a>`;
const onX = () => `<section class="onx">
  <div class="xh" data-xh><div class="xh-stick" data-xhstick>
   <div class="xhd"><h2>Latest posts on X</h2><a href="https://x.com/rupam_gumber" target="_blank" rel="noopener">Follow @rupam_gumber</a></div>
   <div class="xh-view" data-xhview><div class="xh-track" data-xhtrack>${TWEETS.map(xPost).join('')}</div></div>
   <div class="xh-prog" aria-hidden="true"><i data-xhbar></i></div>
  </div></div>
</section>`;

/* ---------- On GitHub: weekly activity since July (levels 0-4, Sun..Sat), transcribed from GitHub ---------- */
const GH_USER = '[your-github-username]';
const GH_START = '2026-07-05'; // Sunday of the first week shown
const GH_WEEKS = [
 [0,0,2,0,0,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0],
 [0,1,1,0,1,1,0],[0,2,2,0,3,1,2],[0,1,0,0,0,2,0],[0,0,3,0,1,1,0],[0,1,0,1,2,0,0],
 [0,0,0,0,0,0,0],[0,1,0,0,0,1,1],[0,0,1,0,2,1,0],[0,3,0,2,2,1,0]
];
const onGH = () => {
  const d0=new Date(GH_START+'T00:00:00'); const today=new Date(); today.setHours(0,0,0,0);
  const fmt=d=>d.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
  const words=['No activity','A little coding','A good session','A big day','A huge day'];
  let cells='', active=0, lastMonth=-1;
  GH_WEEKS.forEach((w,wi)=>{
    const ws=new Date(d0); ws.setDate(d0.getDate()+wi*7);
    const m=ws.getMonth(); cells+=`<span class="m">${m!==lastMonth?ws.toLocaleDateString('en-US',{month:'short'}):''}</span>`; lastMonth=m;
    w.forEach((l,di)=>{ const d=new Date(ws); d.setDate(ws.getDate()+di);
      if(d>today){ cells+='<i class="pad"></i>'; return; }
      if(l>0) active++;
      cells+=`<i data-l="${l}" data-t="${fmt(d)}: ${words[l]}"></i>`; });
  });
  return `<section class="ongh">
  <h2>On GitHub</h2>
  <div class="shead"><span>Learning to code in public: ${active} active days since July</span><a href="https://github.com/${GH_USER}">View GitHub</a></div>
  <div class="gh-scroll"><div class="gh" id="gh" role="img" aria-label="Coding activity since July: ${active} active days">${cells}</div></div>
  <div class="gh-foot"><span class="gh-read" id="gh-read" aria-live="polite">Select a day to explore</span><span class="gh-legend" aria-hidden="true">Less <b style="background:var(--g0)"></b><b style="background:var(--g1)"></b><b style="background:var(--g2)"></b><b style="background:var(--g3)"></b><b style="background:var(--g4)"></b> More</span></div>
</section>`;
};

const elsewhere = () => {
  const d0=new Date(GH_START+'T00:00:00'); const today=new Date(); today.setHours(0,0,0,0);
  const fmt=d=>d.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
  const words=['no code','a little code','a good session','a big day','a huge day'];
  let cells='',active=0,last=-1;
  GH_WEEKS.forEach((w,wi)=>{ const ws=new Date(d0); ws.setDate(d0.getDate()+wi*7); const m=ws.getMonth();
    cells+=`<span class="m">${m!==last?ws.toLocaleDateString('en-US',{month:'short'}):''}</span>`; last=m;
    w.forEach((l,di)=>{ const d=new Date(ws); d.setDate(ws.getDate()+di); if(d>today){cells+='<i class="pad"></i>';return;} if(l>0)active++; cells+=`<i data-l="${l}" data-t="${fmt(d)}, ${words[l]}"></i>`; }); });
  return `<section>
  <div class="shead"><span>Elsewhere</span></div>
  <div class="elsew">
    <div class="ecard">
      <div class="vis"><svg viewBox="0 0 240 150" role="img" aria-label="A barbell that lifts on hover">
        <line x1="20" y1="132" x2="220" y2="132" stroke="var(--line)" stroke-width="2"/>
        <g class="lift">
          <rect x="34" y="96" width="172" height="6" rx="3" fill="var(--ink)"/>
          <rect x="48" y="72" width="14" height="54" rx="4" fill="var(--ink)"/><rect x="64" y="80" width="10" height="38" rx="3" fill="var(--ink)" opacity=".75"/>
          <rect x="178" y="72" width="14" height="54" rx="4" fill="var(--ink)"/><rect x="166" y="80" width="10" height="38" rx="3" fill="var(--ink)" opacity=".75"/>
        </g></svg></div>
      <div><b>In the gym</b><span class="sub">Most mornings. Small, honest progress beats one heroic day.</span></div>
    </div>
    <div class="ecard">
      <div class="vis"><svg viewBox="0 0 240 150" role="img" aria-label="Mountains with a sun that rises on hover">
        <clipPath id="skyclip"><rect x="0" y="0" width="240" height="132"/></clipPath>
        <g clip-path="url(#skyclip)"><circle class="sun" cx="160" cy="110" r="18" fill="#F3B24B"/></g>
        <path d="M10 132 L82 42 L118 86 L146 58 L230 132 Z" fill="#7F978A"/>
        <path d="M82 42 L96 60 L88 58 L80 64 L72 55 Z" fill="#fff"/>
        <path d="M146 58 L158 72 L150 70 L142 76 L136 70 Z" fill="#fff"/>
        <path d="M-6 132 L50 84 L96 132 Z" fill="#5E7568"/>
        <line x1="0" y1="132" x2="240" y2="132" stroke="var(--line)" stroke-width="2"/></svg></div>
      <div><b>In the mountains</b><span class="sub">Whenever the calendar allows. Last trip: [place].</span></div>
    </div>
    <div class="ecard">
      <div class="vis"><div class="gh" id="gh" role="img" aria-label="Coding activity since July: ${active} active days">${cells}</div></div>
      <div><b>Vibe coding, since July</b><span class="sub" id="gh-read" aria-live="polite">${active} active days so far. Alphy was the first thing I shipped. <a href="https://github.com/${GH_USER}">GitHub</a></span></div>
    </div>
  </div>
  <p class="elsew-more text">I also write about design ethics on <a href="https://medium.com/@rupamgumber38">Medium</a> and share work in progress on <a href="https://x.com/rupam_gumber">X</a>.</p>
</section>`;
};

const uiBento = () => `<div class="bento">
  ${financeRow()}
  ${tile('#DE7B5E','FM radio', dev('6','FM radio'))}
  ${tile('#C9C3F0','Meditation', dev('11','Meditation'))}
  ${tile('#E8A93E','Analytics dashboard', web('10','Analytics dashboard'), true)}
  ${tile('#BFD297','Taxi booking', dev('2','Taxi booking'))}
  ${tile('#2F66F0','Finance sign-up', dev('13','Finance sign-up'))}
  ${tile('#A9D8F5','Payments landing page', web('12','Payments landing page'), true)}
  ${tile('#1F3F8F','Bank onboarding', dev('8','Bank onboarding'))}
  ${tile('#F4C07A','Payments onboarding', dev('9','Payments onboarding'))}
  ${tile('#D8E6D0','Ad platform landing page', web('7','Ad platform landing page'), true)}
  ${tile('#F2D7E0','Design assets marketplace', web('3','Design assets marketplace'))}
  ${tile('#9FC3E6','Cleaning services', web('5','Cleaning services'))}
</div>`;
/* ---------- UI explorations: Dribbble recreations from 2022 (edit credits here) ---------- */
const UI_SHOTS = [
  {k:'6',  l:'FM radio',             kind:'p', bg:'#DE7B5E', by:null},
  {k:'10', l:'Analytics dashboard',  kind:'w', bg:'#E8A93E', by:null},
  {k:'1',  l:'Crypto wallet',        kind:'p', bg:'#EFE8DC', by:null},
  {k:'11', l:'Meditation',           kind:'p', bg:'#C9C3F0', by:null},
  {k:'12', l:'Payments landing page',kind:'w', bg:'#A9D8F5', by:null},
  {k:'8',  l:'Bank onboarding',      kind:'p', bg:'#1F3F8F', by:{n:'Artem Kovalenko for Glow', u:'https://dribbble.com/shots/19256131-Citadele-app-mobile-banking-neobank'}},
  {k:'13', l:'Finance sign-up',      kind:'p', bg:'#2F66F0', by:{n:'Rafi Rohmat for Odama', u:'https://dribbble.com/shots/17624600-Payfazz-Fintech-Mobile-App'}},
  {k:'7',  l:'Ad platform landing',  kind:'w', bg:'#D8E6D0', by:null},
  {k:'2',  l:'Taxi booking',         kind:'p', bg:'#BFD297', by:null},
  {k:'0',  l:'Banking home',         kind:'p', bg:'#F4C07A', by:null},
  {k:'3',  l:'Design assets marketplace', kind:'w', bg:'#F2D7E0', by:null},
  {k:'4',  l:'Spending statistics',  kind:'p', bg:'#D9E8F5', by:null},
  {k:'9',  l:'Payments onboarding',  kind:'p', bg:'#F4C07A', by:null},
  {k:'5',  l:'Cleaning services',    kind:'w', bg:'#9FC3E6', by:null}
];
const uiCard = x => `<div class="uicard"><div class="uitile ${x.kind}" style="--bg:${x.bg}">${x.kind==='p'
  ? `<button class="zoom" type="button" data-zoom="${x.k}" aria-label="Enlarge ${x.l}"><span class="device"><img src="${IMG[x.k].src}" alt="${x.l} recreation"></span></button>`
  : `<button class="zoom" type="button" data-zoom="${x.k}" aria-label="Enlarge ${x.l}"><img src="${IMG[x.k].src}" alt="${x.l} recreation"></button>`}</div>
</div>`;
const uiScroller = () => `<div class="hs-wrap"><div class="hs" id="hs"><div class="hs-sticky">
  <div class="ui-note" id="ui-note"><span class="tag">Dribbble recreations · 2022</span>
  <p>I recreated shots by designers I admired, pixel by pixel, to train my eye for layout, type and detail. It taught me more than any course. Thank you to every designer for sharing work I could learn from.</p></div>
  <div class="hs-view"><div class="hs-track" id="hs-track">${UI_SHOTS.map(uiCard).join('')}</div></div></div></div></div>`;

const TN_PAIRS=[
 ['home','Home','tn_home_old','tn_home_new','the home screen',
  [['Then','Five fixed cards and a website-URL box. You picked a format before you had an idea.'],['Now','One prompt box first, then nine workflows to start from, led by what people actually make.']]],
 ['wiz','Creation flow','tn_wiz_old2','at_music','the creation wizard',
  [['Then','A generic three-step wizard: write a script, pick a style, finalise the cast. Same steps for every kind of video.'],['Now','A wizard per workflow. A music video starts from your song, with sample tracks, a Suno tip and tutorials right on the first step.']]],
 ['story','Story','tn_ed_old','tn_ed_new','the story page',
  [['Then','A story was a list of still images. Writing, editing and preview all lived on this one page.'],['Now','Each scene can be an image, a full video, or a video teaser.'],['Free plan','Free users see a teaser: the first scenes play, the rest stay blurred until they upgrade.']]],
 ['edit','Editing','tn_ed_old','tn_edit_new','the editing view',
  [['Then','No separate editor. A row of small tool icons sat under each scene on the story page.'],['Now','A dedicated scene editor with nine panels: visual, motion, voiceover, lip sync, AI Edit, split, B-roll, captions, settings.']]]];
const tnNotes=p=>p[5].map(n=>`<div class="tn-n${n[0]==='Free plan'?' hl':''}"><dt>${n[0]}</dt><dd>${n[1]}</dd></div>`).join('');
const thenNow = () => `<section class="tn" aria-labelledby="tn-h"><div class="tn-pin" data-tnpin style="--n:${TN_PAIRS.length}">
 <div class="tn-stick">
  <div class="tn-top"><h3 id="tn-h">The app I joined, and the app today</h3>
   <div class="tn-tabs" role="tablist" aria-label="Compare screens">${TN_PAIRS.map((p,i)=>`<button type="button" role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-tn="${i}"><span class="tn-tn">0${i+1}</span>${p[1]}</button>`).join('')}</div></div>
  <div class="tn-view"><div class="tn-track" data-tntrack>${TN_PAIRS.map((p,i)=>`<div class="tn-slide" data-slide="${i}" aria-hidden="${i!==0}">
   <div class="tn-cmp" data-tncmp style="--p:100%">
    <img class="tn-new" src="${IMG[p[3]].src}" alt="Atlabs in October 2026: ${p[4]}" loading="lazy">
    <div class="tn-oldwrap"><img class="tn-old" src="${IMG[p[2]].src}" alt="Atlabs in December 2024: ${p[4]}" loading="lazy"></div>
    <span class="tn-lab l">Dec 2024</span><span class="tn-lab r">Oct 2026</span>
    <span class="tn-handle" aria-hidden="true"><i></i></span>
    <input class="tn-range" type="range" min="0" max="100" value="100" aria-label="Drag to compare December 2024 and October 2026: ${p[4]}">
   </div>
   <dl class="tn-notes">${tnNotes(p)}</dl>
  </div>`).join('')}</div></div>
  <div class="tn-prog" aria-hidden="true"><i data-tnbar></i></div>
 </div></div></section>`;
let tnOff=null;
function wireThenNow(){
  if(tnOff){tnOff();tnOff=null;}
  const root=document.querySelector('.tn'); if(!root) return;
  const pin=root.querySelector('[data-tnpin]'), track=root.querySelector('[data-tntrack]'), bar=root.querySelector('[data-tnbar]');
  const slides=[...root.querySelectorAll('.tn-slide')], tabs=[...root.querySelectorAll('[data-tn]')], N=slides.length;
  const cmps=slides.map(sl=>sl.querySelector('[data-tncmp]')), rngs=slides.map(sl=>sl.querySelector('.tn-range'));
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pinned=matchMedia('(min-width:821px)').matches && !RM;
  let manual=new Set(), cur=-1;
  const setP=(i,v)=>{ cmps[i].style.setProperty('--p',v+'%'); rngs[i].value=v; };
  const mark=i=>{ if(i===cur) return; cur=i; tabs.forEach((t,k)=>{t.setAttribute('aria-selected',String(k===i)); t.tabIndex=k===i?0:-1;}); slides.forEach((sl,k)=>sl.setAttribute('aria-hidden',String(k!==i))); };
  rngs.forEach((r,i)=>r.addEventListener('input',()=>{ manual.add(i); setP(i,r.value); }));
  cmps.forEach((c,i)=>{ let id=null, sx=0, sy=0, on=false, raf=0, last=0;
    const at=x=>{ const b=c.getBoundingClientRect(); return Math.min(100,Math.max(0,(x-b.left)/b.width*100)); };
    const apply=()=>{ raf=0; setP(i,last.toFixed(2)); };
    c.addEventListener('pointerdown',e=>{ if(e.button) return; id=e.pointerId; sx=e.clientX; sy=e.clientY; on=e.pointerType==='mouse'; if(on){ e.preventDefault(); c.setPointerCapture(id); c.classList.add('drag'); manual.add(i); last=at(e.clientX); apply(); } });
    c.addEventListener('pointermove',e=>{ if(e.pointerId!==id) return; if(!on){ const dx=Math.abs(e.clientX-sx), dy=Math.abs(e.clientY-sy); if(dx<6&&dy<6) return; if(dy>dx){ id=null; return; } on=true; try{c.setPointerCapture(id);}catch(_){} c.classList.add('drag'); manual.add(i); }
      last=at(e.clientX); if(!raf) raf=requestAnimationFrame(apply); });
    const end=e=>{ if(e.pointerId!==id) return; id=null; on=false; c.classList.remove('drag'); };
    c.addEventListener('pointerup',end); c.addEventListener('pointercancel',end); c.addEventListener('dragstart',e=>e.preventDefault());
    c.addEventListener('click',e=>{ if(Math.abs(e.clientX-sx)<6){ manual.add(i); setP(i,at(e.clientX).toFixed(2)); } });
  });
  root.classList.toggle('pinned',pinned);
  if(!pinned){ // fallback: tabs switch slides
    root.classList.add('free'); slides.forEach((_,i)=>setP(i,50));
    const go=i=>{ track.style.transform=`translateX(${-i*100}%)`; mark(i); };
    tabs.forEach((t,i)=>t.addEventListener('click',()=>go(i))); go(0); return; }
  root.classList.remove('free');
  const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  const upd=()=>{ const r=pin.getBoundingClientRect(); const total=pin.offsetHeight-innerHeight; const prog=Math.min(1,Math.max(0,-r.top/Math.max(1,total)));
    const f=prog*N; const i=Math.min(N-1,Math.floor(f)); const local=f-i; // 0..1 within slide
    // first 70%: reveal old->new; last 30%: slide to next
    const reveal=Math.min(1,local/.62); const move=i<N-1?Math.max(0,(local-.72)/.28):0;
    if(!manual.has(i)) setP(i,(100-ease(reveal)*100).toFixed(2));
    track.style.transform=`translateX(${-(i+ease(move))*100}%)`;
    bar.style.transform=`scaleX(${prog})`; mark(move>.5?i+1:i); };
  let raf=0; const on=()=>{ if(!raf) raf=requestAnimationFrame(()=>{raf=0;upd();}); };
  addEventListener('scroll',on,{passive:true}); addEventListener('resize',on); upd();
  tabs.forEach((t,i)=>t.addEventListener('click',()=>{ const total=pin.offsetHeight-innerHeight; const y=pin.getBoundingClientRect().top+scrollY+total*((i+.66)/N); scrollTo({top:y,behavior:'smooth'}); }));
  tnOff=()=>{ removeEventListener('scroll',on); removeEventListener('resize',on); };
}
const TABS = [
  {id:'atlabs', label:'Atlabs', count:()=>projects.length, html:()=>`<p class="plead"><span>Founding designer. The editor, the creation flows, and the moments that decide whether someone stays.</span></p><div class="wgrid">${projects.map(card).join('')}</div>${thenNow()}`},
  {id:'previous', label:'Previous companies', count:()=>3, html:()=>`<p class="plead"><span>Before Atlabs: Xalts, Curelink and ClearFeed.</span></p>${beforeAtlabs()}`},
  {id:'side', label:'Side projects', count:()=>4, html:()=>`<p class="plead"><span>Things I made for myself.</span></p><div class="bento">
    ${floristTile()}
    ${compTile('#CDBDEB','Alphy','A menu-bar plant that wilts if I skip water', `<div class="comp comp-a">
       ${pcWeb('al1','Alphy hanging on the Mac desktop','left:1%;top:3%;width:62%;z-index:1;--hx:-2%;--hy:-3%')}
       ${pcWeb('al2','Alphy moods: thriving, content, thirsty, drooping, wilted, sleeping','left:40%;top:38%;width:58%;z-index:2;--hx:2%;--hy:3%')}
     </div>`, true, '#/alphy')}
    ${compTile('#F4C9D8','Tinder concept','Personality before photos', `<div class="comp comp-p">
       ${pcPhone('tn1','Tinder concept: caption your pics','left:5%;top:3%;width:41%;z-index:2;--hx:-4%;--hy:-2%')}
       ${pcPhone('tn2','Tinder concept: personality guesses','left:54%;top:11%;width:41%;z-index:1;--hx:4%;--hy:2%')}
     </div>`, false, 'https://www.behance.net/gallery/204867193/Deeper-Connections-via-Tinder-a-design-case-study')}
    ${compTile('#E9824A','Night Schedule','Four timers, every night', `<div class="comp comp-p">
       ${pcPhone('ns2','Night Schedule: tonight list','left:5%;top:3%;width:41%;z-index:2;--hx:-4%;--hy:-2%')}
       ${pcPhone('ns1','Night Schedule: storytelling timer','left:54%;top:11%;width:41%;z-index:1;--hx:4%;--hy:2%')}
     </div>`, false, '#/night-schedule')}
  </div>`},
  {id:'ui', label:'Dribbble explorations', count:()=>14, html:()=>uiScroller()}
];


const pvImg = (k,tall) => `<span class="pv${tall?' tall':''}"><img loading="lazy" decoding="async" src="${IMG[k].src}" alt=""></span>`;
const PREVIEW = {
  atlabs:()=>pvImg('at_music')+pvImg('at_time')+pvImg('at_broll'),
  previous:()=>pvImg('x1')+pvImg('cf1')+pvImg('x2'),
  side:()=>pvImg('tn1',1)+pvImg('al2')+pvImg('ns2',1),
  ui:()=>pvImg('6',1)+pvImg('11',1)+pvImg('1',1),
  wb:()=>`<span class="solo"><span style="background:#fff">${board()}</span></span>`,
  x:()=>`<span class="solo"><span style="max-width:200px"><span class="wordmark" style="display:grid"><b><i>r</i>upam</b></span></span></span>`
};
const DESC = {atlabs:'Back to the start: what I design now as founding designer.',previous:'Xalts, Curelink and ClearFeed, before Atlabs.',side:'Small things I built for myself.',ui:'Fourteen screens made to practise craft.',wb:'Product problems, thought through out loud.',x:'What I\'m sharing while I work.'};
const panelHTML = t => { const i=TABS.indexOf(t), n=TABS[(i+1)%TABS.length], last=i===TABS.length-1;
  const dots=TABS.map((x,j)=>`<span class="d ${j===(i+1)%TABS.length?'cur':(j<=i?'done':'')}"></span>`).join('');
  return t.html()+`<button type="button" class="nextcard" data-next="${n.id}" aria-label="${last?'Back to':'Next'}: ${n.label}">
    <span><span class="nc-top"><span class="nc-dots" aria-hidden="true">${dots}</span>${last?'Back to the start':'Up next · '+((i+2))+' of '+TABS.length}</span>
    <span class="nc-title">${n.title||n.label}</span><span class="nc-desc">${DESC[n.id]}</span>
    <span class="nc-go">${n.id==='x'?'See my posts':'See '+n.label}<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg></span></span>
    <span class="nc-prev" aria-hidden="true">${PREVIEW[n.id]()}</span>
  </button>`; };
let currentTab = 'atlabs';
const moreHTML = () => `<section class="desk-sec" aria-labelledby="desk-h">
 <div class="dk-copy"><h2 id="desk-h">Get to know me.</h2>
  <p>The story behind the work, or my résumé on one page.</p>
  <div class="dk-hint" aria-hidden="true"><span>pick one up</span>
   <svg width="58" height="22" viewBox="0 0 58 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15C16 5 36 4 53 11"/><path d="M45 5.5l8 5.5-8.5 5"/></svg></div>
 </div>
 <div class="dk-desk" id="desk">
  <a class="dk-obj dk-pol dk-pre" href="#/about" draggable="false" data-k="story" aria-label="Read my story, 2 minute read">
   <div class="dk-inner"><span class="dk-seen" aria-hidden="true">✓</span><div class="dk-body"><span class="dk-tape"></span>
    <div class="dk-flip">
     <div class="dk-face"><div class="dk-ph"><img alt="Rupam" draggable="false" src="${IMG.abPortrait.src}"></div><em>my story</em></div>
     <div class="dk-face dk-back"><p>How an engineer from IIT Roorkee ended up designing AI video tools.</p><span>Read it →</span></div>
    </div></div></div>
   <span class="dk-lbl">My story <i>· 2 min read</i></span></a>
  <a class="dk-obj dk-sheet dk-pre" href="#/resume" data-resume draggable="false" data-k="resume" aria-label="Open résumé, one page PDF">
   <div class="dk-inner"><span class="dk-seen" aria-hidden="true">✓</span><div class="dk-body">
    <svg class="dk-clip" width="22" height="52" viewBox="0 0 22 52" fill="none" stroke="#9C9B96" stroke-width="2" stroke-linecap="round"><path d="M16 14v26a5 5 0 0 1-10 0V8a4 4 0 0 1 8 0v30a2 2 0 0 1-4 0V14"/></svg>
    <h4>Rupam</h4><div class="dk-r">Founding Designer · Atlabs AI</div>
    <div class="dk-row"><span>Atlabs AI</span><span>Now</span></div><div class="dk-row"><span>Xalts</span><span>2024</span></div>
    <div class="dk-row"><span>ClearFeed</span><span>2023</span></div><div class="dk-row"><span>IIT Roorkee</span><span>Int. MSc</span></div>
    <div class="dk-bars"><div style="width:90%"></div><div style="width:70%"></div><div style="width:80%"></div></div>
    <span class="dk-stamp">1 PAGE</span>
    <div class="dk-dl"><b>Open résumé ↗</b></div></div></div>
   <span class="dk-lbl">Résumé <i>· PDF</i></span></a>
 </div>
</section>`;
/* ---------- pages ---------- */
const pages = {
home: () => `
<section class="intro">
  <span class="now"><i></i>Founding designer at Atlabs</span>
  <h1 class="lead">A <span class="nw"><span class="hw" style="--mk:rgba(123,97,255,.16)">product <span class="nw">designer <span class="ico i-pen" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="ink" d="M3.5 20.5h8"/><path d="M5 19l3.5-1 9.8-9.8a2.1 2.1 0 0 0-3-3L5.5 15 5 19z"/><path d="M13.8 6.7l3 3" stroke-linecap="butt"/></svg></span></span></span> who has a <span class="hw" style="--mk:rgba(47,91,211,.14)"><span class="nw">vision <span class="ico i-eye" aria-hidden="true"><svg viewBox="0 0 24 24"><g class="lid"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></g></svg></span></span></span>,</span> <span class="nw"><span class="hw" style="--mk:rgba(224,112,58,.18)">executes <span class="nw">fast <span class="ico i-bolt" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/></svg></span></span></span> and <span class="hw" style="--mk:rgba(59,165,107,.18)">takes the team <span class="nw">ahead <span class="ico i-team" aria-hidden="true"><svg viewBox="0 0 24 24"><g class="ppl"><circle cx="8" cy="8" r="2.6"/><path d="M3.5 18c.6-2.8 2.4-4.4 4.5-4.4s3.9 1.6 4.5 4.4"/><circle cx="15" cy="9" r="2.1"/></g><path class="go" d="M15.5 16.5h5M18.5 14l2.5 2.5-2.5 2.5"/></svg></span></span></span>.</span></h1>
  <ul class="proof" aria-label="Highlights">
    <li><b>Founding designer</b><span>Atlabs, AI video creation. Product, site and growth.</span></li>
    <li><b>5 startups</b><span>Atlabs, Xalts, ClearFeed, Curelink, Explorin</span></li>
    <li><b>1st runner-up</b><span>Adobe Designathon '24</span></li>
    <li><b>IIT Roorkee</b><span>JEE Advanced, top 0.5 percentile</span></li>
  </ul>
</section>
<section class="work" aria-label="Work">
  <div class="tabs-wrap"><nav class="tabs" aria-label="Selected work">${TABS.map(t=>`<button type="button" id="tab-${t.id}" data-tab="${t.id}" aria-controls="panel-${t.id}" aria-current="${t.id===currentTab}">${t.label}<span class="ct" aria-hidden="true">${t.count()}</span></button>`).join('')}</nav></div>
  ${TABS.map(t=>`<section class="panel" id="panel-${t.id}" data-panel="${t.id}" aria-label="${t.label}">${t.html()}</section>`).join('')}
</section>`,

about: () => `
<section class="ph"><a class="back" href="#/">Back to home</a><h1>About</h1>
  <div class="ab-open"><p class="ab-lead">I’m the founding designer at Atlabs, making AI video creation easy for everyone.</p>
  <figure class="ab-portrait"><button class="zoom" type="button" data-zoom="abPortrait" aria-label="Enlarge Rupam in front of a doodle wall"><img loading="lazy" decoding="async" src="${IMG.abPortrait.src}" width="${IMG.abPortrait.w}" height="${IMG.abPortrait.h}" alt=""></button><figcaption>Hi, that's me</figcaption></figure></div>
</section>
<section class="ab-motto" aria-label="How I work">
  <blockquote><p class="q">“Be the person who can <span class="ring">figure it out<svg viewBox="0 0 220 70" preserveAspectRatio="none" aria-hidden="true"><path d="M14 38C8 16 70 6 128 8s86 12 84 30-58 26-116 25S10 52 18 30c6-14 40-22 70-22"/></svg><span class="note" aria-hidden="true"><svg viewBox="0 0 80 60"><path d="M58 50C46 48 30 42 22 30S14 12 12 6"/><path d="M5 14 12 5l8 8"/></svg><span>that's me</span></span></span>.”</p>
</blockquote>
  <p class="me strength"><b>My biggest strength:</b> carrying the vision, executing fast, and taking the team ahead together.</p>
  <p class="me">Hand me a problem with no playbook and I'll dig in, ask the questions that matter, and get it done. It's the part of the job I enjoy most.</p>
</section>

<section class="sec"><h2 class="lab">Where I've worked</h2><div class="ab-list">
  <div><b style="font-weight:500">Atlabs</b><span>Founding designer, now. AI video creation.</span></div>
  <div><b style="font-weight:500">Xalts</b><span>May–Jul '24. Fireblocks custody integration for digital assets. Web3, fintech.</span></div>
  <div><b style="font-weight:500">E-Summit '24, IIT Roorkee</b><span>Head of Design for the college entrepreneurship fest.</span></div>
  <div><b style="font-weight:500">ClearFeed</b><span>Jan–Sep '23. Setup, test and activation of data sources for GPT-powered answers. SaaS, B2B.</span></div>
  <div><b style="font-weight:500">Curelink</b><span>Dec '22–Jan '23, freelance. Rewards that kept doctors enrolling patients.</span></div>
  <div><b style="font-weight:500">Explorin</b><span>May '21–Jul '22. Led platform design for onboarding, gamified dashboards and goal management. Edtech, B2C.</span></div>
</div></section>

<section aria-label="Photos from along the way"><div class="ab-strip">
  <figure class="snap" style="--r:-3deg;--y:6px"><button class="zoom" type="button" data-zoom="abExplorin" aria-label="Enlarge The Explorin team in the hills"><img loading="lazy" decoding="async" src="${IMG.abExplorin.src}" width="${IMG.abExplorin.w}" height="${IMG.abExplorin.h}" alt="" loading="lazy"><figcaption>Explorin, in the hills</figcaption></button></figure>
  <figure class="snap" style="--r:2deg;--y:-4px"><button class="zoom" type="button" data-zoom="abEsummit" aria-label="Enlarge On stage at E-Summit '24, IIT Roorkee"><img loading="lazy" decoding="async" src="${IMG.abEsummit.src}" width="${IMG.abEsummit.w}" height="${IMG.abEsummit.h}" alt="" loading="lazy"><figcaption>E-Summit '24 stage</figcaption></button></figure>
  <figure class="snap" style="--r:-1.5deg;--y:10px"><button class="zoom" type="button" data-zoom="abClearfeed" aria-label="Enlarge The ClearFeed team"><img loading="lazy" decoding="async" src="${IMG.abClearfeed.src}" width="${IMG.abClearfeed.w}" height="${IMG.abClearfeed.h}" alt="" loading="lazy"><figcaption>ClearFeed crew</figcaption></button></figure>
  <figure class="snap" style="--r:3deg;--y:0px"><button class="zoom" type="button" data-zoom="abXalts" aria-label="Enlarge The Xalts team"><img loading="lazy" decoding="async" src="${IMG.abXalts.src}" width="${IMG.abXalts.w}" height="${IMG.abXalts.h}" alt="" loading="lazy"><figcaption>Xalts team</figcaption></button></figure>
</div></section>

<section class="sec"><h2 class="lab">Recognition</h2><div class="ab-rec">
  <figure class="ab-award"><button class="zoom" type="button" data-zoom="abDesignathon" aria-label="Enlarge Rupam with the Adobe Designathon '24 award"><img loading="lazy" decoding="async" src="${IMG.abDesignathon.src}" width="${IMG.abDesignathon.w}" height="${IMG.abDesignathon.h}" alt="" loading="lazy"></button><figcaption>Adobe Designathon '24</figcaption></figure>
  <ul class="ab-awards">
    <li><b>Adobe Designathon '24</b><span>First runner-up</span></li>
    <li><b>Best CSS</b><span>Site of the Day</span></li>
    <li><b>Inter-Bhawan Tech Meet, IIT Roorkee</b><span>Winner, Design track</span></li>
    <li><b>Consult School, IIT Madras</b><span>Top 5</span></li>
    <li><b>PM School Live Challenge</b><span>First runner-up</span></li>
    <li><b>Wall of Portfolios</b><span>Featured</span></li>
  </ul>
</div></section>
<section class="sec"><h2 class="lab">Off the screen</h2><p class="text" style="margin:0">Most mornings I'm in the gym. Whenever the calendar allows, I'm in the mountains. Both teach the same thing design does: small, honest progress beats one heroic day.</p></section>
${onX().replace('<section class="onx">','<section class="onx bigsec" id="s-x">')}`,

atlabs: () => `
<section class="ph text"><a class="back" href="#/">Back to home</a><h1>Everything I've shipped at Atlabs</h1><p>As the first designer, I work across the whole product: the editor, the creation flows, and the moments that decide whether someone stays.</p></section>
<section><div class="wbar"><div class="wtabs" role="group" aria-label="Filter projects">${['All','Editor','Creation','Growth'].map((f,i)=>`<button type="button" data-f="${f}" aria-pressed="${i===0}">[${f}]</button>`).join('')}</div>
<div class="wview" role="group" aria-label="Layout"><button type="button" data-cols="1" aria-pressed="false" aria-label="One column"><svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true"><rect x="2" y="2" width="18" height="18" rx="3"/></svg></button><button type="button" data-cols="2" aria-pressed="true" aria-label="Two columns"><svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true"><rect x="2" y="2" width="8" height="18" rx="3"/><rect x="12" y="2" width="8" height="18" rx="3"/></svg></button></div></div>
<div class="wgrid" id="plist">${projects.map(card).join('')}</div></section>`,

case: (id) => { const p = projects.find(x=>x.id===id) || projects[0]; const i = projects.indexOf(p); const n = projects[(i+1)%projects.length];
 return `
<section class="ph text"><a class="back" href="#/atlabs">All Atlabs work</a><h1>${p.t}</h1><p>${p.d}</p></section>
<div class="bigmock">${p.mock()}</div>
<div class="facts"><div><span>Role</span>Founding Designer</div><div><span>Area</span>${p.tag}</div><div><span>Timeline</span>[Month, year]</div><div><span>Status</span>[Live or in test]</div></div>
<section class="sec"><h2 class="lab">The case study</h2><div class="text"><p>This page is where the full story goes: the problem, what you heard from users, the options you tried, what shipped and what changed. The Xalts page shows the finished version of this layout.</p><p><a href="#/xalts" style="color:var(--accent)">See the Xalts case study</a></p></div></section>
<div class="next"><a href="#/atlabs">All Atlabs work</a><a class="go" href="#/case/${n.id}">Next: ${n.t}</a></div>`; },

screens: () => `
<section class="ph text"><a class="back" href="#/">Back to home</a><h1>UI screens</h1><p>Explorations and shots I made to practise craft. No case studies here, just pixels. Tap any screen to see it larger.</p></section>
<section class="bento">
  ${financeRow()}
  ${tile('#DE7B5E','FM radio', dev('6','FM radio'))}
  ${tile('#C9C3F0','Meditation', dev('11','Meditation'))}
  ${tile('#E8A93E','Analytics dashboard', web('10','Analytics dashboard'), true)}
  ${tile('#BFD297','Taxi booking', dev('2','Taxi booking'))}
  ${tile('#2F66F0','Finance sign-up', dev('13','Finance sign-up'))}
  ${tile('#A9D8F5','Payments landing page', web('12','Payments landing page'), true)}
  ${tile('#1F3F8F','Bank onboarding', dev('8','Bank onboarding'))}
  ${tile('#F4C07A','Payments onboarding', dev('9','Payments onboarding'))}
  ${tile('#D8E6D0','Ad platform landing page', web('7','Ad platform landing page'), true)}
  ${tile('#F2D7E0','Design assets marketplace', web('3','Design assets marketplace'))}
  ${tile('#9FC3E6','Cleaning services', web('5','Cleaning services'))}
</section>`,

whiteboarding: () => `
<section class="ph text"><a class="back" href="#/">Back to home</a><h1>Whiteboarding, out loud</h1><p>Each episode, I take one product problem and think it through on a whiteboard, from the first question to a rough answer. No edits to hide the wrong turns.</p></section>
<section><div class="shead"><span>Latest episode</span><span>8:42</span></div><div class="board">${board(true)}</div><p style="font-family:var(--serif);font-size:30px;line-height:1.2;margin:20px 0 0">Why do people stop at step 3?</p></section>
<section class="text"><div class="shead" style="margin-bottom:0"><span>All episodes</span></div><div class="eps" style="margin-top:0">${episodes.map(epRow).join('')}</div></section>
<section class="foot text"><p class="big">Got a problem you'd like me to whiteboard?</p><p>Send it to <a href="mailto:rupamuxdesign@gmail.com">rupamuxdesign@gmail.com</a> or reply on <a href="https://x.com/rupam_gumber">X</a>. The best ones become episodes.</p></section>`,

alphy: () => `
<section class="ph text"><a class="back" href="#/work/side/alphy">Back to home</a><h1>Alphy, a plant that gets me to drink water</h1><p>A desk plant that lives at the top of my screen. He gets me to drink water by asking me to water him.</p></section>
<div class="facts"><div><span>Role</span>Design and build, solo</div><div><span>For</span>Me, all day at my laptop</div><div><span>Surface</span>macOS, from the menu bar</div><div><span>Year</span>2026</div></div>
<figure class="al-hero"><div class="mac"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><video data-vsrc="alv_desk" muted loop playsinline autoplay poster="${IMG.alv_desk.src}" aria-label="Alphy on the desktop: slides in, perks up, swings, stretches, gets watered, says thank you, and leaves"></video></div><figcaption>15 seconds of him: slide in, perk up, swing, stretch, pour, thank you, leave</figcaption></figure>
<section class="sec"><h2 class="lab">The problem</h2><div class="text"><p class="quote">Every hydration app is a notification machine.</p><p>I know I should drink more water. Knowing was never the problem; the reminders were. Alarms and notifications demand attention at a moment they choose, not one I choose, and after a week I dismiss them without reading. I work on this laptop most of the day, and anything that interrupts that gets uninstalled.</p></div></section>
<section class="sec"><h2 class="lab">The bet</h2><div class="text"><p class="quote">Caring for something beats being nagged.</p><p>Watering a plant is a small, pleasant act. Being told to hydrate is a chore. So the app never mentions me at all. A plant slowly droops, and the deal is that when I water him, I drink a glass too.</p><p>Two assumptions sit under that: posture can carry the whole message, since a drooping leaf needs no copy, and a boring app I keep running beats a delightful one I quit.</p></div></section>
<div class="al-rule"><b>One hard rule</b><p>It must never interrupt me. No sound, no badges, no popups over my work. Ever.</p></div>
<div class="al-states"><figure><span class="al-svg " data-svg="1" aria-hidden="true"></span><figcaption>thriving</figcaption></figure><figure><span class="al-svg " data-svg="2" aria-hidden="true"></span><figcaption>content</figcaption></figure><figure><span class="al-svg " data-svg="3" aria-hidden="true"></span><figcaption>thirsty</figcaption></figure><figure><span class="al-svg " data-svg="4" aria-hidden="true"></span><figcaption>drooping</figcaption></figure><figure><span class="al-svg " data-svg="5" aria-hidden="true"></span><figcaption>wilted</figcaption></figure><figure><span class="al-svg " data-svg="6" aria-hidden="true"></span><figcaption>sleeping</figcaption></figure><p class="cap">Six states. The first tiers use zero words: his posture is the reminder.</p></div>
<section class="sec"><h2 class="lab">The solution</h2><div class="text"><p class="quote">Escalate the plant, never the interface.</p><p>Alphy isn't on screen at all while I'm hydrated. When it's been a while, he slides down from the top of the screen and simply hangs there, drooping a little more as time passes. He asks in words exactly once per cycle: one line, six words at most. Then he folds the card away and waits.</p></div></section>
<ol class="al-tiers"><li><div class="pic"><span class="al-svg " data-svg="7" aria-hidden="true"></span></div><p class="t">0 min</p><b>Ambient</b><p>Breathing, swaying. Nothing to read.</p></li><li><div class="pic"><span class="al-svg " data-svg="8" aria-hidden="true"></span></div><p class="t">55 min</p><b>Droop</b><p>A leaf lowers. That is the entire reminder.</p></li><li><div class="pic"><span class="al-svg " data-svg="9" aria-hidden="true"></span><span class="bub">sip?</span></div><p class="t">90 min</p><b>Ask</b><p>One line, once. Gone in 20 seconds.</p></li><li><div class="pic"><span class="al-svg " data-svg="10" aria-hidden="true"></span></div><p class="t">2.5 hr</p><b>Wilt</b><p>He stops asking and just waits. He can never die.</p></li></ol>
<section class="sec"><h2 class="lab">The interaction</h2><div class="text"><p class="quote">Hold him. That's it.</p><p>There's no button. Press and hold Alphy himself and a watering can tips in: the soil darkens, the leaves lift, and a small meter counts the millilitres. A full pour takes three seconds and logs 250 ml. Letting go early gives partial credit, so half a hold is half a glass, never an error.</p><p>Moving him instead swings him like a real pendulum. Drag, flick, pull: the hook stays screwed to the ceiling while the cords stretch.</p></div></section>
<div class="al-steps">
  <figure><button class="zoom" type="button" data-zoom="al_hover" aria-label="Enlarge hover state"><img loading="lazy" decoding="async" src="${IMG.al_hover.src}" width="${IMG.al_hover.w}" height="${IMG.al_hover.h}" alt=""></button><figcaption><b>Hover</b>Two words of instruction, the only ones in the app</figcaption></figure>
  <figure><button class="zoom" type="button" data-zoom="al_pour" aria-label="Enlarge pouring"><img loading="lazy" decoding="async" src="${IMG.al_pour.src}" width="${IMG.al_pour.w}" height="${IMG.al_pour.h}" alt=""></button><figcaption><b>Pour</b>The can, the arc, the count</figcaption></figure>
  <figure><button class="zoom" type="button" data-zoom="al_release" aria-label="Enlarge release"><img loading="lazy" decoding="async" src="${IMG.al_release.src}" width="${IMG.al_release.w}" height="${IMG.al_release.h}" alt=""></button><figcaption><b>Release</b>A spring, an overshoot, four words at most</figcaption></figure>
</div>
<section class="sec"><h2 class="lab">The craft</h2><div class="text"><p>Small details that make him feel alive.</p></div></section>
<div class="al-craft">
  <div class="c wide"><p class="h">He grows</p><p>Hitting 80% of my target makes a good day. Three good days grow a leaf, and growth never goes backwards: a bad day wilts him today, but never costs him a stage.</p><div class="al-stages"><figure><span class="al-svg " data-svg="11" aria-hidden="true"></span><figcaption><b>Stage 1</b>day one</figcaption></figure><figure><span class="al-svg " data-svg="12" aria-hidden="true"></span><figcaption><b>Stage 3</b>10 good days</figcaption></figure><figure><span class="al-svg " data-svg="13" aria-hidden="true"></span><figcaption><b>Stage 5</b>50 good days</figcaption></figure></div></div>
  <div class="c"><p class="h">He speaks like a plant, not a coach</p><p>One line at a time, matched to the hour, never repeated within a week.</p><div class="lines"><span>still parched</span><span>no rush. mildly desperate.</span><span>ahh</span><span>much better</span><span>half counts</span><span>new leaf. yours too.</span><span>off duty</span></div></div>
  <div class="c"><p class="h">He knows when to freeze</p><div class="freeze"><span>screen share</span><span>camera on</span><span>fullscreen</span><span class="arr" aria-hidden="true">→</span><b>he holds still</b></div><p>And after a two-hour meeting, there's one reminder waiting, never a queue.</p></div>
</div>
<section class="sec"><h2 class="lab">Where it is now</h2><div><div class="stats al-stats"><div><b>0</b><span>Notifications, sounds or badges</span></div><div><b>3 s</b><span>For a full pour, with partial credit below</span></div><div><b>6</b><span>Words at most, once per cycle</span></div><div><b>24</b><span>Leaves he can grow, three good days at a time</span></div></div><p class="text">He launches at login and stays away until he genuinely needs something. For the first time, the reminder is something I look forward to touching.</p></div></section>
<div class="al-bye"><span class="al-svg " data-svg="14" aria-hidden="true"></span><p>that's Alphy. he says see you soon.</p></div>
${caseNav('alphy')}`,

'night-schedule': () => `
<section class="ph text"><a class="back" href="#/work/side/night-schedule">Back to home</a><h1>Night Schedule, and the feature I cut</h1><p>A four-part night routine that lives on my phone, and the story of cutting the best-looking feature in it.</p></section>
<div class="facts"><div><span>Role</span>Design and build, solo</div><div><span>For</span>Me, nightly</div><div><span>Surface</span>Mobile web, on the home screen</div><div><span>Built with</span>One HTML file, Cloudflare Pages</div></div>
<figure class="ns-stage"><button class="zoom ns-phone" type="button" data-zoom="ns_tonight" aria-label="Enlarge Tonight, two of four done"><img loading="lazy" decoding="async" src="${IMG.ns_tonight.src}" width="${IMG.ns_tonight.w}" height="${IMG.ns_tonight.h}" alt=""></button><button class="zoom ns-phone" type="button" data-zoom="ns_story" aria-label="Enlarge Storytelling timer running"><img loading="lazy" decoding="async" src="${IMG.ns_story.src}" width="${IMG.ns_story.w}" height="${IMG.ns_story.h}" alt=""></button></figure>
<section class="sec"><h2 class="lab">The problem</h2><div class="text"><p class="quote">The plan only existed in my head.</p><p>Every night I wanted to do the same four things: practise communication and storytelling, read, meditate, journal. Ninety minutes, give or take. But the plan lived nowhere, so each evening opened with the same negotiation: which one, for how long, and am I actually doing this tonight? The negotiation usually won.</p><p>Habit apps were the wrong size for the problem. I didn't need help building a habit. I needed the four things already decided, and something to tell me when to stop.</p></div></section>
<section class="sec"><h2 class="lab">Assumptions</h2><div class="text"><p>Three guesses. One was right.</p></div></section>
<div class="ns-guess">
  <div class="g"><p class="v">Right</p><b>The hard part is choosing, not doing.</b><p>Four things on one screen, each with a time already set. Nothing left to decide. That's the whole app, really.</p></div>
  <div class="b"><p class="v">Wrong</p><b>Seeing the timer will make me stop.</b><p>It doesn't. It just tells me the time is up. I still start storytelling and look up three hours later.</p></div>
  <div class="b"><p class="v">Wrong</p><b>A 21-day streak will keep me going.</b><p>It did the opposite. I had to build it to find that out.</p></div>
</div>
<section class="sec"><h2 class="lab">Two screens, and that's the app</h2><div class="text"><p>Pick a thing. Tap the dial. That's the entire interaction model; everything else is restraint.</p></div></section>
<div class="ns-two">
  <figure><button class="zoom ns-phone" type="button" data-zoom="ns_session" aria-label="Enlarge A reading session, ready to start"><img loading="lazy" decoding="async" src="${IMG.ns_session.src}" width="${IMG.ns_session.w}" height="${IMG.ns_session.h}" alt=""></button><figcaption><b>A session</b>The title, one line on why it's worth doing, and a dial you tap to start. Chips set the length and remember what you picked last time.</figcaption></figure>
  <figure><button class="zoom ns-phone" type="button" data-zoom="ns_done" aria-label="Enlarge A finished night, four of four"><img loading="lazy" decoding="async" src="${IMG.ns_done.src}" width="${IMG.ns_done.w}" height="${IMG.ns_done.h}" alt=""></button><figcaption><b>A finished night</b>Four ticks and a full ring. No congratulations, no confetti. The app just quietly stops asking.</figcaption></figure>
</div>
<div class="decs">
  <div><b>The ring empties, it doesn't fill</b><p>You watch what's left, not what you've spent. Time remaining is what you actually care about at 11pm.</p></div>
  <div><b>The dial is the button</b><p>Tap the circle to start, tap again to pause. One enormous target, nothing else to hit in a dark room.</p></div>
  <div><b>The night runs until 4am</b><p>A session started at 12:30 counts for the evening before, because that's how nights work, whatever the date says.</p></div>
</div>
<section class="sec"><h2 class="lab">The illustrations carry it</h2><div class="text"><p>The same girl in all four, in watercolour, with slightly wobbly frames and a pencil permanently lost in her hair: talking to a room, reading with two cats, sitting with the incense going, writing the whole day down. She's the reason I open this instead of a stopwatch. The countdown label says FOCUS BABY, and that was never going to change.</p></div></section>
<div class="ns-art"><figure><img loading="lazy" decoding="async" src="${IMG.ns_i_story.src}" width="${IMG.ns_i_story.w}" height="${IMG.ns_i_story.h}" alt="Watercolour girl telling a story to a room"><figcaption>Storytelling</figcaption></figure><figure><img loading="lazy" decoding="async" src="${IMG.ns_i_read.src}" width="${IMG.ns_i_read.w}" height="${IMG.ns_i_read.h}" alt="Watercolour girl reading with two cats"><figcaption>Reading</figcaption></figure><figure><img loading="lazy" decoding="async" src="${IMG.ns_i_med.src}" width="${IMG.ns_i_med.w}" height="${IMG.ns_i_med.h}" alt="Watercolour girl meditating with incense"><figcaption>Meditation</figcaption></figure><figure><img loading="lazy" decoding="async" src="${IMG.ns_i_jour.src}" width="${IMG.ns_i_jour.w}" height="${IMG.ns_i_jour.h}" alt="Watercolour girl writing in a journal"><figcaption>Journaling</figcaption></figure></div>
<a class="ns-try" href="https://night-schedule-ep4.pages.dev" target="_blank" rel="noopener"><span><b>Try the real thing</b>A live copy runs at night-schedule-ep4.pages.dev. Nothing you do there touches my own record.</span><span class="go">Open the app ↗</span></a>
<section class="sec"><h2 class="lab">What I cut</h2><div class="text"><p class="quote">The prettiest feature was the one making things worse.</p><p>I built a 21-day tracker: a 7×3 grid under the cards, one cell per day, darker the more of that night you finished. Tonight got a black ring, and tapping any past day told you what you'd done. It was easily the nicest-looking thing in the app.</p></div></section>
<figure class="ns-cut"><div class="frame"><img loading="lazy" decoding="async" src="${IMG.ns_grid.src}" width="${IMG.ns_grid.w}" height="${IMG.ns_grid.h}" alt="The removed 21-day challenge grid, day 12 of 21"><span class="stamp">Removed</span></div><figcaption>Removed after about a week. Eight full nights out of twelve looks like progress on paper; it didn't feel like it.</figcaption></figure>
<section class="sec"><h2 class="lab">Why it went</h2><div class="text"><p>It measured a completion I was never going to hit. I'd start the first session and still be at it three hours later, so most nights ended short of four. The grid stopped being a record and became a wall of near-misses: a calm app quietly turning into a report card.</p><p>The fix wasn't a redesign. The feature was answering a question I hadn't asked. It's gone, and the nightly ticks stayed. The data is still recorded in the background and backed up off the phone, so it's there if I ever want it. It just isn't on screen every night, making a case against me.</p></div></section>
<section class="sec"><h2 class="lab">Where it stands</h2><div class="text"><p><b style="font-weight:500">The negotiation is gone.</b> Four decisions, made once, sitting on my home screen. That alone was worth the build, and it's the part I'd keep if I could keep only one.</p><p><b style="font-weight:500">The long session still runs long.</b> A chime isn't a strong enough ending, and that's the next real problem: something harder to ignore than a sound, rather than a chart telling me afterwards that I failed.</p><p><b style="font-weight:500">And I open it because it's nice to look at.</b> Two weeks in, that's not a soft feature. It's most of why the thing survived at all.</p></div></section>
<section class="sec"><h2 class="lab">Every screen</h2><div class="text"><p>One night, start to finish. There's nothing else in the app.</p></div></section>
<div class="ns-strip" tabindex="0" aria-label="All five screens"><figure><button class="zoom ns-phone" type="button" data-zoom="ns_s1" aria-label="Enlarge Tonight, half done"><img loading="lazy" decoding="async" src="${IMG.ns_s1.src}" width="${IMG.ns_s1.w}" height="${IMG.ns_s1.h}" alt=""></button><figcaption>Tonight, half done</figcaption></figure><figure><button class="zoom ns-phone" type="button" data-zoom="ns_s2" aria-label="Enlarge Pick a length"><img loading="lazy" decoding="async" src="${IMG.ns_s2.src}" width="${IMG.ns_s2.w}" height="${IMG.ns_s2.h}" alt=""></button><figcaption>Pick a length</figcaption></figure><figure><button class="zoom ns-phone" type="button" data-zoom="ns_s3" aria-label="Enlarge Running"><img loading="lazy" decoding="async" src="${IMG.ns_s3.src}" width="${IMG.ns_s3.w}" height="${IMG.ns_s3.h}" alt=""></button><figcaption>Running</figcaption></figure><figure><button class="zoom ns-phone" type="button" data-zoom="ns_s4" aria-label="Enlarge Time's up"><img loading="lazy" decoding="async" src="${IMG.ns_s4.src}" width="${IMG.ns_s4.w}" height="${IMG.ns_s4.h}" alt=""></button><figcaption>Time's up</figcaption></figure><figure><button class="zoom ns-phone" type="button" data-zoom="ns_s5" aria-label="Enlarge All four"><img loading="lazy" decoding="async" src="${IMG.ns_s5.src}" width="${IMG.ns_s5.w}" height="${IMG.ns_s5.h}" alt=""></button><figcaption>All four</figcaption></figure></div>
${caseNav('night-schedule')}`,

'create-image': () => {
const AS='24 Oct 2026';
const pinsHTML=(pins)=>pins.map((p,i)=>`<button type="button" class="ci-pin" data-pin="${i+1}" style="left:${p[0]}%;top:${p[1]}%" aria-label="Note ${i+1}: ${p[2]}"><span aria-hidden="true">${i+1}</span><em role="tooltip">${p[2]}</em></button>`).join('');
const fr=(k,alt,cap,o={})=>`<figure class="ci-fig ${o.cls||''}">${o.top||''}<div class="ci-frame"><div class="ci-shot"><button class="ci-z" type="button" data-zoom="${k}" aria-label="Enlarge: ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${alt}"></button>${o.pins?pinsHTML(o.pins):''}${o.ov||''}</div></div>${o.pins?`<ol class="ci-leg">${o.pins.map((p,i)=>`<li data-pin="${i+1}"><span class="ci-dot s" aria-hidden="true">${i+1}</span>${p[2]}</li>`).join('')}</ol>`:''}${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const saw=(n,txt)=>`<div class="ci-saw2"><span class="k">What we saw</span><div class="row"><b class="ci-cnt" data-count="${n}">${n}</b><p>${txt}</p></div></div>`;
const dec=(n,o)=>{const p=String(n).padStart(2,'0');return `<section class="ci-dec2 ci-l-${o.layout}" id="ci-d${n}" aria-labelledby="ci-d${n}h" data-rail="${p} · ${o.short}">
<div class="ci-dgrid"><div class="ci-dtext"><p class="ci-dk">Decision ${p} <span>${o.tag}</span></p><h3 id="ci-d${n}h">${o.title}</h3>${o.sh?`<p class="ci-short" data-short>${o.sh}</p>`:''}<div class="ci-body" data-long>${o.body}</div>${o.saw}</div>
<div class="ci-dmedia">${o.media}</div></div>${o.after||''}</section>`;};
const jump=(id,label)=>`<button type="button" class="ci-jump" data-jump="${id}">${label}</button>`;

const shellTabs=[['ci_sh_create','Create Image','Create Image: model, prompt and reference inputs on the left, a three-step How it works guide on the right'],['ci_sh_video','Generate Video','Generate Video: model, frames and prompt inputs on the left, a How it works guide on the right'],['ci_sh_upscale','Upscale','Upscale: a file drop zone on the left, a How it works guide on the right'],['ci_sh_reframe','Reframe','Reframe: a file drop zone on the left, a How it works guide on the right']];
const shell=`<figure class="ci-fig ci-switch" data-switch>
<div class="ci-tabs" role="tablist" aria-label="Mini apps on the shared shell">${shellTabs.map((t,i)=>`<button type="button" role="tab" id="ci-st${i}" aria-controls="ci-sp${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}">${t[1]}</button>`).join('')}</div>
<div class="ci-cols" aria-hidden="true"><span style="left:0;width:37.7%">Inputs</span><span style="left:38.7%;width:61.3%">Output</span></div>
<div class="ci-frame"><div class="ci-shot ci-stack">${shellTabs.map((t,i)=>`<div class="ci-pane" role="tabpanel" id="ci-sp${i}" aria-labelledby="ci-st${i}"${i?' hidden':''}><button class="ci-z" type="button" data-zoom="${t[0]}" aria-label="Enlarge: ${t[2]}"><img loading="lazy" decoding="async" src="${IMG[t[0]].src}" width="${IMG[t[0]].w}" height="${IMG[t[0]].h}" alt="${t[2]}"></button></div>`).join('')}<span class="ci-zone in" aria-hidden="true"></span><span class="ci-zone out" aria-hidden="true"></span></div></div>
<figcaption>The shell every mini app now shares. Switch tools: inputs stay left, in the order people think, and results stay right.</figcaption></figure>`;

const histTabs=[['ci_grid','Scan','Grid view','History in grid view: generated images in a three-column grid'],['ci_film','Compare','Filmstrip view','History in filmstrip view: one large image with a strip of variations beside it'],['ci_list','Read','List view','History in list view: each prompt shown next to its results']];
const hist=`<figure class="ci-fig ci-switch" data-switch>
<div class="ci-tabs" role="tablist" aria-label="History views">${histTabs.map((t,i)=>`<button type="button" role="tab" id="ci-ht${i}" aria-controls="ci-hp${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}"><b>${t[1]}</b> ${t[2]}</button>`).join('')}</div>
<div class="ci-frame"><div class="ci-shot ci-stack">${histTabs.map((t,i)=>`<div class="ci-pane" role="tabpanel" id="ci-hp${i}" aria-labelledby="ci-ht${i}"${i?' hidden':''}><button class="ci-z" type="button" data-zoom="${t[0]}" aria-label="Enlarge: ${t[3]}"><img loading="lazy" decoding="async" src="${IMG[t[0]].src}" width="${IMG[t[0]].w}" height="${IMG[t[0]].h}" alt="${t[3]}"></button></div>`).join('')}</div></div>
<figcaption>Three views for three jobs: scan, compare, read.</figcaption></figure>`;

const gen=`<div class="ci-demo ci-gen" data-gen>
<div class="ci-demo-h"><span class="ci-live">Try it</span><span>Real prices from the app, as of ${AS}</span></div>
<div class="ci-gp">
 <label class="ci-f"><span>Model</span><select data-g="model" aria-label="Model">
  <option value="lite">Nano Banana 2 Lite</option><option value="gpt" selected>GPT Image 2.5 Sunburst</option><option value="pro">Nano Banana Pro</option><option value="flux">FLUX 3 Image</option></select></label>
 <div class="ci-f"><span id="ci-gr">Resolution</span><div class="ci-seg" data-g="res" role="radiogroup" aria-labelledby="ci-gr"></div></div>
 <div class="ci-f" data-qwrap><span id="ci-gq">Quality</span><div class="ci-seg" data-g="q" role="radiogroup" aria-labelledby="ci-gq"></div></div>
 <div class="ci-f"><span id="ci-go">Outputs</span><div class="ci-step" aria-labelledby="ci-go"><button type="button" data-o="-1" aria-label="Fewer outputs">−</button><output data-g="out">1</output><button type="button" data-o="1" aria-label="More outputs">+</button></div></div>
 <button type="button" class="ci-gbtn" data-gbtn><span class="t">Generate</span><span class="c" aria-live="polite"><i aria-hidden="true">⛁</i> <b data-g="cost">0.8</b></span></button>
 <p class="ci-gmeta"><span data-g="time">~19s</span> estimated <span class="ci-gnote" data-g="note"></span></p>
</div></div>`;

const reuse=`<div class="ci-demo ci-reuse" data-reuse>
<div class="ci-demo-h"><span class="ci-live">Try it</span><span>The iteration loop in three steps</span></div>
<div class="ci-rgrid">
 <div class="ci-rcard"><img loading="lazy" decoding="async" src="${IMG.ci_hike.src}" width="${IMG.ci_hike.w}" height="${IMG.ci_hike.h}" alt="A past generation: an illustrated hiker on a forest trail above a river valley">
  <p class="ci-rp">animated scene of a beautiful hike</p>
  <div class="ci-chips"><span>Nano Banana Pro</span><span>16:9</span><span>4K</span><span>1 output</span></div>
  <div class="ci-rfoot"><span>⛁ 5 · 37s</span><button type="button" class="ci-rbtn" data-rgo>↶ Reuse inputs</button></div></div>
 <div class="ci-rpanel" aria-live="polite">
  <ol class="ci-rsteps"><li data-s="1">Reuse inputs</li><li data-s="2">Change one thing</li><li data-s="3">Generate</li></ol>
  <div class="ci-rf" data-f="model"><span>Model</span><b data-v="Nano Banana Pro">—</b></div>
  <div class="ci-rf ci-rf-p" data-f="prompt"><span>Prompt</span><b data-v="animated scene of a beautiful hike">—</b></div>
  <div class="ci-rf2"><div class="ci-rf" data-f="ratio"><span>Dimension</span><b data-v="16:9">—</b></div><div class="ci-rf" data-f="res"><span>Resolution</span><b data-v="4K">—</b></div></div>
  <div class="ci-rgen"><span>Generate</span><span>⛁ <b data-f="cost">—</b></span></div>
 </div></div></div>`;

const mau=[['Sep','2025',41],['Oct','',282],['Nov','',294],['Dec','',419],['Jan','2026',609],['Feb','',699],['Mar','',491],['Apr','',680],['May','',915],['Jun','',498],['Jul','',509],['Aug','',656],['Sep','',664],['Oct','',742]];
const mx=915;
const chartA=`<figure class="ci-chart ci-anim" role="img" aria-label="Monthly active users of Create Image by month, September 2025 to October 2026, growing about 2.6 times from October 2025 to October 2026.">
  <p class="ci-ch-t">Monthly active users <span>Sep 2025 → Oct 2026, relative</span></p>
  <div class="ci-bars">${mau.map((m,i)=>`<div class="ci-col${i===1||i===mau.length-1?' key':''}"><span class="b" style="--h:${(m[2]/mx*100).toFixed(1)}%"></span><span class="m">${m[0]}${m[1]?`<em>${m[1]}</em>`:''}</span></div>`).join('')}</div>
  <div class="ci-ch-notes"><span>Launched 25 Sep 2025</span><span>~2.6× from Oct 2025 to Oct 2026</span><span>To ${AS}</span></div>
</figure>`;
const use=[['Use a reference image',70.6],['2K resolution or higher',53.7],['16:9',44.4],['9:16 vertical',30.6],['4K',11.0],['More than one output',1.4]];
const chartB=`<figure class="ci-chart ci-anim ci-wide" role="img" aria-label="Share of external requests, as of ${AS}: use a reference image 70.6%, 2K or higher 53.7%, 16:9 44.4%, 9:16 vertical 30.6%, 4K 11.0%, more than one output 1.4%.">
  <p class="ci-ch-t">How people actually use it <span>% of external requests, as of ${AS}</span></p>
  <div class="ci-hbars">${use.map(u=>`<div class="ci-hrow"><span class="l">${u[0]}</span><span class="tr"><span class="b" style="--w:${u[1]}%"></span></span><span class="v">${u[1].toFixed(1)}%</span></div>`).join('')}</div>
</figure>`;

return `<div id="ci-root">
<nav class="ci-rail" aria-label="On this page"><p>On this page</p><ol></ol></nav>
<section class="ph text" id="ci-top" data-rail="Overview"><a class="back" href="#/work/atlabs/create-image">All Atlabs work</a><p class="ci-eye">Atlabs AI · Case study 01</p><h1>Create Image</h1><p>Designing one calm surface for 24 fast-moving AI models. As of October 2026, ~6,800 creators have used it to make ~55,000 images.</p>
<div class="ci-skimrow"><button type="button" class="ci-skim" data-skim aria-pressed="false"><span class="sw" aria-hidden="true"></span><span>2-minute version</span></button><span class="ci-skimhint">Headlines, pictures and numbers only</span></div></section>
<div class="facts ci-facts"><div><span>Role</span>Founding Designer, sole designer. End-to-end: research, flows, UI, design system, copy.</div><div><span>Scope</span>Create Image + the shared "mini app" shell later reused across Edit, Inpaint, Reframe, Upscale, Image to Video, Lip Sync and Motion Control.</div></div>
${fr('ci_hero','The image detail view: an illustrated hiker on a forest trail, and beside it the prompt, model, dimension, format, resolution and credits, with Reuse Inputs and six next-step actions below','One image, its full recipe, and six ways to keep going.',{cls:'ci-full'})}
<div class="ci-numwrap"><p class="ci-asof">As of ${AS} · external users only</p><div class="ci-nums">
  <div><b class="ci-cnt" data-count="~55k">~55k</b><span>images requested</span></div>
  <div><b class="ci-cnt" data-count="~6.8k">~6.8k</b><span>creators have used it</span></div>
  <div><b class="ci-cnt" data-count="70%">70%</b><span>of requests use a reference image</span></div>
  <div><b><span class="ci-cnt" data-count="2.6×">2.6×</span><sup><button type="button" class="ci-fnref" data-jump="ci-fn2" aria-label="Footnote 2">2</button></sup></b><span>more monthly active users, Oct 2025 → Oct 2026</span></div>
</div></div>
<section class="sec"><h2 class="lab">TL;DR</h2><div class="text"><p>Atlabs needed a direct way for creators to use the latest image models without going through a full video workflow. <b>I designed Create Image from scratch, and with it a left-input / right-output shell that became the template for every Atlabs mini app.</b> It grew into a core tool for a committed group of creators, who mostly use it to refine reference images into high-resolution, video-ready frames; the data also showed me where it still loses people, which sets the next round of work.</p></div></section>
<section class="sec" data-long-sec><h2 class="lab">Context</h2><div class="text" data-long><p>Atlabs turns ideas into animated videos. Inside a story, images are generated for you. But creators kept asking for direct control: make a character sheet, fix one frame, test the model everyone was talking about that week.</p><p>There was nothing to iterate on. No previous version, no pattern to extend. I designed Create Image from zero, and treated it as the first instance of a system rather than a one-off page, because more tools were clearly coming.</p></div></section>
<section class="ci-prob" id="ci-prob" data-rail="The problem">
 <div class="ci-sh"><span class="ci-kick">The problem</span><h2>Three tensions shaped every decision</h2></div>
 <div class="ci-tens">
  <article><span class="n">1</span><h3>The model list never stops changing.</h3><p data-long>The picker now holds 24 models from 9 families: Nano Banana, Seedream, GPT Image, Flux, Grok Imagine, Qwen, Recraft, Runway, Ideogram. Model names say nothing useful to most creators.</p><p class="to">Answered by ${jump('ci-d1','01')} ${jump('ci-d3','03')}</p></article>
  <article><span class="n">2</span><h3>Generation is iterative, but most tools treat each output as final.</h3><p data-long>The useful move is changing one variable and running again, not starting over.</p><p class="to">Answered by ${jump('ci-d4','04')} ${jump('ci-d6','06')} ${jump('ci-d7','07')}</p></article>
  <article><span class="n">3</span><h3>Credits make every click feel expensive.</h3><p data-long>Generations take a median of 32 seconds and, as of October 2026, cost from 0.6 to 12 credits depending on model, resolution and quality. Uncertainty about either makes people hesitate or feel tricked.</p><p class="to">Answered by ${jump('ci-d3','03')} ${jump('ci-d5','05')}</p></article>
 </div>
 <div class="ci-rules"><span class="ci-kick">So I set four rules</span><ul>
  <li><b>Same shell, different job.</b> Learn one mini app and you know them all.</li>
  <li><b>Decide by trade-off, not by name.</b> Show what a model is good for, not what it's called.</li>
  <li><b>No surprises.</b> Cost and wait time are visible before you commit.</li>
  <li><b>Every output is an input.</b> A result should be one click away from its next step.</li>
 </ul></div>
</section>
<section class="sec ci-dintro"><h2 class="lab">Key decisions</h2><p class="text" style="color:var(--mute);margin:0">Seven decisions, each with the evidence we saw afterwards. The data shows behaviour, not why, so it's described as consistent with each decision, not caused by it.</p></section>
<nav class="ci-dnav" aria-label="Jump to a decision">${[[1,'Two doors'],[2,'One shell'],[3,'Speed and resolution'],[4,'References first'],[5,'Cost in the button'],[6,'Reuse Inputs'],[7,'Next steps']].map(d=>`<button type="button" data-jump="ci-d${d[0]}"><span>0${d[0]}</span>${d[1]}</button>`).join('')}</nav>
<div class="ci-decs2">
${dec(1,{sh:'Task-first and model-first people land in the same tool, so new models never change the navigation.',layout:'stack',short:'Two doors',tag:'Same shell, different job',title:'Tools and models as two doors into the same room.',
 body:`<p>The Image and Video menus split into <i>Tools</i> (what you want to do) and <i>Models</i> (what you want to use). Most people arrive task-first ("I need to upscale this"). Power users arrive model-first ("I want to try Seedream 5 Pro"). Both doors lead to the same mini app, so the model list can grow every week without the navigation changing shape.</p>`,
 saw:saw('9','model families in active use, and the long tail (Flux, Grok Imagine and others) still gets real traffic.'),
 media:fr('ci_menus','The Image and Video menus side by side. Each splits into a Tools column (Create Image, Edit, Inpaint, Reframe, Upscale, Lip Sync) and a Models column (Nano Banana, GPT Image, Seedream and more)','Two doors into the same tool: what you want to do, or what you want to use.',{cls:'ci-full ci-desk',top:`<div class="ci-cols" aria-hidden="true"><span style="left:1.5%">Tools</span><span style="left:25.6%">Models</span><span style="left:52.6%">Tools</span><span style="left:76.8%">Models</span></div>`})+`<div class="ci-mob">${fr('ci_menua','The Image menu: a Tools column and a Models column','Image menu.',{top:`<div class="ci-cols" aria-hidden="true"><span style="left:2%;width:40%">Tools</span><span style="left:52%;width:40%">Models</span></div>`})}${fr('ci_menub','The Video menu: a Tools column and a Models column','Video menu. Two doors into the same tool: what you want to do, or what you want to use.',{top:`<div class="ci-cols" aria-hidden="true"><span style="left:2%;width:40%">Tools</span><span style="left:52%;width:40%">Models</span></div>`})}</div>`})}
${dec(2,{sh:'One layout, inputs left and results right, now carries every mini app.',layout:'stack',short:'One shell',tag:'Same shell, different job',title:'One shell for every mini app.',
 body:`<p>Inputs on the left in the order people think: model, prompt, references, then output settings. Results on the right. I designed this as a system from the start, and it now carries every mini app on Atlabs. New tools ship faster, and users never relearn the layout.</p>`,
 saw:saw('7+','tools now run on the same shell, from Create Image to Upscale, Reframe, Lip Sync and video.'),
 media:shell})}
${dec(3,{sh:'Every model shows wait time and max resolution: the two things people ask before generating.',layout:'split',short:'Speed and resolution',tag:'Decide by trade-off, not by name',title:'Choose a model by speed and resolution.',
 body:`<p>The model picker leads with a curated <i>Featured</i> list and has search. Each row shows two facts: estimated time (~9s to ~45s) and maximum resolution (up to 1K / 2K / 4K). These are the two questions creators actually ask before generating: "how long will I wait?" and "is it sharp enough for my video?". NEW and PREMIUM badges flag what just landed and what costs more.</p>`,
 saw:saw('54%','of requests are at 2K or higher, and the most-used model family is a premium one, not the cheapest. Creators pay for quality when they can see what they\'re getting.'),
 media:fr('ci_picker','The model picker: a search field, then a Featured models list where each row shows an estimated time, a maximum resolution, and NEW or PREMIUM badges','Each model shows the two things people ask before generating: how long, and how sharp.',{pins:[[73.5,34,'Time estimate, ~9s to ~45s'],[38,36.2,'Maximum resolution'],[70,64.2,'NEW and PREMIUM badges']]})})}
${dec(4,{sh:'References sit right under the prompt, because video needs the same character frame after frame.',layout:'split r',short:'References first',tag:'Consistency over novelty',title:'References are first-class, not an afterthought.',
 body:`<p>Reference images sit directly under the prompt, with room for up to 16. In an AI video product, consistency matters more than novelty: the same character, the same style, frame after frame.</p>`,
 saw:saw('70%','of requests include at least one reference image. In practice Create Image is mostly an image-to-image and editing tool, not a blank-canvas one.'),
 media:fr('ci_refs','The model field, the prompt box and, directly under it, the Reference Images area with room for 16 images','References sit right under the prompt, because consistency matters more than novelty in video.'),
 after:chartB})}
${dec(5,{sh:'The price is inside the button and updates live, so nothing surprises you.',layout:'split',short:'Cost in the button',tag:'No surprises',title:'Cost lives inside the button.',
 body:`<p>The credit cost is part of the Generate button itself and updates as model, resolution, quality and outputs change. There is no separate pricing step and no surprise afterwards. Try the panel: these are the real prices.</p>`,
 saw:saw('1.4%','of requests ask for more than one output. People generate deliberately, one image at a time, which is the behaviour visible cost encourages.'),
 media:gen+`<p class="ci-cap">A working copy of the settings panel. Change anything and the cost inside the button updates, as it does in the app.</p>`})}
${dec(6,{sh:'Reuse Inputs reloads a whole recipe in one click, so you change one thing and run again.',layout:'stack',short:'Reuse Inputs',tag:'Every output is an input',title:'History built for iteration: Reuse Inputs.',
 body:`<p>History has three views for three jobs: <b>grid</b> to scan, <b>filmstrip</b> to compare variations large, <b>list</b> to read prompts next to results. Hovering any image shows its full recipe: prompt, model, ratio, resolution, reference count, credits, time. <b>Reuse Inputs</b> reloads the whole recipe into the panel in one click, so the next run changes one variable instead of rebuilding everything by copy-paste.</p>`,
 saw:saw('332','characters is the median prompt; the average is ~110 words and the longest passes 34,000 characters. Prompts are too long and too carefully built to retype.'),
 media:hist,
 after:`<div class="ci-pair">${fr('ci_hover','Hover card on a past image showing its prompt, chips for model, ratio, resolution, outputs and references, its credits and time, and an orange Reuse Inputs button','Every image keeps its recipe. Reuse Inputs reloads it in one click.',{pins:[[80,67.3,'The recipe: model, ratio, resolution, outputs, references'],[58,93,'Reuse Inputs reloads all of it into the panel']]})}${reuse}</div>`})}
${dec(7,{sh:'Every result offers its next step: animate, edit, upscale, reframe, lip sync.',layout:'split r',short:'Next steps',tag:'Every output is an input',title:'Every image leads somewhere.',
 body:`<p>The detail view turns each output into a starting point: Image to Video, Edit, Upscale, Reframe, Add Lip Sync, Motion Control. The mini apps stop being separate utilities and become one pipeline: image → video.</p>`,
 saw:saw('31%','of requests are vertical 9:16, a format that only makes sense for short-form video. People are making frames, not pictures.'),
 media:fr('ci_next','Six action buttons under an image: Image to Video, Edit, Upscale, Reframe, Add Lip Sync and Motion Control','Every output is an input to the next tool.')})}
</div>
<section class="sec"><h2 class="lab">A small detail</h2><div><p class="text"><b>The empty state teaches the three steps with one cupcake that gets more refined at each step:</b> write → guide with a reference → fine-tune.</p>${fr('ci_empty','How it works: three cards showing one cupcake image getting more refined at each step: write a prompt, guide with a reference, fine-tune','One example, three states, no wall of text.',{cls:'ci-full'})}</div></section>
<section class="sec" id="ci-impact" data-rail="Impact"><h2 class="lab">Impact</h2><div><p class="text ci-asof2">Since launch in September 2025, to ${AS}. External users only, rounded.</p>
<ul class="ci-ul text">
  <li><b>~55,000 images requested by ~6,800 creators.</b></li>
  <li><b>Monthly active users grew ~2.6×</b> from October 2025 to October 2026, and October 2026 was already the busiest month for requests with a week still to go.</li>
  <li><b>A real core of committed users:</b> a small group of paying creators makes most of the requests. For them, Create Image is a daily production tool.</li>
  <li><b>The model system scales:</b> creators actively use 9 model families, and new ones get picked up within months of landing.</li>
  <li><b>Agents use it too:</b> the same models are available through Atlabs MCP, and AI agents now send requests as well as people.</li>
</ul></div></section>
<section class="sec ci-hard" id="ci-hard" data-rail="The hard part"><h2 class="lab">What the data told me that I didn't want to hear</h2><div class="text"><p class="quote">Most people who tried Create Image made one image and never came back.</p><p data-long>The tool works well for people who already know what to type. It does far less for someone facing an empty box that says "Enter here". Power users bring long prompts and reference images; newcomers bring a vague idea. The interface treats them the same.</p><p>I'd rather show this than hide it. It is the clearest signal for what to design next.</p></div></section>
<section class="sec" id="ci-next" data-rail="What's next"><h2 class="lab">What's next</h2><div class="text"><p>Three bets, all aimed at the first five minutes:</p><ol class="ci-ol">
  <li><b>Better prompt writing.</b> <span data-long>An "enhance" action that turns a rough idea into a detailed prompt, tuned to the selected model's strengths.</span></li>
  <li><b>Suggested prompts.</b> <span data-long>Starters based on common Atlabs use cases (character sheets, product shots, scene backgrounds), so nobody starts from a blank box.</span></li>
  <li><b>An inspiration gallery.</b> <span data-long>Example images with their prompts attached. Clicking one runs the same Reuse Inputs pattern, so discovery and iteration become one mechanic.</span></li>
</ol><p><b>How I'll know it worked:</b> a higher share of new users making a second image, and more users returning on a second day.</p></div></section>
<section class="sec" data-rail="Reflection"><h2 class="lab">Reflection</h2><div class="text"><ul class="ci-ul">
  <li><b>Designing the shell first paid off.</b> <span data-long>Every new tool since has been cheaper to design and build because the hard decisions were already made once.</span></li>
  <li><b>Show the decision inputs, not the catalogue.</b> <span data-long>Speed, resolution and cost turned out to matter more than model descriptions.</span></li>
  <li><b>Data is a design input, not a trophy.</b> <span data-long>The one-and-done finding is the most useful line in this case study.</span></li>
</ul></div></section>
<section class="sec ci-fn"><h2 class="lab">Footnotes</h2><ol class="text">
  <li id="ci-fn1">Source: Atlabs production data, pulled ${AS}. Figures are rounded and exclude internal staff and company accounts unless stated.</li>
  <li id="ci-fn2">Monthly active users include a small number of internal accounts, tiny next to the monthly total. Request totals are not shown by month because internal usage inflates them.</li>
  <li id="ci-fn3">"Requests" counts generation attempts in the standalone Create Image tool, including edits that re-enter it via Edit Image. Image panels inside the story editor are not included.</li>
  <li id="ci-fn4">Behavioural patterns are described as consistent with design decisions, not caused by them. Prices in the interactive panel are the app's prices on ${AS}.</li>
</ol></section>
</div>
${caseNav('create-image')}`; },

'designing-in-production': () => {
const AS='Oct 2026';
const win=(title,body,o={})=>`<div class="tw ${o.cls||''}"><div class="tw-bar"><i></i><i></i><i></i><span>${title}</span>${o.right||''}</div><div class="tw-body">${body}</div></div>`;
const shotF=(k,alt,cap)=>`<figure class="dq-shot"><button class="ci-z" type="button" data-zoom="${k}" aria-label="Enlarge: ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${alt}"></button><figcaption>${cap}</figcaption></figure>`;
const story=(n,o)=>`<section class="dq-story" id="dp-s${n}" data-rail="0${n} ${o.short}">
 <div class="dq-st-text">
  <p class="dq-k">story/0${n} <span>${o.tag}</span></p>
  <h3>${o.title}</h3>
  <dl class="dq-pc"><div><dt>Problem</dt><dd>${o.problem}</dd></div><div><dt>Change</dt><dd>${o.change}</dd></div><div class="why"><dt>Why it matters</dt><dd>${o.why}</dd></div></dl>
  ${o.more?`<details class="dq-more" data-long><summary>How it was built</summary><div>${o.more}</div></details>`:''}
 </div>
 <div class="dq-st-media">${o.media}</div>
</section>`;

/* hero replay */
const replay=`<div class="tw tw-term" data-replay><div class="tw-bar"><i></i><i></i><i></i><span>replay · how a change ships</span><button type="button" class="tw-btn" data-replay-go aria-label="Replay">↻ replay</button></div>
<div class="tw-body"><ol class="term" aria-label="Illustration of the workflow, step by step">
 <li class="u"><span class="p">you</span>Empty submits shouldn't hit a disabled button. Keep it active and explain what's missing, inline.</li>
 <li><span class="d">●</span>Reading the repo's CLAUDE.md conventions</li>
 <li><span class="d">●</span>Editing the prompt form · inline error · <span class="m">role="alert"</span> · tracking invalid submits</li>
 <li><span class="d">●</span>Preview ready. I check it against the design and iterate</li>
 <li class="ok"><span class="d">✓</span>Claude review</li>
 <li class="ok"><span class="d">✓</span>check-quality</li>
 <li class="ok"><span class="d">✓</span>ultra-review</li>
 <li class="ok"><span class="d">✓</span>CI · lint · tests</li>
 <li class="mg"><span class="d">⮑</span>Merged</li>
</ol></div></div>`;

const months=[['Mar',1],['Apr',8],['May',1],['Jun',0],['Jul',6],['Aug',18],['Sep',12],['Oct',22]];
const heat=`<div class="dq-heat" role="img" aria-label="Merged pull requests by month in 2026: March 1, April 8, May 1, June 0, July 6, August 18, September 12, October 22 to date.">${months.map(m=>`<div class="hc${m[1]/22>0.45?' hi':''}" style="--a:${(m[1]/22).toFixed(2)}"><b>${m[1]}</b><span>${m[0]}</span></div>`).join('')}</div>`;

const pipe=[['Intent','I decide what should change and why, in product terms.'],['Claude Code','Writes the code inside the real repo, following its CLAUDE.md rules.'],['Preview','I check the result live against the design and iterate.'],['Reviews','Claude review, check-quality and ultra-review, every time.'],['CI','Lint and tests run on every push.'],['Merge','Frontend and minor backend: I merge. Bigger backend changes: developers review and merge.']];
const pipeline=`<ol class="dq-pipe">${pipe.map((p,i)=>`<li tabindex="0"><span class="pn">${String(i+1).padStart(2,'0')}</span><b>${p[0]}</b><em>${p[1]}</em></li>`).join('')}</ol>`;

const rules=['Radix Themes components only','Design tokens. No hardcoded colours or sizes','CSS Modules','One icon set','Analytics on every click','Strict lint','CI on every push'];
const claudeMd=win('CLAUDE.md · paraphrased',`<pre class="code md"><span class="c"># Conventions (excerpt)</span>
${rules.map(r=>`<span class="ln">- </span>${r}`).join('\n')}
<span class="ln">- </span><span class="hl">Never disable a CTA for incomplete input.
  Answer with an inline error.</span>  <span class="c">← added after story/01</span></pre>`);

const valid=`<div class="dp-valid dq-demo" data-valid>
<div class="dq-demo-h"><div class="ci-tabs dp-ba-tabs" role="tablist" aria-label="Before or after"><button type="button" role="tab" aria-selected="false" tabindex="-1" data-mode="before">Before</button><button type="button" role="tab" aria-selected="true" tabindex="0" data-mode="after">After</button></div><span class="dq-note">recreation</span></div>
<div class="dp-vbox"><label class="dp-vlab" for="dp-vin">What's your story about?</label><textarea id="dp-vin" rows="3" placeholder="A shy dragon who learns to share…"></textarea><p class="dp-verr" role="alert" hidden>Describe your idea to get started</p><div class="dp-vfoot"><span class="dp-vhint" data-hint>Click Create with the box empty.</span><button type="button" class="dp-vbtn" data-vbtn>Create</button></div></div></div>`;
const dl=[['del','- <Button disabled={!idea}>Create</Button>'],['add','+ <Button onClick={submit}>Create</Button>'],['add','+ {error && <Text role="alert">Describe your idea…</Text>}'],['','  '],['','  function submit() {'],['add','+   if (!idea.trim()) { showError(); track(\'invalid_submit\'); return }'],['','    requireLogin(() => start(idea))'],['','  }']];
const esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const diff=win('prompt-form · simplified',`<div class="code diff">${dl.map(l=>`<span class="l ${l[0]}">${esc(l[1])||'&nbsp;'}</span>`).join('')}</div>`,{right:'<span class="tw-tag">illustration</span>'});

const arch=`<div class="dq-arch">
 <div class="col"><p class="dq-k">before</p><div class="box main">Scene editor</div><div class="box float">AI Edit · floating window<ul><li class="x">drag hook</li><li class="x">portal rendering</li><li class="x">its own open/closed state</li></ul></div></div>
 <div class="arrow" aria-hidden="true">→</div>
 <div class="col"><p class="dq-k">after</p><div class="box main">Scene editor · shared panel system<div class="panels"><span>Image</span><span>Motion</span><span>Audio</span><span>Lip sync</span><span class="on">AI Edit</span></div></div><p class="dq-cap">Deleted code, not added code. AI Edit became one more panel.</p></div>
</div>`;

const rail=`<div class="ci-demo dp-rail dq-demo" data-rail-demo>
<div class="dq-demo-h"><span class="dq-note">recreation · hover a tab</span></div>
<div class="dp-rwrap">
 <div class="dp-rtabs" role="list" aria-label="Editing panel tabs">
  <button type="button" class="dp-rt" data-tip="Generating A-roll · Scenes 2, 5" aria-label="Visual, generating in scenes 2 and 5"><span class="ico" aria-hidden="true">▣</span><span class="nm">Visual</span><span class="bd spin" aria-hidden="true"></span></button>
  <button type="button" class="dp-rt" data-tip="Generating motion · Scene 3" aria-label="Motion, generating in scene 3"><span class="ico" aria-hidden="true">◎</span><span class="nm">Motion</span><span class="bd spin" aria-hidden="true"></span></button>
  <button type="button" class="dp-rt" data-tip="Voiceover done · Scene 4" aria-label="Audio, done in scene 4"><span class="ico" aria-hidden="true">♪</span><span class="nm">Audio</span><span class="bd done" aria-hidden="true">✓</span></button>
  <button type="button" class="dp-rt" data-tip="Nothing running" aria-label="Lip sync, nothing running"><span class="ico" aria-hidden="true">☺</span><span class="nm">Lip sync</span></button>
 </div>
 <div class="dp-rscene"><p class="dp-rtip" aria-live="polite">Hover or tap a tab to see what's in flight.</p><div class="dp-rgrid">${[1,2,3,4,5,6].map(i=>`<span class="${[2,5,3].includes(i)?'busy':''}${i===4?' ok':''}">Scene ${i}</span>`).join('')}</div></div>
</div></div>`;

const graph=`<div class="dq-git" data-git><svg viewBox="0 0 560 210" role="img" aria-label="Git history: a change ships, is reverted, then re-landed with the missing piece.">
 <path class="g-main" d="M20 150 H540"/>
 <path class="g-br" d="M70 150 C110 150 110 60 150 60 H210 C250 60 250 150 290 150"/>
 <path class="g-br2" d="M330 150 C370 150 370 60 410 60 H440 C480 60 480 150 520 150"/>
 <circle class="c1" cx="180" cy="60" r="9"/><circle class="c2" cx="300" cy="150" r="9"/><circle class="c3" cx="425" cy="60" r="9"/><circle class="c4" cx="520" cy="150" r="9"/>
 <text x="180" y="34" text-anchor="middle">v1 · one-click narrator</text>
 <text x="300" y="186" text-anchor="middle" class="tr">revert</text>
 <text x="425" y="34" text-anchor="middle">v2 · + regenerate dialog</text>
 <text x="520" y="186" text-anchor="middle" class="tg">merged</text>
</svg>
<ul class="dq-gl"><li><span class="k b"></span>v1 dropped the "this affects N scenes" step</li><li><span class="k r"></span>Rolled back</li><li><span class="k g"></span>v2: per-scene dialog, backend accepts a list of scenes, plus a test</li></ul></div>`;

const terms=[['Migration','A versioned change to the database, like adding a column. The app and the database have to agree on it.','PRs that added new columns'],
['Migration conflict','Two branches each changed the database, and the migration history no longer lines up.','A conflict on one of my PRs'],
['Revert','A new commit that undoes an earlier one, so the history stays honest.','story/04'],
['CI','Checks that run automatically on every push: lint, tests, build.','Every PR'],
['Hook','A reusable piece of React logic. Mine watches every scene for running jobs.','story/03'],
['Portal','Rendering a component outside its parent, used for floating layers.','The old AI Edit window, story/02'],
['Global state','Data the whole app can read, kept in a store like Redux.','Removing AI Edit\'s open/closed flag'],
['role="alert"','Tells screen readers to announce a message the moment it appears.','story/01']];
const gloss=`<div class="dq-gloss">${terms.map(t=>`<button type="button" class="gc" aria-pressed="false"><span class="f"><code>${t[0]}</code><i>tap to flip</i></span><span class="b"><b>${t[1]}</b><i>Met it in: ${t[2]}</i></span></button>`).join('')}</div>`;

const range=[['onboarding',['Welcome-offer messaging and badges','Animated strikethrough on the original price','Post-purchase onboarding-call offer','"How did you hear about us?" adds ChatGPT, Claude, Grok','Cancellation reasons shuffled per user to remove order bias']],
['wizard',['Mobile stepper bar','Exit confirmation mid-wizard','Scroll affordance for long content','Deep links that pre-fill a script','Custom and preset styles in one dropdown']],
['editor',['Insert a scene between scenes','Clearer selected scene, scroll-to-current','Visible tile loading state','Dismissible hover demos on tabs']],
['audio',['Redesigned audio trimmer','Smarter music entry points']],
['discovery',['Live webinar strip on Tutorials','Shareable section links','Preview videos on picker cards','"My Stories" menu with recent stories']],
['motion',['Staggered rise-in on project grids','Hover lift and delete-in-flight states','All of it honours reduced motion']]];
const changelog=`<div class="tw dq-log" data-switch><div class="tw-bar"><i></i><i></i><i></i><span>CHANGELOG · by area</span></div>
<div class="tw-body"><div class="ci-tabs dq-tabs" role="tablist" aria-label="Areas">${range.map((r,i)=>`<button type="button" role="tab" id="dq-t${i}" aria-controls="dq-p${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}">${r[0]}</button>`).join('')}</div>
${range.map((r,i)=>`<ul class="dq-lines" role="tabpanel" id="dq-p${i}" aria-labelledby="dq-t${i}"${i?' hidden':''}>${r[1].map(l=>`<li><span>+</span>${l}</li>`).join('')}</ul>`).join('')}</div></div>`;

return `<div id="dp-root" class="dq">
<nav class="ci-rail" aria-label="On this page"><p>On this page</p><ol></ol></nav>
<section class="dq-hero" id="dp-top" data-rail="Overview">
 <div class="dq-hero-t"><a class="back" href="#/work/atlabs/designing-in-production">All Atlabs work</a><p class="dq-k">atlabs · case study 02</p><h1>Designing in production</h1>
 <p class="dq-sub">I ship my own designs into Atlabs' production code: 68 merged pull requests, written with Claude Code and held to the repo's rules, reviews and CI.</p>
 <div class="ci-skimrow"><button type="button" class="ci-skim" data-skim aria-pressed="false"><span class="sw" aria-hidden="true"></span><span>2-minute version</span></button></div></div>
 <div class="dq-hero-m">${replay}<p class="dq-cap">A replay of how one change ships. Illustration, condensed.</p></div>
</section>
<section class="dq-stats" data-rail="Numbers">
 <div class="dq-nums">
  <div><b class="ci-cnt" data-count="68">68</b><span>PRs merged</span></div>
  <div><b class="ci-cnt" data-count="52">52</b><span>in Aug–Oct</span></div>
  <div><b class="ci-cnt" data-count="23">23</b><span>touched the backend</span></div>
  <div><b class="ci-cnt" data-count="15">15</b><span>shipped tracking</span></div>
 </div>
 ${heat}
 <p class="dq-cap">Merged PRs by month, 2026, as of ${AS}. 16 from March to July, 52 from August to October: once the loop was in place, shipping became part of designing.</p>
</section>
<section class="dq-sec" id="dp-how" data-rail="The loop">
 <p class="dq-k">workflow</p><h2>The loop</h2>
 <p class="dq-lead" data-long>The slowest part of design here was never Figma. It was the queue between a finished design and a shipped one. So I close it myself.</p>
 ${pipeline}
 <div class="dq-two">${claudeMd}<div class="dq-who"><div><p class="dq-k">claude code</p><p>Writes most of the code and the PR summaries. 96 of my 97 PRs carry its attribution.</p></div><div><p class="dq-k">me</p><p>Decides what to build, sets constraints, runs the reviews, asks for every backend change in plain words, and owns it when it breaks.</p></div></div></div>
</section>
<section class="dq-sec" data-rail="Four stories"><p class="dq-k">stories</p><h2>Four changes, end to end</h2>
<nav class="ci-dnav" aria-label="Jump to a story">${[[1,'Never disable a button'],[2,'AI Edit panel'],[3,'What\'s generating'],[4,'The revert']].map(d=>`<button type="button" data-jump="dp-s${d[0]}"><span>0${d[0]}</span>${d[1]}</button>`).join('')}</nav></section>
${story(1,{short:'Never disable a button',tag:'accessibility',title:'Never disable a button. Explain instead.',
 problem:'A greyed-out submit left people stuck, with no idea why.',
 change:'The button always works. An empty submit answers inline, even before login.',
 why:'It became a written rule for the whole repo.',
 more:'<p>The check runs before the login gate, so logged-out visitors see guidance instead of a sign-in wall. The message uses <code>role="alert"</code> for screen readers, and invalid submits are tracked in analytics.</p>',
 media:valid+diff+shotF('dp_valid','The live wizard: Continue stays active, and an inline message says the script must be at least 20 characters','The same rule in the live wizard.')})}
${story(2,{short:'AI Edit panel',tag:'architecture',title:'AI Edit: from floating window to a real panel.',
 problem:'AI Edit floated over the scene you were editing and behaved unlike every other tool.',
 change:'It now opens in the editor\'s standard side panel.',
 why:'Consistency came from changing the architecture, not the paint.',
 more:'<p>I removed the drag hook and the portal rendering, and dropped its separate open/closed state from the global store, so it rides on the same panel system as everything else.</p>',
 media:arch+shotF('dp_aiedit','The scene editor with AI Edit docked as a side panel next to the other tools','AI Edit, docked with the other tools.')})}
${story(3,{short:'What\'s generating',tag:'async state',title:'Showing what\'s generating, everywhere.',
 problem:'Jobs run in the background across scenes, and people lost track.',
 change:'Rail tabs get live badges, and the tooltip names what\'s in flight.',
 why:'Async state is one of the hardest UX problems in AI products.',
 more:'<p>A new hook watches every scene. Badges have <code>aria-label</code>s, and the animation respects <code>prefers-reduced-motion</code>.</p>',
 media:rail})}
${story(4,{short:'The revert',tag:'owning failures',title:'Shipping a regression, and fixing it properly.',
 problem:'My one-click narrator change dropped the "this affects N scenes" step.',
 change:'It was reverted, then re-landed with a per-scene regenerate dialog.',
 why:'Owning the code means owning its failures. The second version is better than the plan.',
 more:'<p>The re-land also needed a small backend change, so regeneration accepts a list of scenes, with a test.</p>',
 media:graph})}
<section class="dq-sec" id="dp-learn" data-rail="What I'm learning"><p class="dq-k">learning</p><h2>The vocabulary, one real problem at a time</h2>
 <ul class="dq-learn"><li>Whenever Claude changes the backend, I ask it to explain exactly what it did, in simple terms, before anything merges.</li><li>On PRs with migrations, that's how I understood which columns were being added.</li><li>When a migration conflict came up, I had it explain what that meant. That's how the terms below stuck.</li></ul>
 ${gloss}
</section>
<section class="dq-sec" id="dp-range" data-rail="The range" data-long><p class="dq-k">range</p><h2>Everything else, by area</h2>${changelog}</section>
<section class="dq-fn"><ol>
 <li>Source: pull request history of Atlabs' private product repository, ${AS}. 97 opened, 68 merged. Backend and tracking counts are based on PR descriptions.</li>
 <li>Code written with Claude Code (96 of 97 PRs carry its attribution). Every change passed CI and AI review; frontend and minor backend changes I merge, larger backend changes are reviewed and merged by developers.</li>
 <li>The replay, diff and demos are recreations to explain the work, not production code or screenshots. Screenshots are labelled as such.</li>
</ol></section>
</div>
${caseNav('designing-in-production')}`; },

'video-teaser': () => {
const AS='Oct 2026';
const S=['vr1','vr2','vr3','vr4','vr5'];
const lines=['Apple in the morning. Crunch, crunch, crunch.','Beans on a spoon and milk in a glass.','Good food helps me grow up fast.','One for my bones, one for my brain.','One for my belly again and again.'];
const fakes=[[0,1,8],[1,-1,-6],[2,1,12],[3,-1,-10],[4,1,4],[0,-1,-4]];
const shotF=(k,alt,cap,cls)=>`<figure class="ci-fig ${cls||''}"><div class="ci-frame"><div class="ci-shot"><button class="ci-z" type="button" data-zoom="${k}" aria-label="Enlarge: ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${alt}"></button></div></div>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const demo=`<div class="vt-demo" data-vtdemo data-mode="free">
 <div class="vt-bar"><div class="vt-seg" role="radiogroup" aria-label="View as"><button type="button" role="radio" aria-checked="true" data-vm="free">Free user</button><button type="button" role="radio" aria-checked="false" data-vm="paid">Paid user</button></div><span class="vt-tag">Real teaser export: "Rainbow Plate Kitchen"</span></div>
 <div class="vt-stage">
  <div class="vt-player" style="--bgimg:url(${IMG.vr1.src})">
   <video class="vt-vid" data-vtvid src="/vt-teaser.mp4" poster="${IMG.vr1.src}" muted playsinline preload="auto" aria-label="Video teaser: the first 25 seconds of Rainbow Plate Kitchen, exported from Atlabs"></video>
   <p class="vt-sub" data-vtsub>${lines[0]}</p>
   <div class="vt-ui"><button type="button" class="vt-play" data-vtplay aria-label="Play teaser">▶</button><div class="vt-prog"><i data-vtprog></i><span class="vt-cap" title="Free preview ends here"></span></div><span class="vt-time" data-vttime>0:00</span><button type="button" class="vt-snd" data-vtsnd aria-label="Turn sound on">🔇</button></div>
   <div class="vt-end" data-vtend hidden>
    <p class="vt-end-k">End of the free preview</p>
    <p class="vt-end-h" data-free>You’re watching a preview</p><p class="vt-end-h" data-paid>Like it? Generate the rest.</p>
    <div class="vt-end-b"><button type="button" class="vt-cta" data-free>👑 Upgrade now</button><button type="button" class="vt-cta" data-paid>Generate video</button><button type="button" class="vt-ghost" data-vtreplay>↺ Replay</button></div>
   </div>
  </div>
  <aside class="vt-side">
   <p class="vt-side-k">Previewing 5 of 11 scenes</p>
   <div class="vt-btns"><button type="button" class="vt-cta sm" data-free>👑 Unlock full video</button><button type="button" class="vt-cta sm" data-paid>Select scenes to generate</button><button type="button" class="vt-ghost sm" data-paid>Or make a storyboard</button><button type="button" class="vt-ghost sm" data-free>See plans</button></div>
   <p class="vt-side-n" data-free>Free users see one path: watch, then subscribe.</p>
   <p class="vt-side-n" data-paid>Paid users pick which scenes to generate, as video or still images.</p>
  </aside>
 </div>
 <div class="vt-strip" aria-label="Scenes">${S.map((k,i)=>`<button type="button" class="vt-sc" data-sc="${i}"><img src="${IMG[k].src}" alt="Scene ${i+1}"><span>${i+1}</span></button>`).join('')}${fakes.map((f,i)=>`<span class="vt-sc lock" aria-label="Scene ${i+6}, locked"><img src="${IMG[S[f[0]]].src}" alt="" style="--sx:${f[1]};--r:${f[2]}deg"><span>${i+6}</span><i aria-hidden="true">👑</i></span>`).join('')}</div>
 <div class="vt-modal" data-vtmodal hidden role="dialog" aria-modal="true" aria-label="Popup"><div class="vt-mbox"><button type="button" class="vt-mx" data-vtclose aria-label="Close">×</button><img data-vtmimg alt=""><p class="vt-mcap" data-vtmcap></p></div></div>
 <p class="vt-note" data-vtnote>Press play. The first 25 seconds play as real video. Scenes 6–11 stay blurred.</p>
</div>`;

const flowOld=[['Script','Write the story'],['Images','One still image per scene'],['Check','Look at every scene'],['Video','Generate video scene by scene']];
const flowNew=[['Script','Write the story'],['Teaser','First 25 seconds as real video'],['Watch','Voice for the whole story, rest blurred'],['Unlock','Subscribe, then make the rest']];
const flow=(arr,cls)=>`<ol class="vt-flow ${cls}">${arr.map((s,i)=>`<li><span class="n">${i+1}</span><b>${s[0]}</b><em>${s[1]}</em></li>`).join('')}</ol>`;

const blurDemo=`<div class="vt-blur" data-vtblur>
 <div class="vt-blur-grid">${fakes.map((f,i)=>`<div class="bt"><img src="${IMG[S[f[0]]].src}" alt="" style="--sx:${f[1]};--r:${f[2]}deg"><span>Scene ${f[0]+1}, ${f[1]<0?'flipped':'kept'}, turned ${Math.abs(f[2])}°</span></div>`).join('')}</div>
 <label class="vt-sw"><input type="checkbox" data-vtunblur> <span>Peek behind the blur</span></label>
</div>`;

const costs=[['Storyboard','14 still images',11.2],['Video teaser','~25 seconds of video',57.5],['Full video','14 scenes of video',150.6]];
const costChart=`<figure class="vt-cost" role="img" aria-label="Credits for one 14-scene story: storyboard 11.2, video teaser 57.5, full video 150.6.">
 <p class="vt-cost-t">Credits for one 14-scene story</p>
 ${costs.map((c,i)=>`<div class="r"><span class="l"><b>${c[0]}</b><em>${c[1]}</em></span><span class="t"><i style="--w:${(c[2]/150.6*100).toFixed(1)}%"></i></span><span class="v">${c[2]}</span></div>`).join('')}
 <figcaption>From the app's own "How would you like to start?" screen, ${AS}. Video costs about 13× more than images.</figcaption>
</figure>`;

const months=[['Feb',5.3],['Mar',4.3],['Apr',4.5],['May',6.5],['Jun',8.8],['Jul',12.8],['Aug',17.9],['Sep',19.6],['Oct',25.1]];
const mx=25.1;
const subsChart=`<figure class="ci-chart ci-anim vt-subs" role="img" aria-label="Share of people who started a story and became paying users, by month in 2026: about 5% from February to May, rising to 18 to 25% from August to October.">
 <p class="ci-ch-t">People who start a story and pay <span>% by month, 2026</span></p>
 <div class="ci-bars vt-bars">${months.map((m,i)=>`<div class="ci-col${i>=5?' key':''}${m[0]==='Jun'?' mark':''}"><span class="v">${Math.round(m[1])}%</span><span class="b" style="--h:${(m[1]/mx*100).toFixed(1)}%"></span><span class="m">${m[0]}${m[0]==='Oct'?'<em>to date</em>':''}</span></div>`).join('')}</div>
 <div class="ci-ch-notes"><span>Teaser becomes the default for free users, mid-June</span><span>~5% → ~20%</span></div>
</figure>`;
const tl=[['Sep 2025','First version, called "Preview" in the finalise step. Free users see their first 4 scenes as real video, with an upgrade button inside the player.'],['Feb 2026','Some scenes ran long, so 4 scenes could mean 40–50 seconds of video. We capped the teaser at about 25 seconds.'],['Apr 2026','Paid users get the teaser too, as a cheap way to check a story before making all of it.'],['May 2026','Limits tuned per workflow: up to 4 scenes or about 25 seconds, whichever comes first.'],['Jun 2026','A new start screen: Storyboard, Video teaser (recommended) or Full video. The teaser becomes the default for every free user, and gets its name: Video teaser.']];
const timeline=`<ol class="vt-tl">${tl.map(t=>`<li><b>${t[0]}</b><p>${t[1]}</p></li>`).join('')}</ol>`;

const icon={
 eye:'<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
 blur:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 15l3-3 3 3 2-2 3 3"/><circle cx="9" cy="9.5" r="1.3"/></svg>',
 cta:'<svg viewBox="0 0 24 24"><path d="M5 12h12M13 7l5 5-5 5"/></svg>',
 globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>',
 two:'<svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M3 19c.6-3 2.6-4.6 5-4.6s4.4 1.6 5 4.6M14 15c2.6-.4 5 1 6 4"/></svg>'
};
const dec=(n,o)=>`<section class="ci-dec2 ci-l-${o.layout}" id="vt-d${n}" data-rail="0${n} ${o.short}">
<div class="ci-dgrid"><div class="ci-dtext"><p class="ci-dk"><span class="vt-ic" aria-hidden="true">${icon[o.ic]}</span>Decision 0${n}</p><h3>${o.title}</h3><p class="ci-short" data-short>${o.sh}</p><div class="ci-body" data-long>${o.body}</div></div>
<div class="ci-dmedia">${o.media}</div></div>${o.after||''}</section>`;

return `<div id="ci-root" class="vt">
<nav class="ci-rail" aria-label="On this page"><p>On this page</p><ol></ol></nav>
<section class="ph text" id="vt-top" data-rail="Overview"><a class="back" href="#/work/atlabs/video-teaser">All Atlabs work</a><p class="ci-eye">Atlabs AI · Hero case study</p><h1>Video teaser</h1><p>Free users watch the first 25 seconds of their own video. The rest stays blurred until they upgrade. It became <b class="vt-arr">the main place people decide to pay</b>.</p>
<div class="ci-skimrow"><button type="button" class="ci-skim" data-skim aria-pressed="false"><span class="sw" aria-hidden="true"></span><span>2-minute version</span></button></div></section>
<div class="facts ci-facts"><div><span>My role</span>Product and design, end to end.</div><div><span>Team</span>Tushar and Yash (engineering), Archit (CEO).</div><div><span>Timeline</span>Sep 2025 – Jun 2026</div><div><span>Where</span>The story page, the video player and the start screen.</div></div>
${demo}
<div class="ci-numwrap"><p class="ci-asof">As of ${AS}</p><div class="ci-nums vt-nums">
 <div><b class="ci-cnt" data-count="25s">25s</b><span>of their own story, as real video, before the paywall</span></div>
 <div><b class="ci-cnt" data-count="3">3</b><span>upgrade moments on the story page</span></div>
 <div><b><span class="ci-cnt" data-count="5%">5%</span> → <span class="ci-cnt" data-count="20%">20%</span></b><span>of people who start a story now pay (whole product)</span></div>
 <div><b class="ci-cnt" data-count="$2.5M">$2.5M</b><span>Atlabs ARR, built by the whole team</span></div>
</div></div>
<section class="sec"><h2 class="lab">In short</h2><div class="text"><p><b>Free users only ever saw still images, so they had no reason to pay. Paid users had to make video one scene at a time.</b> I designed the video teaser: everyone first sees the opening 25 seconds of their own story as real video, with voice for the whole story. The rest is blurred. Free users subscribe to unlock it; paid users decide whether to make the rest.</p></div></section>
<section class="ci-prob" id="vt-before" data-rail="Before">
 <div class="ci-sh"><span class="ci-kick">Before</span><h2>A story was a pile of still images</h2></div>
 ${flow(flowOld,'old')}
 ${shotF('tn_ed_old','The old story page: a list of scenes, each a still image with its line of script, small tool icons under each scene, and a preview player on the right','The story page before. Every scene was a still image. Motion meant opening each scene and generating it.','ci-full')}
 <div class="ci-tens">
  <article><span class="n">1</span><h3>Free users had no reason to pay.</h3><p>They saw still images and heard the voice. They never saw the motion, the part people actually pay for.</p></article>
  <article><span class="n">2</span><h3>Paid users did busywork.</h3><p>Open a scene, generate video, wait, go to the next. Ten scenes meant ten trips.</p></article>
  <article><span class="n">3</span><h3>Video is expensive.</h3><p>Video costs about 13× more than images, so we couldn't give full videos away.</p></article>
 </div>
 <div class="vt-goal"><span>Goal</span><p>Get more people to subscribe by showing them the real thing, without giving away the expensive part.</p></div>
</section>
<section class="ci-prob" id="vt-after" data-rail="The idea">
 <div class="ci-sh"><span class="ci-kick">The idea</span><h2>Show a little of the real video</h2></div>
 ${flow(flowNew,'new')}
</section>
<div class="ci-decs2">
${dec(1,{layout:'split',ic:'eye',short:'Real, but short',title:'Show real video, but only 25 seconds.',sh:'The first 25 seconds are real video. Voice covers the whole story. 25 seconds is our cost limit.',
 body:'<p>The teaser plays the opening of your own story as finished video, with motion and lip sync. The voice is generated for every scene, so the story still makes sense from start to end.</p><p>We started with "the first 4 scenes". But some scenes were long, and 4 scenes could mean 40–50 seconds of video. So now it\'s 4 scenes or about 25 seconds, whichever comes first. That limit is set by cost.</p>',
 media:`<div class="vt-d1m"><figure class="vt-clip"><video src="/vt-clip2.mp4" muted loop playsinline autoplay preload="metadata" aria-label="A teaser scene: a girl with a pencil runs along a rainbow road toward a cloud gate"></video><figcaption>What a free user gets: real motion, not a still.</figcaption></figure>${costChart}</div>`})}
${dec(2,{layout:'split r',ic:'blur',short:'Blur, don\'t generate',title:'Blur the rest, don\'t make it.',sh:'Locked scenes are never generated. They reuse the teaser images, flipped, turned and blurred, to hint at more.',
 body:'<p>The locked scenes don\'t exist yet. We only start making them after someone upgrades. So a watermark was never an option: there\'s nothing to watermark.</p><p>Instead, each locked scene reuses one of the teaser images, flipped, turned and blurred. It costs nothing and makes people curious about what comes next.</p>',
 media:blurDemo})}
${dec(3,{layout:'stack',ic:'cta',short:'Three upgrade moments',title:'Ask at the moment people are hooked.',sh:'Three places to upgrade: under the player, right after the teaser scenes, and inside the player when the teaser ends.',
 body:'<p>There are three places to upgrade. Under the player, a button to unlock the full video. Right after the last teaser scene, a banner: free users read "You\'re seeing part of the video", paid users read "Like what you see?". And inside the player, the moment the teaser ends: "You\'re watching a preview", right when people most want to see what happens next.</p><p>Locked scenes show a crown, so it\'s clear what upgrading gets you.</p>',
 media:`<div class="vt-pair wide">${shotF('vt_fend','The player after the teaser ends: You\'re watching a preview. Upgrade to unlock the full video and create more. Upgrade now.','Inside the player, the moment the teaser ends.')}${shotF('vt_plans','The plans page with Lite, Pro, Plus and Max plans','Where Upgrade leads.')}</div>`})}
${dec(4,{layout:'stack',ic:'two',short:'One flow, two users',title:'Simple for free users, full control for paid ones.',sh:'Free users get one path: the teaser is free, everything else says Upgrade. Paid users choose storyboard, teaser or full video, and later pick which scenes to make.',
 body:'<p>Free users get one simple path. Their start screen shows the storyboard and the teaser as free, with the credit price struck out, and the full video with a crown. After the teaser, every button says Upgrade.</p><p>Paid users get every option. Before making a story, they choose a storyboard, a teaser (recommended) or the full video, with the credit cost shown for each. After a teaser, they pick exactly which remaining scenes to make, as video or as still images. For them, the teaser is a cheap check: start over if the story isn\'t working, make the rest if it is.</p>',
 media:`<div class="vt-pair wide">${shotF('vt_fstart','Free start screen: Storyboard free (10.4 credits struck out), Video Teaser free and recommended (39 struck out), Full Video 74 credits with a crown','Free users: storyboard and teaser are free.')}${shotF('vt_start','Paid start screen: Storyboard 11.2 credits, Video teaser 57.5 credits (recommended), Full video 150.6 credits','Paid users: every option, with its cost.')}</div>`,
 after:`<div class="vt-pair">${shotF('vt_page','Paid story page after the teaser: scenes 1 to 5 play, scene 6 blurred with a Generate button, and Select scenes to generate video under the player','Paid users after the teaser: the rest is one button away.')}${shotF('vt_gen','The Generate Video popup: choose Video or Storyboard and tick the scenes to make','Pick which scenes to make.')}</div>`})}
${dec(5,{layout:'split',ic:'globe',short:'Tune by country',title:'Not every country gets the same free teaser.',sh:'In countries where free users used lots of credits but rarely paid, the teaser became paid. Free users there get images only.',
 body:'<p>The data showed a gap. In some countries, free users used a lot of credits but very few subscribed, because our plans are expensive there. The teaser was costing more than it earned.</p><p>So in those countries, free users now get images only, and the teaser is part of the paid plan. Everywhere else, the free teaser stays.</p>',
 media:`<div class="vt-mk"><div class="row"><span class="k">Most countries</span><span class="s"><i>Images</i><b>Free</b></span><span class="s hl"><i>Video teaser</i><b>Free</b></span><span class="s"><i>Full video</i><b>Paid</b></span></div><div class="row"><span class="k">Countries where few people paid</span><span class="s"><i>Images</i><b>Free</b></span><span class="s"><i>Video teaser</i><b>Paid</b></span><span class="s"><i>Full video</i><b>Paid</b></span></div></div>`})}
</div>
<section class="sec" id="vt-evolve" data-rail="How it evolved"><h2 class="lab">How it evolved</h2><div>${timeline}</div></section>
<section class="sec" id="vt-impact" data-rail="Impact"><h2 class="lab">Impact</h2><div>
 <div class="vt-impact"><p class="vt-up-big">The main place<br><b>people upgrade.</b></p><p class="vt-arr-cap">Free users now see their own story move before anyone asks them to pay. The teaser and its three upgrade moments are where most of them decide.</p></div>
 ${subsChart}
 <p class="text vt-honest">About 1 in 20 people who started a story used to pay. Since the teaser became the default for every free user, it\'s about 1 in 5. A lot changed in that time: pricing, new workflows, marketing and the work of the whole team. So read this as the teaser plus everything around it, not the teaser alone.</p>
 <p class="text vt-honest">For context: Atlabs reached $2.5M ARR by ${AS}, almost all from subscriptions. That is a team result. The teaser is one part of it: the moment where people choose to pay.</p>
</div></section>
<section class="sec" data-rail="What I learned"><h2 class="lab">What I learned</h2><div class="text"><ul class="ci-ul"><li><b>Give away the moment, not the cost.</b> <span data-long>People pay once they see their own story move. 25 seconds was enough for that.</span></li><li><b>Let cost shape the design.</b> <span data-long>The 25-second limit and the fake blurred scenes both came from cost, and both made the product better.</span></li><li><b>One page can serve two very different users.</b> <span data-long>Free users needed fewer choices. Paid users needed more. The same flow does both.</span></li></ul></div></section>
<section class="sec ci-fn"><h2 class="lab">Footnotes</h2><ol class="text"><li>ARR as stated by Atlabs, ${AS}; a whole-team result, not the teaser alone. Paying share = new paying users ÷ people who started a story, per month, from Atlabs' product analytics; October is partial. The teaser was called "Preview" until June 2026. Credit costs from the app's start screen. The video at the top is a real teaser exported from Atlabs. The popups and other images are screenshots of the live product.</li></ol></section>
</div>
${caseNav('video-teaser')}`; },

'editing-experience': () => {
const AS='Oct 2026';
const shotF=(k,alt,cap,cls)=>`<figure class="ci-fig ${cls||''}"><div class="ci-frame"><div class="ci-shot"><button class="ci-z" type="button" data-zoom="${k}" aria-label="Enlarge: ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt="${alt}"></button></div></div>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const SCR={
 story:['ed_story','Story page','All scenes, whole-video controls on top, the player on the right.'],
 gen:['ed_gen','Generate video','Pick the scenes left to make, as video or storyboard, with the cost.'],
 scene:['ed_scene','Scene editor','One scene, nine tools down the side.'],
 broll:['ed_broll','B-roll','Text, images and sound effects on top of a scene.'],
 aiedit:['ae1','AI Edit','Describe a change in plain words. New design, not live yet.'],
 timeline:['ed_timeline','Timeline','One scene, second by second.'],
 chars:['ed_chars','Characters','Every character in the story, tagged with @.'],
 captions:['ed_captions','Captions','20+ styles, set once for the whole video.'],
 assets:['ed_assets','Assets','Every version made for this story, by scene.'],
 export:['ed_export','Export','Download, share, or publish.'],
 credits:['ed_credits','Credits','What’s left, and what each story cost.'],
 breakdown:['ed_breakdown','Credit breakdown','Every generation, by scene and shot.']
};
const HOT=[
 {x:30,y:7.8,n:'Whole video',d:'Controls that change every scene at once: aspect ratio, characters, objects, locations and captions.',s:['chars','captions']},
 {x:29,y:31,n:'Scenes',d:'Every scene is a card with its line, its length and its media. Scenes not made yet wait behind a blur with a Generate button.',s:['story','gen']},
 {x:14.5,y:51.7,n:'One scene',d:'Edit motion right here, or open the scene editor for everything else. The timeline is one more click in.',s:['scene','broll','aiedit','timeline']},
 {x:78.5,y:44,n:'Preview',d:'Watch the shot, the scene or the full video. Every version ever made is kept, so you can go back.',s:['assets']},
 {x:83.3,y:8.4,n:'Export',d:'Re-export at any resolution, download, share a link, open in Premiere Pro, or post to YouTube, Instagram and Facebook.',s:['export']},
 {x:89.8,y:8.4,n:'Credits',d:'What’s left, when it expires, and exactly where every credit went.',s:['credits','breakdown']}
];
const curSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 8-6.2 1.6L10 19z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
const BASES=[...new Set(ED_FLOW.map(f=>f.base))];
const tourD=`<div class="edD" data-edd style="--n:${ED_WALK.length}">
<div class="edD-stick">
 <div class="edD-top"><span class="edA-n" data-dn>01 / ${String(ED_WALK.length).padStart(2,'0')}</span><p class="edA-act" aria-live="polite"><span class="edA-step s1"><span class="ci">${curSvg}</span>Click <b data-dc>${ED_WALK[0].c}</b></span><span class="edA-arr" aria-hidden="true">→</span><span class="edA-step s2"><b data-dr>${ED_WALK[0].r}</b> opens</span></p></div>
 <div class="edD-mid"><div class="edD-stage"><div class="edD-frame" data-dframe>
  ${Array.from({length:12},(_,i)=>`<div class="edD-img${i===0?' on':''}" data-dimg2="${i}"><img src="${IMG[i===11?'wkae':'wk'+i].src}" alt="" ${i>1?'loading="lazy"':''}></div>`).join('')}
  <button type="button" class="edD-hit" data-dhit aria-label="Next"></button>
  <button type="button" class="edD-ring" data-dring aria-label="Click ${ED_WALK[0].c}"></button><span class="edD-cur" data-dcur>${curSvg}</span>
  <button type="button" class="edD-zoom" data-dzoom data-zoom="wk0" aria-label="Enlarge this screen"><svg viewBox="0 0 24 24"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg></button>
 </div></div>
 <nav class="edD-dots" aria-label="Steps">${ED_WALK.map((w,i)=>`<button type="button" data-dstep="${i}" class="${i===0?'on':''}" aria-label="Step ${i+1}: ${w.r}"><span>${w.r}</span></button>`).join('')}</nav></div>
 <div class="edD-foot"><p class="edA-d" data-dd>${ED_WALK[0].d}</p><p class="edD-tip">Click the green box, or anywhere on the screen, to move on.</p></div>
</div></div>`;
const tourA=`<div class="edA" data-eda style="--n:${ED_FLOW.length}">
<div class="edA-stick">
 <div class="edA-top"><span class="edA-n" data-an>01 / ${String(ED_FLOW.length).padStart(2,'0')}</span><p class="edA-act" aria-live="polite"><span class="edA-from" data-afrom>${ED_FLOW[0].from}</span><span class="edA-step s1"><span class="ci">${curSvg}</span>Click <b data-at>${ED_FLOW[0].t}</b></span><span class="edA-arr" aria-hidden="true">→</span><span class="edA-step s2"><b data-ar>${ED_FLOW[0].r}</b> opens</span></p></div>
 <div class="edA-stage" data-astage>
  ${BASES.map((b,i)=>`<div class="edA-frame${i===0?' on':''}" data-abase="${b}" style="--ar:${(IMG[b].w/IMG[b].h).toFixed(4)}"><img src="${IMG[b].src}" alt="" ${i?'loading="lazy"':''}><span class="edA-ring" data-aring></span><span class="edA-cur" data-acur>${curSvg}</span></div>`).join('')}
  ${ED_FLOW.map((f,i)=>`<button type="button" class="edA-res" data-ares="${i}" data-zoom="${f.k}" aria-label="Enlarge ${f.r}" tabindex="-1"><img src="${IMG[f.k].src}" alt="${f.r}: ${f.d}" loading="lazy"></button>`).join('')}
 </div>
 <div class="edA-foot"><p class="edA-d" data-ad>${ED_FLOW[0].d}</p><div class="edA-prog">${ED_FLOW.map((f,i)=>`<button type="button" data-astep="${i}" class="${i===0?'on':''}" aria-label="Step ${i+1}: ${f.t}"></button>`).join('')}</div></div>
</div></div>`;
const crop=(f)=>{ const W=IMG[f.base].w, H=IMG[f.base].h, R=W/H, CA=0.6;
 const bw=(f.b[2]-f.b[0])/100, cx=(f.b[0]+f.b[2])/200, cy=(f.b[1]+f.b[3])/200;
 const Z=Math.min(2.6,Math.max(1.05,0.24/bw));
 let L=0.5-cx*Z, T=CA/2-cy*Z/R; L=Math.min(0,Math.max(1-Z,L)); T=Math.min(0,Math.max(CA-Z/R,T));
 const rx=(L+f.b[0]/100*Z)*100, rw=bw*Z*100, ry=(T+f.b[1]/100*Z/R)/CA*100, rh=((f.b[3]-f.b[1])/100*Z/R)/CA*100;
 return `<div class="edB-crop"><img src="${IMG[f.base].src}" alt="" loading="lazy" style="width:${(Z*100).toFixed(2)}%;left:${(L*100).toFixed(2)}%;top:${(T/CA*100).toFixed(2)}%"><span class="edB-ring" style="left:${rx.toFixed(2)}%;top:${ry.toFixed(2)}%;width:${rw.toFixed(2)}%;height:${rh.toFixed(2)}%"></span><span class="edB-cur" style="left:${(rx+rw*.7).toFixed(2)}%;top:${(ry+rh*.6).toFixed(2)}%">${curSvg}</span></div>`; };
let lastZ='';
const tourB=`<div class="edB">${ED_FLOW.map((f,i)=>{ const h=f.z!==lastZ?`<p class="edB-z">${f.z}</p>`:''; lastZ=f.z; return `${h}<div class="edB-row">
 <div class="edB-from">${crop(f)}<p><span>${f.from}</span> Click <b>${f.t}</b></p></div>
 <span class="edB-arr" aria-hidden="true"><i></i>opens</span>
 <div class="edB-to"><button type="button" class="edB-shot" data-zoom="${f.k}" aria-label="Enlarge ${f.r}"><img src="${IMG[f.k].src}" alt="${f.r}" loading="lazy"></button><p><b>${f.r}</b> ${f.d}</p></div>
</div>`; }).join('')}</div>`;
const tourSwitch=`<div class="ed-vsw"><span>Tour layout</span><div role="radiogroup" aria-label="Tour layout"><button type="button" role="radio" aria-checked="true" data-edv="d">D · Walkthrough</button><button type="button" role="radio" aria-checked="false" data-edv="a">A · Click-through</button><button type="button" role="radio" aria-checked="false" data-edv="b">B · Click → opens</button><button type="button" role="radio" aria-checked="false" data-edv="c">C · Scroll tour</button></div></div>`;

const STEPS=[]; HOT.forEach((h,z)=>h.s.forEach(k=>STEPS.push({z,k})));
const map=`<div class="ed-scr" data-edscr style="--n:${STEPS.length}">
<div class="ed-stick">
 <div class="ed-view">${STEPS.map((st,i)=>`<button type="button" class="ed-vimg${i===0?' on':''}" data-vi="${i}" data-z="${st.z}" data-zt="${HOT[st.z].n}" data-zd="${HOT[st.z].d}" data-st="${SCR[st.k][1]}" data-sd="${SCR[st.k][2]}" data-zoom="${SCR[st.k][0]}" aria-label="Enlarge ${SCR[st.k][1]}" tabindex="${i?-1:0}"><img src="${IMG[SCR[st.k][0]].src}" alt="${SCR[st.k][1]}: ${SCR[st.k][2]}"${i>1?' loading="lazy"':''}></button>`).join('')}
  <span class="ed-count" data-scount>01 / ${String(STEPS.length).padStart(2,'0')}</span></div>
 <aside class="ed-side">
  <div class="ed-mini"><img src="${IMG.ed_story.src}" alt="The story page, with numbered parts">${HOT.map((h,i)=>`<button type="button" class="ed-pin" style="--x:${h.x}%;--y:${h.y}%" data-zpin="${i}" aria-pressed="${i===0}" aria-label="Go to ${i+1}: ${h.n}">${i+1}</button>`).join('')}</div>
  <div class="ed-stxt" aria-live="polite"><p class="ed-k" data-sk>01 · ${HOT[0].n}</p><h3 data-sh>${SCR[STEPS[0].k][1]}</h3><p class="ed-sn" data-ss>${SCR[STEPS[0].k][2]}</p><p class="ed-d" data-szd>${HOT[0].d}</p></div>
  <div class="ed-prog" role="group" aria-label="Screens">${STEPS.map((st,i)=>`<button type="button" data-step="${i}" class="${i&&STEPS[i-1].z!==st.z?'zs':''}${i===0?' on':''}" aria-label="Screen ${i+1}: ${SCR[st.k][1]}"></button>`).join('')}</div>
  <p class="ed-hint">Keep scrolling to see every screen. Tap one to open it.</p>
 </aside>
</div></div>`;

const depths=[
 ['ed_story','Story','See the whole video','All scenes at once. Watch the full video, regenerate a scene, or make the scenes that are left.'],
 ['ed_scene','Scene','Fix one scene','Nine tools for one scene, with the preview on the right and every past version under it.'],
 ['ed_timeline','Timeline','Go second by second','Trim, crop, flip, mute and change speed. Images, text and audio get their own lane above the clip.']];
const depth=`<div class="ed-depth" data-eddepth>
 <div class="ed-dtabs" role="tablist" aria-label="Levels of the editor">${depths.map((d,i)=>`<button type="button" role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-dep="${i}"><span class="lv" aria-hidden="true">${'<i></i>'.repeat(i+1)}</span><span><b>${d[1]}</b><em>${d[2]}</em></span></button>`).join('')}</div>
 <div class="ed-dview">${depths.map((d,i)=>`<button type="button" class="ed-dimg${i===0?' on':''}" data-dimg="${i}" data-zoom="${d[0]}" aria-label="Enlarge ${d[1]} level: ${d[3]}" tabindex="${i===0?0:-1}"><img src="${IMG[d[0]].src}" alt="" loading="lazy"></button>`).join('')}</div>
 <p class="ed-dcap" data-dcap>${depths[0][3]}</p>
</div>`;

const ti={
 image:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M5 17l4.5-4.5 3.5 3.5 2.5-2.5 3.5 3.5"/></svg>',
 motion:'<svg viewBox="0 0 24 24"><path d="M4 16c3 0 4-8 8-8s5 8 8 8"/><path d="M4 20h16"/></svg>',
 audio:'<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v2.5"/></svg>',
 lip:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 9.5h.01M15 9.5h.01"/></svg>',
 ai:'<svg viewBox="0 0 24 24"><path d="M12 3.5l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8z"/><path d="M18.5 16l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/></svg>',
 split:'<svg viewBox="0 0 24 24"><circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="M8 8.5L20 17M8 15.5L20 7"/></svg>',
 broll:'<svg viewBox="0 0 24 24"><path d="M4 20L16 8M14 6l4 4M18 3v3M16.5 4.5h3M20.5 10v2.5M19.2 11.2h2.6"/></svg>',
 cc:'<svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M10.5 10.3a2.2 2.2 0 100 3.4M17 10.3a2.2 2.2 0 100 3.4"/></svg>',
 gear:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/></svg>'
};
const tools=[
 ['Picture',[['image','Image','Edit the scene image with a prompt, inpaint one part, generate a new one, or upload your own. Reference images keep characters looking the same.','tl_image'],
   ['motion','Motion','Turn the image into video from a prompt. Pick the model, add reference images, and tag them in the prompt.','tl_motion']]],
 ['Sound',[['audio','Audio','The voiceover for this scene. Power users can change how a single word is said.','tl_audio'],
   ['lip','Lip Sync','Match a character’s mouth to the voice.','tl_lip']]],
 ['Edit',[['ai','AI Edit','Say what you want changed, in plain words. The assistant asks what it needs and shows the cost before it runs. New design, not live yet.','ae4'],
   ['split','Split Scene','Tap a word in the script to cut one scene into two.','tl_split'],
   ['broll','B-Roll','Headings, text, images and sound effects on top of the scene.','tl_broll'],
   ['cc','Captions','Shows the caption style for the whole video, with a link to change it.','tl_captions'],
   ['gear','Settings','Scene settings. I’m bringing transitions and the Brand Kit in here next.','tl_settings']]]];
let tn=0;
const toolRail=`<div class="ed-tools" data-edtools>
 <div class="ed-rail" role="tablist" aria-label="Scene editor tools" aria-orientation="vertical">${tools.map(g=>`<p class="ed-g">${g[0]}</p>${g[1].map(t=>{const i=tn++;return `<button type="button" role="tab" aria-selected="${i===6}" tabindex="${i===6?0:-1}" data-tool="${i}"><span class="ic">${ti[t[0]]}</span>${t[1]}</button>`;}).join('')}`).join('')}</div>
 <div class="ed-tpanes">${(()=>{tn=0;return tools.map(g=>g[1].map(t=>{const i=tn++;return `<div class="ed-tp" role="tabpanel" data-tpane="${i}"${i!==6?' hidden':''}><h4><span class="ic">${ti[t[0]]}</span>${t[1]}</h4><p>${t[2]}</p>${t[3]?`<button type="button" class="ed-tshot" data-zoom="${t[3]}" aria-label="Enlarge ${t[1]} panel"><img src="${IMG[t[3]].src}" alt="" loading="lazy"></button>`:`<div class="ed-tmock" aria-hidden="true"><span class="big">${ti[t[0]]}</span></div>`}</div>`;}).join('')).join('');})()}</div>
</div>`;

const levels=`<div class="ed-lv">
 <div class="row top"><span class="k">Whole video<em>Changes every scene</em></span><span class="chips"><i>9:16</i><i>Characters</i><i>Objects</i><i>Locations</i><i>Captions</i><i>Export</i></span></div>
 <div class="row"><span class="k">This scene<em>Changes one scene</em></span><span class="chips"><i>Image</i><i>Motion</i><i>Audio</i><i>Lip Sync</i><i>AI Edit</i><i>Split</i><i>B-Roll</i><i>Settings</i></span></div>
</div>`;

const icon={
 layers:'<svg viewBox="0 0 24 24"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12.5l8.5 4.5 8.5-4.5M3.5 16.5l8.5 4.5 8.5-4.5"/></svg>',
 zoom:'<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5M8 10.5h5M10.5 8v5"/></svg>',
 tools:ti.gear, ai:ti.ai,
 history:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 102.4-5.7L4 8.5"/><path d="M4 4v4.5h4.5M12 8v4.5l3 2"/></svg>',
 coin:'<svg viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg>',
 face:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="4"/><path d="M4.5 20c.9-3.8 3.9-5.8 7.5-5.8s6.6 2 7.5 5.8"/></svg>',
 send:'<svg viewBox="0 0 24 24"><path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M5 14v4.5A1.5 1.5 0 006.5 20h11a1.5 1.5 0 001.5-1.5V14"/></svg>'
};
const dec=(n,o)=>`<section class="ci-dec2 ci-l-${o.layout}" id="ed-d${n}" data-rail="0${n} ${o.short}">
<div class="ci-dgrid"><div class="ci-dtext"><p class="ci-dk"><span class="vt-ic ed-ic" aria-hidden="true">${icon[o.ic]}</span>Decision 0${n}</p><h3>${o.title}</h3><p class="ci-short" data-short>${o.sh}</p><div class="ci-body" data-long>${o.body}</div></div>
<div class="ci-dmedia">${o.media}</div></div>${o.after||''}</section>`;

const tl=[
 ['Dec 2024','One page did everything. Writing, images, editing and preview all lived together, with tiny tool icons under each scene.'],
 ['Late 2025','The whole app moved to a new design system.'],
 ['May 2026','The scene editor became its own screen, with tools down the side.'],
 ['Aug 2026','AI Edit arrived as a chat. Videos could be published straight to YouTube. The timeline got a music lane, and B-roll text got font and position controls.'],
 ['Sep 2026','Instagram and Facebook publishing. AI Edit moved into the scene editor as a panel.'],
 ['Oct 2026','The credits menu shows what each recent story cost, with a full breakdown per story.']];
const timeline=`<ol class="vt-tl ed-tl">${tl.map(t=>`<li><b>${t[0]}</b><p>${t[1]}</p></li>`).join('')}</ol>`;

return `<div id="ci-root" class="ed">
<nav class="ci-rail" aria-label="On this page"><p>On this page</p><ol></ol></nav>
<section class="ph text" id="ed-top" data-rail="Overview"><a class="back" href="#/work/atlabs/editing-experience">All Atlabs work</a><p class="ci-eye">Atlabs AI · Case study</p><h1>Editing experience</h1><p>Every Atlabs video is finished in one editor: scenes, motion, voice, B-roll, captions, credits, export and publishing. I designed all of it, one tool at a time, without letting it turn into a cockpit.</p>
<div class="ci-skimrow"><button type="button" class="ci-skim" data-skim aria-pressed="false"><span class="sw" aria-hidden="true"></span><span>2-minute version</span></button></div></section>
<div class="facts ci-facts"><div><span>My role</span>Product and design for the whole editor.</div><div><span>Timeline</span>Dec 2024 – today</div><div><span>Where</span>Story page, scene editor, timeline, export.</div></div>
${tourA}
<div class="ci-numwrap"><p class="ci-asof">As of ${AS}</p><div class="ci-nums ed-nums">
 <div><b class="ci-cnt" data-count="3">3</b><span>levels: story, scene, timeline</span></div>
 <div><b class="ci-cnt" data-count="9">9</b><span>tools in the scene editor</span></div>
 <div><b class="ci-cnt" data-count="20+">20+</b><span>caption styles</span></div>
 <div><b class="ci-cnt" data-count="8">8</b><span>ways out: download, share, publish and more</span></div>
</div></div>
<section class="sec"><h2 class="lab">In short</h2><div class="text"><p><b>An AI video has many parts, and people need to fix any of them without getting lost.</b> I split the editor into three levels (the whole story, one scene, one scene second by second), kept whole-video controls apart from scene controls, and gave every tool the same layout. Then I made the hidden things visible: every version made, every credit spent, and every way to get the video out.</p></div></section>
<section class="ci-prob" id="ed-before" data-rail="Before">
 <div class="ci-sh"><span class="ci-kick">Before</span><h2>One page tried to do everything</h2></div>
 <div class="ed-pair">${shotF('tn_ed_old','The old story page: scenes as a list of still images, a row of small tool icons under each scene, a preview on the right','Dec 2024. Writing, editing and preview on one page.')}${shotF('ed_story','The story page today: scene cards in a grid, whole-video controls in the top bar, a large vertical player on the right','Oct 2026. The story page is now just the overview.')}</div>
 <div class="ci-tens">
  <article><span class="n">1</span><h3>Every tool fought for the same space.</h3><p>Seven small icons under each scene, with no labels.</p></article>
  <article><span class="n">2</span><h3>Nobody knew what a change would touch.</h3><p>Some settings changed one scene, others changed the whole video. They looked the same.</p></article>
  <article><span class="n">3</span><h3>The video kept growing.</h3><p>Motion, lip sync, B-roll and publishing were all coming. One page could not hold them.</p></article>
 </div>
</section>
<div class="ci-decs2">
${dec(1,{layout:'stack',ic:'zoom',short:'Three levels',title:'Three levels, each one deeper.',sh:'Story for the whole video, scene editor for one scene, timeline for second-by-second work. You only go as deep as you need.',
 body:'<p>Most edits are small: regenerate one scene, change a line. A few need precision. So the editor has three levels. The story page shows every scene. The scene editor opens one scene with all its tools. The timeline goes second by second inside that scene.</p><p>Each level is one click deeper, and the scene list stays on the left the whole time, so you never lose your place.</p>',
 media:`<div class="ed-sy" data-sy style="--n:3"><div class="ed-sys">${depth}</div></div>`})}
${dec(2,{layout:'split',ic:'layers',short:'Video vs scene',title:'Whole-video controls on top, scene controls on the side.',sh:'Anything in the top bar changes every scene. Anything in the side panel changes only this scene.',
 body:'<p>The rule is simple. The top bar holds things that change the whole video: aspect ratio, characters, objects, locations, captions and export. The side panel holds things that change only the scene you’re in.</p><p>Captions show why this matters. A different style in every scene would make a video look broken. So the style is set once for the whole video, and each scene’s Captions panel shows that style with a link to change it.</p>',
 media:levels,
 after:shotF('ed_captions','Captions popup: a grid of caption styles like Terminal, Chalk, Pixel, Candy and Headline, with a live preview and text size, length and position settings','Captions: one style for the whole video, with a live preview.','ci-full')})}
${dec(3,{layout:'stack',ic:'tools',short:'Nine tools',title:'Nine tools, one layout.',sh:'Every tool sits in the same side panel and works the same way: choose a mode at the top, set options, generate at the bottom, see versions under the preview.',
 body:'<p>The scene editor has nine tools, grouped into picture, sound and editing. They share one layout, so learning one teaches you the rest: modes at the top (edit, generate new, upload), options in the middle, and the generate button at the bottom with its credit cost on it.</p><p>Nine is already a lot, so I\u2019m folding transitions into Settings instead of adding a tenth tab.</p>',
 media:toolRail})}
${dec(4,{layout:'stack',ic:'ai',short:'AI Edit',title:'Edit by asking.',sh:'AI Edit lets people describe a change in plain words. I redesigned it so the assistant asks one question at a time and shows the plan and cost before anything runs. The redesign isn\u2019t live yet.',
 body:'<p>Some people don\u2019t want to learn nine tools. They just want to say "change the cup" or "fix the voice in scene 3". AI Edit lets them do that.</p><p>The first version launched in August 2026 as a chat and moved into the scene editor in September. It works, but it\u2019s hard to follow. So I redesigned it. The assistant asks one question at a time, with ready answers to pick. Before anything runs, it shows the plan, the models and the cost, and you approve it or suggest changes. Each result comes back for a quick yes or no.</p><p>This redesign is not live yet, as of Oct 2026.</p>',
 media:`<div class="ed-pair">${shotF('ae1','AI Edit start screen: What\u2019s your vision? with Fix audio, Change visual and Other controls, and the scene and shot attached to the message box','Start: starter topics, with the scene and shot already attached.')}${shotF('ae4','AI Edit asks what to change the cup with, offering three ready answers and a Something else option','It asks one question at a time, with ready answers.')}</div><div class="ed-pair" style="margin-top:20px">${shotF('ae3','AI Edit summary: the change, the image and video models, and an estimated cost of 21 credits, with Suggest changes and Approve','Before anything runs: the plan, the models and the cost.')}${shotF('ae2','AI Edit shows the new starting image, a bag of dog treats, and asks Does this look good? with Deny and Approve','Each result comes back for a quick yes or no.')}</div><p class="ed-note">New design, not live yet (Oct 2026).</p>`})}
${dec(5,{layout:'stack',ic:'history',short:'Nothing is lost',title:'Never lose a version.',sh:'Every image and video made is kept. History sits under the preview, and the assets library shows every version by scene, with the one in use marked Applied.',
 body:'<p>AI is unpredictable, so people try things. If a new version is worse, they need the old one back. Every generation is kept. The history row under the preview shows the versions for the current shot. The assets library shows everything made for the story, scene by scene, and marks the version in use as Applied.</p><p>Filters for media type, source, story and tool make it quick to find one clip among hundreds.</p>',
 media:`<div class="ed-pair wide">${shotF('ed_scene','The scene editor with the Image tool open, the video preview on the right, and the generation history row under it','History lives under the preview.')}${shotF('ed_assets','The Assets library filtered to this story: scenes on the left, versions for each scene with Applied badges','The assets library, filtered to this story.')}</div>`})}
${dec(6,{layout:'stack',ic:'coin',short:'Credits',title:'Show where every credit goes.',sh:'Credits are what people pay for. The credits menu shows what’s left, when it expires, and the latest stories. One more click shows every generation and its cost.',
 body:'<p>Every action in the editor costs credits. If people can’t see where their credits went, the product feels unfair, even when it isn’t.</p><p>The credits menu shows the balance, what expires and when, and the cost of the most recent stories. The breakdown opens any story by scene and shot, and lists each generation with its model, length and cost per second. The price also sits on every generate button, before you press it.</p>',
 media:`<div class="ed-pair ed-pr">${shotF('ed_credits','Credits menu: 440.42 credits, a bar showing 1559.58 of 2000 used, expiry on Feb 11 2027, and recent activity for three stories','The credits menu.')}${shotF('ed_breakdown','Credit breakdown side panel for Rainbow Plate Kitchen: each scene and shot with its edited video and generated image, model, seconds and credits','The breakdown for one story.')}</div>`})}
${dec(7,{layout:'split',ic:'face',short:'Characters',title:'The same character in every scene.',sh:'Characters are defined once with a turnaround sheet and tagged with @. The same tags work in image and motion prompts.',
 body:'<p>A story falls apart if the hero looks different in every scene. Each character gets a turnaround sheet (front, side, back, close-up) and a name. People tag them with @ in any prompt, and reference images can be tagged the same way.</p><p>Under the preview, people can see exactly which characters and references went into a shot.</p>',
 media:shotF('ed_chars','Story Characters popup with four characters and turnaround sheets','Each character, once, for the whole story.')})}
${dec(8,{layout:'split r',ic:'send',short:'Export and publish',title:'Finish without leaving.',sh:'Export re-renders at any resolution and offers eight ways out, including publishing to YouTube, Instagram and Facebook.',
 body:'<p>A video isn’t done until it’s somewhere. The export menu re-renders at the resolution you pick, then offers download, a preview link, Premiere Pro, a thumbnail, subtitles as an SRT file, and publishing.</p><p>YouTube publishing came in August 2026, Instagram and Facebook in September. The publish screen writes a title and description from the video, and uses the latest export unless you pick an older one.</p>',
 media:shotF('ed_export','Export Video menu: a preview, resolution 2K, Re-export, and other actions: Download, Preview Link, Premiere Pro, YouTube, Instagram, Facebook, Thumbnail and Subtitles (.SRT)','The export menu.')})}
</div>
<section class="sec" id="ed-more" data-rail="More screens"><h2 class="lab">More screens</h2><div>
 <div class="ed-pair">${shotF('ed_timeline','Timeline for scene 1: the clip with tools for crop, flip, rotate, mute and speed, a lane to add image, text or audio, and the AI voiceover lane','The timeline, for second-by-second work.')}${shotF('ed_broll','The B-roll panel: add a heading, subheading or body text, upload an image, and pick sound effects','B-roll: text, images and sound effects.')}</div>
 <div class="ed-pair">${shotF('ed_gen','Generate Video popup: Video 71.1 credits or Storyboard 4.8 credits, with scenes 6 to 11 selected and the model and resolution shown','Making the scenes that are left.')}${shotF('ed_story','The story page with scene cards, whole-video controls and the player','The story page.')}</div>
</div></section>
<section class="sec" data-rail="What I learned"><h2 class="lab">What I learned</h2><div class="text"><ul class="ci-ul">
 <li><b>Say how much a control changes.</b> <span data-long>Whole video or one scene. Once that was clear from where a control sits, the rest got easier.</span></li>
 <li><b>Depth on demand.</b> <span data-long>The timeline is there for people who need it. Nobody has to see it to finish a video.</span></li>
 <li><b>Breadth needs a system.</b> <span data-long>Nine tools only work because they share one layout. A new tool should feel familiar on day one.</span></li>
 <li><b>Show the money.</b> <span data-long>Putting the cost on every button and a breakdown behind the credits made the product feel fair.</span></li>
</ul></div></section>
<section class="sec ci-fn"><h2 class="lab">Footnotes</h2><ol class="text"><li>All images are screenshots of the live product, ${AS}, except the December 2024 screen. Counts are as of ${AS}.</li></ol></section>
</div>
${caseNav('editing-experience')}`; },

curelink: () => {
const pic=(k,alt,cap)=>`<figure class="cs-mock cl bare"><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
return `
<section class="ph text"><a class="back" href="#/work/previous/curelink">Back to home</a><h1>Scratch cards that made enrolling worth it</h1><p>Curelink needed more patients in its care programmes. The data said the enrolment flow was fine; the people doing the enrolling just had no reason to. I designed a cash reward system for clinic coordinators, in two weeks.</p></section>
<div class="facts"><div><span>Role</span>Product Designer, freelance</div><div><span>Team</span>1 PM, 1 researcher, developers</div><div><span>Timeline</span>2 weeks, Dec '22–Jan '23</div><div><span>Platform</span>iOS and Android</div></div>
<section class="sec"><h2 class="lab">A 30-second primer</h2><div class="text"><p>Curelink helps doctors offer holistic, AI-assisted care under their own brand. Patients join a care plan in the app, and get live sessions and WhatsApp support between visits.</p></div></section>
<div class="cl-care">
  <div class="chan"><p class="h">Care between visits</p><div class="chips"><span>Query handling</span><span>Yoga sessions</span><span>Dietician</span><span>Patient education</span><span>Meditation</span></div><p class="wa"><i aria-hidden="true"></i>All on WhatsApp and live sessions</p></div>
  <div class="loop" role="img" aria-label="A loop: comprehensive care leads to a better patient experience, improved retention, more word of mouth, and new patients, which leads back to more care.">
    <ol><li>Comprehensive care</li><li>Better patient experience</li><li>Improved retention</li><li>More word of mouth</li><li>New patients</li></ol>
    <p class="again" aria-hidden="true">↺ and round again</p>
  </div>
</div>
<section class="sec"><h2 class="lab">The brief</h2><div class="text"><p class="quote">Get more patients enrolled, and more of them paying.</p></div></section>
<div class="cl-defs">
  <div><p class="k">Enrolment</p><p>A patient joins a care plan for a free trial, by scanning a QR code in the clinic or through a doctor or coordinator in the app.</p></div>
  <div><p class="k">Conversion</p><p>The patient pays, during or after the trial. That depends on how much value they get, and how well the plan was sold to them.</p></div>
</div>
${pic('cl_qr','QR code poster in a clinic','Self-enrolment: a QR code on the clinic wall')}
${pic('cl_enrol','The existing enrolment flow in the coordinator app','Or a coordinator enrols them in the app')}
<section class="sec"><h2 class="lab">What the data said</h2><div class="text"><p>The enrolment flow looked simple, so why were numbers low? I looked at data across clinics, where doctors, coordinators or both do the enrolling.</p></div></section>
<div class="cl-data">
  <div class="st g"><b>86%</b><p>of enrolments that start, finish. The flow works.</p></div>
  <div class="st b"><b>Few</b><p>enrolments ever start. That's the real problem.</p></div>
  <div class="split"><p class="h">Who completes enrolments</p><div class="bar" role="img" aria-label="Doctors 44 percent, QR codes 29 percent, coordinators 27 percent"><span style="--w:44%;--c:#1F7AE8">Doctors 44%</span><span style="--w:29%;--c:#6AA8F2">QR code 29%</span><span style="--w:27%;--c:#F2994A">Coordinators 27%</span></div><p class="note">Coordinators, who have the most time with patients, enrol the fewest.</p></div>
</div>
<section class="sec"><h2 class="lab">Who does the enrolling</h2><div class="text"><p>Since the flow wasn't the problem, I looked at the two people responsible for enrolling patients.</p></div></section>
<div class="cl-personas">
  <div class="pcard"><div class="who"><span class="av" style="--c:#1F7AE8">RP</span><div><b>Dr. Raj Patel, 38</b><span>General practitioner, AIIMS · runs a clinic in Delhi</span></div></div>
    <p>Tech-savvy, focused on preventive care, happy to use digital tools.</p>
    <dl><dt>Wants</dt><dd>To understand patients better and keep them engaged between visits</dd><dt>Struggles with</dt><dd>Admin eating into patient time</dd><dt>Why he'd enrol</dt><dd>Better retention, extra revenue, better care</dd></dl></div>
  <div class="pcard hi"><div class="who"><span class="av" style="--c:#F2994A">AS</span><div><b>Aditi Sharma, 28</b><span>Medical coordinator, CMAA · same clinic</span></div></div>
    <p>Handles appointments, patient queries, reminders, records and supplies.</p>
    <dl><dt>Feels</dt><dd>Her time isn't well used, and she earns around ₹20k a month</dd><dt>The gap</dt><dd>Nothing motivates her to enrol patients</dd></dl></div>
</div>
<section class="sec"><h2 class="lab">The direction</h2><div class="text"><p>Coordinators had the lowest enrolment rate because nothing motivated them, so they became the target. Gamification and rewards have fixed this kind of problem in many apps, and with modest salaries, cash rewards would genuinely matter to them.</p><p style="color:var(--mute)">An honest note: with two weeks and stakeholders already aligned on this approach, we took a shortcut instead of exploring alternatives. Perhaps not the best way, but the most practical one.</p></div></section>
<section class="sec"><h2 class="lab">Learning from other apps</h2><div class="text"><p>I hadn't designed gamification before, so I studied Google Pay, Paytm, CRED, Jar and Piggy. The same patterns kept showing up: scratch cards for rewards, coupons, coins or cash, and a visual record of what's been paid out.</p></div></section>
<section class="sec"><h2 class="lab">Choosing the reward</h2><div class="text"><p>Scratch cards were the obvious format. The real question was what's inside. Coupons weren't motivating enough, which left points or cash.</p></div></section>
<div class="cl-vs">
  <div><p class="k">Points</p><ul class="it-notes"><li class="g">Costs less than cash</li><li class="g">Can buy things at a discount</li><li class="b">Hard to grasp for coordinators who aren't very tech-savvy, so less impact</li></ul></div>
  <div class="on"><p class="k">Cash <em>Chosen</em></p><ul class="it-notes"><li class="g">Instantly understood</li><li class="g">Winnings go straight to their bank account at regular intervals</li></ul></div>
</div>
<section class="sec"><h2 class="lab">Three kinds of card</h2><div class="text"><p>After weighing six combinations, the biggest rewards went to what mattered most to the business: conversions first, then QR enrolments.</p></div></section>
<div class="cl-cards"><div class="cl-card gold"><div class="face" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4h10v3a5 5 0 0 1-10 0z"/><path d="M7 5H4.5v1.5A3 3 0 0 0 7.5 9.5M17 5h2.5v1.5a3 3 0 0 1-3 3M12 12v3.5M8.5 19.5h7M9.5 19.5l.5-4h4l.5 4"/></svg></div><b>Gold card</b><p class="amt">Up to ₹100</p><p>When a patient pays for the care plan</p></div><div class="cl-card silver"><div class="face" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4h10v3a5 5 0 0 1-10 0z"/><path d="M7 5H4.5v1.5A3 3 0 0 0 7.5 9.5M17 5h2.5v1.5a3 3 0 0 1-3 3M12 12v3.5M8.5 19.5h7M9.5 19.5l.5-4h4l.5 4"/></svg></div><b>Silver card</b><p class="amt">Up to ₹30</p><p>When a patient enrols through a QR code</p></div><div class="cl-card bronze"><div class="face" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4h10v3a5 5 0 0 1-10 0z"/><path d="M7 5H4.5v1.5A3 3 0 0 0 7.5 9.5M17 5h2.5v1.5a3 3 0 0 1-3 3M12 12v3.5M8.5 19.5h7M9.5 19.5l.5-4h4l.5 4"/></svg></div><b>Bronze card</b><p class="amt">Up to ₹10</p><p>When a coordinator enrols a patient in the app</p></div></div>
<figure class="cl-flow" role="img" aria-label="Earning: a patient enrols by QR and earns a silver card, or through the coordinator app and earns a bronze card. Scratching credits cash to the wallet. If the patient pays for the care plan, a gold card is earned. Redemption: the wallet balance is sent to the bank account at the end of each week.">
  <div class="lane"><p class="h">Earning</p><div class="row"><span class="n">Patient enrols</span><span class="a" aria-hidden="true">→</span><span class="n two"><span><b>Via QR</b> · silver card</span><span><b>Via app</b> · bronze card</span></span><span class="a" aria-hidden="true">→</span><span class="n">Scratch to credit the wallet</span><span class="a" aria-hidden="true">→</span><span class="n gold two"><span>Patient pays?</span><b>Gold card</b></span></div></div>
  <div class="lane"><p class="h">Redemption</p><div class="row"><span class="n">Balance in wallet</span><span class="a" aria-hidden="true">→</span><span class="n">End of the week</span><span class="a" aria-hidden="true">→</span><span class="n">Sent to the bank account</span></div></div>
</figure>
<section class="cs-iters cl" aria-labelledby="clit-h">
  <div class="it-head"><div><p class="it-k">Iterations</p><h3 id="clit-h">Four places I changed my mind</h3></div><div class="it-tabs" role="group" aria-label="Screen"><button type="button" class="it-tab" data-it="win" aria-pressed="true">Winning a card</button><button type="button" class="it-tab" data-it="dash" aria-pressed="false">Dashboard</button><button type="button" class="it-tab" data-it="how" aria-pressed="false">How rewards work</button><button type="button" class="it-tab" data-it="limit" aria-pressed="false">Enrolment limits</button></div></div>
  <div class="it-panel" data-itp="win"><div class="it-side"><p class="it-v">Card in the chat header</p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_win1" aria-label="Enlarge Card in the chat header"><img loading="lazy" decoding="async" src="${IMG.cl_win1.src}" width="${IMG.cl_win1.w}" height="${IMG.cl_win1.h}" alt=""></button></div><ul class="it-notes"><li class="g">Space-efficient</li><li class="g">Leaves the existing flow untouched</li><li class="b">The scratch card barely gets noticed</li></ul></div><div class="it-side"><p class="it-v">Card on the success screen <em>Shipped</em></p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_win2" aria-label="Enlarge Card on the success screen"><img loading="lazy" decoding="async" src="${IMG.cl_win2.src}" width="${IMG.cl_win2.w}" height="${IMG.cl_win2.h}" alt=""></button></div><ul class="it-notes"><li class="g">The win appears right on the success screen, so it feels like a moment</li><li class="g">Well highlighted, and a steadier layout</li></ul></div></div><div class="it-panel" data-itp="dash" hidden><div class="it-side"><p class="it-v">Exploration 1</p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_dash1" aria-label="Enlarge Exploration 1"><img loading="lazy" decoding="async" src="${IMG.cl_dash1.src}" width="${IMG.cl_dash1.w}" height="${IMG.cl_dash1.h}" alt=""></button></div><ul class="it-notes"><li class="g">Minimal layout</li><li class="b">Only today's earnings; everything else is one more tap away</li><li class="b">Bank transfer history sits two taps deep</li></ul></div><div class="it-side"><p class="it-v">Exploration 2 <em>Shipped</em></p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_dash2" aria-label="Enlarge Exploration 2"><img loading="lazy" decoding="async" src="${IMG.cl_dash2.src}" width="${IMG.cl_dash2.w}" height="${IMG.cl_dash2.h}" alt=""></button></div><ul class="it-notes"><li class="g">All reward history on the same page</li></ul></div></div><div class="it-panel" data-itp="how" hidden><div class="it-side"><p class="it-v">Three cards to swipe</p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_how1" aria-label="Enlarge Three cards to swipe"><img loading="lazy" decoding="async" src="${IMG.cl_how1.src}" width="${IMG.cl_how1.w}" height="${IMG.cl_how1.h}" alt=""></button></div><ul class="it-notes"><li class="b">Three screens of reading before the idea lands</li></ul></div><div class="it-side"><p class="it-v">A short video and a summary <em>Shipped</em></p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_how2" aria-label="Enlarge A short video and a summary"><img loading="lazy" decoding="async" src="${IMG.cl_how2.src}" width="${IMG.cl_how2.w}" height="${IMG.cl_how2.h}" alt=""></button></div><ul class="it-notes"><li class="g">A 20–30 second video is easier to grasp, and intent is high here, so people watch it</li><li class="g">Clearer hierarchy, with the amount you can win up front</li></ul></div></div><div class="it-panel" data-itp="limit" hidden><div class="it-side"><p class="it-v">Rules in a second popup</p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_edge2" aria-label="Enlarge Rules in a second popup"><img loading="lazy" decoding="async" src="${IMG.cl_edge2.src}" width="${IMG.cl_edge2.w}" height="${IMG.cl_edge2.h}" alt=""></button></div><ul class="it-notes"><li class="b">A popup on top of a popup, which Nielsen Norman Group advises against on mobile</li></ul></div><div class="it-side"><p class="it-v">A link to the support page <em>Shipped</em></p><div class="cl-shot"><button class="zoom" type="button" data-zoom="cl_edge1" aria-label="Enlarge A link to the support page"><img loading="lazy" decoding="async" src="${IMG.cl_edge1.src}" width="${IMG.cl_edge1.w}" height="${IMG.cl_edge1.h}" alt=""></button></div><ul class="it-notes"><li class="g">"Know more" opens the support page instead of stacking another popup</li></ul></div></div>
</section>
<section class="sec"><h2 class="lab">The dashboard</h2><div class="text"><p>Tabs replaced the hamburger menu, since they're easier to reach. "View bank transfer history" moved up because coordinators kept wanting it, and rewards became a clean table. Many coordinators are 25 to 50, so text stays large, and anything small is bold.</p></div></section>
${pic('cl_final','Final dashboard screens','The final dashboard: rewards, scratch cards and history')}
<div class="cs-two cs-eq">
  ${pic('cl_bank','Bank transfer history, two versions','Bank transfer history: the simpler list shipped')}
  ${pic('cl_cards','All scratch cards','Every card, opened and unopened')}
</div>
${pic('cl_ftux','First-time dashboard','First visit: empty states, with a nudge to earn the first card')}
<div class="cs-mock cl bare"><figure class="cl-vid wide"><video data-vsrc="clv_empty" muted loop playsinline autoplay poster="${IMG.clv_empty.src}" aria-label="Empty and loading states, with a shimmer while data loads"></video><figcaption>Empty and loading states, with a shimmer while data loads</figcaption></figure></div>
<section class="sec"><h2 class="lab">Guarding against gaming it</h2><div class="text"><p>Cash for enrolments invites fake ones. Enrolment is limited to office hours, with caps per hour and per day, and clear messages when a limit is hit.</p></div></section>
${pic('cl_limits','Enrolment limit messages','Daily, hourly and time-window limits')}
<section class="sec"><h2 class="lab">Small moments</h2><div class="text"><p>A few micro-animations to make winning feel like winning.</p></div></section>
<div class="cl-vids"><figure class="cl-vid "><video data-vsrc="clv_success" muted loop playsinline autoplay poster="${IMG.clv_success.src}" aria-label="Enrolment success, with the card sliding in"></video><figcaption>Enrolment success, with the card sliding in</figcaption></figure><figure class="cl-vid "><video data-vsrc="clv_scratch" muted loop playsinline autoplay poster="${IMG.clv_scratch.src}" aria-label="Scratching a card to reveal the reward"></video><figcaption>Scratching a card to reveal the reward</figcaption></figure><figure class="cl-vid "><video data-vsrc="clv_limit" muted loop playsinline autoplay poster="${IMG.clv_limit.src}" aria-label="An out-of-hours limit message"></video><figcaption>An out-of-hours limit message</figcaption></figure></div>
<section class="sec"><h2 class="lab">What changed</h2><div><div class="stats"><div><b>+26%</b><span>Enrolments</span></div><div><b>+12%</b><span>Conversions</span></div></div><p class="text">A few months later, when the team came back to me for another project, I asked how it went. These were the numbers.</p></div></section>
<blockquote class="cs-quote"><p>“Rupam's ability to turn ideas into high-fidelity designs quickly is impressive. Her user-focused approach and attention to detail made a big impact on the final product.”</p><footer class="by">The product manager I worked with at Curelink</footer></blockquote>
<section class="sec"><h2 class="lab">What I took away</h2><div><p class="text" style="color:var(--mute)">My first freelance project, on a very tight deadline.</p><div class="decs">
  <div><b>Deadlines I could keep</b><p>Setting realistic ones, then sticking to them.</p></div>
  <div><b>Staying flexible</b><p>Ready to change designs or plans quickly, and go the extra mile for the client.</p></div>
  <div><b>Using what you have</b><p>You rarely get the best resources, but using the ones you have well goes a long way.</p></div>
</div></div></section>
${caseNav('curelink')}`; },

clearfeed: () => {
const ui=(k,alt,cap)=>`<figure class="cs-mock"><div class="cs-win"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>app.clearfeed.ai</span></div><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button></div>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const pic=(k,alt,cap)=>`<figure class="cs-mock bare"><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const im=(k,alt,cap)=>`<figure class="cs-img"><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
return `
<section class="ph text"><a class="back" href="#/work/previous/clearfeed">Back to home</a><h1>Answering the same Slack question only once</h1><p>ClearFeed's customers run support inside Slack, and the same questions kept coming back. I designed how a support head plugs their docs into GPT, checks the answers, and switches automated replies on.</p></section>
<div class="facts"><div><span>Role</span>Product Design Intern</div><div><span>Team</span>1 PM, 4 developers, 2 data scientists, 1 researcher</div><div><span>Timeline</span>2.5 months, Jan–Sep '23 internship</div><div><span>Platform</span>Web</div></div>
<section class="sec"><h2 class="lab">A 30-second primer</h2><div class="text"><p>Lots of B2B companies, especially in the US, support their customers in shared Slack channels. It's fast and people love it, until there are hundreds of channels and nobody knows which question is open, who owns it, or which ones are about to breach an SLA.</p><p>ClearFeed sits on top of Slack and turns those channels into a proper support queue, with a dashboard for response insights.</p></div></section>
<section class="sec"><h2 class="lab">The problem</h2><div class="text"><p class="quote">Support teams were answering the same questions again and again, by digging through docs and old replies each time.</p><p>It slowed every agent down. And after ChatGPT, every support leader was asking some version of this:</p></div></section>
<blockquote class="cs-quote"><p>“How can these AI systems be more efficient? How can our agents not have to respond to so many user queries at all? And how can we make it easier for agents to resolve problems?”</p></blockquote>
<section class="sec"><h2 class="lab">What we heard</h2><div><p class="text" style="color:var(--mute)">We ran interviews, rewatched old recordings, read what support leaders were writing, and I sat with ClearFeed's own support team to watch how they worked. Interviews were expensive, so we saved them for support heads.</p></div></section>
<ol class="cs-insights"><li><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/></svg></span><p>Support teams have been <mark>aware of this problem</mark>, repeat questions, for years.</p></li><li><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8 8h8M8 11.5h6"/></svg></span><p>On top of their docs, they had <mark>invested in FAQs and knowledge bases</mark> for customers.</p></li><li><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.2c-.5.4-1.3 0-1.3-.6V17A2.5 2.5 0 0 1 4 14.5Z"/></svg></span><p><mark>85% of users prefer asking in Slack</mark> instead of searching a support portal.</p></li><li><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></span><p>Keeping those <mark>knowledge bases up to date</mark> was a constant struggle.</p></li><li><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg></span><p>Ironically, <mark>Slack channels themselves</mark> are one of the best sources of knowledge.</p></li></ol>
<section class="sec"><h2 class="lab">What it adds up to</h2><div class="heard">
  <div>Knowledge bases existed, but agents rarely used them, so the same answer got rewritten by hand.</div>
  <div>A steady stream of repeat questions buried the urgent, unusual ones.</div>
  <div>More repeat questions meant more people, which made support expensive to scale.</div>
  <div>Replies varied from agent to agent, so customers got an inconsistent experience.</div>
</div></section>
<section class="sec"><h2 class="lab">Who I designed for</h2><div class="text"><p>The Head of Customer Support, the person who sets this up. Think David: 15 years in support, 7 leading a team, measured on SLAs, response times and how stretched his team feels.</p><p>His job with our feature came down to three things.</p></div></section>
<div class="cs-steps"><div class="cs-step"><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="6" cy="5" r="2"/><path d="M6 7v4a4 4 0 0 0 4 4h8"/><path d="M15 12l3 3-3 3"/></svg></span><b>Index</b><p>Connect public and private docs to GPT within hours, by pasting URLs or using ready-made connectors.</p></div><div class="cs-step"><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.6-5"/></svg></span><b>Test</b><p>Ask real questions and check how accurate and relevant the answers are, before any customer sees them.</p></div><div class="cs-step"><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2.5" y="7" width="19" height="10" rx="5"/><circle cx="16.5" cy="12" r="3"/></svg></span><b>Activate</b><p>Switch GPT answers on for a triage channel, so the easy questions get deflected.</p></div></div>
<section class="sec"><h2 class="lab">Two halves, two designers</h2><p class="text">I owned the setup in the web app. Suraj Mahraj, my senior, owned how it shows up in Slack. We met often, since each half depended on the other, and he unblocked me more than once.</p></section>
<div class="cs-parts">
  <div class="cs-part2"><span class="n">Part 01</span><b>Configuring the data sources and setting them up</b><span class="who" style="--c:#F2C94C;--t:#1A1A1F"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3l15 7-6.3 2-3 6.8z" fill="#F2C94C" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg><i>Rupam Gumber</i></span></div>
  <span class="plus" aria-hidden="true">+</span>
  <div class="cs-part2"><span class="n">Part 02</span><b>Seeing it in action on Slack</b><span class="who" style="--c:#E0603A;--t:#fff"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3l15 7-6.3 2-3 6.8z" fill="#E0603A" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg><i>Suraj Mahraj</i></span></div>
</div>
<section class="sec"><h2 class="lab">Sketching first</h2><div class="text"><p>Coffee, paper, and a lot of versions of how the three steps could sit together in one flow, before anything went into Figma.</p></div></section>
${im('cf_sketch','Early sketches')}
<section class="sec"><h2 class="lab">Step 1: index</h2><div class="text"><p>There are dozens of possible sources, so I asked customers directly. ClearFeed can broadcast a message to every customer channel, so I used it as a poll. Public documentation and Confluence came out on top, and became the first release.</p><p>Then I sat with the data science team to learn exactly what each source needs to connect, so the forms asked for nothing extra.</p></div></section>
<div class="cs-two cs-eq">
  <figure class="cs-slack"><div class="cs-msg"><img class="av" src="${IMG.abPortrait.src}" alt="" width="36" height="36"><div><p class="meta"><b>Rupam Gumber</b><span>11:55</span></p><p>Hi, I'm looking for your input on which data source you use most. I'm designing GPT Powered Automated Answers, and the most popular sources will be released first. Options below; reply if you use something else.</p><ol><li>Public data sources</li><li>Confluence</li><li>Zendesk</li><li>Freshdesk</li><li>Intercom</li></ol></div></div><figcaption>The poll, sent to every customer channel at once</figcaption></figure>
  <figure class="cs-fields"><div class="cs-fields-in">
    <div><b>Source 1: Public docs</b><ul><li>Name of the source</li><li>Tags, like version or type</li><li>One or more URLs</li><li>One or more excluded URLs</li></ul></div>
    <div><b>Source 2: Confluence</b><ul><li>Name of the source</li><li>Tags, like version or type</li><li>Space name: index every page, or pick pages</li></ul></div>
  </div><figcaption>What each source needs, agreed with data science</figcaption></figure>
</div>
<section class="cs-iters" aria-labelledby="it-h">
  <div class="it-head"><div><p class="it-k">Iterations</p><h3 id="it-h">What changed before the final version</h3></div><div class="it-tabs" role="group" aria-label="Screen"><button type="button" class="it-tab" data-it="intro" aria-pressed="true">Introductory screen</button><button type="button" class="it-tab" data-it="details" aria-pressed="false">Details screen</button><button type="button" class="it-tab" data-it="final" aria-pressed="false">Final screen</button></div></div>
  <div class="it-panel" data-itp="intro"><div class="it-side"><p class="it-v">Iteration 1</p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it1" aria-label="Enlarge Iteration 1"><img loading="lazy" decoding="async" src="${IMG.cf_it1.src}" width="${IMG.cf_it1.w}" height="${IMG.cf_it1.h}" alt=""></button></div><ul class="it-notes"><li class="g">Consistent with our other empty states</li><li class="b">The value wasn't clear</li></ul></div><div class="it-side"><p class="it-v">Iteration 2 <em>Shipped</em></p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it2" aria-label="Enlarge Iteration 2"><img loading="lazy" decoding="async" src="${IMG.cf_it2.src}" width="${IMG.cf_it2.w}" height="${IMG.cf_it2.h}" alt=""></button></div><ul class="it-notes"><li class="g">Clarity over consistency: an animation shows what it does</li><li class="g">Reads as an introduction, not an empty state</li></ul></div></div><div class="it-panel" data-itp="details" hidden><div class="it-side"><p class="it-v">Iteration 1</p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it3" aria-label="Enlarge Iteration 1"><img loading="lazy" decoding="async" src="${IMG.cf_it3.src}" width="${IMG.cf_it3.w}" height="${IMG.cf_it3.h}" alt=""></button></div><ul class="it-notes"><li class="b">As a side sheet, the animation behind it still distracted, even dimmed</li></ul></div><div class="it-side"><p class="it-v">Iteration 2 <em>Shipped</em></p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it4" aria-label="Enlarge Iteration 2"><img loading="lazy" decoding="async" src="${IMG.cf_it4.src}" width="${IMG.cf_it4.w}" height="${IMG.cf_it4.h}" alt=""></button></div><ul class="it-notes"><li class="g">A calmer, more stable full screen</li></ul></div></div><div class="it-panel" data-itp="final" hidden><div class="it-side"><p class="it-v">Iteration 1</p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it5" aria-label="Enlarge Iteration 1"><img loading="lazy" decoding="async" src="${IMG.cf_it5.src}" width="${IMG.cf_it5.w}" height="${IMG.cf_it5.h}" alt=""></button></div><ul class="it-notes"><li class="b">A table couldn't fit all the tags</li><li class="b">Most teams have 4–5 sources, so a table was overkill</li></ul></div><div class="it-side"><p class="it-v">Iteration 2 <em>Shipped</em></p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="cf_it6" aria-label="Enlarge Iteration 2"><img loading="lazy" decoding="async" src="${IMG.cf_it6.src}" width="${IMG.cf_it6.w}" height="${IMG.cf_it6.h}" alt=""></button></div><ul class="it-notes"><li class="g">Clearer hierarchy: name, status and tags in one card</li></ul></div></div>
</section>
<section class="sec"><h2 class="lab">The final flow</h2><div><p class="text" style="color:var(--mute)">Minimal on purpose: fewer choices meant fewer setup mistakes and a faster first run.</p>
<div class="decs">
  <div><b>An intro that shows, not tells</b><p>The first screen animates what the feature does, so nobody has to read a wall of text to get it.</p></div>
  <div><b>Pick a source, fill a short form</b><p>Clear labels and tooltips where people usually got stuck.</p></div>
  <div><b>Progress you can see</b><p>Indexing takes time, so live status keeps expectations right and builds trust.</p></div>
  <div><b>Status at a glance</b><p>Colour-coded indexing, failed and indexed states across every source.</p></div>
</div></div></section>
${ui('cf_fs1','Index public documentation','Adding a public docs source')}
${ui('cf_fs2','Index Confluence','Adding Confluence, with spaces and pages to pick')}
${ui('cf_fs3','Data sources overview','Every source and its status at a glance')}
${pic('cf_fs4','Eight key screens and twelve components','Eight key screens, twelve new components')}
<section class="sec"><h2 class="lab">Step 2: test</h2><div class="text"><p>Support heads wanted to double-check that their docs were really indexed before trusting the bot. I borrowed the pattern from simple ask-and-answer web apps, mapped the information it needed, and showed both the generated answer and the search results behind it.</p></div></section>
<figure class="cs-tree2" role="img" aria-label="The test screen holds three things: select data sources, the question input, and the output with references and search results.">
  <div class="root"><span class="dot"></span>Test screen</div>
  <div class="links" aria-hidden="true"></div>
  <div class="kids">
    <div><span class="cs-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6"/></svg></span><b>Select data sources</b><span>Which docs to test against</span></div>
    <div><span class="cs-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3"/><path d="M7 12h6"/><path d="M16 10.5v3"/></svg></span><b>Input</b><span>A real question to ask</span></div>
    <div><span class="cs-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v16H6z"/><path d="M9 8.5h6M9 12h6M9 15.5h3.5"/></svg></span><b>Output</b><span>The answer, plus references and search results</span></div>
  </div>
  <figcaption>What the test screen needed to hold</figcaption>
</figure>
<section class="sec"><h2 class="lab">Step 3: activate</h2><div class="text"><p>Pricing was set per generated answer, so answering everything could get expensive. I added a second mode where an answer is only generated when an agent reacts with an emoji. A single toggle turns it on or off, and teams choose how many answers to generate.</p></div></section>
<figure class="cs-flow2" role="img" aria-label="Activation: step 1, select data sources. Step 2, select a mode: automatic, recommended, which drafts an answer for every query, or emoji, which only drafts one when an agent reacts.">
  <div class="stp"><span class="num">1</span><b>Select data sources</b><span>All sources, or a chosen few</span></div>
  <svg class="arr" viewBox="0 0 48 12" aria-hidden="true"><path d="M0 6h44M39 1l5 5-5 5"/></svg>
  <div class="stp"><span class="num">2</span><b>Select mode</b>
    <div class="opt on"><i></i><div><b>Automatic <em>Recommended</em></b><span>Drafts an answer for every query, without sending it</span></div></div>
    <div class="opt"><i></i><div><b>Emoji</b><span>Drafts one only when an agent reacts with 🔍</span></div></div>
  </div>
  <figcaption>Two modes, because pricing was per generated answer</figcaption>
</figure>
<section class="sec"><h2 class="lab">How it shows up in Slack</h2><div class="text"><p>A customer asks a question and the virtual agent replies from the indexed docs. If the answer misses, the agent taps "No, file a ticket", replies by hand, and AI suggests turning that reply into a new FAQ. Suraj designed this side.</p></div></section>
${pic('cf_slack1','Generated answer in a Slack thread','A generated answer in the thread, with its sources')}
${pic('cf_slack2','Ticket filing and FAQ suggestions in Slack','Filing a ticket, and turning a new reply into an FAQ')}
<section class="sec"><h2 class="lab">What changed</h2><div><div class="stats"><div><b>96%</b><span>Task success when setting it up</span></div><div><b>12%</b><span>Of queries solved by generated answers</span></div><div><b>1.6×</b><span>Faster response time</span></div></div><p class="text">Measured over two weeks, across two customer buckets. It rolled out to ClearFeed customers bucket by bucket, and teams like CastAI used it to mix their canned responses with official documentation.</p></div></section>
<figure class="cs-testi"><p class="lab">Customer testimonial · CastAI</p><blockquote><p>“It's interesting to have a combination of a previous set of canned responses by the support engineering team for customer queries, and the official Kubernetes documentation as input to the large language model to form a hybrid approach and be able to help our customers with automatic response.”</p></blockquote><figcaption><img src="/m/4cf0439e900c.webp" alt="" width="48" height="48"><span><b>Shravan Ashok</b>Staff Technical Program Manager, CastAI</span></figcaption></figure>
<section class="sec"><h2 class="lab">After launch</h2><div><p class="text" style="color:var(--mute)">We collected feedback from each bucket, and three requests stood out.</p>
<div class="decs">
  <div><b>Exclude URLs</b><p>Teams wanted control over what got indexed, so I added include and exclude rules for public docs.</p></div>
  <div><b>More than one answer</b><p>Some wanted several drafts to pick from, so activation settings got a number of responses.</p></div>
  <div><b>Fully automatic, not yet</b><p>A few asked for replies with no human check. We held off: a wrong answer sent to a customer costs more than a slow one, and the model needed more data first.</p></div>
</div></div></section>
${ui('cf_ex1','Before: excluded URLs as a plain list','Before: excluded URLs as a plain list')}
${ui('cf_ex2','After: index pages by URL conditions','After: rules like starts with, contains or does not contain')}
${ui('cf_multi','Choosing the number of responses','Activation settings, now with the number of responses to generate')}
<section class="sec"><h2 class="lab">Where it went</h2><div class="text"><p>My internship ended here. The feature kept growing, and it now works across all public docs and many private knowledge sources.</p></div></section>
<section class="sec"><h2 class="lab">Thanks to</h2><p class="text">Suraj Mahraj, who designed the Slack side and unblocked me more than once, and Ankit Jain, Lalit Indoria and Joydeep Sen Sarma for the reviews along the way.</p></section>
${caseNav('clearfeed')}`; },

xalts: () => {
const ui=(k,alt,cap)=>`<figure class="cs-mock xa"><div class="cs-win"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>app.xalts.io</span></div><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button></div>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const pic=(k,alt,cap)=>`<figure class="cs-mock xa bare"><button class="zoom" type="button" data-zoom="${k}" aria-label="Enlarge ${alt}"><img loading="lazy" decoding="async" src="${IMG[k].src}" width="${IMG[k].w}" height="${IMG[k].h}" alt=""></button>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
return `
<section class="ph text"><a class="back" href="#/work/previous/xalts">Back to home</a><h1>Letting banks bring their own vault</h1><p>Xalts was holding the keys to its clients' digital assets, and banks didn't love that. I designed how an institution connects its own Fireblocks custody instead, and how it sees every wallet once it does.</p></section>
<div class="facts"><div><span>Role</span>Product Design Intern</div><div><span>Team</span>1 PM, 2 designers, 1 researcher, developers</div><div><span>Timeline</span>3 weeks, May–Jul '24</div><div><span>Platform</span>Web</div></div>

<section class="sec"><h2 class="lab">A 30-second primer</h2><div class="text"><p>Xalts, backed by Accel and Citi Ventures, helps banks tokenise real assets like bonds, bank guarantees and treasury bills. Those assets live on blockchains like Polygon and Avalanche, inside wallets.</p><p>Whoever holds the keys to those wallets is the custodian. That one word is what this project is about.</p></div></section>
<div class="xa-what">
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4M12 7.5v1.8M12 16.7v1.8"/></svg></span><p class="k">What</p><p>Tokenising financial assets: bonds, bank guarantees, treasury bills, currencies.</p></div>
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v3a2 2 0 0 0 2 2H14"/></svg></span><p class="k">How</p><p>Automated workflows that move assets through each step.</p></div>
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/></svg></span><p class="k">Why</p><p>Many parties can collaborate, move faster, own and transfer assets digitally, and keep data where it must live.</p></div>
</div>
<section class="sec"><h2 class="lab">The problem</h2><div class="text"><p class="quote">Without an outside custodian, Xalts held every key. Banks weren't comfortable with that, and Xalts didn't want the risk either.</p><p>Being a custodian comes with heavy security and compliance duties. Institutions wanted a provider they already trusted, like Fireblocks, to carry them.</p></div></section>
<section class="sec"><h2 class="lab">What we heard</h2><div class="heard">
  <div>Most institutions wanted to bring their own custody provider.</div>
  <div>Many already had a Fireblocks workspace, or would happily pay for one.</div>
  <div>Some used other providers, like Blockdaemon and Taurus.</div>
  <div>Whatever the setup, every wallet had to be visible inside Xalts.</div>
</div></section>
<section class="sec"><h2 class="lab">Who I designed for</h2><div class="text"><p>Each organisation has one root user, its admin, and in practice that's someone from IT. I gathered user stories from our founders and PMs, who talked to these clients directly.</p></div></section>
<div class="xa-persona">
  <div class="who"><span class="av" aria-hidden="true">R</span><div><b>Rajesh, 30</b><span>IT team, financial institution · root user</span></div></div>
  <p>Eight years setting up and maintaining systems at financial institutions, where everything must pass security and compliance reviews. Technical and careful, but not necessarily fluent in crypto terms.</p>
</div>
<div class="xa-stories">
  <div class="st me"><p class="t">Story 1 · Root user <em>Mine</em></p><p>Give the platform a Fireblocks workspace, so it can create wallets and sign on my behalf.</p></div>
  <div class="st me"><p class="t">Story 2 · Root user <em>Mine</em></p><p>See every wallet set up at organisation and user level, and the wallets behind each network.</p></div>
  <div class="st"><p class="t">Story 3 · Root user <em class="o">Ashmita</em></p><p>For each on-chain transaction, see which wallets signed it and what kind of transaction it was.</p></div>
  <div class="st"><p class="t">Story 4 · Normal user <em class="o">Ashmita</em></p><p>See only the details of my own wallets.</p></div>
</div>
<section class="sec"><h2 class="lab">Getting the requirements right</h2><div class="text"><p>Custody is unforgiving, so I worked through the technical requirements with the Fireblocks team directly, and checked feasibility with our developers as I went.</p></div></section>
${pic('xa_meet','Working session with the Fireblocks team','A working session with the Fireblocks team')}
<section class="sec"><h2 class="lab">Where it fits</h2><div class="text"><p>New users meet it inside onboarding, which was already long, so custody became its own small step, broken into four parts. Existing users get a nudge on the home screen that opens the same flow.</p></div></section>
<figure class="xa-onb" role="img" aria-label="Onboarding has four steps: select network, select RPC URL, set up custodian, connect root wallet. Setting up the custodian has four parts: select custodian, paste the API key, set a transaction authorisation policy, and see confirmation.">
  <ol class="main"><li><span>Step 1</span>Select network</li><li><span>Step 2</span>Select RPC URL</li><li class="on"><span>Step 3</span>Set up custodian</li><li><span>Step 4</span>Connect root wallet</li></ol>
  <div class="drop" aria-hidden="true"></div>
  <ol class="sub"><li><i>1</i>Select the custodian</li><li><i>2</i>Paste the API key from Fireblocks</li><li><i>3</i>Set a transaction authorisation policy</li><li><i>4</i>See it connected</li></ol>
  <figcaption>Custody as one step inside onboarding, in four small parts</figcaption>
</figure>
<section class="sec"><h2 class="lab">Mapping the wallets</h2><div class="text"><p>Before designing any screen, I mapped every wallet type and who controls it. It's the part that confuses everyone, including us at first.</p></div></section>
<div class="xa-wmap">
  <div class="w"><p class="h">Fireblocks</p><ul><li><b>Vault · Root wallet</b><span>Created by the bank, connected during onboarding, signed manually</span></li><li><b>Vault · Org wallet</b><span>Created by Xalts, signed through raw signing</span></li><li><b>API key</b><span>Revoked by deleting the API user</span></li></ul></div>
  <div class="w"><p class="h">Org smart contract wallet</p><ul><li><b>Admin</b><span>Root wallet</span></li><li><b>Owner</b><span>Org wallet on Fireblocks</span></li></ul></div>
  <div class="w"><p class="h">User EOA</p><ul><li><b>Created by Xalts</b><span>One per user, private keys kept in a secrets manager</span></li></ul></div>
  <div class="w"><p class="h">User smart contract wallet</p><ul><li><b>Admin</b><span>Root wallet, which can change the owner and co-signer; Xalts has no access</span></li><li><b>Owner</b><span>The user's EOA</span></li><li><b>Co-signer</b><span>Org wallet on Fireblocks, new in this project</span></li></ul></div>
</div>
<section class="sec"><h2 class="lab">Organising the console</h2><div class="text"><p>Then the information architecture: where networks, wallets and users live, so an admin can start from whatever they already know.</p></div></section>
<div class="xa-ia" role="img" aria-label="Organisation console information architecture with four branches: networks, wallet management, users, and blockchain integrations.">
  <p class="root">Organisation console</p>
  <div class="cols">
    <div><b>Networks</b><ul><li>Polygon Amoy</li><li>Avalanche C-chain<ul><li>Info</li><li>Wallets: org and user SCWs</li><li>Transactions</li></ul></li><li>Besu, private network</li></ul></div>
    <div><b>Wallet management</b><ul><li>Info: who controls the account</li><li>Primary wallets<ul><li>Root wallet, connected in onboarding</li><li>Org wallet, managed by Fireblocks</li></ul></li><li>Smart contract wallets<ul><li>Org SCW</li><li>User SCW</li></ul></li></ul></div>
    <div><b>Users</b><ul><li>Info</li><li>Teams</li><li>Wallets<ul><li>User EOA</li><li>SCWs per network, with admin, owner and co-signer</li></ul></li></ul></div>
    <div><b>Integrations</b><ul><li>Wallet integrations</li><li>RPC integrations</li></ul></div>
  </div>
</div>
<section class="sec"><h2 class="lab">Sketches first</h2><div class="text"><p>Rough sketches and low-fidelity wireframes went to the team early, so feedback landed before any pixels were polished.</p></div></section>
${pic('xa_sketch','Early sketches and wireframes','Paper first, feedback early')}
<section class="sec"><h2 class="lab">Part 1: connecting Fireblocks</h2><div class="text"><p>It had to feel like the rest of onboarding, so it reused the same patterns and a step tracker on the right. The first screen explains what bringing your own custodian means, then lets you pick one.</p></div></section>
${ui('xa_connect','Choose a custodian','Choosing Fireblocks as the custodian')}
<section class="cs-iters xa" aria-labelledby="xit-h">
  <div class="it-head"><div><p class="it-k">Iterations</p><h3 id="xit-h">Two decisions that took a second try</h3></div><div class="it-tabs" role="group" aria-label="Decision"><button type="button" class="it-tab" data-it="api" aria-pressed="true">Pasting the API key</button><button type="button" class="it-tab" data-it="tap" aria-pressed="false">Setting the transaction policy</button></div></div>
  <div class="it-panel" data-itp="api"><div class="it-side"><p class="it-v">A video walkthrough</p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="xa_api1" aria-label="Enlarge A video walkthrough"><img loading="lazy" decoding="async" src="${IMG.xa_api1.src}" width="${IMG.xa_api1.w}" height="${IMG.xa_api1.h}" alt=""></button></div><ul class="it-notes"><li class="g">The clearest experience</li><li class="b">Fireblocks changes its UI often, and we had nobody to re-record the video</li></ul></div><div class="it-side"><p class="it-v">Written steps <em>Shipped</em></p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="xa_api2" aria-label="Enlarge Written steps"><img loading="lazy" decoding="async" src="${IMG.xa_api2.src}" width="${IMG.xa_api2.w}" height="${IMG.xa_api2.h}" alt=""></button></div><ul class="it-notes"><li class="g">Clear, actionable steps</li><li class="g">We can update the copy in minutes, whenever Fireblocks changes</li></ul></div></div><div class="it-panel" data-itp="tap" hidden><div class="it-side"><p class="it-v">A link to Fireblocks</p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="xa_tap1" aria-label="Enlarge A link to Fireblocks"><img loading="lazy" decoding="async" src="${IMG.xa_tap1.src}" width="${IMG.xa_tap1.w}" height="${IMG.xa_tap1.h}" alt=""></button></div><ul class="it-notes"><li class="b">The link lands on a login screen, since every workspace URL is different</li><li class="b">We still can't tell whether the policy was actually set</li></ul></div><div class="it-side"><p class="it-v">A confirmation checkbox <em>Shipped</em></p><div class="cs-win sm"><div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><button class="zoom" type="button" data-zoom="xa_tap2" aria-label="Enlarge A confirmation checkbox"><img loading="lazy" decoding="async" src="${IMG.xa_tap2.src}" width="${IMG.xa_tap2.w}" height="${IMG.xa_tap2.h}" alt=""></button></div><ul class="it-notes"><li class="g">An explicit confirmation, which also covers us legally if questions come up later</li><li class="g">Doesn't break the flow</li></ul></div></div>
</section>
<section class="sec"><h2 class="lab">Confirm it worked</h2><div class="text"><p>When you've just handed over your keys, "did that work?" shouldn't be a guess. A clear success screen closes the loop and makes the whole system feel more reliable.</p></div></section>
${ui('xa_success','Fireblocks custodian connected','The success state')}
<section class="sec"><h2 class="lab">Part 2: seeing every wallet</h2><div class="text"><p>The organisation console already existed. My job was to make custody and wallet ownership obvious: who is admin, who is owner, who co-signs.</p></div></section>
${ui('xa_console','Organisation console home','The console, with key numbers up front')}
<div class="decs">
  <div><b>Key numbers up front</b><p>Admins see what matters the moment they land, instead of digging.</p></div>
  <div><b>Three wallet tabs</b><p>Primary, organisation and user wallets, each one click away.</p></div>
  <div><b>Jargon, explained in place</b><p>Info icons next to terms like smart contract wallet.</p></div>
  <div><b>Addresses you can scan</b><p>First and last 10 characters, full address on hover, the way Etherscan does it.</p></div>
  <div><b>Pagination for slow data</b><p>User wallets are slow to fetch, so paging keeps the table responsive.</p></div>
  <div><b>Nothing hidden</b><p>The API key shows as masked, with docs on policies and how to revoke access.</p></div>
</div>
${ui('xa_wallets','Primary wallets tab','Primary wallets: root and org wallets, and who manages them')}
${ui('xa_uscw','User smart contract wallets','User smart contract wallets, paged')}
<section class="sec"><h2 class="lab">Wallets everywhere</h2><div class="text"><p>People don't all start from the same place, so wallets appear wherever you'd look for them: on each network, and on each user.</p></div></section>
${ui('xa_networks','Networks list','Networks, with chain ID and environment')}
${ui('xa_netw','Wallets on a network','A new Wallets tab on each network')}
${ui('xa_users','Users list','Users, with their teams and status')}
${ui('xa_userw','Wallets on a user','Each user’s EOA and smart contract wallets in one place')}
<section class="sec"><h2 class="lab">What changed</h2><div><div class="stats"><div><b>+20%</b><span>Growth in institutional clients</span></div><div><b>3 weeks</b><span>From user stories to handoff</span></div></div><p class="text">Institutions could keep custody with a provider they trusted, which made them far more comfortable putting real assets on the platform, and Xalts stopped carrying a risk it never wanted.</p></div></section>
<div class="xa-what">
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></span><p class="k">Security and compliance</p><p>Keys held by a custodian banks already trust.</p></div>
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M6 16l4-5 3 3 5-7"/><path d="M15 7h3v3"/></svg></span><p class="k">Better adoption</p><p>More institutions willing to bring real assets on-chain.</p></div>
  <div><span class="cs-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg></span><p class="k">Less risk for Xalts</p><p>No more acting as everyone's custodian.</p></div>
</div>
<section class="sec"><h2 class="lab">What I'd do next</h2><div class="text"><p><b style="font-weight:500">Teach inside the console.</b> Tooltips, a short guided tour and a little education for first-time admins, beyond the info icons.</p><p><b style="font-weight:500">Test with real bank admins.</b> We designed from stories told by founders and PMs. Watching a few Rajeshes do this live would have caught edge cases we guessed at.</p><p><b style="font-weight:500">Design for the next custodian now.</b> Blockdaemon and Taurus were already in the research. A flow built for any provider would save a redesign.</p></div></section>
<section class="sec"><h2 class="lab">What I took away</h2><div class="text"><p>A project this technical looked daunting at first. Breaking it into small, clear steps made it manageable, and so did asking for help early and giving it back.</p></div></section>
<section class="sec"><h2 class="lab">Thanks to</h2><p class="text">Sunil Nakka (Product Manager), Ashmita Roy (Product Designer) and Jeet Parekh (Tech Lead), who made a very technical three weeks feel manageable.</p></section>
${caseNav('xalts')}`; }};

/* ---------- behaviour ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function playAI(el){
  if(el.dataset.busy) return; el.dataset.busy = 1;
  const typed = el.querySelector('.ai-typed'); const txt = 'Make it golden hour';
  el.classList.remove('golden'); typed.textContent = '';
  if(reduce){ typed.textContent = txt; el.classList.add('golden'); delete el.dataset.busy; return; }
  let i = 0; setTimeout(function step(){
    typed.textContent = txt.slice(0, ++i);
    if(i < txt.length) setTimeout(step, 55);
    else setTimeout(()=>{ el.classList.add('golden'); setTimeout(()=>delete el.dataset.busy, 1400); }, 350);
  }, 400);
}
const offers = ['Take a discount on your next months','Pause your plan for a month','Switch to a smaller plan'];
function wireSave(el){
  const opts = el.querySelectorAll('.save-opts span'); const t = el.querySelector('.save-t'); let k = 0, timer;
  const set = n => { opts.forEach((o,j)=>o.classList.toggle('on', j===n)); t.textContent = offers[n]; };
  const host = el.closest('.card') || el;
  host.addEventListener('mouseenter', ()=>{ if(reduce) return; timer = setInterval(()=>{ k=(k+1)%3; set(k); }, 1300); });
  host.addEventListener('mouseleave', ()=>{ clearInterval(timer); });
}
function wire(root){
  root.querySelectorAll('[data-ai]').forEach(el=>{
    playAI(el);
    (el.closest('.card')||el).addEventListener('mouseenter', ()=>playAI(el));
  });
  root.querySelectorAll('[data-save]').forEach(wireSave);
}
function wireFilters(){
  const btns = document.querySelectorAll('[data-f]');
  btns.forEach(b=>b.addEventListener('click', ()=>{
    const f = b.dataset.f;
    btns.forEach(x=>x.setAttribute('aria-pressed', String(x===b)));
    const list = document.getElementById('plist');
    list.innerHTML = projects.filter(p=>f==='All'||p.tag===f).map(card).join('');
    wire(list);
  }));
}
function wireScreens(){
  const btns=document.querySelectorAll('[data-sf]');
  btns.forEach(b=>b.addEventListener('click',()=>{
    const f=b.dataset.sf; btns.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    document.querySelectorAll('[data-kind]').forEach(d=>{ d.hidden = !(f==='All'||d.dataset.kind===f); d.style.marginTop = (f==='All'&&d.dataset.kind==='Web')?'96px':'0'; });
  }));
}
function wireView(){
  const bs=document.querySelectorAll('[data-cols]'), g=document.getElementById('plist');
  bs.forEach(b=>b.addEventListener('click',()=>{ bs.forEach(x=>x.setAttribute('aria-pressed',String(x===b))); g.classList.toggle('one', b.dataset.cols==='1'); }));
}
(function cursorLabel(){
  const el=document.createElement('div'); el.id='cursor-label'; el.setAttribute('aria-hidden','true'); document.body.appendChild(el);
  let x=-200,y=-200,tx=-200,ty=-200,raf=0;
  const tick=()=>{ x+=(tx-x)*(reduce?1:.22); y+=(ty-y)*(reduce?1:.22); el.style.transform=`translate(${x+14}px,${y+14}px)`; raf=(Math.abs(tx-x)>.3||Math.abs(ty-y)>.3)?requestAnimationFrame(tick):0; };
  document.addEventListener('mousemove',e=>{ tx=e.clientX; ty=e.clientY; if(!raf) raf=requestAnimationFrame(tick); });
  const hide=()=>el.classList.remove('on');
  const at=(t)=>{ t=t&&t.closest&&t.closest('[data-label]'); if(t){ if(el.textContent!==t.dataset.label) el.textContent=t.dataset.label; el.style.background=t.dataset.color; el.classList.add('on'); } else hide(); };
  document.addEventListener('pointerover',e=>{ if(e.pointerType!=='mouse'){ hide(); return; } at(e.target); });
  document.addEventListener('pointerout',e=>{ if(!e.relatedTarget) hide(); });
  document.documentElement.addEventListener('mouseleave',hide);
  addEventListener('blur',hide);
  let sraf=0; addEventListener('scroll',()=>{ if(!el.classList.contains('on')&&sraf) return; cancelAnimationFrame(sraf); sraf=requestAnimationFrame(()=>{ sraf=0; at(document.elementFromPoint(tx,ty)); }); },{passive:true});
  addEventListener('hashchange',hide); addEventListener('pointerdown',()=>{ if(!document.elementFromPoint(tx,ty)?.closest('[data-label]')) hide(); });
})();
let xhOff=null;
function wireX(){
  if(xhOff){xhOff();xhOff=null;}
  const h=document.querySelector('[data-xh]'); if(!h) return;
  const st=h.querySelector('[data-xhstick]'), vw=h.querySelector('[data-xhview]'), tr=h.querySelector('[data-xhtrack]'), bar=h.querySelector('[data-xhbar]');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){ h.classList.add('free'); const pad=Math.max(16,Math.round(h.querySelector('.xhd').getBoundingClientRect().left)); vw.style.marginLeft=(-Math.round(st.getBoundingClientRect().left))+'px'; vw.style.paddingLeft=vw.style.paddingRight=pad+'px'; vw.style.setProperty('--xp',pad+'px'); return; }
  let dist=0;
  const size=()=>{ const pad=Math.max(16,Math.round(h.querySelector('.xhd').getBoundingClientRect().left)); vw.style.marginLeft=(-Math.round(st.getBoundingClientRect().left))+'px'; vw.style.paddingLeft=vw.style.paddingRight=pad+'px'; vw.style.setProperty('--xp',pad+'px'); dist=Math.max(0,tr.scrollWidth-(vw.clientWidth-2*pad)); const sh=st.offsetHeight; st.style.top=Math.max(64,(innerHeight-sh)/2)+'px'; h.style.height=(sh+dist)+'px'; upd(); };
  const upd=()=>{ const r=h.getBoundingClientRect(); const top=parseFloat(st.style.top)||64; const prog=dist?Math.min(1,Math.max(0,(top-r.top)/dist)):0; tr.style.transform=`translate3d(${-prog*dist}px,0,0)`; bar.style.transform=`scaleX(${prog})`; };
  let raf=0; const on=()=>{ if(!raf) raf=requestAnimationFrame(()=>{raf=0;upd();}); };
  addEventListener('scroll',on,{passive:true}); addEventListener('resize',size);
  tr.querySelectorAll('img').forEach(im=>{ if(!im.complete) im.addEventListener('load',size,{once:true}); });
  size(); setTimeout(size,400);
  xhOff=()=>{ removeEventListener('scroll',on); removeEventListener('resize',size); };
}
function wireGH(){
  const g=document.getElementById('gh'), r=document.getElementById('gh-read'); if(!g) return;
  let sel=null; r.dataset.def=r.innerHTML;
  const show=i=>{ r.textContent=i.dataset.t; };
  g.addEventListener('mouseover',e=>{ const i=e.target.closest('i[data-t]'); if(i) show(i); });
  g.addEventListener('mouseleave',()=>{ if(sel) r.textContent=sel.dataset.t; else r.innerHTML=r.dataset.def; });
  g.addEventListener('click',e=>{ const i=e.target.closest('i[data-t]'); if(!i) return; if(sel) sel.classList.remove('sel'); sel=i; i.classList.add('sel'); show(i); });
}
window.addEventListener('click',e=>{ const b=e.target.closest&&e.target.closest('[data-flsnd]'); if(!b) return; e.preventDefault(); e.stopImmediatePropagation(); const v=b.parentElement.querySelector('video'); v.muted=!v.muted; if(!v.muted){ v.currentTime=0; v.play().catch(()=>{}); } b.classList.toggle('is-on',!v.muted); b.setAttribute('aria-label',v.muted?'Turn sound on':'Turn sound off'); },true);
document.addEventListener('click',e=>{
  const z=e.target.closest('[data-zoom]'); if(!z) return;
  const k=z.dataset.zoom, dlg=document.getElementById('lb'); if(dlg.open) return;
  dlg.querySelector('img').src=IMG[k].src; dlg.querySelector('img').alt=z.getAttribute('aria-label').replace('Enlarge ','');
  dlg.showModal();
});
document.addEventListener('click',e=>{ const n=e.target.closest('[data-next]'); if(!n) return; setTab(n.dataset.next); const w=document.querySelector('.work'); if(w) w.scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'}); const b=document.getElementById('tab-'+n.dataset.next); if(b) b.focus({preventScroll:true}); });
let spyLock=0, tabSpy=null;
function markTab(id){
  currentTab=id;
  const bar=document.querySelector('.tabs'); if(!bar) return;
  bar.querySelectorAll('[data-tab]').forEach(b=>{ const on=b.dataset.tab===id; b.setAttribute('aria-current',String(on)); });
  const b=bar.querySelector(`[data-tab="${id}"]`);
  if(b && bar.scrollWidth>bar.clientWidth) bar.scrollTo({left:b.offsetLeft-(bar.clientWidth-b.offsetWidth)/2,behavior:reduce?'auto':'smooth'});
}
function setTab(id, focus){
  const t=TABS.find(x=>x.id===id)||TABS[0];
  const panel=document.getElementById('panel-'+t.id); if(!panel) return;
  markTab(t.id);
  if(focus){ const b=document.getElementById('tab-'+t.id); if(b) b.focus({preventScroll:true}); }
  history.replaceState(null,'','#/work/'+t.id);
  spyLock=Date.now()+1200;
  panel.scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'});
}
function wireTabs(){
  if(tabSpy){ removeEventListener('scroll',tabSpy); removeEventListener('resize',tabSpy); removeEventListener('scrollend',unlock); tabSpy=null; }
  const bs=[...document.querySelectorAll('[data-tab]')]; if(!bs.length) return;
  bs.forEach((b,i)=>{
    b.addEventListener('click',()=>setTab(b.dataset.tab));
    b.addEventListener('keydown',e=>{ let j=null;
      if(e.key==='ArrowRight') j=(i+1)%bs.length; else if(e.key==='ArrowLeft') j=(i-1+bs.length)%bs.length; else if(e.key==='Home') j=0; else if(e.key==='End') j=bs.length-1;
      if(j!==null){ e.preventDefault(); setTab(bs[j].dataset.tab,true); } });
  });
  const panels=[...document.querySelectorAll('[data-panel]')];
  let raf=0;
  const check=()=>{ raf=0; if(Date.now()<spyLock) return;
    const bar=document.querySelector('.tabs'); const line=(bar?bar.getBoundingClientRect().bottom:0)+window.innerHeight*0.25;
    let cur=panels[0];
    for(const p of panels){ if(p.getBoundingClientRect().top<=line) cur=p; }
    if(cur && cur.dataset.panel!==currentTab) markTab(cur.dataset.panel);
  };
  tabSpy=()=>{ if(!raf) raf=requestAnimationFrame(check); };
  addEventListener('scroll',tabSpy,{passive:true}); addEventListener('resize',tabSpy);
  addEventListener('scrollend',unlock);
}
function unlock(){ if(spyLock){ spyLock=0; if(tabSpy) tabSpy(); } }
let spyHandler=null;
function wireSpy(){
  if(spyHandler){ removeEventListener('scroll',spyHandler); removeEventListener('resize',spyHandler); spyHandler=null; }
  const nav=document.getElementById('snav'); if(!nav) return;
  const links=[...nav.querySelectorAll('a[data-sec]')], ind=nav.querySelector('.ind');
  const secs=links.map(l=>document.getElementById('w-'+l.dataset.sec));
  let cur=null;
  const mark=id=>{ if(id===cur) return; cur=id;
    links.forEach(l=>l.setAttribute('aria-current',String(l.dataset.sec===id)));
    const l=links.find(x=>x.dataset.sec===id);
    if(!l){ ind.style.width='0'; return; }
    ind.style.width=l.offsetWidth+'px'; ind.style.transform=`translateX(${l.offsetLeft}px)`;
    const nl=nav.scrollLeft, r=l.offsetLeft+l.offsetWidth;
    if(l.offsetLeft<nl||r>nl+nav.clientWidth) nav.scrollTo({left:l.offsetLeft-24,behavior:reduce?'auto':'smooth'});
    history.replaceState(null,'', id?'#/work/'+id:'#/'); };
  const check=()=>{ const y=innerHeight*0.35; let best=null;
    secs.forEach(sec=>{ const r=sec.getBoundingClientRect(); if(r.top<=y && r.bottom>0) best=sec.dataset.sec; });
    mark(best); };
  links.forEach(l=>l.addEventListener('click',e=>{ e.preventDefault(); document.getElementById('w-'+l.dataset.sec).scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'}); }));
  let tick=false; spyHandler=()=>{ if(tick) return; tick=true; requestAnimationFrame(()=>{ tick=false; check(); }); };
  addEventListener('scroll',spyHandler,{passive:true}); addEventListener('resize',spyHandler);
  check();
}
function wireHero(){
  const h=document.querySelector('.intro'); if(!h) return; const fx=h.querySelector('.hero-fx'); if(!fx) return;
  let raf=0,ev=null;
  const upd=()=>{ raf=0; if(!ev) return; const r=fx.getBoundingClientRect(), hr=h.getBoundingClientRect();
    fx.style.setProperty('--mx',(ev.clientX-r.left)+'px'); fx.style.setProperty('--my',(ev.clientY-r.top)+'px');
    if(!reduce){ h.style.setProperty('--px',((ev.clientX-hr.left)/hr.width-.5).toFixed(3)); h.style.setProperty('--py',((ev.clientY-hr.top)/hr.height-.5).toFixed(3)); } };
  const zone=document.querySelector('.intro'); const area=[zone, document.querySelector('.top')];
  area.forEach(a=>{ a.addEventListener('mousemove',e=>{ ev=e; h.classList.add('lit'); if(!raf) raf=requestAnimationFrame(upd); });
                     a.addEventListener('mouseleave',e=>{ if(!e.relatedTarget||!(zone.contains(e.relatedTarget)||document.querySelector('.top').contains(e.relatedTarget))){ h.classList.remove('lit'); h.style.setProperty('--px',0); h.style.setProperty('--py',0);} }); });
}
/* ---------- hero icon click effects ---------- */
let heroFxOff=null;
function wireHeroFx(){
  if(heroFxOff){ heroFxOff(); heroFxOff=null; }
  const lead=document.querySelector('.intro .lead'); if(!lead) return;
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dark=()=>document.documentElement.dataset.theme==='dark';
  const MAP={'i-pen':['designer','#7B61FF',pen],'i-eye':['vision','#2F5BD3',eye],'i-bolt':['executes fast','#E0703A',bolt],'i-team':['takes the team ahead','#2F8F5B',team]};
  const icons=[...lead.querySelectorAll('.ico')]; const offs=[];
  const layer=()=>{ const d=document.createElement('div'); d.className='hfx'; d.setAttribute('aria-hidden','true'); document.body.appendChild(d); return d; };
  const NS='http://www.w3.org/2000/svg';
  const el=(tag,attrs,parent)=>{ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); if(parent) parent.appendChild(e); return e; };
  const done=(d,ms)=>setTimeout(()=>d.remove(),ms);
  const TH={'i-pen':'Thinks like a founder','i-eye':'Where UX meets revenue','i-bolt':'Ship, learn, iterate','i-team':'Never the blocker'};
  let card=null, cardKey=null, cardT=0;
  const closeCard=()=>{ clearTimeout(cardT); if(!card) return; const c=card; card=null; cardKey=null; c.classList.remove('on'); setTimeout(()=>c.remove(),220); };
  const showThought=(key,ic,c)=>{
    if(cardKey===key){ closeCard(); return; } closeCard();
    const ir=ic.getBoundingClientRect();
    const d=document.createElement('div'); d.className='hpill'; d.setAttribute('role','status'); d.style.setProperty('--tc',c); d.textContent=TH[key];
    document.body.appendChild(d);
    const w=d.offsetWidth; const left=Math.max(12,Math.min(ir.left+ir.width/2-w/2,innerWidth-w-12));
    d.style.left=(left+scrollX)+'px'; const below=ir.bottom>lead.getBoundingClientRect().bottom-ir.height*1.2; d.classList.toggle('dn',below); d.style.top=(below?ir.bottom+scrollY+10:ir.top+scrollY-d.offsetHeight-10)+'px'; d.style.setProperty('--ax',(ir.left+ir.width/2-left)+'px');
    requestAnimationFrame(()=>d.classList.add('on')); card=d; cardKey=key; cardT=setTimeout(closeCard,2600);
  };
  const outside=e=>{ if(card&&!card.contains(e.target)&&!e.target.closest('.fx-btn')) closeCard(); };
  const esc=e=>{ if(e.key==='Escape') closeCard(); };
  document.addEventListener('click',outside); document.addEventListener('keydown',esc); addEventListener('resize',closeCard);
  offs.push(()=>{ document.removeEventListener('click',outside); document.removeEventListener('keydown',esc); removeEventListener('resize',closeCard); closeCard(); });
  icons.forEach(ic=>{
    const key=[...ic.classList].find(c=>MAP[c]); if(!key) return;
    const [word,col,fn]=MAP[key];
    ic.classList.add('fx-btn'); ic.setAttribute('role','button'); ic.setAttribute('tabindex','0'); ic.setAttribute('aria-label','Play: '+word); ic.removeAttribute('aria-hidden');
    let busy=false;
    const go=()=>{ if(busy) return; busy=true; const c=(key==='i-eye'&&dark())?'#7EA0FF':col;
      ic.animate([{transform:'scale(1)'},{transform:'scale(.86)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
      let ms;
      if(RM){ ic.animate([{boxShadow:'0 0 0 0 '+c+'00'},{boxShadow:'0 0 0 6px '+c+'55'},{boxShadow:'0 0 0 0 '+c+'00'}],{duration:700}); ms=700; }
      else ms=fn(ic,ic.closest('.hw'),c);
      showThought(key,ic,c);
      setTimeout(()=>busy=false,ms); };
    const onK=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } };
    ic.addEventListener('click',go); ic.addEventListener('keydown',onK);
    offs.push(()=>{ ic.removeEventListener('click',go); ic.removeEventListener('keydown',onK); });
  });
  heroFxOff=()=>offs.forEach(f=>f());

  function pen(ic,hw,c){
    const rs=[...hw.getClientRects()].filter(x=>x.width>4); const t0=rs.length?Math.min(...rs.map(x=>x.top)):0; const ln=rs.filter(x=>Math.abs(x.top-t0)<8); const r=ln.length?{left:Math.min(...ln.map(x=>x.left)),right:Math.max(...ln.map(x=>x.right)),top:t0,height:Math.max(...ln.map(x=>x.height))}:hw.getBoundingClientRect(); r.width=r.right-r.left; const d=layer();
    const pad=14, W=r.width+pad*2+120, H=r.height+90;
    Object.assign(d.style,{left:(r.left-pad)+'px',top:(r.top-40)+'px',width:W+'px',height:H+'px'});
    const s=el('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H},d);
    const ir=ic.getBoundingClientRect(); const tw=Math.max(20,Math.min(r.width,ir.left-r.left-8));
    const y=40+r.height*.92, x1=pad, x2=pad+tw;
    const u=el('path',{d:`M${x1} ${y} C ${x1+tw*.3} ${y+5}, ${x1+tw*.65} ${y-3}, ${x2} ${y+2}`,fill:'none',stroke:c,'stroke-width':3,'stroke-linecap':'round'},s);
    const L=u.getTotalLength(); u.style.strokeDasharray=L; u.style.strokeDashoffset=L;
    u.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:620,easing:'cubic-bezier(.6,0,.3,1)',fill:'forwards'});
    hw.animate([{color:'inherit'},{color:c,offset:.3},{color:c,offset:.7},{color:'inherit'}],{duration:1600});
    d.animate([{opacity:1},{opacity:1,offset:.75},{opacity:0}],{duration:1600,fill:'forwards'});
    done(d,1650); return 1600;
  }
  function eye(ic,hw,c){
    const ir=ic.getBoundingClientRect(), wr=hw.getBoundingClientRect(), d=layer();
    const cx=(wr.left+wr.right)/2, cy=(wr.top+wr.bottom)/2, R=Math.max(wr.width,wr.height)*.62;
    const veil=document.createElement('div'); veil.className='hfx-veil';
    const m=`radial-gradient(ellipse ${R}px ${R*.62}px at ${cx}px ${cy}px, transparent 70%, #000 100%)`;
    veil.style.webkitMaskImage=m; veil.style.maskImage=m; d.appendChild(veil);
    veil.animate([{opacity:0},{opacity:1,offset:.25},{opacity:1,offset:.7},{opacity:0}],{duration:1800,easing:'ease-in-out',fill:'forwards'});
    const ex=(ir.left+ir.right)/2, ey=(ir.top+ir.bottom)/2;
    for(let i=0;i<2;i++){ const ring=document.createElement('div'); ring.className='hfx-ring'; ring.style.cssText=`left:${ex}px;top:${ey}px;border-color:${c}`; d.appendChild(ring);
      ring.animate([{transform:'translate(-50%,-50%) scale(.2)',opacity:.9},{transform:`translate(-50%,-50%) scale(${(R*2.2)/40})`,opacity:0}],{duration:1100,delay:i*220,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'}); }
    hw.classList.add('hfx-focus'); hw.style.setProperty('--fc',c);
    setTimeout(()=>hw.classList.remove('hfx-focus'),1650);
    done(d,1850); return 1800;
  }
  function bolt(ic,hw,c){
    const ir=ic.getBoundingClientRect(), wr=hw.getBoundingClientRect(), d=layer();
    const ex=(ir.left+ir.right)/2, ey=(ir.top+ir.bottom)/2;
    const fl=document.createElement('div'); fl.className='hfx-flash'; fl.style.cssText=`left:${ex}px;top:${ey}px;background:radial-gradient(circle, ${c}66, ${c}00 65%)`; d.appendChild(fl);
    fl.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:1},{transform:'translate(-50%,-50%) scale(2.4)',opacity:0}],{duration:800,easing:'ease-out',fill:'forwards'});
    for(let i=0;i<10;i++){ const a=(i/10)*Math.PI*2+Math.random()*.3, len=22+Math.random()*26, sp=document.createElement('i'); sp.className='hfx-spark'; sp.style.cssText=`left:${ex}px;top:${ey}px;background:${c};transform:translate(-50%,-50%) rotate(${a}rad)`; d.appendChild(sp);
      sp.animate([{transform:`translate(-50%,-50%) rotate(${a}rad) translateX(6px) scaleX(.3)`,opacity:1},{transform:`translate(-50%,-50%) rotate(${a}rad) translateX(${len}px) scaleX(1)`,opacity:1,offset:.5},{transform:`translate(-50%,-50%) rotate(${a}rad) translateX(${len+14}px) scaleX(.2)`,opacity:0}],{duration:900,delay:40,easing:'cubic-bezier(.1,.8,.3,1)',fill:'forwards'}); }
    // speed streaks across the phrase
    [0.35,0.6,0.82].forEach((f,i)=>{ const st=document.createElement('div'); st.className='hfx-streak'; st.style.cssText=`left:${wr.left-20}px;top:${wr.top+wr.height*f}px;width:${wr.width*(i===1?1:.7)}px;background:linear-gradient(90deg, ${c}00, ${c} 75%, ${c}00);height:${i===1?3:2}px`; d.appendChild(st);
      st.animate([{transform:'translateX(-40px) scaleX(.2)',opacity:0},{transform:'translateX(0) scaleX(1)',opacity:1,offset:.35},{transform:`translateX(${wr.width*.5}px) scaleX(.4)`,opacity:0}],{duration:700,delay:80+i*70,easing:'cubic-bezier(.6,0,.2,1)',fill:'forwards'}); });
    hw.animate([{transform:'none',filter:'none'},{transform:'translateX(-3px) skewX(-6deg)',filter:'blur(.6px)'},{transform:'translateX(3px) skewX(3deg)',filter:'none'},{transform:'translateX(-1px)'},{transform:'none'}],{duration:520,delay:80,easing:'ease-out'});
    ic.animate([{background:c},{background:'var(--paper)'}],{duration:700,easing:'ease-out'});
    done(d,1100); return 1100;
  }
  function team(ic,hw,c){
    const ir=ic.getBoundingClientRect(), d=layer();
    const sx=ir.right-4, sy=ir.bottom-2, dist=Math.max(70,Math.min(260,innerWidth-sx-24));
    const tones=[c,'#7B61FF','#E0703A','#2F5BD3',c];
    tones.forEach((t,i)=>{ const p=document.createElement('div'); p.className='hfx-person'; p.style.cssText=`left:${sx}px;top:${sy}px;--t:${t}`; p.innerHTML='<b></b><s></s>'; d.appendChild(p);
      const del=i*110, end=dist-(i*22);
      p.animate([{transform:'translate(-14px,0) scale(0)',opacity:0},{transform:'translate(0,-6px) scale(1)',opacity:1,offset:.15},
        {transform:`translate(${end*.35}px,-2px)`,offset:.4},{transform:`translate(${end*.55}px,-7px)`,offset:.55},{transform:`translate(${end*.75}px,-2px)`,offset:.7},
        {transform:`translate(${end}px,-6px)`,opacity:1,offset:.85},{transform:`translate(${end+12}px,-2px)`,opacity:0}],{duration:1400,delay:del,easing:'linear',fill:'forwards'}); });
    done(d,2000); return 1800;
  }
}

let hsHandler=null;
function wireHS(){
  if(hsHandler){ removeEventListener('scroll',hsHandler); removeEventListener('resize',hsHandler); hsHandler=null; }
  const hs=document.getElementById('hs'); if(!hs) return;
  const sticky=hs.querySelector('.hs-sticky'), view=hs.querySelector('.hs-view'), track=document.getElementById('hs-track');
  const pinned = matchMedia('(hover:hover) and (min-width:821px)').matches && !reduce;
  if(!pinned){ hs.classList.add('free'); hs.style.height=''; track.style.transform=''; return; }
  hs.classList.remove('free');
  let dist=0;
  const size=()=>{ dist=Math.max(0,track.scrollWidth-view.clientWidth); hs.style.height=(sticky.offsetHeight+dist)+'px'; };
  const upd=()=>{ const r=hs.getBoundingClientRect(); const top=parseFloat(getComputedStyle(sticky).top)||0;
    const p=Math.min(1,Math.max(0,(top-r.top)/Math.max(1,dist))); track.style.transform=`translate3d(${-p*dist}px,0,0)`; };
  let tick=false; hsHandler=e=>{ if(e&&e.type==='resize') size(); if(tick) return; tick=true; requestAnimationFrame(()=>{ tick=false; upd(); }); };
  size(); upd();
  addEventListener('scroll',hsHandler,{passive:true}); addEventListener('resize',hsHandler);
  [...track.querySelectorAll('img')].forEach(im=>{ if(!im.complete) im.addEventListener('load',()=>{ size(); upd(); },{once:true}); });
}
/* ---------- tab cat ---------- */
let catState=null;
function wireCat(){
  if(catState){ catState.cleanup(); catState=null; }
  const wrap=document.querySelector('.tabs-wrap'), bar=wrap&&wrap.querySelector('.tabs');
  if(!wrap||!bar) return;
  const rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cat=document.createElement('div');
  cat.className='tcat'; cat.setAttribute('aria-hidden','true'); cat.title='';
  cat.innerHTML=`<div class="tc-in"><svg viewBox="0 0 40 30" fill="currentColor">
   <g class="sit">
    <path class="stail" d="M14 27.5c-6 .4-8.6-3.2-7.6-6.4" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M13 28.5c-.8-7.4 2-12.6 7.4-12.8 5.3-.2 8 5 7.4 12.8z"/>
    <path class="ear l" d="M15.4 7.2l.4-6 4.2 3.8z"/><path class="ear r" d="M24.6 7.2l-.4-6-4.2 3.8z"/>
    <circle cx="20" cy="10" r="6.6"/>
    <ellipse class="eye" cx="17.6" cy="9.8" rx="1.05" ry="1.25"/><ellipse class="eye" cx="22.4" cy="9.8" rx="1.05" ry="1.25"/>
    <path class="nose" d="M19.2 12h1.6l-.8.9z"/>
    <ellipse cx="17.2" cy="28.4" rx="2.1" ry="1.3"/><ellipse cx="22.8" cy="28.4" rx="2.1" ry="1.3"/>
   </g>
   <g class="walk">
    <path class="wtail" d="M8.5 15.5C4 14.6 2.6 9.6 4.6 6.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <rect class="lg a" x="9.4" y="19.5" width="3" height="8.6" rx="1.5"/><rect class="lg b" x="13.4" y="19.5" width="3" height="8.6" rx="1.5"/>
    <rect class="lg b" x="21" y="19.5" width="3" height="8.6" rx="1.5"/><rect class="lg a" x="25" y="19.5" width="3" height="8.6" rx="1.5"/>
    <g class="wbody"><rect x="7.5" y="12.6" width="22.5" height="10.4" rx="5.2"/>
    <path class="ear" d="M26.6 7.6l.6-5.6 3.6 3.6z"/><path class="ear r" d="M33.4 7.8l1.4-5.4-4.6 2.8z"/>
    <circle cx="30.6" cy="11" r="6.2"/>
    <ellipse class="eye" cx="29.6" cy="10.4" rx="1" ry="1.2"/><ellipse class="eye" cx="33.4" cy="10.4" rx="1" ry="1.2"/>
    <path class="nose" d="M34.6 12.4h1.4l-.7.8z"/></g>
   </g></svg></div><span class="tc-pop">mew <i>♥</i></span>`;
  wrap.appendChild(cat);
  const W=32,H=24;
  let x=0, timers=[], walkT=0, home=true, hovering=false;
  const later=(f,ms)=>{ const t=setTimeout(f,ms); timers.push(t); return t; };
  const geo=()=>{ const wr=wrap.getBoundingClientRect(), br=bar.getBoundingClientRect(); return {wr,br,y:br.top-wr.top-H+4}; };
  const tabX=b=>{ const {wr}=geo(), r=b.getBoundingClientRect(); return r.left-wr.left+r.width/2-W/2; };
  const active=()=>bar.querySelector('[data-tab][aria-current="true"]')||bar.querySelector('[data-tab]');
  const place=(nx,anim)=>{
    const {y,br,wr}=geo(); const minX=br.left-wr.left+6, maxX=br.right-wr.left-W-6;
    nx=Math.max(minX,Math.min(maxX,nx));
    const dist=Math.abs(nx-x);
    clearTimeout(walkT);
    if(!anim||rm||dist<4){ cat.classList.remove('go','walking'); x=nx; cat.style.transform=`translate(${x}px,${y}px)`; return; }
    cat.classList.toggle('left',nx<x);
    const d=Math.max(.45,Math.min(2.2,dist/150));
    cat.style.setProperty('--tcat-d',d+'s');
    cat.classList.add('go','walking'); x=nx;
    requestAnimationFrame(()=>{ cat.style.transform=`translate(${x}px,${y}px)`; });
    walkT=setTimeout(()=>{ cat.classList.remove('walking','go'); },d*1000);
  };
  const goHome=anim=>{ home=true; const a=active(); if(a) place(tabX(a),anim); };
  goHome(false);
  /* follow tab changes */
  const mo=new MutationObserver(()=>{ if(!hovering) goHome(true); });
  mo.observe(bar,{attributes:true,subtree:true,attributeFilter:['aria-current']});
  /* idle life */
  const blink=()=>{ cat.classList.add('blink'); later(()=>cat.classList.remove('blink'),240); later(blink,2600+Math.random()*3400); };
  const twitch=()=>{ cat.classList.add('twitch'); later(()=>cat.classList.remove('twitch'),420); later(twitch,5000+Math.random()*6000); };
  const wander=()=>{ later(()=>{ if(!hovering&&!cat.classList.contains('walking')&&document.visibilityState==='visible'){
      if(home){ const tabs=[...bar.querySelectorAll('[data-tab]')].filter(b=>b!==active()); const pick=tabs[Math.floor(Math.random()*tabs.length)];
        if(pick){ home=false; const ax=tabX(active()), px=tabX(pick); place(ax+(px-ax)*(.35+Math.random()*.5),true); } }
      else goHome(true); }
    wander(); },8000+Math.random()*7000); };
  if(!rm){ later(blink,1800); later(twitch,9000); }
  /* pointer */
  const onEnter=()=>{ hovering=true; if(cat.classList.contains('walking')){ const m=new DOMMatrix(getComputedStyle(cat).transform); x=m.m41; cat.classList.remove('go','walking'); clearTimeout(walkT); const {y}=geo(); cat.style.transform=`translate(${x}px,${y}px)`; } };
  const onLeave=()=>{ hovering=false; };
  const pop=cat.querySelector('.tc-pop');
  const onClick=e=>{ e.stopPropagation(); pop.classList.remove('on'); void pop.offsetWidth; pop.classList.add('on'); cat.classList.add('blink'); later(()=>cat.classList.remove('blink'),240); };
  cat.addEventListener('mouseenter',onEnter); cat.addEventListener('mouseleave',onLeave); cat.addEventListener('click',onClick);
  /* keep aligned */
  const reflow=()=>{ if(home) goHome(false); else place(x,false); };
  addEventListener('resize',reflow); bar.addEventListener('scroll',reflow,{passive:true});
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ if(catState&&catState.cat===cat) reflow(); });
  catState={cat,cleanup(){ timers.forEach(clearTimeout); clearTimeout(walkT); mo.disconnect(); removeEventListener('resize',reflow); bar.removeEventListener('scroll',reflow); cat.remove(); }};
}

function render(){
  const parts = (__route() || '').split('/');
  let r = parts[0] || 'home';
  const tabMap={atlabs:'atlabs',screens:'ui'};
  let jump=null;
  if(r==='whiteboarding'||(r==='work'&&parts[1]==='wb')){ jump='s-wb'; r='home'; }
  else if(r==='x'||(r==='work'&&parts[1]==='x')){ jump='s-x'; r='about'; }
  else if(r==='resume'){ r='home'; setTimeout(()=>openResume(false),0); }
  else if(r==='work'){ currentTab=(TABS.find(t=>t.id===parts[1])||TABS[0]).id; r='home'; }
  else if(tabMap[r]){ currentTab=tabMap[r]; r='home'; }
  const fn = pages[r] || pages.home;
  document.getElementById('app').innerHTML = `<main>${fn(parts[1])}${r!=='about'?moreHTML():''}</main>`;
  document.querySelectorAll('.top nav a[data-r]').forEach(a=>{ if(a.dataset.r===r) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  const titles = {'video-teaser':'Video teaser case study — Rupam Gumber', 'create-image':'Create Image case study — Rupam Gumber', 'designing-in-production':'Designing in production — Rupam Gumber', alphy:'Alphy — Rupam Gumber', 'night-schedule':'Night Schedule — Rupam Gumber', curelink:'Curelink case study — Rupam Gumber', clearfeed:'ClearFeed case study — Rupam Gumber', resume:'Resume — Rupam Gumber', home:'Rupam Gumber — Product designer', atlabs:'Atlabs work — Rupam Gumber', xalts:'Xalts case study — Rupam Gumber', about:'About — Rupam Gumber', screens:'UI screens — Rupam Gumber', whiteboarding:'Whiteboarding — Rupam Gumber', case:'Case study — Rupam Gumber'};
  document.title = (window.__T&&__T[r==='home'?'':r]) || titles[r] || titles.home;
  const toWork = !jump && (parts[0]==='work' || ['atlabs','screens'].includes(parts[0]));
  window.scrollTo(0,0);
  wire(document.getElementById('app'));
  wireFilters();
  wireScreens();
  wireView();
  wireX();
  wireHero();
  wireHeroFx();
  wireHS();
  wireSpy();
  wireTabs();
  wireThenNow();
  wireCat();
  if(toWork){ const w=document.getElementById('panel-'+currentTab)||document.querySelector('.work'); const card=parts[0]==='work'&&parts[2]&&w?w.querySelector('a[href="#/'+parts[2]+'"]'):null; const tgt=card?(card.closest('figure,article,.wcard,.tile')||card):w;
    const go=()=>{ if(!tgt) return; if(card){ const y=tgt.getBoundingClientRect().top+scrollY-110; window.scrollTo(0,Math.max(0,y)); } else tgt.scrollIntoView({block:'start'}); };
    go(); if(card){ setTimeout(go,250); setTimeout(go,700); } }
  if(jump){ const j=document.getElementById(jump); if(j) j.scrollIntoView({block:'start'}); }
  wireGH();
  wireVids();
  fillSvgs();
  wireProgress();
  wireCI();
  wireDesk();
  const m=document.querySelector('.ab-motto'); if(m){ if(reduce||!('IntersectionObserver' in window)) m.classList.add('drawn'); else { const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ m.classList.add('drawn'); io.disconnect(); } },{threshold:.5}); io.observe(m); } }
}

/* ---------- bookshelf ---------- */
const BOOKS = [
 {
  "title": "The Design of Everyday Things",
  "author": "Don Norman",
  "note": "A timeless classic on usability & the role of design: if the user feels stupid, you did a bad job.",
  "color": "#F4C51C",
  "ink": "#2A1C10",
  "accent": "#C8322B",
  "height": 200,
  "width": 44
 },
 {
  "title": "Don't Make Me Think",
  "author": "Steve Krug",
  "note": "This is all about keeping web design simple & intuitive, if users pause, you've missed the mark.",
  "color": "#6B1F24",
  "ink": "#FFFFFF",
  "accent": "#E5B53A",
  "height": 178,
  "width": 32
 },
 {
  "title": "Lean UX",
  "author": "Jeff Gothelf with Josh Seiden",
  "note": "The book emphasizes on collaboration, experimentation, & continuous feedback.",
  "color": "#F1EDE2",
  "ink": "#2E6DB4",
  "accent": "#2E6DB4",
  "height": 190,
  "width": 36
 },
 {
  "title": "Universal Principles of Design",
  "author": "William Lidwell, Kritina Holden & Jill Butler",
  "note": "This is the ultimate design cheat sheet filled with design principles & real world examples.",
  "color": "#2F5DB8",
  "ink": "#FFFFFF",
  "accent": "#FFFFFF",
  "height": 212,
  "width": 52
 },
 {
  "title": "Solving Product Design Exercises",
  "author": "Artiom Dashinsky",
  "note": "A guide to cracking product design exercises, so you can wow in interviews.",
  "color": "#EFEFEE",
  "ink": "#1E1E1E",
  "accent": "#D9443A",
  "height": 172,
  "width": 28
 },
 {
  "title": "Think Straight",
  "author": "Darius Foroux",
  "note": "This is like a mind massage, soothing out the tangled thoughts & making life simpler.",
  "color": "#E0612B",
  "ink": "#1A1A1A",
  "accent": "#1A1A1A",
  "height": 170,
  "width": 30
 },
 {
  "title": "Tech Simplified",
  "author": "Deepak Singh",
  "note": "This book is like having a tech-savvy friend explain everything in plain English over coffee.",
  "color": "#F3F2EF",
  "ink": "#2B2B2B",
  "accent": "#C0392B",
  "height": 184,
  "width": 38
 },
 {
  "title": "Steal Like an Artist",
  "author": "Austin Kleon",
  "note": "A fun manifesto which says steal smart, remix boldly, & create something uniquely yours.",
  "color": "#141414",
  "ink": "#FFFFFF",
  "accent": "#FFFFFF",
  "height": 152,
  "width": 27
 },
 {
  "title": "Show Your Work!",
  "author": "Austin Kleon",
  "note": "This book is all about getting over the fear and proudly displaying your creative journey.",
  "color": "#F6D22E",
  "ink": "#141414",
  "accent": "#141414",
  "height": 152,
  "width": 27
 },
 {
  "title": "Keep Going",
  "author": "Austin Kleon",
  "note": "This is your creative pep talk, urging you to stay inspired and keep creating, no matter what.",
  "color": "#2E5FBF",
  "ink": "#FFFFFF",
  "accent": "#F6D22E",
  "height": 152,
  "width": 27
 }
];

/* footer CTA: hovering a button fills the whole footer until the pointer leaves it */
(function(){
  const foot=document.querySelector('.site-foot'); if(!foot) return;
  const ok=matchMedia('(hover:hover) and (min-width: 821px)');
  const origin=(btn,fill)=>{ const f=foot.getBoundingClientRect(), r=btn.getBoundingClientRect();
    fill.style.setProperty('--ft',(r.top-f.top)+'px'); fill.style.setProperty('--fl',(r.left-f.left)+'px');
    fill.style.setProperty('--fr',(f.right-r.right)+'px'); fill.style.setProperty('--fb',(f.bottom-r.bottom)+'px'); };
  const pairs=[['.sf-btn.primary','fe'],['.sf-btn.alt','fs']];
  pairs.forEach(([sel,key])=>{ const btn=foot.querySelector(sel), fill=foot.querySelector('.'+key); if(!btn||!fill) return;
    origin(btn,fill);
    btn.addEventListener('pointerenter',e=>{ if(e.pointerType!=='mouse'||!ok.matches) return;
      if(foot.dataset.fill===key) return;
      origin(btn,fill); void fill.offsetWidth;
      foot.querySelectorAll('.sf-fill').forEach(x=>x.classList.toggle('on',x===fill));
      foot.dataset.fill=key; });
  });
  const close=()=>{ const k=foot.dataset.fill; if(!k) return;
    pairs.forEach(([sel,key])=>{ const btn=foot.querySelector(sel), fill=foot.querySelector('.'+key); if(btn&&fill) origin(btn,fill); });
    delete foot.dataset.fill; };
  foot.addEventListener('pointerleave',close);
  addEventListener('scroll',()=>{ if(foot.dataset.fill){ const r=foot.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) close(); } },{passive:true});
  addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
})();

/* ---------- theme ---------- */
(function theme(){
  const root=document.documentElement, btn=document.getElementById('theme-btn');
  const apply=t=>{ root.setAttribute('data-theme',t); btn.setAttribute('aria-label', t==='dark'?'Switch to light mode':'Switch to dark mode'); };
  let saved=null; try{ saved=localStorage.getItem('theme'); }catch(e){}
  apply(window.__diwali||saved==='dark'?'dark':'light');
  btn.addEventListener('click',()=>{
    const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    try{ localStorage.setItem('theme',next); }catch(err){}
    const r=btn.getBoundingClientRect(), x=r.left+r.width/2, y=r.top+r.height/2;
    // overshoot the farthest corner so the slow end of the ease happens off-screen,
    // not while the edge is still crawling across the bottom-left corner
    const R=Math.ceil(Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))*1.18);
    const from=`circle(0px at ${x}px ${y}px)`, to=`circle(${R}px at ${x}px ${y}px)`, ease='cubic-bezier(.33,0,.15,1)';
    if(reduce){ apply(next); return; }
    root.classList.add('theming');
    const done=()=>requestAnimationFrame(()=>root.classList.remove('theming'));
    if(document.startViewTransition){
      const vt=document.startViewTransition(()=>apply(next));
      vt.ready.then(()=>{ root.animate({clipPath:[from,to]},{duration:820,easing:ease,fill:'both',pseudoElement:'::view-transition-new(root)'}); }).catch(()=>{});
      vt.finished.then(done,done);
    } else {
      const o=document.createElement('div');
      o.style.cssText='position:fixed;inset:0;z-index:2147483646;pointer-events:none;background:'+(next==='dark'?'#141416':'#FAFAF8');
      document.body.appendChild(o);
      o.animate({clipPath:[from,to]},{duration:820,easing:ease,fill:'forwards'}).finished.then(()=>{
        apply(next); requestAnimationFrame(()=>o.animate({opacity:[1,0]},{duration:220,fill:'forwards'}).finished.then(()=>{ o.remove(); done(); }));
      });
    }
  });
})();
document.getElementById('sf-top')?.addEventListener('click',e=>{ e.preventDefault(); scrollTo({top:0,behavior:reduce?'auto':'smooth'}); });
function fillSvgs(){ if(!window.ALSVG) return; document.querySelectorAll('[data-svg]:empty').forEach(el=>{ const sv=ALSVG[+el.dataset.svg]; if(sv) el.innerHTML=sv; }); }
function wireVids(){ if(!window.VID) return; document.querySelectorAll('video[data-vsrc]').forEach(v=>{ if(v.dataset.on) return; const e=VID[v.dataset.vsrc]; if(!e) return; const src=(e.mp4&&v.canPlayType('video/mp4; codecs="avc1.42E01E"'))?e.mp4:(e.webm&&v.canPlayType('video/webm; codecs="vp9"'))?e.webm:(e.mp4||e.webm); v.dataset.on=1; v.addEventListener('error',()=>{ v.removeAttribute('src'); v.load(); },{once:true}); v.src=src; if(!reduce){ const pr=v.play(); if(pr) pr.catch(()=>{}); } }); }
document.addEventListener('click',e=>{
  const t=e.target.closest('.comp-tile'); if(!t) return; const c=t.querySelector('a.case'); if(!c||e.target.closest('a.case')) return;
  e.preventDefault(); e.stopPropagation();
  const h=c.getAttribute('href'); if(/^https?:/.test(h)){ if(e.metaKey||e.ctrlKey||t.dataset.newtab) window.open(h,'_blank','noopener'); else location.href=h; } else location.hash=h.replace(/^#/,'');
},true);
/* ---------- case study navigation + reading progress ---------- */
const ED_WALK=[
 {f:0,t:1,b:[29.5,1.9,39,5.4],c:'Characters',r:'Story Characters',d:'Every character in the story, with a turnaround sheet. Tag them with @ in any prompt to keep them the same in every scene.'},
 {f:0,t:2,b:[56.7,1.9,67,5.4],c:'Captions',r:'Caption styles',d:'20+ styles with a live preview, set once for the whole video.'},
 {f:0,t:3,b:[69,89.4,88.4,93.2],c:'Select scenes to generate video',r:'Generate video',d:'Pick the scenes that are left, as video or storyboard. The cost is shown before you press anything.'},
 {f:0,t:4,b:[49.2,10.3,56.4,14.1],c:'Edit video',r:'Scene editor',d:'One scene at a time, with nine tools down the side and every past version under the preview.'},
 {f:4,t:11,b:[7.1,41.2,12.5,48.9],c:'AI Edit',r:'AI Edit (new design)',d:'Describe a change in plain words. This is my redesign, not live yet as of Oct 2026.'},
 {f:4,t:6,b:[7.1,57.8,12.5,64.8],c:'B-Roll',r:'B-roll',d:'Headings, text, images and sound effects on top of the scene.'},
 {f:6,t:7,b:[85.7,8.3,93.2,12.1],c:'Timeline',r:'Timeline',d:'The scene second by second: trim, crop, flip, speed, and lanes for images, text and audio.'},
 {f:7,t:8,b:[80.5,1.8,86,5.7],c:'Export',r:'Export menu',d:'Re-export at any resolution, download, share a link, open in Premiere Pro, or publish to YouTube, Instagram and Facebook.'},
 {f:7,t:9,b:[86.4,1.8,92.8,5.7],c:'Credits',r:'Credits menu',d:'What\u2019s left, when it expires, and what each recent story cost.'},
 {f:9,t:10,b:[61.8,24.4,92,28.8],c:'Rainbow Plate Kitchen',r:'Credit breakdown',d:'Every generation in the story, by scene and shot, with the model, length and cost.'}
];
const ED_FLOW=[
 {z:'Whole video',base:'ed_story',from:'Story page',b:[29.5,1.9,39,5.4],t:'Characters',k:'ed_chars',r:'Story Characters',d:'Every character in the story, with a turnaround sheet. Tag them with @ in any prompt.'},
 {z:'Whole video',base:'ed_story',from:'Story page',b:[56.7,1.9,67,5.4],t:'Captions',k:'ed_captions',r:'Caption styles',d:'20+ styles with a live preview, set once for the whole video.'},
 {z:'Scenes',base:'ed_story',from:'Story page',b:[69,89.3,88.4,93.4],t:'Select scenes to generate video',k:'ed_gen',r:'Generate video',d:'Pick the scenes that are left, as video or storyboard, with the cost shown.'},
 {z:'One scene',base:'ed_story',from:'Story page',b:[49.2,10.3,56.4,14.1],t:'Edit video',k:'ed_scene',r:'Scene editor',d:'One scene at a time, with nine tools down the side.'},
 {z:'One scene',base:'ed_scene',from:'Scene editor',b:[6.8,57.2,12.6,64.8],t:'B-Roll',k:'ed_broll',r:'B-roll panel',d:'Headings, text, images and sound effects on top of the scene.'},
 {z:'One scene',base:'ed_scene',from:'Scene editor',b:[6.8,41,12.6,48.8],t:'AI Edit',k:'ae1',r:'AI Edit panel',d:'Describe a change in plain words.'},
 {z:'One scene',base:'ed_scene',from:'Scene editor',b:[85.6,8.2,93.3,12.2],t:'Timeline',k:'ed_timeline',r:'Timeline',d:'The scene second by second: trim, crop, speed, and lanes for images, text and audio.'},
 {z:'Preview',base:'ed_scene',from:'Scene editor',b:[43.6,85.6,62.6,99],t:'Generation history',k:'ed_assets',r:'Assets library',d:'Every version made for this story, by scene. The one in use says Applied.'},
 {z:'Export',base:'ed_story',from:'Story page',b:[80.5,1.8,86,5.6],t:'Export',k:'ed_export',r:'Export menu',d:'Re-export, download, share a link, Premiere Pro, or publish to YouTube, Instagram and Facebook.'},
 {z:'Credits',base:'ed_story',from:'Story page',b:[86.4,1.8,92.8,5.6],t:'Credits',k:'ed_credits',r:'Credits menu',d:'What’s left, when it expires, and what each recent story cost.'},
 {z:'Credits',base:'ed_credits',from:'Credits menu',b:[6.5,54,95,64.8],t:'a story',k:'ed_breakdown',r:'Credit breakdown',d:'Every generation in that story, by scene and shot, with model and cost.'}
];

const CASES=[
 {id:'video-teaser',name:'Video teaser',line:'25 free seconds that became the main place people upgrade',kind:'Atlabs · Growth',c:'#C2410C',img:'vt_teaser'},
 {id:'create-image',name:'Create Image',line:'One calm surface for 24 AI models',kind:'Atlabs · AI tools',c:'#C2410C',img:'ci_hero'},
 {id:'editing-experience',name:'Editing experience',line:'One editor for every part of an AI video',kind:'Atlabs · Editor',c:'#23734A',img:'ed_story'},
 {id:'designing-in-production',name:'Designing in production',line:'68 merged PRs, the handoff gap closed',kind:'Atlabs · Design engineering',c:'#2F5BD3',img:'dp_thumb'},
 {id:'xalts',name:'Xalts',line:'Letting banks bring their own vault',kind:'Web3 · fintech',c:'#1E3A5F',img:'x1'},
 {id:'clearfeed',name:'ClearFeed',line:'Answering the same Slack question only once',kind:'SaaS · B2B',c:'#5B44F2',img:'cf_fs3'},
 {id:'curelink',name:'Curelink',line:'Scratch cards that made enrolling worth it',kind:'Health tech · mobile',c:'#1F7AE8',img:'clv_scratch'},
 {id:'alphy',name:'Alphy',line:'A plant that gets me to drink water',kind:'Side project · macOS',c:'#6B4FA8',img:'al_pour'},
 {id:'night-schedule',name:'Night Schedule',line:'A night routine, and the feature I cut',kind:'Side project · mobile web',c:'#E8590C',img:'ns_tonight'},
 {id:'tinder',name:'Tinder concept',line:'Personality before photos',kind:'Concept · on Behance',c:'#E0457B',img:'tn1',href:'https://www.behance.net/gallery/204867193/Deeper-Connections-via-Tinder-a-design-case-study'}
];
function caseNav(id){
  const i=CASES.findIndex(c=>c.id===id), prev=i>0?CASES[i-1]:null, next=CASES[i+1]||CASES[0];
  const card=(c,dir)=>{ const ext=!!c.href; const href=c.href||('#/'+c.id);
    return `<a class="cn-card ${dir}" href="${href}"${ext?' target="_blank" rel="noopener"':''} style="--cc:${c.c}">
      <span class="cn-txt"><span class="cn-k">${ext?'Up next, on Behance ↗':'Up next →'}</span><b>${c.name}</b><span class="cn-l">${c.line}</span><span class="cn-m">${c.kind}</span></span>
      <span class="cn-img" aria-hidden="true">${IMG[c.img]?`<img class="${IMG[c.img].h>IMG[c.img].w?'tall':''}" loading="lazy" decoding="async" src="${IMG[c.img].src}" alt="">`:''}</span></a>`; };
  const dots=CASES.map((c,j)=>`<a href="${c.href||'#/'+c.id}"${c.href?' target="_blank" rel="noopener"':''} class="cn-dot${j===i?' on':''}" style="--cc:${c.c}" aria-label="${c.name}"${j===i?' aria-current="page"':''}></a>`).join('');
  return `<nav class="case-nav" aria-label="More case studies">
    <div class="cn-head"><p>You've reached the end of <b>${CASES[i].name}</b></p><div class="cn-dots">${dots}<span>${i+1} of ${CASES.length}</span></div></div>
    <div class="cn-grid solo">${card(next,'next')}</div>
    <div class="cn-foot"><a class="cn-home" href="#/"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>Back to home</a><a class="cn-all" href="#/work/previous">See all work</a></div>
  </nav>`;
}
let progHandler=null;

/* ---------- Create Image case study interactions ---------- */
let ciCleanup=null;
function wireCI(){
  if(ciCleanup){ ciCleanup(); ciCleanup=null; }
  const root=document.querySelector('#ci-root,#dp-root'); if(!root) return;
  const offs=[]; const timers=[];
  const later=(f,ms)=>{ const t=setTimeout(f,ms); timers.push(t); return t; };
  const smooth=reduce?'auto':'smooth';
  const goTo=id=>{ const t=document.getElementById(id); if(!t) return; t.scrollIntoView({behavior:smooth,block:'start'}); t.classList.add('ci-flash'); later(()=>t.classList.remove('ci-flash'),1400); };

  /* 2-minute version */
  const sk=root.querySelector('[data-skim]');
  const setSkim=v=>{ root.classList.toggle('skim',v); sk.setAttribute('aria-pressed',String(v)); try{ localStorage.setItem('ci-skim',v?'1':'0'); }catch(e){} };
  let s0=false; try{ s0=localStorage.getItem('ci-skim')==='1'; }catch(e){}
  setSkim(s0);
  sk.addEventListener('click',()=>setSkim(!root.classList.contains('skim')));

  /* in-page jumps (hash is used for routing) */
  root.addEventListener('click',e=>{ const j=e.target.closest('[data-jump]'); if(!j) return; e.preventDefault(); goTo(j.dataset.jump); });

  /* tab switchers */
  root.querySelectorAll('[data-switch]').forEach(sw=>{
    const tabs=[...sw.querySelectorAll('[role=tab]')], panes=[...sw.querySelectorAll('[role=tabpanel]')];
    const sel=i=>{ tabs.forEach((t,k)=>{ t.setAttribute('aria-selected',String(k===i)); t.tabIndex=k===i?0:-1; }); panes.forEach((p,k)=>{ p.hidden=k!==i; }); };
    tabs.forEach((t,i)=>{
      t.addEventListener('click',()=>sel(i));
      t.addEventListener('keydown',e=>{ let n=null; if(e.key==='ArrowRight') n=(i+1)%tabs.length; else if(e.key==='ArrowLeft') n=(i-1+tabs.length)%tabs.length; else if(e.key==='Home') n=0; else if(e.key==='End') n=tabs.length-1; if(n!==null){ e.preventDefault(); sel(n); tabs[n].focus(); } });
    });
  });

  /* annotation pins */
  root.querySelectorAll('.ci-fig').forEach(f=>{
    const pins=[...f.querySelectorAll('.ci-pin')]; if(!pins.length) return;
    pins.forEach(p=>p.addEventListener('click',()=>{ const was=p.classList.contains('on'); pins.forEach(q=>q.classList.remove('on')); if(!was) p.classList.add('on'); }));
    f.querySelectorAll('.ci-leg li').forEach(li=>{ const p=f.querySelector(`.ci-pin[data-pin="${li.dataset.pin}"]`); if(!p) return;
      li.addEventListener('mouseenter',()=>p.classList.add('on')); li.addEventListener('mouseleave',()=>p.classList.remove('on')); });
  });

  /* live generate panel (prices as of 24 Oct 2026) */
  const g=root.querySelector('[data-gen]');
  if(g){
    const M={lite:{t:9,res:{'1K':0.7},max:1},
      gpt:{t:19,grid:{'1K':{Low:0.75,Medium:0.8,High:1.5,'Extra high':2,Max:3.5},'2K':{Low:0.9,Medium:1,High:2,'Extra high':2.5,Max:4.5},'4K':{Low:1,Medium:1.5,High:3,'Extra high':4,Max:8}},max:8},
      pro:{t:27,res:{'1K':2.5,'2K':3,'4K':5},max:1},
      flux:{t:45,res:{'1K':1,'2K':2,'4K':12},max:4}};
    const st={model:'gpt',res:'1K',q:'Medium',out:1};
    const $=k=>g.querySelector(`[data-g="${k}"]`);
    const segRes=$('res'), segQ=$('q'), qwrap=g.querySelector('[data-qwrap]'), btn=g.querySelector('[data-gbtn]');
    const fmt=n=>String(Math.round(n*100)/100);
    const seg=(el,opts,cur,key)=>{ el.innerHTML=opts.map(o=>`<button type="button" role="radio" aria-checked="${o===cur}" tabindex="${o===cur?0:-1}" data-v="${o}">${o}</button>`).join('');
      [...el.children].forEach((b,i,all)=>{ b.addEventListener('click',()=>{ st[key]=b.dataset.v; draw(true); });
        b.addEventListener('keydown',e=>{ let n=null; if(e.key==='ArrowRight'||e.key==='ArrowDown') n=(i+1)%all.length; if(e.key==='ArrowLeft'||e.key==='ArrowUp') n=(i-1+all.length)%all.length; if(n!==null){ e.preventDefault(); st[key]=all[n].dataset.v; draw(true); el.children[n]&&el.children[n].focus(); } }); }); };
    let note='';
    const draw=(bump)=>{
      const m=M[st.model]; const resOpts=Object.keys(m.grid||m.res); if(!resOpts.includes(st.res)) st.res=resOpts[resOpts.length>1?0:0];
      st.out=Math.min(Math.max(1,st.out),m.max);
      seg(segRes,resOpts,st.res,'res');
      qwrap.hidden=!m.grid; if(m.grid) seg(segQ,Object.keys(m.grid[st.res]),st.q,'q');
      const unit=m.grid?m.grid[st.res][st.q]:m.res[st.res];
      $('cost').textContent=fmt(unit*st.out); $('out').textContent=st.out; $('time').textContent='~'+m.t+'s';
      g.querySelector('[data-o="-1"]').disabled=st.out<=1; g.querySelector('[data-o="1"]').disabled=st.out>=m.max;
      $('note').textContent=note||(m.max===1?'· This model makes one image at a time':'');
      if(bump&&!reduce){ btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
    };
    $('model').addEventListener('change',e=>{ st.model=e.target.value; note=''; draw(true); });
    g.querySelectorAll('[data-o]').forEach(b=>b.addEventListener('click',()=>{ st.out+=Number(b.dataset.o); note=''; draw(true); }));
    btn.addEventListener('click',()=>{ note='· Demo only: nothing is generated and no credits are spent'; draw(false); later(()=>{ note=''; draw(false); },3200); });
    draw(false);
  }

  /* reuse inputs demo */
  const r=root.querySelector('[data-reuse]');
  if(r){
    const go=r.querySelector('[data-rgo]'), steps=[...r.querySelectorAll('.ci-rsteps li')], gen=r.querySelector('.ci-rgen'), cost=r.querySelector('[data-f="cost"]');
    const fields=[...r.querySelectorAll('.ci-rf b')];
    const reset=()=>{ fields.forEach(b=>{ b.textContent='—'; b.classList.remove('fill'); }); cost.textContent='—'; gen.classList.remove('ready','go'); steps.forEach(s=>s.classList.remove('on')); };
    let running=false;
    go.addEventListener('click',()=>{
      if(running) return; running=true; timers.forEach(clearTimeout); reset();
      const d=reduce?0:1;
      steps[0].classList.add('on');
      fields.forEach((b,i)=>later(()=>{ b.textContent=b.dataset.v; b.classList.add('fill'); },d*(250+i*220)));
      later(()=>{ cost.textContent='5'; gen.classList.add('ready'); },d*1250);
      later(()=>{ steps[0].classList.remove('on'); steps[1].classList.add('on'); fields.forEach(b=>b.classList.remove('fill')); const res=r.querySelector('[data-f="res"] b'); res.textContent='2K'; res.classList.add('fill'); cost.textContent='3'; },d*2600);
      later(()=>{ steps[1].classList.remove('on'); steps[2].classList.add('on'); gen.classList.add('go'); },d*3900);
      later(()=>{ running=false; go.innerHTML='↺ Replay'; },d*4400);
    });
  }

  /* count-up numbers + chart reveal */
  const cnt=[...root.querySelectorAll('.ci-cnt')], charts=[...root.querySelectorAll('.ci-anim')];
  root.querySelectorAll('.ci-anim .ci-col').forEach((c,i)=>c.style.setProperty('--i',i));
  const run=el=>{ const raw=el.dataset.count; const m=raw.match(/^([^\d]*)([\d.]+)(.*)$/); if(!m||reduce){ el.textContent=raw; return; }
    const target=parseFloat(m[2]), dec=(m[2].split('.')[1]||'').length, t0=performance.now(), dur=900;
    const step=t=>{ const k=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-k,3); el.textContent=m[1]+(target*e).toFixed(dec)+m[3]; if(k<1) requestAnimationFrame(step); };
    requestAnimationFrame(step); };
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting) return; io.unobserve(e.target); if(e.target.classList.contains('ci-anim')) e.target.classList.add('in'); else run(e.target); }),{threshold:.4});
    cnt.forEach(el=>io.observe(el)); charts.forEach(el=>io.observe(el)); offs.push(()=>io.disconnect());
  } else { charts.forEach(c=>c.classList.add('in')); }

  /* side rail */
  const rail=root.querySelector('.ci-rail'), list=rail.querySelector('ol');
  const secs=[...root.querySelectorAll('[data-rail]')];
  list.innerHTML=secs.map((s,i)=>`<li><button type="button" data-i="${i}">${s.dataset.rail}</button></li>`).join('');
  const btns=[...list.querySelectorAll('button')];
  btns.forEach(b=>b.addEventListener('click',()=>{ const s=secs[+b.dataset.i]; s.scrollIntoView({behavior:smooth,block:'start'}); }));
  let raf=0;
  const upd=()=>{ raf=0; let cur=0; secs.forEach((s,i)=>{ if(s.getBoundingClientRect().top<innerHeight*0.4) cur=i; });
    btns.forEach((b,i)=>b.setAttribute('aria-current',String(i===cur)));
    const end=document.querySelector('.case-nav'); const past=end&&end.getBoundingClientRect().top<innerHeight*0.5;
    rail.classList.toggle('show',scrollY>420&&!past); };
  const onS=()=>{ if(!raf) raf=requestAnimationFrame(upd); };
  addEventListener('scroll',onS,{passive:true}); addEventListener('resize',onS);
  offs.push(()=>{ removeEventListener('scroll',onS); removeEventListener('resize',onS); });
  upd();


  /* designing in production: validation demo */
  const v=root.querySelector('[data-valid]');
  if(v){
    const tabs=[...v.querySelectorAll('[data-mode]')], ta=v.querySelector('textarea'), btn=v.querySelector('[data-vbtn]'), err=v.querySelector('.dp-verr'), hint=v.querySelector('[data-hint]');
    let mode='after';
    const sync=()=>{ const empty=!ta.value.trim();
      if(mode==='before'){ btn.disabled=empty; err.hidden=true; ta.removeAttribute('aria-invalid'); hint.textContent=empty?'The button stays grey, and nothing says why.':'Now it works.'; }
      else { btn.disabled=false; if(!empty){ err.hidden=true; ta.removeAttribute('aria-invalid'); } hint.textContent=empty?'Click Create with the box empty.':'Ready to go.'; } };
    const setMode=m=>{ mode=m; tabs.forEach(t=>{ const on=t.dataset.mode===m; t.setAttribute('aria-selected',String(on)); t.tabIndex=on?0:-1; }); v.classList.toggle('is-before',m==='before'); sync(); };
    tabs.forEach((t,i)=>{ t.addEventListener('click',()=>setMode(t.dataset.mode)); t.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ e.preventDefault(); const n=tabs[(i+1)%2]; setMode(n.dataset.mode); n.focus(); } }); });
    ta.addEventListener('input',sync);
    btn.addEventListener('click',()=>{ if(!ta.value.trim()){ err.hidden=false; ta.setAttribute('aria-invalid','true'); if(!reduce){ v.querySelector('.dp-vbox').classList.remove('shake'); void v.offsetWidth; v.querySelector('.dp-vbox').classList.add('shake'); } ta.focus(); }
      else { hint.textContent='Nice. In the app, this starts your story.'; } });
    setMode('after');
  }
  /* designing in production: rail badges demo */
  const rd=root.querySelector('[data-rail-demo]');
  if(rd){
    const tip=rd.querySelector('.dp-rtip'), cells=[...rd.querySelectorAll('.dp-rgrid span')];
    const show=t=>{ tip.textContent=t.dataset.tip; const nums=(t.dataset.tip.match(/\d+/g)||[]).map(Number); cells.forEach((c,i)=>c.classList.toggle('hl',nums.includes(i+1))); rd.querySelectorAll('.dp-rt').forEach(x=>x.classList.toggle('on',x===t)); };
    rd.querySelectorAll('.dp-rt').forEach(t=>{ t.addEventListener('mouseenter',()=>show(t)); t.addEventListener('focus',()=>show(t)); t.addEventListener('click',()=>show(t)); });
  }
  /* timeline reveal */
  root.querySelectorAll('.dp-tl').forEach(tl=>{ if(reduce||!('IntersectionObserver' in window)){ tl.classList.add('in'); return; } const io2=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ tl.classList.add('in'); io2.disconnect(); } },{threshold:.4}); io2.observe(tl); offs.push(()=>io2.disconnect()); });


  /* case study 02: replay, git graph, glossary */
  const rp=root.querySelector('[data-replay]');
  if(rp){
    const lines=[...rp.querySelectorAll('.term li')];
    let tk=[];
    const play=()=>{ tk.forEach(clearTimeout); tk=[]; lines.forEach(l=>l.classList.remove('on','typing'));
      if(reduce){ lines.forEach(l=>l.classList.add('on')); return; }
      let t=200; lines.forEach((l,i)=>{ tk.push(later(()=>{ lines.forEach(x=>x.classList.remove('typing')); l.classList.add('on'); if(i<lines.length-1) l.classList.add('typing'); },t)); t+= i===0?1300:(l.classList.contains('ok')?380:700); }); };
    rp.querySelector('[data-replay-go]').addEventListener('click',play);
    if('IntersectionObserver' in window){ const io3=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ play(); io3.disconnect(); } },{threshold:.35}); io3.observe(rp); offs.push(()=>io3.disconnect()); } else play();
  }
  root.querySelectorAll('[data-git]').forEach(g=>{ if(reduce||!('IntersectionObserver' in window)){ g.classList.add('in'); return; } const io4=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ g.classList.add('in'); io4.disconnect(); } },{threshold:.4}); io4.observe(g); offs.push(()=>io4.disconnect()); });
  root.querySelectorAll('.gc').forEach(c=>c.addEventListener('click',()=>c.setAttribute('aria-pressed',String(c.getAttribute('aria-pressed')!=='true'))));



  /* editing experience */
  const em=root.querySelector('[data-edmap]');
  if(em){ const pins=[...em.querySelectorAll('[data-pin]')], cards=[...em.querySelectorAll('[data-pcard]')];
    const legs=[...em.querySelectorAll('[data-leg]')];
    const sel=i=>{ pins.forEach((p,k)=>p.setAttribute('aria-pressed',String(k===i))); legs.forEach((p,k)=>p.setAttribute('aria-pressed',String(k===i))); cards.forEach((c,k)=>c.hidden=k!==i); };
    pins.forEach((p,i)=>p.addEventListener('click',()=>sel(i))); legs.forEach((p,i)=>p.addEventListener('click',()=>sel(i))); }
  const edd=root.querySelector('[data-eddepth]');
  if(edd){ const tabs=[...edd.querySelectorAll('[data-dep]')], imgs=[...edd.querySelectorAll('[data-dimg]')], cap=edd.querySelector('[data-dcap]');
    const caps=['All scenes at once. Watch the full video, regenerate a scene, or make the scenes that are left.','Nine tools for one scene, with the preview on the right and every past version under it.','Trim, crop, flip, mute and change speed. Images, text and audio get their own lane above the clip.'];
    let cur=0;
    const go=i=>{ if(i===cur) return; const deeper=i>cur; imgs.forEach((m,k)=>{ m.classList.remove('out'); if(k===cur&&!deeper) m.classList.add('out'); m.classList.toggle('on',k===i); m.tabIndex=k===i?0:-1; }); if(!deeper){ imgs[i].style.transform='scale(.94)'; requestAnimationFrame(()=>requestAnimationFrame(()=>{ imgs[i].style.transform=''; })); }
      tabs.forEach((t,k)=>{ t.setAttribute('aria-selected',String(k===i)); t.tabIndex=k===i?0:-1; }); cap.textContent=caps[i]; cur=i; };
    tabs.forEach((t,i)=>{ t.addEventListener('click',()=>go(i)); t.addEventListener('keydown',e=>{ const d=e.key==='ArrowRight'||e.key==='ArrowDown'?1:e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:0; if(!d) return; e.preventDefault(); const n=(i+d+tabs.length)%tabs.length; go(n); tabs[n].focus(); }); }); }
  const edt=root.querySelector('[data-edtools]');
  if(edt){ const tb=[...edt.querySelectorAll('[data-tool]')], pn=[...edt.querySelectorAll('[data-tpane]')];
    const go=i=>{ tb.forEach((t,k)=>{ t.setAttribute('aria-selected',String(k===i)); t.tabIndex=k===i?0:-1; }); pn.forEach((p,k)=>p.hidden=k!==i); };
    tb.forEach((t,i)=>{ t.addEventListener('click',()=>go(i)); t.addEventListener('keydown',e=>{ const d=e.key==='ArrowDown'||e.key==='ArrowRight'?1:e.key==='ArrowUp'||e.key==='ArrowLeft'?-1:0; if(!d) return; e.preventDefault(); const n=(i+d+tb.length)%tb.length; go(n); tb[n].focus(); }); }); }

  const esc=root.querySelector('[data-edscr]');
  if(esc){ const vi=[...esc.querySelectorAll('[data-vi]')], zp=[...esc.querySelectorAll('[data-zpin]')], dots=[...esc.querySelectorAll('[data-step]')], N=vi.length;
    const q=a=>esc.querySelector(a), sk=q('[data-sk]'), sh=q('[data-sh]'), ss=q('.ed-stxt [data-ss]'), sd=q('.ed-stxt [data-szd]'), cnt=q('[data-scount]'); let cur=0;
    const set=i=>{ if(i===cur) return; cur=i; vi.forEach((v,k)=>{ v.classList.toggle('on',k===i); v.classList.toggle('past',k<i); v.tabIndex=k===i?0:-1; });
      const d=vi[i].dataset, z=+d.z; zp.forEach(p=>p.setAttribute('aria-pressed',String(+p.dataset.zpin===z))); dots.forEach((b,k)=>{ b.classList.toggle('on',k===i); b.classList.toggle('done',k<i); });
      sk.textContent=String(z+1).padStart(2,'0')+' · '+d.zt; sh.textContent=d.st; ss.textContent=d.sd; sd.textContent=d.zd; cnt.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0'); };
    const span=()=>Math.max(1,esc.offsetHeight-window.innerHeight);
    const onS=()=>{ if(!esc.isConnected) return; const p=Math.min(.9999,Math.max(0,-esc.getBoundingClientRect().top/span())); set(Math.floor(p*N)); };
    window.addEventListener('scroll',onS,{passive:true}); window.addEventListener('resize',onS); offs.push(()=>{ window.removeEventListener('scroll',onS); window.removeEventListener('resize',onS); });
    const goStep=i=>{ const y=window.scrollY+esc.getBoundingClientRect().top+span()*(i+.5)/N; window.scrollTo({top:y,behavior:smooth}); };
    dots.forEach((b,i)=>b.addEventListener('click',()=>goStep(i)));
    zp.forEach(p=>p.addEventListener('click',()=>goStep(vi.findIndex(v=>v.dataset.z===p.dataset.zpin))));
    onS(); }

  /* editing tour variants */
  const vsw=root.querySelector('.ed-vsw');
  if(vsw){ const bs=[...vsw.querySelectorAll('[data-edv]')], vars=[...root.querySelectorAll('[data-edvar]')];
    const pick=v=>{ bs.forEach(b=>b.setAttribute('aria-checked',String(b.dataset.edv===v))); vars.forEach(x=>x.hidden=x.dataset.edvar!==v); try{localStorage.setItem('ed-tour',v);}catch(e){} window.dispatchEvent(new Event('scroll')); };
    bs.forEach(b=>b.addEventListener('click',()=>pick(b.dataset.edv)));
    pick('d'); }
  const ea=root.querySelector('[data-eda]');
  if(ea){ const N=ED_FLOW.length, st=ea.querySelector('[data-astage]'), frames=[...ea.querySelectorAll('[data-abase]')], res=[...ea.querySelectorAll('[data-ares]')], dots=[...ea.querySelectorAll('[data-astep]')];
    const q=a=>ea.querySelector(a), an=q('[data-an]'), af=q('[data-afrom]'), at=q('[data-at]'), ar=q('[data-ar]'), ad=q('[data-ad]');
    let ci=-1, cp=-1;
    const set=(i,ph)=>{ if(i===ci&&ph===cp) return; const f=ED_FLOW[i];
      if(i!==ci){ const fr=frames.find(x=>x.dataset.abase===f.base); frames.forEach(x=>x.classList.toggle('on',x===fr));
        const ring=fr.querySelector('[data-aring]'), cur=fr.querySelector('[data-acur]'), b=f.b;
        ring.style.cssText=`left:${b[0]}%;top:${b[1]}%;width:${b[2]-b[0]}%;height:${b[3]-b[1]}%`;
        cur.style.left=(b[0]+(b[2]-b[0])*.62)+'%'; cur.style.top=(b[1]+(b[3]-b[1])*.55)+'%';
        const cx=(b[0]+b[2])/2, cy=(b[1]+b[3])/2, bw=(b[2]-b[0])/100;
        fr.style.setProperty('--ox',cx+'%'); fr.style.setProperty('--oy',cy+'%'); fr.style.setProperty('--zs',Math.min(1.6,Math.max(1.06,.2/bw)).toFixed(2));
        an.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0'); af.textContent=f.from; at.textContent=f.t; ar.textContent=f.r; ad.textContent=f.d;
        dots.forEach((d,k)=>{ d.classList.toggle('on',k===i); d.classList.toggle('done',k<i); });
        const sr=st.getBoundingClientRect(), fw=fr.getBoundingClientRect(); const ox=(fw.left-sr.left+fw.width*cx/100)/sr.width*100, oy=(fw.top-sr.top+fw.height*cy/100)/sr.height*100;
        res[i].style.transformOrigin=ox.toFixed(1)+'% '+oy.toFixed(1)+'%'; }
      res.forEach((r,k)=>{ const on=k===i&&ph===1; r.classList.toggle('on',on); r.tabIndex=on?0:-1; });
      ea.dataset.ph=ph; ci=i; cp=ph; };
    const span=()=>Math.max(1,ea.offsetHeight-window.innerHeight);
    const onA=()=>{ if(!ea.isConnected||!ea.offsetHeight) return; const p=Math.min(.9999,Math.max(0,-ea.getBoundingClientRect().top/span())); const x=p*N, i=Math.floor(x); set(i,(x-i)<.4?0:1); };
    window.addEventListener('scroll',onA,{passive:true}); window.addEventListener('resize',onA); offs.push(()=>{ window.removeEventListener('scroll',onA); window.removeEventListener('resize',onA); });
    dots.forEach((d,i)=>d.addEventListener('click',()=>window.scrollTo({top:window.scrollY+ea.getBoundingClientRect().top+span()*(i+.7)/N,behavior:smooth})));
    set(0,0); onA(); }

  const ed4=root.querySelector('[data-edd]');
  if(ed4){ const W=ED_WALK, N=W.length, imgs=[...ed4.querySelectorAll('[data-dimg2]')], dots=[...ed4.querySelectorAll('[data-dstep]')], zb=ed4.querySelector('[data-dzoom]');
    const q=a=>ed4.querySelector(a), ring=q('[data-dring]'), cur=q('[data-dcur]'), dn=q('[data-dn]'), dc=q('[data-dc]'), dr=q('[data-dr]'), dd=q('[data-dd]');
    let ci=-1, cp=-1;
    const set=(i,ph)=>{ if(i===ci&&ph===cp) return; const w=W[i], b=w.b; const show=ph?w.t:w.f;
      imgs.forEach((m,k)=>m.classList.toggle('on',k===show)); zb.dataset.zoom=show===11?'wkae':'wk'+show;
      if(i!==ci){ ring.style.cssText=`left:${b[0]}%;top:${b[1]}%;width:${b[2]-b[0]}%;height:${b[3]-b[1]}%`; cur.style.left=(b[0]+(b[2]-b[0])*.6)+'%'; cur.style.top=(b[1]+(b[3]-b[1])*.55)+'%';
        ring.setAttribute('aria-label','Click '+w.c); dn.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0'); dc.textContent=w.c; dr.textContent=w.r; dd.textContent=w.d;
        dots.forEach((d,k)=>{ d.classList.toggle('on',k===i); d.classList.toggle('done',k<i); }); }
      ed4.dataset.ph=ph; ci=i; cp=ph; };
    const span=()=>Math.max(1,ed4.offsetHeight-window.innerHeight);
    const onD=()=>{ if(!ed4.isConnected||!ed4.offsetHeight) return; const p=Math.min(.9999,Math.max(0,-ed4.getBoundingClientRect().top/span())); const x=p*N, i=Math.floor(x); set(i,(x-i)<.45?0:1); };
    window.addEventListener('scroll',onD,{passive:true}); window.addEventListener('resize',onD); offs.push(()=>{ window.removeEventListener('scroll',onD); window.removeEventListener('resize',onD); });
    const goD=(i,ph)=>{ if(i>=N){ window.scrollTo({top:window.scrollY+ed4.getBoundingClientRect().top+ed4.offsetHeight-window.innerHeight*.4,behavior:smooth}); return; } window.scrollTo({top:window.scrollY+ed4.getBoundingClientRect().top+span()*(i+(ph?.75:.2))/N,behavior:smooth}); };
    dots.forEach((d,i)=>d.addEventListener('click',()=>goD(i,0)));
    ring.addEventListener('click',()=>goD(ci,1));
    q('[data-dhit]').addEventListener('click',()=>{ if(cp===0) goD(ci,1); else goD(ci+1,0); });
    set(0,0); onD(); }

  root.querySelectorAll('[data-sy]').forEach(sy=>{ const tabs=[...sy.querySelectorAll('[role=tab]')]; const N=tabs.length; let cur=0;
    const span=()=>Math.max(1,sy.offsetHeight-window.innerHeight);
    const active=()=>getComputedStyle(sy.firstElementChild).position==='sticky';
    const onY=()=>{ if(!sy.isConnected||!active()) return; const r=sy.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; const p=Math.min(.9999,Math.max(0,-r.top/span())); const i=Math.floor(p*N); if(i!==cur){ cur=i; sy._auto=1; tabs[i].click(); sy._auto=0; } };
    tabs.forEach((t,i)=>t.addEventListener('click',()=>{ if(sy._auto||!active()) return; cur=i; window.scrollTo({top:window.scrollY+sy.getBoundingClientRect().top+span()*(i+.5)/N,behavior:smooth}); }));
    window.addEventListener('scroll',onY,{passive:true}); offs.push(()=>window.removeEventListener('scroll',onY)); });
  /* video teaser demo */
  const vd=root.querySelector('[data-vtdemo]');
  if(vd){
    const vid=vd.querySelector('[data-vtvid]'), scs=[...vd.querySelectorAll('.vt-sc:not(.lock)')], sub=vd.querySelector('[data-vtsub]'), prog=vd.querySelector('[data-vtprog]'), time=vd.querySelector('[data-vttime]'), end=vd.querySelector('[data-vtend]'), playB=vd.querySelector('[data-vtplay]'), note=vd.querySelector('[data-vtnote]');
    const modal=vd.querySelector('[data-vtmodal]'), mimg=vd.querySelector('[data-vtmimg]'), mcap=vd.querySelector('[data-vtmcap]');
    const LINES=['Apple in the morning. Crunch, crunch, crunch.','Beans on a spoon and milk in a glass.','Good food helps me grow up fast.','One for my bones, one for my brain.','One for my belly again and again.'];
    const STARTS=[0,8,11,14,18], REAL=20.4, DUR=25; let cur=-1;
    const ui=()=>{ const t=vid.currentTime||0; let i=0; STARTS.forEach((st,k)=>{ if(t>=st) i=k; }); if(t>=REAL) i=5;
      if(i!==cur){ cur=i; scs.forEach((s,k)=>s.classList.toggle('cur',k===i)); vd.classList.toggle('in-lock',i===5); note.textContent=i===5?'Scenes 6–11 aren\'t made yet. The voice keeps going over black, then the paywall.':'The first scenes play as real video. Scenes 6–11 stay blurred.'; }
      prog.style.width=(Math.min(t,DUR)/DUR*47)+'%'; time.textContent='0:'+String(Math.floor(Math.min(t,DUR))).padStart(2,'0')+' / 0:53'; };
    const setPlaying=p=>{ vd.classList.toggle('playing',p); playB.textContent=p?'❚❚':'▶'; playB.setAttribute('aria-label',p?'Pause teaser':'Play teaser'); };
    const play=(at)=>{ end.hidden=true; if(at!=null) vid.currentTime=at; const pr=vid.play(); if(pr&&pr.catch) pr.catch(()=>{}); };
    vid.addEventListener('timeupdate',ui); vid.addEventListener('play',()=>setPlaying(true)); vid.addEventListener('pause',()=>setPlaying(false));
    vid.addEventListener('ended',()=>{ setPlaying(false); prog.style.width='47%'; time.textContent='0:25 / 0:53'; end.hidden=false; note.textContent='The free preview ends here. This is the third place to upgrade.'; });
    playB.addEventListener('click',()=>{ vid.paused?play(vid.ended?0:null):vid.pause(); });
    vd.querySelector('[data-vtreplay]').addEventListener('click',()=>play(0));
    scs.forEach((s,i)=>s.addEventListener('click',()=>play(STARTS[i])));
    const toEnd=()=>{ vid.pause(); try{ vid.currentTime=vid.duration||DUR; }catch(e){} setPlaying(false); cur=5; scs.forEach(x=>x.classList.remove('cur')); vd.classList.add('in-lock'); prog.style.width='47%'; time.textContent='0:25 / 0:53'; end.hidden=false; note.textContent='Scenes 6–11 unlock after upgrading. This is the third place to upgrade.'; };
    vd.querySelectorAll('.vt-sc.lock').forEach(l=>{ l.setAttribute('role','button'); l.tabIndex=0; l.addEventListener('click',toEnd); l.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toEnd(); } }); });
    const snd=vd.querySelector('[data-vtsnd]'); snd.addEventListener('click',()=>{ vid.muted=!vid.muted; snd.textContent=vid.muted?'🔇':'🔊'; snd.setAttribute('aria-label',vid.muted?'Turn sound on':'Turn sound off'); if(vid.paused) play(); });
    vd.querySelectorAll('[data-vm]').forEach(b=>b.addEventListener('click',()=>{ vd.dataset.mode=b.dataset.vm; vd.querySelectorAll('[data-vm]').forEach(x=>x.setAttribute('aria-checked',String(x===b))); }));
    const open=(k,cap)=>{ vid.pause(); mimg.src=IMG[k].src; mimg.alt=cap; mcap.textContent=cap; modal.hidden=false; modal.querySelector('[data-vtclose]').focus(); };
    const close=()=>{ modal.hidden=true; };
    vd.querySelectorAll('.vt-cta,.vt-ghost:not([data-vtreplay])').forEach(b=>b.addEventListener('click',()=>{ const paid=vd.dataset.mode==='paid';
      if(paid) open('vt_gen','Paid users pick which remaining scenes to make, as video or still images.');
      else open('vt_plans','Subscribe opens the plans. The real screen from the app.'); }));
    modal.addEventListener('click',e=>{ if(e.target===modal||e.target.closest('[data-vtclose]')) close(); });
    const esc=e=>{ if(e.key==='Escape'&&!modal.hidden) close(); }; document.addEventListener('keydown',esc); offs.push(()=>document.removeEventListener('keydown',esc));
    if('IntersectionObserver' in window && !reduce){ const io5=new IntersectionObserver(([e])=>{ if(e.isIntersecting&&vid.paused&&end.hidden&&modal.hidden){ play(); } else if(!e.isIntersecting&&!vid.paused) vid.pause(); },{threshold:.5}); io5.observe(vd); offs.push(()=>io5.disconnect()); }
    ui();
  }
  const vb=root.querySelector('[data-vtblur]');
  if(vb){ vb.querySelector('[data-vtunblur]').addEventListener('change',e=>vb.classList.toggle('peek',e.target.checked)); }

  ciCleanup=()=>{ offs.forEach(f=>f()); timers.forEach(clearTimeout); };
}

function wireProgress(){
  const bar=document.getElementById('rprog'), chip=document.getElementById('rchip');
  if(progHandler){ removeEventListener('scroll',progHandler); removeEventListener('resize',progHandler); progHandler=null; }
  const id=(location.hash.replace(/^#\/?/,'')||'').split('/')[0]; const c=CASES.find(x=>x.id===id&&!x.href);
  document.body.classList.toggle('is-case',!!c);
  if(!c){ bar.style.transform='scaleX(0)'; chip.hidden=true; return; }
  document.documentElement.style.setProperty('--case',c.c);
  const main=document.querySelector('#app main'); const words=(main.innerText||'').split(/\s+/).length; const total=Math.max(1,Math.round(words/230));
  const secs=[...main.querySelectorAll('.sec .lab, .cs-iters .it-k, h1, .ci-dec2[data-rail], #dp-root [data-rail]')];
  chip.querySelector('b').textContent=c.name; chip.hidden=false;
  let raf=0;
  const upd=()=>{ raf=0; const end=main.querySelector('.case-nav'); const top=main.getBoundingClientRect().top+scrollY; const stop=(end?end.getBoundingClientRect().top+scrollY:document.body.scrollHeight)-innerHeight*0.6;
    const f=Math.min(1,Math.max(0,(scrollY-top+innerHeight*0.2)/Math.max(1,stop-top)));
    bar.style.transform=`scaleX(${f})`;
    const left=Math.max(0,Math.ceil(total*(1-f)));
    let cur=''; for(const el of secs){ if(el.getBoundingClientRect().top<innerHeight*0.35) cur=el.dataset.rail||el.textContent.trim(); }
    chip.querySelector('.sec-name').textContent=f>=.98?'Done':(cur&&cur!==c.name?cur:'Overview');
    chip.querySelector('.left').textContent=f>=.98?'✓':(left<=1?'<1 min left':left+' min left');
    chip.querySelector('.ring').style.setProperty('--p',f);
    chip.classList.toggle('away',f>=.999||scrollY<120);
  };
  progHandler=()=>{ if(!raf) raf=requestAnimationFrame(upd); };
  addEventListener('scroll',progHandler,{passive:true}); addEventListener('resize',progHandler); upd();
  chip.onclick=()=>{ const n=main.querySelector('.case-nav'); if(n) n.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); };
}
let deskIO=null, deskIV=0;
function wireDesk(){
  if(deskIO){ deskIO.disconnect(); deskIO=null; } clearInterval(deskIV);
  const desk=document.getElementById('desk'); if(!desk) return;
  const objs=[...desk.querySelectorAll('.dk-obj')]; let z=10, touched=false;
  const store=(k,v)=>{ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v); }catch(e){ return null; } };
  objs.forEach(o=>{ if(store('seen:'+o.dataset.k)) o.classList.add('dk-opened'); });
  if('IntersectionObserver' in window){ deskIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ objs.forEach((o,i)=>setTimeout(()=>o.classList.remove('dk-pre'),reduce?0:i*160)); deskIO.disconnect(); } }); },{threshold:.35}); deskIO.observe(desk); }
  else objs.forEach(o=>o.classList.remove('dk-pre'));
  let n=0; deskIV=setInterval(()=>{ if(touched||reduce||!document.body.contains(desk)){ clearInterval(deskIV); return; } const o=objs[n++%objs.length].querySelector('.dk-inner'); o.classList.remove('dk-nudge'); void o.offsetWidth; o.classList.add('dk-nudge'); },3500);
  objs.forEach(o=>{
    let sx,sy,bx=0,by=0,moved=false,down=false;
    o.addEventListener('mouseenter',()=>{ touched=true; });
    o.addEventListener('pointerdown',e=>{ touched=true; o.style.zIndex=++z; if(e.pointerType!=='mouse'&&e.pointerType!=='pen') return; down=true; moved=false; sx=e.clientX; sy=e.clientY; try{o.setPointerCapture(e.pointerId);}catch(err){} });
    o.addEventListener('pointermove',e=>{ if(!down) return; const dx=e.clientX-sx, dy=e.clientY-sy; if(!moved&&Math.hypot(dx,dy)>6){ moved=true; o.classList.add('dk-drag'); } if(moved){ o.style.setProperty('--x',bx+dx); o.style.setProperty('--y',by+dy); } });
    o.addEventListener('pointerup',e=>{ if(!down) return; down=false; if(moved){ bx+=e.clientX-sx; by+=e.clientY-sy; o.classList.remove('dk-drag'); } });
    o.addEventListener('dragstart',e=>e.preventDefault());
    o.addEventListener('click',e=>{ if(moved){ e.preventDefault(); e.stopPropagation(); moved=false; return; } store('seen:'+o.dataset.k,'1'); o.classList.add('dk-opened'); });
  });
}
function openResume(push){
  const d=document.getElementById('rvd'), img=document.getElementById('rvd-img');
  if(!img.getAttribute('src')) img.src='/resume-preview.webp';
  document.getElementById('rvd-note').textContent='';
  if(!d.open) d.showModal();
  if(push!==false && location.hash!=='#/resume') history.pushState({rv:1},'','#/resume');
}
(function resumeDialog(){
  const d=document.getElementById('rvd'), note=document.getElementById('rvd-note'), dl=document.getElementById('rvd-dl');
  document.addEventListener('click',e=>{ const a=e.target.closest('[data-resume]'); if(!a) return; e.preventDefault(); openResume(); });
  const close=()=>d.close();
  document.getElementById('rvd-x').addEventListener('click',close);
  d.addEventListener('click',e=>{ if(e.target===d) close(); });
  d.addEventListener('close',()=>{ if(location.hash==='#/resume'){ if(history.state&&history.state.rv) history.back(); else history.replaceState(null,'','#/'); } });
  addEventListener('popstate',()=>{ if(d.open&&location.hash!=='#/resume') d.close(); });
  const dlBlob=()=>{ const url='/Rupam-Gumber-Resume.pdf'; const a=document.createElement('a'); a.href=url; a.download='Rupam-Gumber-Resume.pdf'; document.body.appendChild(a); a.click(); a.remove(); note.textContent='Downloaded.'; };
  const bytes=()=>{ const b=atob(document.getElementById('rv-pdf').textContent.trim()); const u=new Uint8Array(b.length); for(let i=0;i<b.length;i++) u[i]=b.charCodeAt(i); return u; };
  dl.addEventListener('click',async()=>{
    note.textContent='';
    let api=null;
    if(!api){ dlBlob(); return; }
    const u=bytes(), file={filename:'Rupam-Gumber-Resume.pdf'};
    for(const data of [new Blob([u],{type:'application/pdf'}), u.buffer, u]){
      try{ await api.save({...file,data}); note.textContent='Saved.'; return; }
      catch(e){ const c=String(e&&(e.code||e.name)||''); if(/cancel|declin|denied|not_granted|rate/i.test(c)){ note.textContent=''; return; } }
    }
    dlBlob();
  });
})();
document.addEventListener('click',e=>{ const b=e.target.closest('[data-it]'); if(!b) return; const sec=b.closest('.cs-iters'); sec.querySelectorAll('[data-it]').forEach(x=>x.setAttribute('aria-pressed',String(x===b))); sec.querySelectorAll('[data-itp]').forEach(p=>p.hidden=p.dataset.itp!==b.dataset.it); });
addEventListener('hashchange', ()=>{ if(location.hash==='#/resume'){ openResume(false); return; } const d=document.getElementById('rvd'); if(d.open) d.close(); render(); });
render();
(function(){ const l=document.getElementById('rw-ld'); if(!l) return; const done=()=>{ l.classList.add('done'); setTimeout(()=>l.remove(),600); }; requestAnimationFrame(()=>requestAnimationFrame(done)); })();
