/* Contacts page: channels + message form. UI only, no server is connected. */
(function(){
if(document.body.dataset.page!=='contacts')return;
var T=window.JM_T;
var R=document.getElementById('app'),$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var toast=function(m){window.JM&&JM.toast(m)};
var EMAIL='hello@jacketmarket.example',PHONE='+000 00 000 00 00',IG='https://www.instagram.com/xoji.builds';
var ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
function row(k,v,href,extra,copy){
 k=T(k);return'<li class="ct-it"><a class="ct-row" href="'+href+'"'+(extra||'')+'><span class="ct-k">'+k+'</span><span class="ct-v">'+v+'</span><span class="ct-go">'+ARR+'</span></a>'+(copy?'<button type="button" class="ct-copy" data-copy="'+copy+'" data-k="'+k.toLowerCase()+'" aria-label="'+T('Copy {k}',{k:k.toLowerCase()})+'">'+T('Copy')+'</button>':'')+'</li>';
}
function fld(n,label,type,auto){return'<div class="fld" data-f="'+n+'"><input id="c-'+n+'" name="'+n+'" type="'+type+'" placeholder=" " autocomplete="'+auto+'" aria-describedby="c-'+n+'-e"><label for="c-'+n+'">'+label+'</label><p class="err" id="c-'+n+'-e"></p></div>'}
var TOPICS=['Order','Sizing','Returns','Something else'];
R.innerHTML=
'<div class="ct">'+
 '<header class="ct-head rise"><h1>'+T('Talk to')+'<br><span class="tone">'+T('us.')+'</span></h1><p class="ct-lead">'+T('Questions about a jacket, your size or an order? Write to us and we will get back to you.')+'</p></header>'+
 '<div class="ct-grid">'+
  '<div class="ct-side rise"><ul class="ct-list">'+
   row('Email',EMAIL,'mailto:'+EMAIL,'',EMAIL)+
   row('Phone',PHONE,'tel:+000000000','',PHONE)+
   row('Instagram','@xoji.builds',IG,' target="_blank" rel="noopener noreferrer"')+
  '</ul><p class="ct-note">'+T('Email and phone are placeholders. Replace them with your own details.')+'</p></div>'+
  '<section class="ct-card rise" aria-labelledby="ctT"><h2 id="ctT">'+T('Send a message')+'</h2>'+
   '<form id="fm" novalidate>'+
    '<fieldset class="ct-topics"><legend>'+T('What is it about?')+'</legend><div>'+TOPICS.map(function(t,i){return'<label class="chip"><input type="radio" name="topic" value="'+t+'"><span>'+T(t)+'</span></label>'}).join('')+'</div></fieldset>'+
    fld('n',T('Your name'),'text','name')+fld('e',T('Email'),'email','email')+
    '<div class="fld" data-f="m"><textarea id="c-m" name="m" placeholder=" " maxlength="600" aria-describedby="c-m-e"></textarea><label for="c-m">'+T('Message')+'</label><p class="err" id="c-m-e"></p><span class="cnt" id="cnt" aria-hidden="true">0 / 600</span></div>'+
    '<button class="btn au-go" type="submit">'+T('Send message')+'</button>'+
   '</form></section>'+
 '</div></div>';
$$('.rise',R).forEach(function(e,i){e.style.setProperty('--i',i)});
var fm=$('#fm');
/* copy buttons */
$$('.ct-copy').forEach(function(b){b.onclick=function(){
 var v=b.dataset.copy,done=function(){b.textContent=T('Copied');setTimeout(function(){b.textContent=T('Copy')},1600);toast(T('{k} copied',{k:b.dataset.k.charAt(0).toUpperCase()+b.dataset.k.slice(1)}))};
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(v).then(done,function(){toast(T('Copy is not available here'))})}
 else{try{var t=document.createElement('textarea');t.value=v;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();done()}catch(x){toast(T('Copy is not available here'))}}
}});
/* counter */
$('#c-m').addEventListener('input',function(){$('#cnt').textContent=this.value.length+' / 600'});
/* validation */
function bad(f,msg){f.classList.add('bad');$('.err',f).textContent=msg;$('input,textarea',f).setAttribute('aria-invalid','true')}
fm.addEventListener('input',function(e){var f=e.target.closest('.fld');if(f&&f.classList.contains('bad')){f.classList.remove('bad');$('.err',f).textContent='';e.target.removeAttribute('aria-invalid')}});
fm.addEventListener('submit',function(e){
 e.preventDefault();$$('.fld',fm).forEach(function(f){f.classList.remove('bad');$('.err',f).textContent='';$('input,textarea',f).removeAttribute('aria-invalid')});
 var first=null,V=function(n){return $('#c-'+n).value.trim()},hit=function(n,m){bad($('[data-f="'+n+'"]',fm),m);if(!first)first=$('#c-'+n)};
 if(!V('n'))hit('n',T('Enter your name.'));
 if(!V('e'))hit('e',T('Enter your email.'));else if(!/^\S+@\S+\.\S+$/.test(V('e')))hit('e',T('That email doesn’t look right.'));
 if(!V('m'))hit('m',T('Write a short message.'));
 if(first){first.focus();return}
 toast(T('The form is not connected to a server yet'));
});
})();
