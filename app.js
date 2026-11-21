'use strict';
/* ===== MA'LUMOTLAR ===== */
const CATS={osh:['Milliy oshlar','fa-bowl-rice'],gosht:['Go‘shtli taomlar','fa-drumstick-bite'],xamir:['Xamirli taomlar','fa-bread-slice'],shorva:['Sho‘rvalar','fa-mug-hot'],tandir:['Tandir taomlari','fa-fire'],shirin:['Shirinliklar','fa-cookie'],ichim:['Ichimliklar','fa-glass-water']};
// slug, nom, kategoriya, narx, daqiqa, kkal, emoji, tavsif, tarkibi, reyting, mashhur, yangi
const D=[
['palov','O‘zbek palovi','osh',45000,90,640,'🍚','Qozonda pishgan sarimsoqpiyoz, sabzi va go‘shtli mazali osh.','Guruch, mol go‘shti, sabzi, piyoz, zirvak, sarimsoq, zira, yog‘',4.9,1,0],
['samarqand-palov','Samarqand palovi','osh',48000,100,660,'🍛','Guruch alohida pishiriladigan Samarqand uslubidagi osh.','Guruch, qo‘y go‘shti, sabzi, no‘xat, piyoz, zira',4.8,1,0],
['fargona-palov','Farg‘ona palovi','osh',46000,95,650,'🍚','Mayiz va no‘xat qo‘shilgan Farg‘ona oshi.','Guruch, mol go‘shti, mayiz, no‘xat, sabzi, piyoz',4.7,0,0],
['toshkent-palov','Toshkent palovi','osh',47000,95,670,'🍛','Devzira guruchli, qizil sabzili Toshkent toyi.','Devzira guruch, go‘sht, qizil sabzi, qazi, bedana tuxumi',4.8,1,0],
['manti','Manti','xamir',38000,60,420,'🥟','Bug‘da pishgan, go‘sht va piyozli yirik manti.','Un, mol go‘shti, piyoz, qovoq, ziravorlar',4.8,1,0],
['chuchvara','Chuchvara','xamir',32000,45,380,'🥟','Mayda chuchvara — sho‘rva yoki quruq holda.','Un, tuxum, qiyma, piyoz, qatiq',4.6,0,0],
['lagmon','Lag‘mon','xamir',36000,50,520,'🍜','Cho‘zma lag‘mon, sabzavot va go‘shtli qaylasi bilan.','Cho‘zma xamir, mol go‘shti, bolgar qalampiri, sabzi, kartoshka, zirvak',4.8,1,0],
['norin','Norin','xamir',42000,60,560,'🍲','Yupqa yoyilgan xamir va ot yoki mol go‘shtidan an’anaviy norin.','Xamir, qazi/mol go‘shti, piyoz, qora murch, sho‘rva',4.6,0,0],
['somsa','Somsa','tandir',12000,45,330,'🥐','Tandirda pishgan, qatlama xamirli go‘shtli somsa.','Qatlama xamir, qo‘y go‘shti, piyoz, quyruq, zira',4.9,1,0],
['shashlik','Shashlik','gosht',35000,35,480,'🍢','Ko‘mirda pishgan, marinadlangan yumshoq go‘sht.','Qo‘y/mol go‘shti, piyoz, sirka, zira, tuz',4.9,1,0],
['qozon-kabob','Qozon kabob','gosht',55000,70,720,'🍖','Qozonda qovurilgan go‘sht va kartoshka.','Qo‘y go‘shti, kartoshka, piyoz, yog‘, ziravor',4.7,0,0],
['dimlama','Dimlama','gosht',44000,100,540,'🥘','Go‘sht va sabzavotlarning o‘z sharbatida dimlanishi.','Go‘sht, kartoshka, sabzi, karam, pomidor, piyoz',4.6,0,0],
['mastava','Mastava','shorva',28000,60,350,'🍲','Guruchli, go‘shtli quyuq sho‘rva.','Guruch, go‘sht, kartoshka, sabzi, piyoz, qatiq',4.5,0,0],
['shorva','Sho‘rva','shorva',30000,80,310,'🥣','Yumshoq go‘sht va yirik sabzavotli sho‘rva.','Qo‘y go‘shti, kartoshka, sabzi, piyoz, ko‘katlar',4.5,0,0],
['halim','Halim','shorva',33000,180,450,'🥣','Bug‘doy va go‘shtdan uzoq damlangan quyuq taom.','Bug‘doy, go‘sht, ziravorlar, yog‘',4.4,0,1],
['beshbarmoq','Beshbarmoq','gosht',52000,90,690,'🍽️','Qo‘l bilan yeyiladigan go‘sht, xamir va piyozli taom.','Go‘sht, xamir, piyoz, sho‘rva, murch',4.6,0,1],
['xonim','Xonim','xamir',34000,70,400,'🌯','Bug‘da pishgan kartoshkali o‘ramli xamir taom.','Yupqa xamir, kartoshka, go‘sht, piyoz',4.5,0,0],
['gumma','Gumma','xamir',22000,60,340,'🥧','Ko‘k yoki go‘shtli yupqa xamir taom.','Xamir, ko‘katlar, tuxum, go‘sht',4.3,0,1],
['tuxum-barak','Tuxum barak','xamir',30000,40,360,'🥟','Tuxum va ko‘katli xorazmcha yarim oy shaklidagi barak.','Xamir, tuxum, ko‘katlar, piyoz, qatiq',4.4,0,1],
['chak-chak','Chak-chak','shirin',26000,50,520,'🍯','Asalga bulangan qovurilgan xamir shirinligi.','Un, tuxum, asal, shakar',4.7,0,0],
['kok-choy','Ko‘k choy','ichim',8000,10,2,'🍵','An’anaviy o‘zbek ko‘k choyi — mehmon dasturxonining bezagi.','Ko‘k choy, issiq suv, limon',4.8,1,0],
['ayron','Ayron','ichim',10000,5,60,'🥛','Sovuq, sho‘rtan qatiq ichimligi.','Qatiq, suv, tuz, yalpiz',4.5,0,0]
].map(a=>({id:a[0],name:a[1],cat:a[2],price:a[3],time:a[4],kcal:a[5],e:a[6],desc:a[7],ing:a[8].split(', '),rate:a[9],pop:a[10],isNew:a[11]}));
const NEWS=[['Haqiqiy o‘zbek palovining siri','Oshning mazasi zirvak, sifatli guruch va qozon haroratiga bog‘liq. Zirvakni yaxshi qovuring, guruchni 2–3 soat suvda ivitib qo‘ying, damlashda qopqoqni ochmang.','🍚'],
['Samarqand somsasining tarixi','Samarqand somsasi tandirda pishadi, qatlama xamir va qo‘y go‘shti, quyruq va piyoz bilan tayyorlanadi.','🥐'],
['Uy sharoitida lag‘mon tayyorlash','Xamirni yaxshilab qoring, 30 daqiqa dam bering, cho‘zib qaynating. Qaylasini go‘sht va sabzavotdan qozonda tayyorlang.','🍜'],
['Milliy taomlarning foydali jihatlari','Sabzi, ko‘katlar, tabiiy go‘sht va qatiq — to‘yimli va vitaminlarga boy. Me’yorda iste’mol qiling.','🥗'],
['O‘zbek oshxonasining mashhur taomlari','Palov, somsa, manti, lag‘mon va shashlik — dunyo bo‘ylab tanilgan o‘zbek taomlari.','🍢']];
const REV=[['Aziza R.','Palov juda mazali, yetkazib berish tez. Rahmat!'],['Jasur T.','Somsa tandirdan chiqqandek issiq keldi. Tavsiya qilaman.'],['Madina K.','Lag‘mon uydagidek, mehmonlar juda xursand bo‘ldi.'],['Otabek S.','Narxlar hamyonbop, sifat a’lo. Doimiy mijozman.']];
const GAL=['palov','somsa','manti','lagmon','shashlik','norin','samarqand-palov','chak-chak','dimlama'];
const DELIVERY=15000;

/* ===== YORDAMCHILAR ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fmt=n=>n.toLocaleString('ru-RU')+' so‘m';
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>D.find(d=>d.id===id);
// Rasm: images/<slug>-<n>.jpg; topilmasa emoji-plashka chiqadi
function fb(el){el.onerror=null;const e=el.dataset.e||'🍽️';el.src='data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><defs><linearGradient id="g"><stop offset="0" stop-color="#174D36"/><stop offset="1" stop-color="#D6A84F"/></linearGradient></defs><rect width="600" height="400" fill="url(#g)"/><text x="300" y="240" font-size="130" text-anchor="middle">${e}</text></svg>`)}
const img=(src,e,alt='',x='')=>`<img src="${src}" data-e="${e}" alt="${esc(alt)}" loading="lazy" onerror="fb(this)" ${x}>`;
const dimg=(d,i)=>img(`images/${d.id}-${i}.jpg`,d.e,d.name);
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;$('#toasts').append(t);setTimeout(()=>t.remove(),2800)}

/* ===== HOLAT ===== */
let cart=LS.get('mt_cart',[]),favs=LS.get('mt_fav',[]),cat='all',onlyFav=false;
const saveCart=()=>{LS.set('mt_cart',cart);$('#cartCount').textContent=cart.reduce((s,i)=>s+i.q,0)};
const user=()=>LS.get('mt_session',null)||JSON.parse(sessionStorage.getItem('mt_session')||'null');

/* ===== KATALOG ===== */
function chips(){$('#chips').innerHTML=`<button class="chip ${cat=='all'?'on':''}" data-c="all">Barchasi</button>`+Object.entries(CATS).map(([k,v])=>`<button class="chip ${cat==k?'on':''}" data-c="${k}">${v[0]}</button>`).join('')}
function renderGrid(){
  const q=$('#q').value.trim().toLowerCase(),s=$('#sort').value;
  let l=D.filter(d=>(cat=='all'||d.cat==cat)&&(!onlyFav||favs.includes(d.id))&&(d.name+d.desc+d.ing.join()).toLowerCase().includes(q));
  if(s=='asc')l.sort((a,b)=>a.price-b.price);if(s=='desc')l.sort((a,b)=>b.price-a.price);if(s=='rate')l.sort((a,b)=>b.rate-a.rate);if(s=='pop')l=l.filter(d=>d.pop);
  $('#grid').innerHTML=l.length?l.map(d=>`<article class="card dish"><div class="im">${dimg(d,1)}${d.isNew?'<span class="tag">Yangi</span>':d.pop?'<span class="tag">Mashhur</span>':''}<button class="fav ${favs.includes(d.id)?'on':''}" data-f="${d.id}" aria-label="Sevimli"><i class="fa-solid fa-heart"></i></button></div>
  <div class="bd"><h4>${d.name}</h4><p>${d.desc}</p><div class="meta"><span><i class="fa-solid fa-star"></i> ${d.rate}</span><span><i class="fa-regular fa-clock"></i> ${d.time} daq</span><span class="price">${fmt(d.price)}</span></div>
  <div class="row"><button class="btn dk" data-d="${d.id}">Batafsil</button><button class="btn" data-o="${d.id}">Buyurtma</button></div></div></article>`).join(''):'<p>Hech narsa topilmadi.</p>';
}
function renderStatic(){
  $('#cats').innerHTML=Object.entries(CATS).map(([k,v])=>`<div class="card cat" data-c2="${k}"><i class="fa-solid ${v[1]}"></i><b>${v[0]}</b><div>${D.filter(d=>d.cat==k).length} ta</div></div>`).join('');
  $('#fcats').innerHTML=Object.entries(CATS).map(([k,v])=>`<span class="fc" data-c2="${k}">${v[0]}</span>`).join('');
  $('#gallery').innerHTML=GAL.map(id=>{const d=byId(id)||byId(id.replace(/^.*/,x=>D.find(z=>z.id.startsWith(x))?.id||'palov'));return img(`images/gallery-${id}.jpg`,d.e,d.name,'class="gl"')}).join('');
  $('#news').innerHTML=NEWS.map((n,i)=>`<article class="card news"><div class="im">${img(`images/news-${i+1}.jpg`,n[2],n[0])}</div><div class="bd"><h4>${n[0]}</h4><p>${n[1].slice(0,70)}...</p><a data-n="${i}">Batafsil o‘qish →</a></div></article>`).join('');
}
/* ===== MODAL: BATAFSIL + CAROUSEL ===== */
let cI=0,cT,cD;
const open=h=>{$('#mbox').innerHTML=`<button class="x" onclick="closeM()">&times;</button>`+h;$('#modal').classList.add('show')};
window.closeM=()=>{clearInterval(cT);$('#modal').classList.remove('show')};
function showDish(id){
  cD=byId(id);cI=1;const d=cD;
  open(`<div class="det"><div><div class="car" id="car"></div><div class="th" id="th"></div></div><div>
  <h3>${d.name}</h3><p><span class="stars">${'★'.repeat(Math.round(d.rate))}</span> ${d.rate} · ${d.time} daq</p>
  <h5>Tarixi</h5><p style="font-size:.9rem;color:var(--mu)">${d.name} — o‘zbek oshxonasining asrlar davomida avloddan avlodga o‘tib kelayotgan an’anaviy taomi. ${d.desc}</p>
  <h5>Tarkibi</h5><ul>${d.ing.map(x=>`<li>${x}</li>`).join('')}</ul>
  <h5>Tayyorlanishi</h5><ol><li>Mahsulotlar tayyorlanadi va tozalanadi.</li><li>Asosiy qismi qozon/tandir/bug‘da pishiriladi.</li><li>Ziravorlar qo‘shilib, tayyor holatga keltiriladi.</li><li>Issiq holda ko‘katlar bilan tortiladi.</li></ol>
  <p><b>Kaloriya:</b> ${d.kcal} kkal · <b>Porsiya:</b> 1 kishilik (~350 g)</p>
  <p class="price" style="font-size:1.4rem">${fmt(d.price)}</p><button class="btn" data-o="${d.id}">Buyurtma berish</button></div></div>`);
  slide(1);clearInterval(cT);cT=setInterval(()=>slide(cI%4+1),4000);
}
function slide(n){cI=n;const d=cD;
  $('#car').innerHTML=`<button class="nv p" id="cp"><i class="fa-solid fa-chevron-left"></i></button>${dimg(d,n).replace('<img','<img id="cim"')}<button class="nv n" id="cn"><i class="fa-solid fa-chevron-right"></i></button>`;
  $('#th').innerHTML=[1,2,3,4].map(i=>dimg(d,i).replace('<img',`<img data-t="${i}" class="${i==n?'on':''}"`)).join('');
  $('#cp').onclick=()=>slide(cI==1?4:cI-1);$('#cn').onclick=()=>slide(cI%4+1);$('#cim').onclick=e=>lb(e.target.src);
}
const lb=src=>{$('#lbImg').src=src;$('#lightbox').classList.add('show')};
/* ===== BUYURTMA ===== */
function orderForm(id){
  const d=byId(id),u=user();
  open(`<form class="ob" id="oForm" novalidate><h3>${d.name}</h3>${dimg(d,1)}<p class="price">${fmt(d.price)}</p>
  <label>Porsiya soni <input type="number" name="q" value="1" min="1" max="50"></label>
  <input name="n" placeholder="Ism-familiya" value="${u?esc(u.fn+' '+u.ln):''}"><input name="p" placeholder="Telefon" value="${u?esc(u.ph):''}">
  <input name="a" placeholder="Yetkazib berish manzili"><textarea name="c" rows="2" placeholder="Qo‘shimcha izoh"></textarea>
  <h4>Umumiy: <span id="oT">${fmt(d.price)}</span></h4><p class="err" id="oE"></p>
  <button type="button" class="btn dk" id="oAdd">Savatchaga qo‘shish</button><button class="btn">Buyurtmani tasdiqlash</button></form>`);
  const f=$('#oForm');f.q.oninput=()=>$('#oT').textContent=fmt(d.price*Math.max(1,+f.q.value||1));
  $('#oAdd').onclick=()=>{add(id,Math.max(1,+f.q.value||1));closeM()};
  f.onsubmit=e=>{e.preventDefault();const q=Math.max(1,+f.q.value||1);
    if(f.n.value.trim().length<3)return $('#oE').textContent='Ism-familiyani kiriting';
    if(!/^\+?\d{9,13}$/.test(f.p.value.replace(/[\s()-]/g,'')))return $('#oE').textContent='Telefon raqami noto‘g‘ri';
    if(f.a.value.trim().length<5)return $('#oE').textContent='Manzilni kiriting';
    placeOrder([{id,q}],{name:f.n.value,phone:f.p.value,addr:f.a.value,note:f.c.value});closeM()};
}
window.orderRandom=()=>{};
function add(id,q=1){const i=cart.find(x=>x.id==id);i?i.q+=q:cart.push({id,q});saveCart();toast('Savatchaga qo‘shildi ✓');if(location.hash=='#cart')renderCart()}
function placeOrder(items,info){
  const sub=items.reduce((s,i)=>s+byId(i.id).price*i.q,0),o={no:'MT-'+Date.now().toString().slice(-6),items,info,total:sub+DELIVERY,status:'Qabul qilindi',date:new Date().toLocaleString('uz'),user:user()?.em||'mehmon'};
  const all=LS.get('mt_orders',[]);all.unshift(o);LS.set('mt_orders',all);
  // BACKEND: fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(o)})
  toast(`Buyurtma ${o.no} qabul qilindi!`);
  setTimeout(()=>{o.status='Tayyorlanmoqda';LS.set('mt_orders',all)},8000);
}
/* ===== SAVATCHA ===== */
function renderCart(){
  if(!cart.length){$('#cartBox').innerHTML='<p>Savatcha bo‘sh. <a href="#taomlar" class="btn sm">Taomlarni ko‘rish</a></p>';return}
  const sub=cart.reduce((s,i)=>s+byId(i.id).price*i.q,0);
  $('#cartBox').innerHTML=cart.map(i=>{const d=byId(i.id);return `<div class="card crow">${dimg(d,1)}<div><b>${d.name}</b><div>${fmt(d.price)}</div></div><div class="qty"><button data-m="${d.id}">−</button><b>${i.q}</b><button data-p="${d.id}">+</button></div><b>${fmt(d.price*i.q)}</b><button class="del" data-r="${d.id}"><i class="fa-solid fa-trash"></i></button></div>`}).join('')+
  `<div class="card sum"><div><span>Mahsulotlar</span><span>${fmt(sub)}</span></div><div><span>Yetkazib berish</span><span>${fmt(DELIVERY)}</span></div><div class="t"><span>Umumiy to‘lov</span><span>${fmt(sub+DELIVERY)}</span></div><button class="btn" id="checkout">Buyurtmani rasmiylashtirish</button></div>`;
}
function checkout(){const u=user();
  open(`<form class="ob" id="cForm" novalidate><h3>Buyurtmani rasmiylashtirish</h3><input name="n" placeholder="Ism-familiya" value="${u?esc(u.fn+' '+u.ln):''}"><input name="p" placeholder="Telefon" value="${u?esc(u.ph):''}"><input name="a" placeholder="Manzil"><textarea name="c" placeholder="Izoh"></textarea><p class="err" id="kE"></p><button class="btn">Tasdiqlash</button></form>`);
  $('#cForm').onsubmit=e=>{e.preventDefault();const f=e.target;
    if(f.n.value.trim().length<3||f.a.value.trim().length<5||!/^\+?\d{9,13}$/.test(f.p.value.replace(/[\s()-]/g,'')))return $('#kE').textContent='Barcha maydonlarni to‘g‘ri to‘ldiring';
    placeOrder(cart,{name:f.n.value,phone:f.p.value,addr:f.a.value,note:f.c.value});cart=[];saveCart();closeM();location.hash='#account'}}
/* ===== AUTH (DEMO: localStorage; haqiqiy loyihada backend ishlating) ===== */
async function hash(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const phone=s=>s.replace(/[\s()-]/g,'');
function authUI(){const u=user();$('#navLogin').hidden=$('#navReg').hidden=!!u;$('#navAcc').hidden=!u}
function renderAcc(){const u=user();if(!u){location.hash='#login';return}
  const os=LS.get('mt_orders',[]).filter(o=>o.user==u.em);
  $('#accBox').innerHTML=`<div class="card" style="padding:22px;margin-bottom:18px"><h4>${esc(u.fn)} ${esc(u.ln)}</h4><p>${esc(u.em)} · ${esc(u.ph)}</p><p>Sevimlilar: ${favs.length} ta</p><button class="btn sm dk" id="logout">Chiqish</button></div><h4>Buyurtmalarim</h4>`+
  (os.length?os.map(o=>`<div class="card" style="padding:16px;margin:10px 0"><b>${o.no}</b> · ${o.date}<br>${o.items.map(i=>byId(i.id).name+' ×'+i.q).join(', ')}<br><b>${fmt(o.total)}</b> — <span class="ok">${o.status}</span></div>`).join(''):'<p>Hozircha buyurtma yo‘q.</p>');
}
$('#regForm').onsubmit=async e=>{e.preventDefault();const f=e.target,err=f.querySelector('.err'),v=n=>f[n].value.trim();
  const users=LS.get('mt_users',[]);let m='';
  if(v('fn').length<2||v('ln').length<2)m='Ism va familiyani kiriting';
  else if(!/^\+998\d{9}$/.test(phone(v('ph'))))m='Telefon +998XXXXXXXXX ko‘rinishida bo‘lsin';
  else if(!/^\S+@\S+\.\S+$/.test(v('em')))m='Email noto‘g‘ri';
  else if(f.pw.value.length<6)m='Parol kamida 6 belgi bo‘lsin';
  else if(f.pw.value!==f.pw2.value)m='Parollar mos kelmadi';
  else if(!f.ag.checked)m='Shartlarga rozilik bering';
  else if(users.some(u=>u.em==v('em').toLowerCase()||u.ph==phone(v('ph'))))m='Bu email yoki telefon band';
  err.textContent=m;if(m)return;
  const u={fn:v('fn'),ln:v('ln'),ph:phone(v('ph')),em:v('em').toLowerCase(),pw:await hash(f.pw.value)};
  users.push(u);LS.set('mt_users',users);sessionStorage.setItem('mt_session',JSON.stringify(u));f.reset();authUI();toast('Xush kelibsiz!');location.hash='#account'};
$('#logForm').onsubmit=async e=>{e.preventDefault();const f=e.target,id=f.id.value.trim().toLowerCase(),h=await hash(f.pw.value);
  const u=LS.get('mt_users',[]).find(u=>(u.em==id||u.ph==phone(id))&&u.pw==h);
  if(!u){f.querySelector('.err').textContent='Email/telefon yoki parol noto‘g‘ri';return}
  f.rm.checked?LS.set('mt_session',u):sessionStorage.setItem('mt_session',JSON.stringify(u));f.reset();authUI();toast('Kirdingiz ✓');location.hash='#account'};
$('#eye').onclick=e=>{const i=$('#logForm').pw;i.type=i.type=='password'?'text':'password';e.target.classList.toggle('fa-eye-slash')};
$('#forgot').onclick=e=>{e.preventDefault();toast('Parolni tiklash havolasi emailga yuboriladi (backend kerak)')};
$('#contactForm').onsubmit=e=>{e.preventDefault();const f=e.target;
  if(f.n.value.trim().length<2||!/^\S+@\S+\.\S+$/.test(f.e.value)||f.m.value.trim().length<5)return $('#cErr').textContent='Barcha maydonlarni to‘g‘ri to‘ldiring';
  $('#cErr').textContent='';f.reset();toast('Xabaringiz yuborildi!')};

/* ===== MARSHRUT ===== */
function route(){const h=location.hash.slice(1);
  $$('.page').forEach(p=>p.style.display='none');
  if(['login','register','cart','account'].includes(h)){$('#home').style.display='none';$('#page-'+h).style.display='block';if(h=='cart')renderCart();if(h=='account')renderAcc();scrollTo(0,0)}
  else{$('#home').style.display='';if(h)setTimeout(()=>document.getElementById(h)?.scrollIntoView(),30)}
  $('#menu').classList.remove('open');
}
addEventListener('hashchange',route);

/* ===== HODISALAR ===== */
document.addEventListener('click',e=>{const t=e.target.closest('[data-c],[data-c2],[data-f],[data-d],[data-o],[data-t],[data-m],[data-p],[data-r],[data-n],#checkout,#logout');if(!t)return;const g=a=>t.dataset[a];
  if(g('c')){cat=g('c');chips();renderGrid()}
  if(g('c2')){cat=g('c2');location.hash='#taomlar';chips();renderGrid();setTimeout(()=>$('#taomlar').scrollIntoView(),50)}
  if(g('f')){const i=favs.indexOf(g('f'));i<0?favs.push(g('f')):favs.splice(i,1);LS.set('mt_fav',favs);renderGrid();toast(i<0?'Sevimlilarga qo‘shildi ♥':'Sevimlilardan olib tashlandi')}
  if(g('d'))showDish(g('d'));if(g('o'))orderForm(g('o'));if(g('t')){slide(+g('t'));clearInterval(cT)}
  if(g('m')){const i=cart.find(x=>x.id==g('m'));if(--i.q<1)cart=cart.filter(x=>x!=i);saveCart();renderCart()}
  if(g('p')){cart.find(x=>x.id==g('p')).q++;saveCart();renderCart()}
  if(g('r')){cart=cart.filter(x=>x.id!=g('r'));saveCart();renderCart()}
  if(g('n')){const n=NEWS[+g('n')];open(`<div class="ob">${img(`images/news-${+g('n')+1}.jpg`,n[2],n[0])}<h3>${n[0]}</h3><p>${n[1]}</p></div>`)}
  if(t.id=='checkout')cart.length&&checkout();
  if(t.id=='logout'){sessionStorage.removeItem('mt_session');localStorage.removeItem('mt_session');authUI();location.hash='#home';toast('Chiqdingiz')}});
document.addEventListener('click',e=>{if(e.target.classList.contains('gl'))lb(e.target.src)});
$('#modal').onclick=e=>{if(e.target.id=='modal')closeM()};
$('#lightbox').onclick=()=>$('#lightbox').classList.remove('show');
addEventListener('keydown',e=>{if(e.key=='Escape'){closeM();$('#lightbox').classList.remove('show')}});
$('#q').oninput=$('#sort').onchange=renderGrid;
$('#favOnly').onclick=e=>{onlyFav=!onlyFav;e.currentTarget.classList.toggle('on',onlyFav);renderGrid()};
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
const th=LS.get('mt_theme','light');document.documentElement.dataset.theme=th;
$('#theme').onclick=()=>{const n=document.documentElement.dataset.theme=='dark'?'light':'dark';document.documentElement.dataset.theme=n;LS.set('mt_theme',n)};
addEventListener('scroll',()=>$('#top').style.display=scrollY>500?'block':'none');
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
/* Mijozlar fikri carousel */
let ti=0,tt;const tshow=()=>{const r=REV[ti];$('#tbox').innerHTML=`<div class="av">${r[0][0]}</div><b>${r[0]}</b><div class="stars">★★★★★</div><p>“${r[1]}”</p>`};
const tgo=n=>{ti=(n+REV.length)%REV.length;tshow();clearInterval(tt);tt=setInterval(()=>tgo(ti+1),5000)};
$('#tPrev').onclick=()=>tgo(ti-1);$('#tNext').onclick=()=>tgo(ti+1);
/* Boshlash */
chips();renderGrid();renderStatic();saveCart();authUI();tgo(0);route();
window.orderRandom=()=>{};
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('off'),500));
