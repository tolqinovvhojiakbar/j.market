(function(){
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var H=document.documentElement,B=document.body,fine=matchMedia('(pointer:fine)').matches;
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
H.classList.add('js-m');
function io(list,fn,t){var o=new IntersectionObserver(function(es){var k=0;es.forEach(function(e){if(e.isIntersecting){fn(e.target,k++);o.unobserve(e.target)}})},{threshold:t||.15,rootMargin:'0px 0px -6% 0px'});list.forEach(function(e){o.observe(e)})}
/* scroll reveal */
var rv=$$('.card:not(.rise),.sh>ul,.sh>button,.fc,.specs>div,.ab-p,.ab-ban,.ab-cta,.tot,.c-note,.r-c,.top2 p,.jf-top>*,.jf-big');
rv.forEach(function(e){e.setAttribute('data-rv','')});
io(rv,function(e,k){e.style.setProperty('--rd',k*80+'ms');e.classList.add('rv-in')},.12);
/* headline words */
function mk(c){var w=document.createElement('span'),i=document.createElement('i');w.className='w';w.appendChild(i);return[w,i]}
function split(el){var n=0;el.setAttribute('aria-label',el.textContent);(function walk(p){[].slice.call(p.childNodes).forEach(function(c){
 if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}var m=mk();m[1].textContent=t;m[0].style.setProperty('--wi',n);m[1].style.setProperty('--wi',n++);f.appendChild(m[0])});p.replaceChild(f,c)}
 else if(c.nodeType===1){if(c.classList.contains('tone')){var m=mk();m[1].style.setProperty('--wi',n++);p.replaceChild(m[0],c);m[1].appendChild(c)}else if(c.tagName!=='BR'&&c.tagName!=='SUP')walk(c)}})})(el)}
var hs=$$('h1:not(.rise),h2').filter(function(h){return!h.closest('.cold,.h-end')&&!h.classList.contains('r-t')});
hs.forEach(split);io(hs,function(h){h.classList.add('sp-in')},.3);
/* graffiti draw-in, cold section, counters, marquee */
$$('.hz.sp,.tag').forEach(function(c){c.classList.add('dr');$$('path',c).forEach(function(p,i){p.setAttribute('pathLength',1);p.style.setProperty('--pi',i)});io([c],function(e){e.classList.add('drawn')},.2)});
io($$('.cold'),function(e){e.classList.add('in')},.25);
io($$('.specs b'),function(b){var n=+b.textContent,s=performance.now();(function f(t){var k=Math.min(1,(t-s)/1200);b.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(s)},.6);
var hr2=$('#hr');if(hr2){var T=['Built for cold','Jacket Market™','Made for height','Forged to last'].map(function(x){return window.JM_T(x)}).map(function(x){return'<span>'+x+'</span><i></i>'}).join('');hr2.insertAdjacentHTML('afterend','<div class="mq" aria-hidden="true"><div>'+T+T+T+T+'</div></div>')}
/* shop filter replay */
$$('#fc button').forEach(function(b){b.addEventListener('click',function(){setTimeout(function(){$$('.grid>.card:not([hidden])').forEach(function(c,i){c.classList.remove('flt');void c.offsetWidth;c.classList.add('rv-in');c.style.setProperty('--rd',i*50+'ms');c.classList.add('flt')})},20)})});
/* card sheen */
$$('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})});
/* fly to cart */
document.addEventListener('click',function(e){var b=e.target.closest('#ad,#add,#cadd'),t=$('#cartN');if(!b||!t)return;var hd=$('header.top');if(hd)hd.classList.remove('hide');
 var a=b.getBoundingClientRect(),z=t.getBoundingClientRect(),d=document.createElement('i'),sx=a.left+a.width/2,sy=a.top+a.height/2,ex=z.left+z.width/2,ey=z.top+z.height/2;d.className='fly';B.appendChild(d);
 d.animate([{transform:'translate('+sx+'px,'+sy+'px) scale(1.4)'},{transform:'translate('+(sx+(ex-sx)*.45)+'px,'+(Math.min(sy,ey)-80)+'px) scale(1)',offset:.45},{transform:'translate('+ex+'px,'+ey+'px) scale(.3)'}],{duration:800,easing:'cubic-bezier(.5,0,.3,1)'}).onfinish=function(){d.remove();t.classList.add('pop');setTimeout(function(){t.classList.remove('pop')},260)}},true);
/* magnetic controls */
if(fine)$$('.btn,.hex,.fb,.logo,.r-b button,.soc a,.jf-soc a').forEach(function(m){
 if(m.offsetWidth>220||m.closest('.buy,.sum,.cp,form'))return; /* wide / form buttons must stay put, they cover neighbouring controls */
 var cl=function(v){return Math.max(-8,Math.min(8,v))};
 m.addEventListener('pointermove',function(e){var r=m.getBoundingClientRect();m.style.translate=cl((e.clientX-r.left-r.width/2)*.2)+'px '+cl((e.clientY-r.top-r.height/2)*.2)+'px'});
 m.addEventListener('pointerleave',function(){var f=m.style.translate||'0 0';m.style.translate='';m.animate([{translate:f},{translate:'0 0'}],{duration:500,easing:'cubic-bezier(.2,.8,.2,1)'})})});
/* cursor ring + pointer state */
var px=0,py=0,cx=0,cy=0,mx=0,my=0,tx=0,ty=0,cu=null;
if(fine){cu=document.createElement('div');cu.className='cur';B.appendChild(cu);cx=px=innerWidth/2;cy=py=innerHeight/2;
 addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;tx=px/innerWidth*2-1;ty=py/innerHeight*2-1;cu.classList.add('on');cu.classList.toggle('big',!!e.target.closest('a,button,.card,summary,input,textarea'))});
 H.addEventListener('mouseleave',function(){cu.classList.remove('on')})}
/* one rAF loop: progress, header, parallax */
var prog=document.createElement('div');prog.className='sprog';B.appendChild(prog);
var hd=$('header.top'),ly=0,sy=scrollY,hero=$('#hero'),hl=hero&&$('.hl',hero),hrr=hero&&$('.hr',hero),st=hero&&$('#stage'),gr=hero&&$('.hz.sp');
var pars=[['.h-end .mtn',.1],['.h-end .spr',-.08],['.jf-w',.06],['.abm',.12],['.bgword',.15]].map(function(a){var e=$(a[0]);return e&&[e,a[1]]}).filter(Boolean);
(function loop(){var y=scrollY,vh=innerHeight;sy+=(y-sy)*.12;mx+=(tx-mx)*.06;my+=(ty-my)*.06;
 prog.style.transform='scaleX('+Math.min(1,y/Math.max(1,H.scrollHeight-vh))+')';
 if(hero&&sy<vh*1.2){var p=Math.min(1,sy/hero.offsetHeight);st.style.translate=(mx*-14)+'px '+(sy*.2+my*-8)+'px';hl.style.translate='0 '+sy*.1+'px';hrr.style.translate='0 '+sy*.06+'px';hl.style.opacity=hrr.style.opacity=Math.max(0,1-p*1.15);if(gr)gr.style.translate=(mx*-26)+'px '+(sy*.12+my*-14)+'px'}
 pars.forEach(function(a){var r=a[0].parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;var d=Math.max(-vh,Math.min(vh,r.top+r.height/2-vh/2));a[0].style.translate='0 '+d*a[1]+'px'});
 if(cu){cx+=(px-cx)*.2;cy+=(py-cy)*.2;cu.style.transform='translate('+cx+'px,'+cy+'px)'}
 requestAnimationFrame(loop)})();
})();
