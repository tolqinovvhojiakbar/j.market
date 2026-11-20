(function(){
var P=[
{id:'crimson',c:'#7a2e2e',name:'Crimson',title:'Crimson Puffer',kind:'Puffer jacket',img:'images/crimson.webp',glow:'rgba(150,50,45,.34)',price:249,old:299},
{id:'field',c:'#4b5242',name:'Field Olive',title:'Field Parka',kind:'Tech parka',img:'images/field.webp',glow:'rgba(90,100,70,.32)',price:329},
{id:'cream',c:'#efe6d6',name:'Polar Cream',title:'Polar Cream Puffer',kind:'Puffer jacket',img:'images/cream.webp',glow:'rgba(240,232,215,.30)',price:229,old:279},
{id:'bomber',c:'#242424',name:'Obsidian',title:'Obsidian Leather Bomber',kind:'Leather bomber',img:'images/bomber.webp',glow:'rgba(40,40,40,.28)',price:399},
{id:'navy',c:'#2b3550',name:'Midnight Navy',title:'Midnight Shell',kind:'Insulated shell',img:'images/navy.webp',glow:'rgba(40,62,120,.34)',price:299},
{id:'black',c:'#1b1b1b',name:'Stealth Black',title:'Stealth Black Puffer',kind:'Puffer jacket',img:'images/black.webp',glow:'rgba(40,40,40,.28)',price:229},
{id:'suede',c:'#5a3d2a',name:'Espresso',title:'Espresso Suede Jacket',kind:'Suede jacket',img:'images/suede.webp',glow:'rgba(125,90,62,.34)',price:279},
{id:'aurora',c:'#a9bdd0',name:'Aurora',title:'Aurora Puffer',kind:'Hooded puffer',img:'images/aurora.webp',glow:'rgba(170,190,210,.36)',price:299},
{id:'arctic',c:'#3a4d78',name:'Arctic Blue',title:'Arctic Field Jacket',kind:'Tech shell',img:'images/arctic.webp',glow:'rgba(58,77,120,.36)',price:299},
{id:'moss',n:1,c:'#4a4f40',name:'Moss',title:'Moss Field Jacket',kind:'Tech parka',img:'images/moss.webp',glow:'rgba(80,88,66,.32)',price:309},
{id:'harbor',n:1,c:'#2f3646',name:'Harbor Navy',title:'Harbor Shell Bomber',kind:'Insulated shell',img:'images/harbor.webp',glow:'rgba(50,60,86,.34)',price:269,old:319},
{id:'dune',n:1,c:'#c2b59b',name:'Dune Sand',title:'Dune Hooded Parka',kind:'Tech parka',img:'images/dune.webp',glow:'rgba(194,181,155,.34)',price:339},
{id:'mercury',n:1,c:'#8d9195',name:'Mercury',title:'Mercury Puffer',kind:'Puffer jacket',img:'images/mercury.webp',glow:'rgba(140,146,152,.34)',price:279},
{id:'snow',n:1,c:'#e6e9ee',name:'Snow White',title:'Snow Long Parka',kind:'Tech parka',img:'images/snow.webp',glow:'rgba(225,230,238,.34)',price:359},
{id:'tactical',n:1,c:'#2c3347',name:'Layer Navy',title:'Layer-7 Tactical Shell',kind:'Tech shell',img:'images/tactical.webp',glow:'rgba(44,51,71,.34)',price:389},
{id:'cropped',n:1,c:'#2a2b2e',name:'Stealth Grey',title:'Stealth Cropped Shell',kind:'Insulated shell',img:'images/cropped.webp',glow:'rgba(50,52,56,.32)',price:319},
{id:'expedition',n:1,c:'#4a4d50',name:'Graphite',title:'Graphite Expedition Parka',kind:'Tech parka',img:'images/expedition.webp',glow:'rgba(74,77,80,.34)',price:379},
{id:'utility',n:1,c:'#5a6244',name:'Olive',title:'Olive Utility Puffer',kind:'Puffer jacket',img:'images/utility.webp',glow:'rgba(90,98,68,.34)',price:289},
{id:'alpine',n:1,c:'#c4592a',name:'Rust',title:'Rust Alpine Shell',kind:'Tech shell',img:'images/alpine.webp',glow:'rgba(196,89,42,.34)',price:359},
{id:'copper',n:1,c:'#b4552e',name:'Copper',title:'Copper Down Parka',kind:'Puffer jacket',img:'images/copper.webp',glow:'rgba(180,85,46,.34)',price:349},
{id:'anorak',n:1,c:'#d42a2a',name:'Signal Red',title:'Signal Anorak',kind:'Insulated shell',img:'images/anorak.webp',glow:'rgba(212,42,42,.34)',price:369},
{id:'slate',n:1,c:'#454a52',name:'Slate',title:'Slate Alpine Jacket',kind:'Tech shell',img:'images/slate.webp',glow:'rgba(69,74,82,.34)',price:339},
{id:'camo',n:1,c:'#cfd3d6',name:'Arctic Camo',title:'Arctic Camo Parka',kind:'Tech parka',img:'images/camo.webp',glow:'rgba(207,211,214,.34)',price:399},
{id:'forest',n:1,c:'#4a5a3e',name:'Forest',title:'Forest Down Jacket',kind:'Puffer jacket',img:'images/forest.webp',glow:'rgba(74,90,62,.34)',price:319},
{id:'deepblue',n:1,h:1,c:'#2a4a7c',name:'Deep Blue',title:'Deep Blue Puffer',kind:'Puffer jacket',img:'images/hero/front.webp',glow:'rgba(42,74,124,.38)',price:329,old:399}];
var PRICE=149,OLD=199,SIZES=['S','M','L','XL','XXL'];
var T=window.JM_T;P.forEach(function(p){p.k0=p.kind;p.kind=T(p.kind);p.name=T(p.name)});
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var page=document.body.dataset.page,root=document.documentElement;
function byId(id){return P.filter(function(p){return p.id===id})[0]||P[0]}
/* cart store */
function get(){try{return JSON.parse(localStorage.getItem('jm_cart'))||[]}catch(e){return[]}}
function save(c){try{localStorage.setItem('jm_cart',JSON.stringify(c))}catch(e){}count()}
var cnt0=1;function count(){var n=get().reduce(function(a,i){return a+i.qty},0),b=$('#cartN');if(b){var ch=b.textContent!==String(n);b.textContent=n;b.dataset.n=n;var l=b.closest('.cart');if(l)l.setAttribute('aria-label',T('Cart')+', '+n+' '+T.items(n));if(ch&&!cnt0){b.classList.add('pop');setTimeout(function(){b.classList.remove('pop')},250)}}cnt0=0}
function add(id,size,q){var c=get(),f=c.filter(function(i){return i.id===id&&i.size===size})[0];f?f.qty+=q:c.push({id:id,size:size,qty:q});save(c)}
var tt;function toast(m){var t=$('.toast')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'toast',role:'status'}));t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},2400)}
window.JM_P=P;window.JM={add:add,toast:toast,count:count};
/* header + footer */
var L=[['about',T('About')],['shop',T('Shop')+'<sup>24</sup>'],['support',T('Support')],['contacts',T('Contacts')]];
var h=document.createElement('header');h.className='top';
h.innerHTML='<a class="logo" href="index.html">JACKET MARKET<sup>™</sup></a><nav id="nav" aria-label="'+T('Main')+'">'+L.map(function(l){return'<a href="'+l[0]+'.html"'+(page===l[0]||(page==='product'&&l[0]==='shop')?' aria-current="page"':'')+'>'+l[1]+'</a>'}).join('')+'</nav><div class="acct">'+JM_I18N.switcher()+'<a href="account.html">'+T('Account')+'</a><a href="cart.html" class="cart" aria-label="'+T('Cart')+', 0 '+T.items(0)+'"'+(page==='cart'?' aria-current="page"':'')+'><svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1.2 11H6.2zM9 8V6.5a3 3 0 0 1 6 0V8"/></svg><b id="cartN" data-n="0">0</b></a><button class="menu" id="menu" aria-expanded="false">'+T('Menu')+'</button></div>';
JM_I18N.bind(h);var mn=$('main'),fr=document.createElement('div');fr.className='frame';mn.parentNode.insertBefore(fr,mn);if(page!=='home'&&window.JM_ART){var ab=document.createElement('div');ab.className='abm';ab.innerHTML=JM_ART.mtn;fr.appendChild(ab)}fr.appendChild(h);fr.appendChild(mn);
var hh=function(){root.style.setProperty('--hh',h.offsetHeight+'px')};hh();addEventListener('resize',hh);
/* signed-in user (accounts live in this browser's localStorage) */
function sessUser(){try{var s=JSON.parse(localStorage.getItem('jm_session')),u=JSON.parse(localStorage.getItem('jm_users'))||[];return s&&u.filter(function(x){return x.email===s.email})[0]||null}catch(e){return null}}
var acl=$('.acct a');function syncAcct(){var u=sessUser();acl.textContent=u?u.name.trim().split(' ')[0]:T('Account');acl.title=u?'Your account':''}
syncAcct();window.JM.me=sessUser;window.JM.syncAcct=syncAcct;
$('#menu').onclick=function(){var o=$('#nav').classList.toggle('open');this.setAttribute('aria-expanded',o);this.textContent=o?T('Close'):T('Menu')};
/* shared footer (all pages) */
function footerHTML(){
 var A=window.JM_ART||{},ar='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
 var soc=[['Instagram','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".8" fill="currentColor"/></svg>'],['Facebook','<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.3-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v2.1H8.2V13h2.4v7z"/></svg>'],['Telegram','<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4.6 3.6 10.9c-.8.3-.8.8-.1 1l4.1 1.3 1.6 4.8c.2.5.4.6.8.6.3 0 .5-.1.7-.3l2-1.9 4.1 3c.7.4 1.3.2 1.5-.7l2.7-12.8c.3-1.1-.4-1.6-1-1.3zM8.7 13l8.6-5.4c.4-.3.8-.1.5.2l-7 6.3-.3 3z"/></svg>']];
 var M=[['m1','sprint'],['m2','squat']];
 return'<footer class="jf" id="jf"><div class="jf-top">'
 +'<div class="jf-a">'+(A.bar?A.bar(130):'')+'<p>[ ©2026 Jacket Market ]<br>'+T('[ All rights reserved ]')+'</p></div>'
 +'<form id="nf" novalidate><label for="em">'+T('Be the first to know')+'</label><div class="fr"><input id="em" type="email" placeholder="'+T('Your email')+'" autocomplete="email"><button type="submit">'+T('Send')+ar+'</button></div></form>'
 +'<div class="jf-n" role="navigation" aria-label="'+T('Footer')+'"><a href="shop.html">'+T('Shop')+'</a><a href="about.html">'+T('About')+'</a><a href="support.html">'+T('Support')+'</a><a href="contacts.html">'+T('Contacts')+'</a></div>'
 +'<div class="jf-r"><a class="jf-logo" href="index.html">JACKET MARKET<sup>™</sup></a><div class="jf-soc">'+soc.map(function(x){var ig=x[0]==='Instagram';return'<a href="'+(ig?'https://www.instagram.com/xoji.builds" target="_blank" rel="noopener noreferrer':'contacts.html')+'" aria-label="'+(ig?T('Instagram (opens in a new tab)'):x[0])+'">'+x[1]+'</a>'}).join('')+'</div></div></div>'
 +'<div class="jf-big" id="gi"><span class="jf-w" aria-hidden="true">MarketPuffers</span>'+M.map(function(m){return'<div class="fm '+m[0]+'" aria-hidden="true"><img src="images/models/'+m[1]+'.webp" alt="" draggable="false"></div>'}).join('')+'</div>'
 +'<div class="jf-mt" aria-hidden="true"><svg viewBox="0 0 1200 100" preserveAspectRatio="none"><path d="M0 100V62l70-26 52 20 88-46 64 40 56-18 94 52 70-36 82 34 66-50 90 58 60-24 92-30 74 42 58-20 84 44 60-34 60 32L1200 40V100z" fill="#6d8aa6" opacity=".55"/><path d="M0 100V78l96-30 70 28 102-40 84 36 70-22 110 40 80-34 104 38 70-30 92 30 66-24 80 34 76-22L1200 70V100z" fill="#4c6985"/></svg></div>'
 +'<div class="jf-base"><span>'+T('[ Built for cold ]')+'</span><span>Jacket Market, 2026</span></div></footer>';
}
function footerInit(){
 var f=$('#jf');if(!f)return;
 var nf=$('#nf',f);if(nf)nf.onsubmit=function(e){e.preventDefault();var v=$('input',this),ok=/^\S+@\S+\.\S+$/.test(v.value);toast(ok?T('Thanks. Sign-up is not connected yet.'):T('Enter a valid email address'));if(ok)v.value=''};

}
window.JM.footerHTML=footerHTML;window.JM.footerInit=footerInit;
if(page!=='home'){fr.insertAdjacentHTML('beforeend',footerHTML());footerInit()}
count();
/* page transitions */
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||a.target||e.metaKey||e.ctrlKey||/^(#|mailto|tel|http)/.test(a.getAttribute('href')))return;e.preventDefault();document.body.classList.add('out');setTimeout(function(){location.href=a.href},520)});
addEventListener('pageshow',function(e){if(e.persisted)document.body.classList.remove('out')});
var R=$('#app');
function rise(){$$('.rise',R).forEach(function(e,i){e.style.setProperty('--i',i)})}
function glow(p){root.style.setProperty('--glow',p.glow)}
var mon=function(s){return'$'+s};
/* pages */
/* shared "New collection" panel (shop page + home page) */
function shopHTML(cls,limit){
 var cat=function(p){return/leather|suede/i.test(p.k0)?'leather':/parka|shell/i.test(p.k0)?'shell':'puffer'};
 var HX='<svg viewBox="0 0 76 76" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="38" cy="38" r="36"/><path d="M28 48L48 28M34 28H48V42"/></svg>';
 var fp=byId('aurora'),all=P.filter(function(p){return p.id!=='aurora'&&!p.h}),rest=limit?all.slice(0,limit):all;
 var cardH=function(p,i){return'<a class="card '+cls+'" data-c="'+cat(p)+'" href="product.html?id='+p.id+'" style="--g:'+p.glow+'"><div class="pic"><img src="'+p.img+'" alt="'+p.title+'" loading="lazy"><span class="view">'+T('View jacket')+'</span></div><div class="meta"><b>'+p.title+'</b><small>'+p.kind+'</small><small><i style="background:'+p.c+'"></i>'+p.name+'</small><small class="pr">'+mon(p.price)+(p.old?'<s>'+mon(p.old)+'</s>':'')+'</small></div></a>'};
 
 return'<div class="shop"><div class="sh '+cls+'"><h1>'+T('New collection')+'</h1><ul class="tg"><li>'+T('[ New collection ]')+'</li><li>[ Series_09 ]</li><li>'+T('[ Puffers ]')+'</li></ul><ul class="ct"><li>'+T('Puffer jackets')+'</li><li>'+T('Leather &amp; suede')+'</li><li>'+T('Tech shells')+'</li><li>'+T('Extreme cold line')+'</li></ul><button class="fb" id="fb" aria-expanded="false" aria-controls="fc">'+T('Filters')+'</button></div><div class="fc" id="fc" role="group" aria-label="'+T('Filter')+'" hidden><button aria-pressed="true" data-f="all">'+T('All')+'</button><button aria-pressed="false" data-f="puffer">'+T('Puffers')+'</button><button aria-pressed="false" data-f="shell">'+T('Parkas &amp; shells')+'</button><button aria-pressed="false" data-f="leather">'+T('Leather &amp; suede')+'</button></div><div class="grid">'
 +'<a class="card feat '+cls+'" data-c="'+cat(fp)+'" href="product.html?id='+fp.id+'"><div class="pic"><img src="images/aurora-card.webp" alt="'+fp.title+'"><div class="ft"><h3>Aurora<sup>™</sup></h3><div class="ad"><span class="hx">'+HX+'</span><div><span class="mono">'+T('Add to cart')+'</span><div class="price">'+mon(fp.price)+'</div></div></div></div><div class="tag" aria-hidden="true">'+(window.JM_ART?(JM_ART.graf?JM_ART.graf():JM_ART.tag()):'')+'</div></div></a>'
 +rest.map(cardH).join('')
 +'</div>'
 +'</div>';
}
function shopInit(){
 var fb=$('#fb'),fc=$('#fc');fb.onclick=function(){var o=fc.hidden;fc.hidden=!o;fb.setAttribute('aria-expanded',o)};
 $$('#fc button').forEach(function(b){b.onclick=function(){var f=b.dataset.f;$$('#fc button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});$$('.grid > .card').forEach(function(c){c.hidden=f!=='all'&&(c.classList.contains('soon')||c.dataset.c!==f)})}});
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches)$$('.card:not(.soon):not(.feat)').forEach(function(c){var im=$('img',c);c.onpointermove=function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;im.style.transform='translate('+(-x*10)+'px,'+(-y*8)+'px) scale(1.07)'};c.onpointerleave=function(){im.style.transform=''}});}
window.JM.shopHTML=shopHTML;window.JM.shopInit=shopInit;
if(page==='shop'){R.innerHTML=shopHTML('rise');rise();shopInit()}
if(page==='product'){
 var cur=byId(new URLSearchParams(location.search).get('id')),size='L',q=1;
 var ICO=function(d){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="'+d+'"/></svg>'};
 var pad=function(n){return n<10?'0'+n:''+n};
 R.innerHTML='<div class="pdp">'
 +'<p class="crumbs rise"><a href="shop.html">'+T('Shop')+'</a><span>/</span><b id="pc"></b></p>'
 +'<div class="pd">'
 +'<div class="gal rise"><div class="bgword" id="bw" aria-hidden="true"></div><div class="stage" id="sg"><img id="pi" alt=""><span class="cnt" id="cn" aria-hidden="true"></span><div class="arw"><button id="pv" aria-label="'+T('Previous jacket')+'">'+ICO('M20 12H5M11 6l-6 6 6 6')+'</button><button id="nx" aria-label="'+T('Next jacket')+'">'+ICO('M4 12h15M13 6l6 6-6 6')+'</button></div></div></div>'
 +'<div class="info">'
 +'<p class="kd rise" id="kd"></p>'
 +'<h1 class="rise" id="pn"></h1>'
 +'<div class="pr2 rise"><span class="now" id="pp"></span><s id="po"></s><em class="off" id="pf"></em></div>'
 +'<p class="lead rise" id="pd"></p>'
 +'<div class="rise"><div class="blk"><div class="lbl"><span>'+T('Colour')+'</span><b id="cl"></b></div><div class="swatches" id="th" role="group" aria-label="'+T('Colour')+'"></div></div>'
 +'<div class="blk"><div class="lbl"><span>'+T('Size')+'</span><a href="support.html">'+T('Size guide')+'</a></div><div class="sizes" id="sz" role="group" aria-label="'+T('Size')+'">'+SIZES.map(function(s){return'<button aria-pressed="'+(s===size)+'">'+s+'</button>'}).join('')+'</div></div>'
 +'<div class="buy"><div class="qty"><button id="qm" aria-label="'+T('Less')+'">−</button><span id="qn">1</span><button id="qp" aria-label="'+T('More')+'">+</button></div><button class="btn" id="ad"><span>'+T('Add to cart')+'</span><span id="tt"></span></button></div>'
 +'<ul class="perks"><li>'+T('Free shipping from $200')+'</li><li>'+T('Sizes S to XXL')+'</li><li>'+T('Built for cold')+'</li></ul>'
 +'<div class="acc"><details><summary>'+T('Materials')+'<i></i></summary><div class="ans"><div><p>'+T('Weather-resistant shell with warm insulation, built for extreme cold.')+'</p></div></div></details><details><summary>'+T('Delivery and returns')+'<i></i></summary><div class="ans"><div><p>'+T('Placeholder: add your delivery times and return window here.')+'</p></div></div></details></div></div>'
 +'</div></div>'
 +'<section class="more rise" aria-labelledby="mh"><div class="more-h"><h2 id="mh">'+T('You may also like')+'</h2><a class="lnk" href="shop.html">'+T('View all')+'</a></div><div class="grid" id="mg"></div></section></div>';
 rise();
 var th=$('#th');P.forEach(function(p){var b=document.createElement('button');b.setAttribute('aria-label',p.name);b.title=p.name;b.dataset.id=p.id;b.innerHTML='<i style="background:'+p.c+'"></i>';b.onclick=function(){show(p,true)};th.appendChild(b)});
 function related(p){var o=[],n=P.indexOf(p);for(var k=1;k<=4;k++)o.push(P[(n+k)%P.length]);
  $('#mg').innerHTML=o.map(function(r){return'<a class="card" href="product.html?id='+r.id+'" style="--g:'+r.glow+'"><div class="pic"><img src="'+r.img+'" alt="'+r.title+'" loading="lazy"><span class="view">'+T('View jacket')+'</span></div><div class="meta"><b>'+r.title+'</b><small>'+r.kind+'</small><small><i style="background:'+r.c+'"></i>'+r.name+'</small><small class="pr">'+mon(r.price)+(r.old?'<s>'+mon(r.old)+'</s>':'')+'</small></div></a>'}).join('')}
 function total(){$('#tt').textContent='$'+cur.price*q}
 function show(p,anim){cur=p;glow(p);var i=$('#pi'),n=P.indexOf(p);var set=function(){i.src=p.img;i.alt=p.title;i.classList.remove('sw')};anim?(i.classList.add('sw'),setTimeout(set,250)):set();
  $('#pp').textContent='$'+p.price;$('#po').textContent=p.old?'$'+p.old:'';$('#po').hidden=!p.old;$('#pf').textContent=p.old?'−'+Math.round((1-p.price/p.old)*100)+'%':'';$('#pf').hidden=!p.old;
  $('#pn').textContent=p.title;$('#pc').textContent=p.title;$('#kd').textContent='[ '+p.kind+' ]';$('#cl').textContent=p.name;$('#bw').textContent=p.name.split(' ')[0].toUpperCase();$('#cn').textContent=pad(n+1)+' / '+pad(P.length);
  document.title=p.title+' – Jacket Market';
  $('#pd').innerHTML=T('Engineered for the cold, <b>{t}</b> is built for ultimate comfort in cold climates.',{t:p.title});
  $$('button',th).forEach(function(b){b.setAttribute('aria-pressed',b.dataset.id===p.id)});total();related(p);history.replaceState(null,'','?id='+p.id)}
 var step=function(d){show(P[(P.indexOf(cur)+d+P.length)%P.length],true)};
 show(cur,false);
 $('#pv').onclick=function(){step(-1)};$('#nx').onclick=function(){step(1)};
 document.addEventListener('keydown',function(e){if(/input|textarea/i.test(e.target.tagName)||e.metaKey||e.ctrlKey||e.altKey)return;if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
 var tx0=null,sg=$('#sg');sg.addEventListener('touchstart',function(e){tx0=e.touches[0].clientX},{passive:true});sg.addEventListener('touchend',function(e){if(tx0===null)return;var d=e.changedTouches[0].clientX-tx0;tx0=null;if(Math.abs(d)>45)step(d<0?1:-1)},{passive:true});
 $$('#sz button').forEach(function(b){b.onclick=function(){size=b.textContent;$$('#sz button').forEach(function(x){x.setAttribute('aria-pressed',x===b)})}});
 var qn=$('#qn');$('#qm').onclick=function(){q=Math.max(1,q-1);qn.textContent=q;total()};$('#qp').onclick=function(){q=Math.min(9,q+1);qn.textContent=q;total()};
 $('#ad').onclick=function(){add(cur.id,size,q);toast(T('Added: {name}, {size} × {q}',{name:cur.name,size:size,q:q}))};
}
if(page==='about'){
 var S=T('We pick every jacket for one reason: it keeps you warm without weighing you down. Light puffer fill, honest cuts, colours you will actually wear. No filler.');
 var AR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
 var PR=[['01',T('Light fill'),T('Puffer fill that traps heat without the bulk, so you stay warm and still move.')],['02',T('Honest cuts'),T('Clean shapes and a relaxed fit made to layer. Nothing decorative that does not do a job.')],['03',T('Colours you will wear'),T('From crimson to snow white, 14 colourways chosen for real wardrobes, not for a season.')]];
 R.innerHTML='<div class="ab">'
 +'<section class="ab-hero"><div class="ab-tx"><p class="ab-tag rise">'+T('[ About ] [ Jacket Market ]')+'</p><h1 class="rise">'+T('Built for')+'<br><span class="tone">'+T('the cold.')+'</span></h1><p class="lead rise">'+T('Jacket Market was born in the cold. Not as a trend, but as a response. We make jackets for people who climb, commute and wait out winter.')+'</p><div class="btns rise"><a class="btn" href="shop.html">'+T('Shop the collection')+'</a><a class="lnk" href="contacts.html">'+T('Talk to us')+'</a></div></div>'
 +'<figure class="ab-fig rise"><div class="ab-pic"><img src="images/about-model.webp" width="896" height="1200" alt="'+T('Model in a black puffer jacket and ski goggles standing on a snowy mountain ridge')+'"><span class="ab-cap">[ Series_09 ]</span></div></figure></section>'
 +'<p class="statement" id="st">'+S.split(' ').map(function(w){return'<span>'+w+' </span>'}).join('')+'</p>'
 +'<div class="specs"><div><b>14</b><small>'+T('jackets')+'</small></div><div><b>14</b><small>'+T('colourways')+'</small></div><div><b>5</b><small>'+T('sizes, S to XXL')+'</small></div></div>'
 +'<section class="ab-pr" aria-labelledby="abp"><h2 id="abp">'+T('What we stand for')+'</h2><div class="ab-grid">'+PR.map(function(x){return'<article class="ab-p"><span class="ab-n">'+x[0]+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>'}).join('')+'</div></section>'
 +'<section class="ab-ban ch" aria-label="'+T('Mountains')+'"><img src="images/mountain.webp" width="1408" height="768" alt="" loading="lazy"><div class="ab-bt"><p class="mono">'+T('[ Made for height ]')+'</p><h2>'+T('For those who climb.')+'<br><span class="tone">'+T('Not for the crowd.')+'</span></h2></div></section>'
 +'<section class="ab-cta"><h2>'+T('Find your')+'<br><span class="tone">'+T('jacket.')+'</span></h2><div class="btns"><a class="btn" href="shop.html">'+T('Browse jackets')+'</a><a class="lnk" href="support.html">'+T('Size guide')+'</a></div></section></div>';
 rise();var w=$$('#st span'),tick=function(){var vh=innerHeight;w.forEach(function(s,i){var r=s.getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh*.85-r.top)/(vh*.35)));s.style.opacity=.14+.86*p})};addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);tick();
}
if(page==='support'){
 var Q=[[T('How do I pick a size?'),T('Use the size table below. If you are between sizes, go up one for a layered fit.')],[T('Can I return a jacket?'),T('Placeholder: describe your return window and conditions here.')],[T('How long does delivery take?'),T('Placeholder: add delivery times for your regions here.')],[T('How do I wash it?'),T('Machine wash cold on a gentle cycle, dry on low heat with two clean tennis balls to keep the fill lofty.')]];
 R.innerHTML='<h1 class="rise">'+T('How can we')+'<br><span class="tone">'+T('help?')+'</span></h1><div class="two"><div class="rise">'+Q.map(function(x,i){return'<details'+(i?'':' open')+'><summary>'+x[0]+'<i></i></summary><div class="ans"><div><p>'+x[1]+'</p></div></div></details>'}).join('')+'</div><div class="rise"><h2>'+T('Size table')+'</h2><table><tr><th>'+T('Size')+'</th><th>'+T('Chest, cm')+'</th><th>'+T('Length, cm')+'</th></tr><tr><td>S</td><td>96</td><td>68</td></tr><tr><td>M</td><td>102</td><td>70</td></tr><tr><td>L</td><td>108</td><td>72</td></tr><tr><td>XL</td><td>114</td><td>74</td></tr><tr><td>XXL</td><td>120</td><td>76</td></tr></table><p class="sm" style="margin-top:10px">'+T('Placeholder measurements. Replace with your own.')+'</p></div></div>';rise();
}
if(page==='cart'){
 var first=true,X='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',FREE=200;
 var qsum=function(c){return c.reduce(function(a,i){return a+i.qty},0)};
 var draw=function(focusKey){var c=get();
  if(!c.length){R.innerHTML='<div class="cp"><h1 class="rise">'+T('Your cart')+'<br><span class="tone">'+T('is empty.')+'</span></h1><p class="lead rise">'+T('Nothing here yet. Pick a jacket and it will show up here.')+'</p><a class="btn rise" href="shop.html">'+T('Browse jackets')+'</a></div>';rise();first=false;return}
  var n=qsum(c),sub=c.reduce(function(a,i){return a+i.qty*byId(i.id).price},0),ship=sub>=FREE?0:9,left=Math.max(0,FREE-sub),pct=Math.min(100,Math.round(sub/FREE*100)),a=first?' a':'';
  R.innerHTML='<div class="cp"><div class="cp-h"><h1 class="'+(first?'rise':'')+'">'+T('Your cart')+'</h1><span class="cp-n'+(first?' rise':'')+'">[ '+n+' '+T.items(n)+' ]</span></div>'
  +'<div class="cp-g"><ul class="cp-l">'+c.map(function(i,k){var p=byId(i.id),key=i.id+'|'+i.size;
   return'<li class="cp-i'+a+'" style="animation-delay:'+k*80+'ms" data-key="'+key+'"><a class="cp-img" href="product.html?id='+p.id+'" aria-label="'+p.title+'"><img src="'+p.img+'" alt=""></a>'
   +'<div class="cp-info"><a class="cp-t" href="product.html?id='+p.id+'">'+p.title+'</a><p class="cp-m"><i style="background:'+p.c+'"></i>'+p.name+'<span>'+T('Size {s}',{s:i.size})+'</span></p><p class="cp-u">'+T('{p} each',{p:mon(p.price)})+'</p></div>'
   +'<div class="qty" role="group" aria-label="'+T('Quantity')+'"><button type="button" data-key="'+key+'" data-d="-1" aria-label="'+T('Less')+'"'+(i.qty<=1?' disabled':'')+'>−</button><span aria-live="polite">'+i.qty+'</span><button type="button" data-key="'+key+'" data-d="1" aria-label="'+T('More')+'"'+(i.qty>=9?' disabled':'')+'>+</button></div>'
   +'<div class="cp-p"><b>'+mon(i.qty*p.price)+'</b><button type="button" class="cp-rm" data-key="'+key+'" data-r="1" aria-label="'+T('Remove {title}',{title:p.title})+'">'+X+'<span>'+T('Remove')+'</span></button></div></li>'}).join('')+'</ul>'
  +'<aside class="sum'+(first?' rise':'')+'" aria-label="'+T('Order summary')+'"><h2>'+T('Summary')+'</h2>'
  +'<div class="ship"><p>'+(left?T('Add <b>{x}</b> more for free shipping',{x:mon(left)}):T('<b>You have free shipping</b>'))+'</p><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct+'"><i style="width:'+pct+'%"></i></div></div>'
  +'<dl><div><dt>'+T('Subtotal')+'</dt><dd>'+mon(sub)+'</dd></div><div><dt>'+T('Shipping')+'</dt><dd>'+(ship?mon(ship):T('Free'))+'</dd></div><div class="g"><dt>'+T('Total')+'</dt><dd>'+mon(sub+ship)+'</dd></div></dl>'
  +'<button type="button" class="btn" id="co">'+T('Checkout')+'</button><a class="lnk cp-more" href="shop.html">'+T('Continue shopping')+'</a></aside></div></div>';
  rise();first=false;
  if(focusKey){var f=$('[data-key="'+focusKey[0]+'"][data-d="'+focusKey[1]+'"]');if(f&&!f.disabled)f.focus();else{f=$('[data-key="'+focusKey[0]+'"]:not([disabled])');f&&f.focus()}}
 };
 var done=function(){var c=get();if(!c.length)return;
  var sub=c.reduce(function(a,i){return a+i.qty*byId(i.id).price},0),ship=sub>=FREE?0:9,n=qsum(c),u=window.JM.me&&window.JM.me(),nm=u?u.name.trim().split(' ')[0]:'',no='JM-'+String(Math.floor(Math.random()*900000)+100000);
  var lines=c.map(function(i){var p=byId(i.id);return'<li><span>'+p.title+' <em>/ '+T('Size {s}',{s:i.size})+' × '+i.qty+'</em></span><b>'+mon(i.qty*p.price)+'</b></li>'}).join('');
  try{localStorage.setItem('jm_last_order',JSON.stringify({no:no,total:sub+ship,items:c,at:Date.now()}))}catch(x){}
  save([]);
  R.innerHTML='<div class="cp ok"><div class="ok-i" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><h1 class="rise">'+T('Purchase')+'<br><span class="tone">'+T('complete.')+'</span></h1><p class="lead rise" role="status">'+(nm?T('Thank you, {name}. ',{name:nm}):T('Thank you. '))+T('Your order <b>{no}</b> is confirmed: {n} {items}, {total} in total.',{no:no,n:n,items:T.items(n),total:mon(sub+ship)})+'</p><ul class="ok-l rise">'+lines+'<li class="g"><span>'+(ship?T('Total (incl. {x} shipping)',{x:mon(ship)}):T('Total (free shipping)'))+'</span><b>'+mon(sub+ship)+'</b></li></ul><div class="btns rise"><a class="btn" href="shop.html">'+T('Continue shopping')+'</a><a class="lnk" href="index.html">'+T('Back to home')+'</a></div></div>';
  rise();window.scrollTo(0,0);toast(T('Purchase complete. Order {no}',{no:no}));
 };
 R.addEventListener('click',function(e){
  var co=e.target.closest('#co');if(co){if(co.disabled)return;co.disabled=true;co.textContent=T('Processing…');setTimeout(done,900);return}
  var b=e.target.closest('button[data-key]');if(!b||b.disabled)return;
  var key=b.dataset.key,c=get(),idx=-1;c.forEach(function(i,k){if(i.id+'|'+i.size===key)idx=k});if(idx<0)return;
  if(b.dataset.r){var li=b.closest('.cp-i');li.classList.add('rm');setTimeout(function(){var c2=get(),j=-1;c2.forEach(function(i,k){if(i.id+'|'+i.size===key)j=k});if(j>-1)c2.splice(j,1);save(c2);draw()},260);return}
  c[idx].qty=Math.max(1,Math.min(9,c[idx].qty+ +b.dataset.d));save(c);draw([key,b.dataset.d]);
 });
 draw();
}
})();
