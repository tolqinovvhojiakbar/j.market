(function(){
/* options: set to false to switch an effect off */
var SNOW=true,SMOOTH=true,TILT=true,SCRAMBLE=true;
var H=document.documentElement;
setTimeout(function(){H.classList.remove('pre')},2600);
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var B=document.body,fine=matchMedia('(pointer:fine)').matches;
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
H.classList.add('js-m2');
var d0=H.classList.contains('pre')?1250:0;
/* second curtain layer */
var cv=document.createElement('div');cv.className='cv2';B.appendChild(cv);
addEventListener('pageshow',function(e){if(e.persisted)B.classList.remove('out')});

/* ---------- smooth wheel scrolling ---------- */
if(SMOOTH&&fine){
 var tg=0,cu=0,run=0;
 var inner=function(t){while(t&&t!==B&&t.nodeType===1){var s=getComputedStyle(t);if(/(auto|scroll)/.test(s.overflowY)&&t.scrollHeight>t.clientHeight+2)return true;t=t.parentNode}return false};
 var step=function(){cu+=(tg-cu)*.11;if(Math.abs(tg-cu)<.4){cu=tg;run=0}scrollTo(0,cu);if(run)requestAnimationFrame(step)};
 addEventListener('wheel',function(e){if(e.ctrlKey||e.metaKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||inner(e.target))return;
  var mx=H.scrollHeight-innerHeight;if(mx<=0)return;if(!run){tg=cu=scrollY}
  var d=e.deltaMode===1?e.deltaY*34:e.deltaMode===2?e.deltaY*innerHeight:e.deltaY;
  e.preventDefault();tg=Math.max(0,Math.min(mx,tg+d));if(!run){run=1;requestAnimationFrame(step)}},{passive:false});
 ['keydown','pointerdown','touchstart'].forEach(function(n){addEventListener(n,function(){run=0},{passive:true})});
}

/* ---------- text scramble on reveal ---------- */
if(SCRAMBLE){
 var CH='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#_';
 var scr=function(el){var t=el.textContent,n=t.length;if(!t.trim()||el.getAttribute('data-sc'))return;el.setAttribute('data-sc','1');
  var s=performance.now(),D=650+n*9;(function f(now){var k=Math.min(1,(now-s)/D),o='',i,c;
   for(i=0;i<n;i++){c=t.charAt(i);o+=(/[\s\[\]()\/.,:;|™©-]/.test(c)||i<k*n)?c:CH.charAt(Math.random()*CH.length|0)}
   el.textContent=k<1?o:t;if(k<1)requestAnimationFrame(f)})(s)};
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){so.unobserve(e.target);var el=e.target;setTimeout(function(){scr(el)},d0)}})},{threshold:.6});
 $$('.mono,.jf-base span,.r-count span,.cp-n,.r-hint').forEach(function(el){if(!el.children.length&&!el.hasAttribute('aria-live')&&el.textContent.trim().length>2)so.observe(el)});
}

/* ---------- card tilt + image parallax ---------- */
var vis=[],io2=new IntersectionObserver(function(es){es.forEach(function(e){var i=vis.indexOf(e.target);if(e.isIntersecting){if(i<0)vis.push(e.target)}else if(i>=0)vis.splice(i,1)})},{rootMargin:'80px'});
var seen=new WeakSet();
function obs(){$$('.card:not(.feat) .pic').forEach(function(p){if(!seen.has(p)){seen.add(p);io2.observe(p)}})}
obs();var mo=new MutationObserver(function(){clearTimeout(mo.t);mo.t=setTimeout(obs,120)});mo.observe($('main')||B,{childList:true,subtree:true});
if(TILT&&fine){
 var tc=null;
 var rst=function(c){var p=c&&$('.pic',c);if(p){p.style.setProperty('--tx','0deg');p.style.setProperty('--ty','0deg')}};
 document.addEventListener('pointermove',function(e){var c=e.target.closest&&e.target.closest('.card:not(.feat)');
  if(tc&&tc!==c)rst(tc);tc=c;if(!c)return;var p=$('.pic',c);if(!p)return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  p.style.setProperty('--tx',(-y*9).toFixed(2)+'deg');p.style.setProperty('--ty',(x*11).toFixed(2)+'deg')},{passive:true});
 H.addEventListener('mouseleave',function(){rst(tc);tc=null});
}

/* ---------- snow ---------- */
var g=null,cn=null,W=0,Hh=0,F=[];
if(SNOW){
 cn=document.createElement('canvas');cn.className='snow';cn.setAttribute('aria-hidden','true');B.appendChild(cn);g=cn.getContext('2d');
 var dpr=Math.min(2,devicePixelRatio||1),N=innerWidth<700?32:64;
 var rs=function(){W=innerWidth;Hh=innerHeight;cn.width=W*dpr;cn.height=Hh*dpr;g.setTransform(dpr,0,0,dpr,0,0)};rs();addEventListener('resize',rs);
 for(var i=0;i<N;i++)F.push({x:Math.random()*W,y:Math.random()*Hh,r:.7+Math.random()*2.1,v:.25+Math.random()*.8,p:Math.random()*6.28,s:.4+Math.random()*.8});
}

/* ---------- one rAF loop: marquee velocity, snow, card image parallax ---------- */
var ly=scrollY,v=0,t0=performance.now(),mq=null,mqa=null,wx=0,pmx=.5;
addEventListener('pointermove',function(e){pmx=e.clientX/innerWidth},{passive:true});
(function loop(now){var dt=Math.min(3,(now-t0)/16.67);t0=now;
 var y=scrollY,dy=y-ly;ly=y;v+=(dy-v)*.12;
 if(!mq){mq=$('.mq>div');if(mq){var a=mq.getAnimations();mqa=a[0]||null}}
 if(mqa&&mq){var r=1+v*.28;mqa.playbackRate=Math.max(-6,Math.min(8,Math.abs(r)<.15?.15:r));mq.style.transform='skewX('+Math.max(-10,Math.min(10,-v*.7)).toFixed(2)+'deg)'}
 if(g&&!document.hidden){g.clearRect(0,0,W,Hh);wx+=((pmx-.5)*.9-wx)*.03;g.fillStyle='#fff';
  for(var i=0;i<F.length;i++){var f=F[i];f.p+=.012*dt;f.y+=(f.v*1.1)*dt-dy*f.r*.07;f.x+=(Math.sin(f.p)*.35+wx*f.s*1.4)*dt;
   if(f.y>Hh+6){f.y=-6;f.x=Math.random()*W}else if(f.y<-8){f.y=Hh+4;f.x=Math.random()*W}
   if(f.x>W+6)f.x=-6;else if(f.x<-6)f.x=W+6;
   g.globalAlpha=.22+.5*(f.r/2.8);g.beginPath();g.arc(f.x,f.y,f.r,0,6.283);g.fill()}
  g.globalAlpha=1}
 var vh=innerHeight;for(var k=0;k<vis.length;k++){var p=vis[k],rc=p.getBoundingClientRect(),im=p.firstElementChild;if(!im||im.tagName!=='IMG')continue;
  var d=(rc.top+rc.height/2-vh/2)/vh;im.style.translate='0 '+Math.max(-14,Math.min(14,d*-16)).toFixed(1)+'px'}
 requestAnimationFrame(loop)})(t0);
})();
