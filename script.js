/* ============ CONFIG ============ */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaqldjk";
const TOTAL_PHOTOS = 7; // images/photo1.jpg ... photo7.jpg

const PHOTO_CAPTIONS_1 = [
  "Ye muskurahat hi to woh cheez hai jiske liye din bhar wait karta hoon.",
  "Aankhon mein wo sukoon jo kahin aur nahi milta.",
  "Simplicity mein bhi itni khoobsurati kam logon mein hoti hai.",
  "Har photo mein ek alag kahani, har kahani mein tum ho."
];
const PHOTO_CAPTIONS_2 = [
  "Ye pal, ye yaadein — inhi ke sahare din guzar jaate hain.",
  "Dooriyon ke bawajood, ye tasveerein hamesha paas rakhti hain.",
  "Chhoti si baat ho ya bada pal, tumhare saath sab khaas lagta hai."
];

const EIGHT_POINTS = [
  { title: "Sachi ho", text: "Kabhi kuch nahi chupati — jo dil mein hota hai, wahi zubaan pe. Aaj kal ye khoobi bahut kam logon mein milti hai." },
  { title: "Sabse alag", text: "Aaj kal ki bhaagti-daudti duniya mein tumhara nature bilkul alag hai — genuine, real, bina kisi dikhawe ke." },
  { title: "Apnon ka khayal", text: "Apne logon ki care karna tumhe achhi tarah aata hai — chhoti-chhoti baaton mein bhi tumhari fikar dikhti hai." },
  { title: "Apni jagah perfect", text: "Tum perfect ho — apne tareeke se, apni khoobiyon aur khaamiyon ke saath. Wahi to tumhe tum banata hai." },
  { title: "Emotionally strong", text: "Mushkil waqt mein bhi khud ko aur apnon ko sambhalna — ye himmat har kisi mein nahi hoti." },
  { title: "Honest nature", text: "Sach bolne ki himmat rakhti ho, chahe wo suna-na suna lage — yahi trust ki sabse badi buniyaad hai." },
  { title: "Pyaar karna aata hai", text: "Jab pyaar karti ho, poore dil se karti ho — bina kisi shart ke." },
  { title: "Meri sabse khaas", text: "In sab baaton se pare — tum bas meri ho, aur yahi sabse khaas baat hai." }
];

const LETTER_TEXT = `Haan, kuch baatein clear bolna zaroori hota hai, warna andar hi andar doubt aur resentment badhta rehta hai. Bas blame facts aur feelings tak rahe, insult tak nahi. Ye longer version better rahega:

Prachi, jo kuch bhi hua ho, aapne galat kiya ho ya nahi, aapne mujhe sab kuch bataya ho ya kuch baatein abhi bhi reh gayi hon… main bas itna jaanta hoon ki mujhe aapke saath rehna hai aur apni life aapke saath spend karni hai. Mujhe aapke saath wahi peaceful aur happy life chahiye jiske dreams hum dono ne dekhe hain. ❤️

Main ye nahi keh raha ki har jagah sirf aap galat thi aur main bilkul sahi tha. Mujhse bhi mistakes hui hain, maine bhi baar-baar sawaal karke, overthink karke aur kuch baatein gusse mein bolkar aapko hurt kiya hai. Main apni galtiyon ko accept karta hoon aur unke liye genuinely sorry hoon.

Lekin iska matlab ye bhi nahi hai ki jo cheezein mujhe hurt karti rahi hain, main unhe bina bole andar daba loon. Kuch baatein bolna zaroori hota hai, kyunki jab tak hum sach ko accept nahi karenge, tab tak cheezein properly theek bhi nahi hongi.

Mujhe aapki batayi hui bahut si baatein pata hain aur jo nahi bhi pata, unke baare mein main baar-baar jaanne ki koshish nahi karna chahta. Sach ek na ek din saamne aa hi jaata hai, kabhi permanently nahi chhupta. Main bas itna chahta hoon ki ab humare beech koi aisi baat na ho jo baad mein saamne aaye aur dobara hum dono ko hurt kare.

Mujhe nahi pata ki abhi aapke mann mein exactly kya chal raha hai. Main jitna jaanne ki koshish karta hoon, utna hi kabhi-kabhi aapko hurt kar deta hoon aur khud bhi overthink karne lagta hoon. Lekin kuch cheezein hain jo mujhe abhi bhi andar se disturb karti hain.

Jaise us din birthday wish karne ke baad mujhe laga tha ki 12:15 ke aas-paas aapka call mere paas aayega, aap mere saath baat karogi aur mujhe feel hoga ki main aapke liye important hoon. Lekin call nahi aaya. Kyon nahi aaya, us waqt kya hua aur aapne kya choose kiya—ye aapko mujhse zyada achhe se pata hai. Main us baat ko ignore karke ye pretend nahi kar sakta ki mujhe kuch feel hi nahi hua.

Aapko padhai ke time padhai par focus karna chahiye, lekin jab free ho toh mujhe bhi proper time aur importance milni chahiye. Pehle jaise raat mein hum baat karte the, ek-doosre ko samajhte the aur apne din ki baatein share karte the, woh sab suddenly kam ho jaana mujhe hurt karta hai. Main ye nahi chahta ki aap har waqt mere saath baat karo, lekin relationship mein efforts aur consistency dono taraf se honi chahiye.

Jo hua, woh past mein ho chuka hai. Main jaanta hoon ki beech mein aap confuse hui thi, aap bhatak gayi thi aur kuch cheezein galat direction mein ja rahi thi. Ye sach hai aur main ise jhooth bolkar ya ignore karke normal nahi bana sakta. Lekin main aapko sirf us galti ke basis par hamesha judge bhi nahi karna chahta.

Main aapse pyaar karta hoon aur isi wajah se main chahta hoon ki hum un sab baaton ko honestly accept karke unse bahar niklein. Main past ko baar-baar uthakar aapko punish nahi karna chahta, lekin future tabhi secure hoga jab aap bhi dil se decide karo ki ab kisi confusion, third person ya temporary feeling ko humare beech nahi aane dogi.

Aapne bola hai ki aapko mere saath rehna hai aur committed rehna hai. Mere liye commitment sirf keh dene ki cheez nahi hai. Commitment ka matlab hai honesty, loyalty, trust, care, responsibility, respect, efforts aur har situation mein ek-doosre ka saath.

Main jo cheezein aapse expect karta hoon, wahi saari cheezein aap bhi mujhse expect kar sakti ho. Aap mujhse loyalty expect kar sakti ho, meri honesty maang sakti ho, mere actions par sawaal kar sakti ho aur ye keh sakti ho ki main aapko proper time, care, respect aur importance doon. Relationship mein rules sirf ek person ke liye nahi hone chahiye—dono ke liye equal hone chahiye.

Prachi, mujhe aapke saath ye rishta sirf aaj ke liye ya time pass ke liye nahi chahiye. Main chahta hoon ki humara rishta permanent ho aur hum dono milkar ise us jagah tak le jaayein, jahan ek din hum shaadi karke apni zindagi saath jee sakein. ❤️

Main aapko har khushi dene ki koshish karna chahta hoon. Main sirf aisa insaan nahi banna chahta jo aapki har baat maan le, balki aisa insaan banna chahta hoon jo aapko samjhe, respect kare, support kare aur har situation mein aapke saath khada rahe.

Main perfect nahi hoon, lekin main humare rishte ke liye khud ko better banane ko ready hoon. Main chahta hoon ki aapko dil se ye bharosa ho ki ye ladka mujhse sach mein pyaar karta hai, mere liye sahi hai aur zarurat padi toh mere aur humare future ke liye khud ko aur behtar banayega.

Bas mere andar ek dar hai. Main aap par bina reason ungli nahi uthana chahta aur na hi aapko control ya pressure karna chahta hoon. Lekin mujhe clarity chahiye ki aap sach mein mere saath ho—sirf words mein nahi, apne decisions, actions aur efforts mein bhi.

Agar aapko bhi dil se clear hai ki aapko mere saath hi rehna hai, toh phir hum dono ko 100% trust, loyalty, honesty aur pyaar ke saath ye rishta nibhana hoga. Mujhe ye rishta beech mein nahi chhodna hai. Main ise us last point tak le jaana chahta hoon jahan hum dono ek-doosre ko choose karke apni life saath spend karein. 🤍

Abhi hum dono ko apni padhai aur career par focus karna hai. Main nahi chahta ki hum relationship ke chakkar mein apna future kharab karein. Lekin career par focus karne ka matlab ye bhi nahi hona chahiye ki hum ek-doosre se emotionally door ho jaayein. Humein padhai bhi saath karni hai, grow bhi saath karna hai aur ek-doosre ko motivate bhi karna hai.

Distance, family problems, misunderstandings ya tough situations aayein, toh hum bhaagein nahi. Hum baat karein, sach bolein aur milkar solution nikalein. Kabhi bina baat kiye ye assume na karein ki pyaar kam ho gaya, koi bore ho gaya ya relationship ab pehle jaisa nahi raha.

Main ye bhi nahi chahta ki future mein jab koi problem aaye toh hum excuses dekar ek-doosre ka saath chhod dein. Pyaar sirf happy moments mein saath rehne ka naam nahi hai. Real love tab hota hai jab difficult phase mein bhi dono ek-doosre ko choose karein aur relationship ko save karne ke efforts karein.

Main aapse perfection nahi maang raha. Main bas honesty maang raha hoon—jo bhi ho, mujhse sach bolna. Loyalty maang raha hoon—humare beech kisi third person ke liye woh jagah na banana. Trust maang raha hoon—doubt ho toh directly mujhse baat karna. Efforts maang raha hoon—sirf main nahi, aap bhi is relationship ko important samjho.

Mujhe bas aapka ek sachcha aur clear jawab chahiye. Aisa jawab nahi jo sirf mujhe us waqt shaant karne ke liye ho, balki woh jo sach mein aapke dil mein ho. Kya aap sach mein mere saath rehna chahti ho? Kya aap is rishte ko loyalty aur commitment ke saath last tak le jaana chahti ho? Aur kya main aapke actions mein bhi wahi commitment dekh sakunga jo aap apne words mein keh rahi ho?

Agar aap dil se mere saath ho, toh meri bahut si tensions khatam ho jayengi. Phir main purani baaton ko baar-baar nahi laana chahta. Main bina kisi doubt ke humare dreams, career aur future ke liye apna 100% de sakunga.

Ho sakta hai ye message padhkar aapko hurt ho. Lekin main jhoothi normalcy mein rehne ke bajay ek baar sach bolkar sab clear karna chahta hoon. Kabhi-kabhi ek baar hurt hokar honestly baat kar lena better hota hai, agar uske baad sab sach mein theek ho sake aur relationship aur strong ban sake.

Mera intention aapko blame karke neecha dikhana nahi hai. Main bas chahta hoon ki aap meri feelings ko samjho aur hum dono apni-apni mistakes accept karke ek genuine new beginning karein—jisme past ka confusion na ho, kisi third person ki jagah na ho aur hum dono ke beech sirf sach, trust, loyalty aur pyaar ho.

Maine aapko hurt kiya ho toh I'm genuinely sorry… lekin jo mere dil mein tha, woh bolna bhi zaroori tha. Main aapse bahut pyaar karta hoon aur bas aapke saath ek secure, honest aur permanent relationship chahta hoon.

Love you so much, Prachi. ❤️`;

const PROPOSAL_TEXT = `Prachi,

Jo kuch us letter mein likha, wo isliye nahi ki main tumhe hurt karna chahta tha — bas dil halka karna zaroori tha, taaki hum dono sach ke saath aage badh sakein. Ek baat hamesha yaad rakhna: mera pyaar tumhare liye kabhi kam nahi hua, aur na hoga.

Ab ye sab peeche chhodkar, ek baar phir se dil ki baat karte hain —

Meri Prachi, tum jitni khoobsurat dikhti ho, usse kahin zyada khoobsurat tumhara dil hai. Tumhari muskurahat mere din ki sabse achhi khabar hoti hai, aur tumhari awaaz sunke lagta hai jaise sab kuch theek ho jayega.

Dekha tumne? Itni door hoke bhi, bhagwan ne humein mila hi diya. Mathura se Katihar, 1080 km ki doori — aur phir bhi hamari baatein kabhi kam nahi hui.

Kuch to socha hoga na Mahadev aur Krishna ji ne, jab unhone humara raasta ek kar diya. Har kisi ka milna itni door se, itna pyaar — possible nahi hota agar tera-mera milna kahin likha na hota.

Tum jaisi ladki milna kismat ki baat hai — sachi, apni jagah perfect, apnon ka khayal rakhne wali, aur aaj ke waqt mein itni real. Tumhari care karne ki adat, tumhara sabko sambhal lena, tumhara chhoti-chhoti baaton mein bhi itna khayal rakhna — ye sab tumhe sabse alag banata hai. Jitna tumhe jaanta gaya, utna hi yakeen hota gaya ki tum hi ho jiske saath poori zindagi bitani hai.

Sochne wali baat hai — humne kabhi ek-doosre ko chhua tak nahi, kabhi haath mein haath nahi liya, kabhi aamne-saamne baithe tak nahi. Phir bhi dekho kitna pyaar ho gaya hai ki ab ek-doosre ke bina reh paana mushkil lagta hai. Itni doori ke bawajood itna apna lagna — ye sabke naseeb mein nahi hota. Ye jo doori hai na, wo bas ek number hai — dil to already connected hai.

Meri pyaari Prachi, tum meri sabse pyaari dua ho, sabse khoobsurat sochi hui khwahish ho. Tumhare bina din adhoora lagta hai, aur tumhare saath har mushkil bhi aasan.

Toh Prachi, ek baat poochni hai —

Yours Priyanshu`;

/* ============ HEART CANVAS PHYSICS ============ */
const canvas = document.getElementById('heart-canvas');
const ctx = canvas.getContext('2d');
let W, H;
function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
window.addEventListener('resize', resize);
resize();

const HEART_COUNT = window.innerWidth < 640 ? 18 : 30;
const hearts = [];
function makeHeart(){
  return {
    baseX: Math.random()*W,
    baseY: Math.random()*H,
    x: 0, y: 0,
    vx: 0, vy: 0,
    driftPhase: Math.random()*Math.PI*2,
    driftSpeed: 0.15 + Math.random()*0.25,
    size: 8 + Math.random()*14,
    alpha: 0.15 + Math.random()*0.35,
    hue: Math.random() > 0.5 ? '#eaa6ae' : '#e3b873'
  };
}
for(let i=0;i<HEART_COUNT;i++){ const h = makeHeart(); h.x = h.baseX; h.y = h.baseY; hearts.push(h); }

let pointer = { x: -9999, y: -9999, active:false };
function setPointer(x,y){ pointer.x = x; pointer.y = y; pointer.active = true; }
canvas.addEventListener('pointermove', e => setPointer(e.clientX, e.clientY));
canvas.addEventListener('pointerdown', e => setPointer(e.clientX, e.clientY));
window.addEventListener('pointerleave', () => pointer.active = false);

function drawHeart(x,y,size,color,alpha){
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x,y);
  ctx.scale(size/16, size/16);
  ctx.beginPath();
  ctx.moveTo(0, 4);
  ctx.bezierCurveTo(0,-2, -8,-2, -8,4);
  ctx.bezierCurveTo(-8,10, 0,14, 0,18);
  ctx.bezierCurveTo(0,14, 8,10, 8,4);
  ctx.bezierCurveTo(8,-2, 0,-2, 0,4);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

let t = 0;
function animate(){
  t += 0.016;
  ctx.clearRect(0,0,W,H);
  hearts.forEach(h => {
    // ambient drift target
    const driftX = h.baseX + Math.sin(t*h.driftSpeed + h.driftPhase) * 18;
    const driftY = (h.baseY + t*10*h.driftSpeed) % (H+40) - 20;

    let targetX = driftX, targetY = driftY;

    // repel from pointer
    const dx = h.x - pointer.x;
    const dy = h.y - pointer.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const repelRadius = 110;
    if(pointer.active && dist < repelRadius){
      const force = (1 - dist/repelRadius) * 26;
      h.vx += (dx/(dist||1)) * force;
      h.vy += (dy/(dist||1)) * force;
    }

    // spring back toward drift target
    h.vx += (targetX - h.x) * 0.02;
    h.vy += (targetY - h.y) * 0.02;
    // damping
    h.vx *= 0.88;
    h.vy *= 0.88;

    h.x += h.vx;
    h.y += h.vy;

    drawHeart(h.x, h.y, h.size, h.hue, h.alpha);
  });
  requestAnimationFrame(animate);
}
animate();

/* ============ ENTRY ============ */
const entryScreen = document.getElementById('entry');
const enterBtn = document.getElementById('enter-btn');
const site = document.getElementById('site');
const song = document.getElementById('bg-song');
const muteBtn = document.getElementById('mute-btn');
let muted = false;

enterBtn.addEventListener('click', () => {
  entryScreen.style.transition = 'opacity 0.8s ease';
  entryScreen.style.opacity = '0';
  song.volume = 0.4;
  song.play().catch(()=>{});
  setTimeout(() => {
    entryScreen.classList.remove('active');
    entryScreen.classList.add('hidden');
    site.classList.remove('hidden');
    goToPage(1);
  }, 750);
});

muteBtn.addEventListener('click', () => {
  muted = !muted;
  song.muted = muted;
  muteBtn.textContent = muted ? '🔇' : '♪';
});

/* ============ PAGE NAV ============ */
const PAGE_COUNT = 9;
const dotsWrap = document.getElementById('progress-dots');
for(let i=1;i<=PAGE_COUNT;i++){
  const d = document.createElement('span');
  d.dataset.page = i;
  dotsWrap.appendChild(d);
}

function goToPage(n){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
  const target = document.getElementById('page-'+n);
  if(target) target.classList.add('visible');
  dotsWrap.querySelectorAll('span').forEach(d => {
    d.classList.toggle('active', Number(d.dataset.page) === n);
  });
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});

  if(n === 1) animateDistance();
  if(n === 2) buildAlbum('album-1', 1, Math.ceil(TOTAL_PHOTOS/2), PHOTO_CAPTIONS_1);
  if(n === 4) buildPoints();
  if(n === 5) buildAlbum('album-2', Math.ceil(TOTAL_PHOTOS/2)+1, TOTAL_PHOTOS, PHOTO_CAPTIONS_2);
  if(n === 6) typeLetter();
  if(n === 8) typeProposal();
}

document.querySelectorAll('.btn-next').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = Number(btn.dataset.next);
    goToPage(next);
  });
});

/* ============ PAGE 1: distance counter ============ */
function animateDistance(){
  const el = document.getElementById('km-counter');
  let current = 0;
  const target = 1080;
  const duration = 2200;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now-start)/duration, 1);
    current = Math.floor(progress * target);
    el.textContent = current;
    if(progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

/* ============ ALBUM BUILDER ============ */
function buildAlbum(containerId, startIdx, endIdx, captions){
  const container = document.getElementById(containerId);
  if(container.dataset.built) return;
  container.dataset.built = '1';
  for(let i=startIdx;i<=endIdx;i++){
    const card = document.createElement('div');
    card.className = 'album-card';
    const img = document.createElement('img');
    img.src = `photo${i}.jpg`;
    img.alt = `photo ${i}`;
    img.loading = 'lazy';
    img.onerror = () => { card.style.display = 'none'; };
    const cap = document.createElement('p');
    cap.className = 'album-caption';
    cap.textContent = captions[(i-startIdx) % captions.length];
    card.appendChild(img);
    card.appendChild(cap);
    container.appendChild(card);
  }
}

/* ============ 8 POINTS ============ */
function buildPoints(){
  const grid = document.getElementById('points-grid');
  if(grid.dataset.built) return;
  grid.dataset.built = '1';
  EIGHT_POINTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'point-card';
    card.innerHTML = `<b>${p.title}</b>${p.text}`;
    grid.appendChild(card);
  });
}

/* ============ SONG BUTTON on page 5 ============ */
document.getElementById('play-song-btn').addEventListener('click', () => {
  song.play().catch(()=>{});
});

/* ============ PAGE 6: TYPEWRITER LETTER w/ skip-once ============ */
const LETTER_SEEN_KEY = 'letter_seen_v1';
function typeLetter(){
  const box = document.getElementById('letter-text');
  const nextBtn = document.getElementById('next-from-6');
  const skipBtn = document.getElementById('skip-letter-btn');

  if(box.dataset.done === '1'){
    nextBtn.disabled = false;
    return;
  }

  const alreadySeen = localStorage.getItem(LETTER_SEEN_KEY) === '1';

  if(alreadySeen){
    box.textContent = LETTER_TEXT;
    box.dataset.done = '1';
    nextBtn.disabled = false;
    skipBtn.classList.add('hidden');
    return;
  }

  let i = 0;
  box.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.textContent = '|';

  function typeChar(){
    if(box.dataset.skipped === '1') return;
    if(i < LETTER_TEXT.length){
      box.textContent = LETTER_TEXT.slice(0, i+1);
      box.appendChild(cursor);
      box.scrollTop = box.scrollHeight;
      i++;
      setTimeout(typeChar, 18);
    } else {
      finishLetter();
    }
  }
  function finishLetter(){
    box.textContent = LETTER_TEXT;
    box.dataset.done = '1';
    nextBtn.disabled = false;
    skipBtn.classList.add('hidden');
    localStorage.setItem(LETTER_SEEN_KEY, '1');
  }
  skipBtn.onclick = () => {
    box.dataset.skipped = '1';
    finishLetter();
  };
  typeChar();
}

/* ============ PAGE 7: reply form -> formspree ============ */
const replyForm = document.getElementById('reply-form');
const replyStatus = document.getElementById('reply-status');
const nextFrom7 = document.getElementById('next-from-7');

replyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = document.getElementById('reply-text').value.trim();
  if(!text) return;
  const sendBtn = document.getElementById('send-reply-btn');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';
  try{
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, from: 'Prachi (proposal website)' })
    });
    if(res.ok){
      replyStatus.textContent = 'Bhej diya gaya. ❤️';
      nextFrom7.disabled = false;
      sendBtn.textContent = 'Sent';
    } else {
      throw new Error('failed');
    }
  } catch(err){
    replyStatus.textContent = 'Kuch gadbad hui, dubara try karo.';
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send';
  }
});

/* ============ PAGE 8: proposal typewriter + Do you love me ============ */
function typeProposal(){
  const box = document.getElementById('proposal-text');
  const askBlock = document.getElementById('ask-block');
  const nextBtn = document.getElementById('next-from-8');

  if(box.dataset.done === '1'){ return; }

  let i = 0;
  box.textContent = '';
  function typeChar(){
    if(i < PROPOSAL_TEXT.length){
      box.textContent = PROPOSAL_TEXT.slice(0, i+1);
      i++;
      setTimeout(typeChar, 22);
    } else {
      box.dataset.done = '1';
      askBlock.classList.remove('hidden');
    }
  }
  typeChar();

  document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('answer-block').classList.remove('hidden');
    nextBtn.disabled = false;
    burstHearts(18);
  }, { once:false });

  setupDodgingNoButton();
}

/* ============ "No" button that runs away ============ */
function setupDodgingNoButton(){
  const wrap = document.getElementById('ask-buttons');
  const noBtn = document.getElementById('no-btn');
  if(noBtn.dataset.wired === '1') return;
  noBtn.dataset.wired = '1';

  function dodge(){
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    wrap.classList.add('dodging');
    const maxLeft = Math.max(wrapRect.width - btnRect.width, 0);
    const maxTop = Math.max(wrapRect.height - btnRect.height, 0);
    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
  }

  // desktop: dodge before the click can land
  noBtn.addEventListener('pointerenter', dodge);
  // mobile/touch: dodge on touch start so tap never registers on it
  noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); dodge(); }, { passive:false });
  // fallback safety: if somehow clicked, still dodge instead of doing anything
  noBtn.addEventListener('click', (e) => { e.preventDefault(); dodge(); });
}

/* extra heart burst on Yes click (repeatable) */
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', () => burstHearts(14));

function burstHearts(count){
  for(let i=0;i<count;i++){
    const h = makeHeart();
    h.x = W/2 + (Math.random()-0.5)*200;
    h.y = H*0.7;
    h.baseX = h.x + (Math.random()-0.5)*300;
    h.baseY = -Math.random()*H;
    h.vy = -6 - Math.random()*6;
    h.vx = (Math.random()-0.5)*6;
    hearts.push(h);
  }
  // keep array from growing forever
  if(hearts.length > 160) hearts.splice(0, hearts.length-160);
}
