(function(){
var T=window.JM_T;
var P=(window.JM_P||[]).filter(function(p){return p.id!=='aurora'&&!p.n}),A=window.JM_ART||{},$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
if(!P.length||!$('#hero'))return;
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,root=document.documentElement,pad=function(n){return(n<10?'0':'')+n};
var TINT={crimson:'#d2b3b0',field:'#bcc3b3',cream:'#e8e1d3',bomber:'#c3c5c8',navy:'#b9c1d9',black:'#cbcac8',suede:'#cdbdad',aurora:'#c9d8e6'};
var SIZES=['S','M','L','XL','XXL'];
/* hero looks: one product, four photos */
var HP=(window.JM_P||[]).filter(function(p){return p.id==='deepblue'})[0]||P[0];
var H=[['Front','front'],['Side profile','side'],['Turned','turn'],['Back','back']].map(function(l){return{id:HP.id,name:T(l[0]),title:HP.title,c:HP.c,glow:HP.glow,price:HP.price,old:HP.old,src:'images/hero/cut-'+l[1]+'.webp',img:'images/hero/'+l[1]+'.webp'}});
var hd=$('header.top');if(hd){var st=function(){hd.classList.toggle('stuck',scrollY>60)};addEventListener('scroll',st,{passive:true});st()}
/* hero art */
$('#sp').innerHTML=A.wall?A.wall():(A.tag?A.tag():'');$('#mt').innerHTML=A.mtn||'';
/* hero */
var idx=0,cur=0,busy=0,auto=!reduce,size='L',els=[$('#j0'),$('#j1')],stage=$('#stage');
function setImg(e,p){e.src=p.src;e.alt=T('{title}, {name} view',{title:p.title,name:p.name.toLowerCase()})}
setImg(els[0],H[0]);els[0].classList.add('in');
var sz=$('#sizes'),cols=$('#cols'),nx=$('#nx');
SIZES.forEach(function(s){var b=document.createElement('button');b.textContent=s;b.setAttribute('aria-pressed',s===size);b.onclick=function(){size=s;$$('button',sz).forEach(function(x){x.setAttribute('aria-pressed',x===b)})};sz.appendChild(b)});
H.forEach(function(p,i){var b=document.createElement('button');b.className='dotc';b.style.background=p.c;b.title=p.name;b.setAttribute('aria-label',p.name);b.onclick=function(){select(i,true)};cols.appendChild(b)});
var cname=document.createElement('span');cname.className='cname';cols.appendChild(cname);
function ui(i){var p=H[i];root.style.setProperty('--glow',p.glow);cname.textContent=p.name;$('#hp').innerHTML='$'+p.price+(p.old?'<s>$'+p.old+'</s>':'');
 $$('button',cols).forEach(function(b,k){b.setAttribute('aria-pressed',k===i)});$('#cn').textContent=pad(i+1);$('#cm').textContent=pad(H.length);$('#cb').style.width=(i+1)/H.length*100+'%';
 nx.innerHTML='';[1,2].forEach(function(d){var k=(i+d)%H.length,b=document.createElement('button');b.className='nxc';b.setAttribute('aria-label',T('Show {name} view',{name:H[k].name}));b.innerHTML='<img src="'+H[k].img+'" alt=""><span>'+pad(k+1)+'</span>';b.onclick=function(){select(k,true)};nx.appendChild(b)})}
function select(i,manual){if(manual)auto=false;if(busy||i===idx)return;busy=1;var o=els[cur],n=els[1-cur];setImg(n,H[i]);n.classList.remove('out');o.classList.remove('in');o.classList.add('out');n.classList.add('in');cur=1-cur;idx=i;ui(i);setTimeout(function(){o.classList.remove('out');busy=0},reduce?10:950)}
ui(0);
var ad=$('#add'),at=$('#addT'),tm;ad.onclick=function(){JM.add(H[idx].id,size,1);at.textContent=T('Added: {name}, {size}',{name:H[idx].title,size:size});clearTimeout(tm);tm=setTimeout(function(){at.textContent=T('Add to cart')},2000)};
var tx=0,ty=0,rx=0,ry=0;addEventListener('pointermove',function(e){tx=(e.clientX/innerWidth*2-1)*12;ty=-(e.clientY/innerHeight*2-1)*6});
(function lp(){if(!reduce){ry+=(tx-ry)*.06;rx+=(ty-rx)*.06;stage.style.setProperty('--ry',ry.toFixed(2));stage.style.setProperty('--rx',rx.toFixed(2))}requestAnimationFrame(lp)})();
if(auto)setInterval(function(){if(auto&&!document.hidden)select((idx+1)%H.length,false)},5200);
/* sections */
var by=function(id){return P.filter(function(p){return p.id===id})[0]};
var M=$('#more'),LOOKS=['Midnight parka','Low crouch','Side profile','Hood up','Three-quarter','Arms crossed'].map(function(x){return T(x)});
function card(p){return'<a class="h-card card" href="product.html?id='+p.id+'"><div class="pic"><img src="'+p.img+'" alt="'+p.title+'" loading="lazy"></div><div class="meta"><b>'+p.title+'</b><small>'+p.kind+'</small><small><i style="background:'+p.c+'"></i>'+p.name+'</small><small class="pr">$'+p.price+'</small></div></a>'}
var HEX='<svg viewBox="0 0 76 76" fill="none" stroke="currentColor" stroke-width="1.2"><polygon points="22,2 54,2 74,22 74,54 54,74 22,74 2,54 2,22"/><path d="M28 48L48 28M34 28H48V42"/></svg>';
M.innerHTML=
'<section class="h-shop" id="hr">'+JM.shopHTML('',8)+'</section>'+
'<section class="cold" id="cold" aria-labelledby="ct"><h2 class="c-top" id="ct"><span class="ln"><em>'+T('When the cold')+'</em></span><span class="ln"><em>'+T('hits, everything')+'</em></span><span class="ln"><em>'+T('else goes <b>quiet</b>')+'</em></span></h2><p class="c-note">'+T('“The cold doesn’t hurt. It reduces what you feel.”')+'</p><div class="c-stage" id="cstage"><div class="c-float"><img class="c-jk" src="images/hero-puffer.webp" width="956" height="654" alt="'+T('Ice-blue puffer jacket, unzipped and floating')+'" draggable="false" loading="lazy"></div></div><div class="c-buy"><button class="hex" id="cadd" aria-label="'+T('Add Aurora puffer to cart')+'">'+HEX+'</button><div><span class="mono" id="caddT" aria-live="polite">'+T('Add to cart')+'</span><div class="price" id="chp"></div></div></div><div class="c-tl"><p class="mono">'+T('[ Temperature ]')+'<br>'+T('[ Drops fast here ]')+'<br>'+T('[ Reaction time ]')+'<br>'+T('[ Becomes silent ]')+'</p><span class="c-sign" aria-hidden="true">Jacket Market</span></div><h2 class="c-bot"><span class="ln"><em class="dim">'+T('You don’t feel')+'</em></span><span class="ln"><em>'+T('cold you feel less')+'</em></span></h2></section>'+
'<section class="h-ring" id="ring" aria-label="'+T('The cold line, six looks')+'"><div class="r-ghost" aria-hidden="true">'+T('Cold line')+'</div><div class="r-scene" id="rs"><div class="r-ring" id="rr">'+LOOKS.map(function(t,k){var n=k+1;return'<figure class="r-card" style="--i:'+k+'"><img src="images/ring/look'+n+'.webp" width="600" height="800" alt="'+T('Look {n}: {t}, model in a Jacket Market puffer and ski goggles',{n:n,t:t})+'" loading="lazy" draggable="false"></figure>'}).join('')+'</div></div><div class="r-panel"><p class="r-count"><b id="rno">01</b><span>'+T('/ 06 looks')+'</span></p><h2 class="r-t">'+T('The cold line')+'</h2><p class="r-now" id="rnm">'+T('Midnight parka')+'</p></div><div class="r-thumbs" role="group" aria-label="'+T('Choose a look')+'">'+LOOKS.map(function(t,k){return'<button type="button" aria-label="'+T('Look {n}: {t}',{n:k+1,t:t})+'" aria-pressed="false"><img src="images/ring/look'+(k+1)+'.webp" alt="" loading="lazy" draggable="false"></button>'}).join('')+'</div><div class="r-b"><button type="button" id="rp" aria-label="'+T('Previous look')+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" id="rn" aria-label="'+T('Next look')+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div><p class="r-hint">'+T('Drag to turn')+'</p></section>'+
'<section class="h-end" id="he"><div class="spr">'+(A.spray?A.spray('MARKET',2):'')+'</div><div class="mtn" aria-hidden="true"></div><div class="top2"><p class="mono">'+T('Jacket Market was born in the cold. Not as a trend, but as a response.')+'</p><p class="mono" style="text-align:right">'+T('For those who climb. Not for the crowd.')+'</p></div><div><h2><span><em>'+T('Built for cold')+'</em></span><span><em>'+T('Made for height')+'</em></span><span><em class="tone">'+T('Forged to last')+'</em></span></h2></div></div></section>'+
JM.footerHTML();
JM.shopInit();
var NM=LOOKS,thumbs=$$('.r-thumbs button'),fc=-1,rg=$('#ring'),rr=$('#rr'),cards=$$('.r-card',rr),rot=0,vel=0,drag=0,lx=0,tgt=null,vis=1;
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(rg);
function ring(){if(vis){if(tgt!==null){rot+=(tgt-rot)*.08;if(Math.abs(tgt-rot)<.05){rot=tgt;tgt=null}}else if(!drag){rot+=vel;vel*=.94;if(Math.abs(vel)<.02&&!reduce)rot-=.12}
 rr.style.transform='rotateX(-7deg) rotateY('+rot.toFixed(2)+'deg)';
 cards.forEach(function(c,i){var a=(i*60+rot)*Math.PI/180,z=(Math.cos(a)+1)/2;c.style.filter='brightness('+(.34+.66*z).toFixed(2)+')'+(z<.55?' blur('+((.55-z)*5).toFixed(1)+'px)':'')});var f=(((Math.round(-rot/60))%6)+6)%6;if(f!==fc){fc=f;$('#rno').textContent='0'+(f+1);$('#rnm').textContent=NM[f];cards.forEach(function(c,i){c.classList.toggle('on',i===f)});thumbs.forEach(function(t,i){t.setAttribute('aria-pressed',i===f)})}}requestAnimationFrame(ring)}
ring();
rg.addEventListener('pointerdown',function(e){if(e.target.closest('button'))return;drag=1;lx=e.clientX;vel=0;tgt=null;rg.setPointerCapture(e.pointerId);rg.classList.add('grab')});
rg.addEventListener('pointermove',function(e){if(!drag)return;var d=(e.clientX-lx)*.28;lx=e.clientX;rot+=d;vel=d});
function up(){drag=0;rg.classList.remove('grab')}rg.addEventListener('pointerup',up);rg.addEventListener('pointercancel',up);
function turn(d){tgt=(tgt===null?Math.round(rot/60)*60:tgt)+d*60;vel=0}
thumbs.forEach(function(t,k){t.onclick=function(){var c=Math.round(-rot/60),d=(((k-c)%6)+6)%6;if(d>3)d-=6;tgt=-(c+d)*60;vel=0}});$('#rp').onclick=function(){turn(1)};$('#rn').onclick=function(){turn(-1)};
var he=$('#he');new IntersectionObserver(function(e,o){if(e[0].isIntersecting){he.classList.add('in');o.disconnect()}},{threshold:.2}).observe(he);
var AU=(window.JM_P||[]).filter(function(p){return p.id==='aurora'})[0]||P[0],cs=$('#cstage'),ca=$('#cadd'),cat=$('#caddT'),ctm,cd=$('#cold');
$('#chp').innerHTML='$'+AU.price;
ca.onclick=function(){JM.add(AU.id,'L',1);cat.textContent=T('Added: {name}, {size}',{name:AU.name,size:'L'});clearTimeout(ctm);ctm=setTimeout(function(){cat.textContent=T('Add to cart')},2000)};
if(!reduce){var cx=0,cy=0,crx=0,cry=0;cd.addEventListener('pointermove',function(e){var r=cd.getBoundingClientRect();cx=((e.clientX-r.left)/r.width*2-1)*14;cy=((e.clientY-r.top)/r.height*2-1)*8});
(function lp(){crx+=(cx-crx)*.05;cry+=(cy-cry)*.05;cs.style.setProperty('--mx',crx.toFixed(2)+'px');cs.style.setProperty('--my',cry.toFixed(2)+'px');requestAnimationFrame(lp)})()}
JM.footerInit();
})();
