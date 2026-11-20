/* Account page: create account, sign in, signed-in view.
   Accounts are stored in this browser only (localStorage), passwords as PBKDF2 hashes.
   There is no server, so an account does not follow the person to another device. */
(function(){
if(document.body.dataset.page!=='account')return;
var T=window.JM_T;
var R=document.getElementById('app'),$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var toast=function(m){window.JM&&JM.toast(m)};
var UK='jm_users',SK='jm_session';
function users(){try{return JSON.parse(localStorage.getItem(UK))||[]}catch(e){return[]}}
function saveUsers(u){localStorage.setItem(UK,JSON.stringify(u))}
function me(){try{var s=JSON.parse(localStorage.getItem(SK));return s&&users().filter(function(u){return u.email===s.email})[0]||null}catch(e){return null}}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function b64(a){var s='';for(var i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return btoa(s)}
function unb64(t){var s=atob(t),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a}
function derive(pw,salt){
 var enc=new TextEncoder();
 return crypto.subtle.importKey('raw',enc.encode(pw),'PBKDF2',false,['deriveBits']).then(function(k){return crypto.subtle.deriveBits({name:'PBKDF2',salt:salt,iterations:150000,hash:'SHA-256'},k,256)}).then(function(b){return b64(new Uint8Array(b))});
}
function sync(){window.JM&&JM.syncAcct&&JM.syncAcct()}
function rise(){$$('.rise',R).forEach(function(e,i){e.style.setProperty('--i',i)})}
var ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
function visual(h1){return'<aside class="au-vis rise"><img src="images/account-model.webp" width="896" height="1200" alt="'+T('Model in a white puffer jacket and ski goggles standing in snowy mountains')+'"><div class="au-cap"><h1>'+h1+'</h1><ul><li>'+T('Free shipping from $200')+'</li><li>'+T('First to see new collections')+'</li></ul></div></aside>'}

/* ---------- signed-in view ---------- */
function renderHome(u){
 var first=esc(u.name.trim().split(' ')[0]),n=0;
 try{n=(JSON.parse(localStorage.getItem('jm_cart'))||[]).reduce(function(a,i){return a+i.qty},0)}catch(e){}
 var since=new Date(u.created).toLocaleDateString(JM_I18N.locale(),{day:'numeric',month:'short',year:'numeric'});
 R.innerHTML='<div class="auth">'+visual(T('Welcome to')+'<br><span class="tone">'+T('the cold line.')+'</span>')+
 '<section class="au-card hm rise" aria-labelledby="auT"><h2 id="auT">'+T('Hi, {name}.',{name:first})+'</h2><p class="au-sub">'+T('You are signed in as {email}.',{email:esc(u.email)})+'</p>'+
 '<div class="hm-grid"><a class="hm-t" href="cart.html"><b>'+n+'</b><span>'+T.items(n)+' '+T('in your cart')+'</span><i>'+ARR+'</i></a><a class="hm-t" href="shop.html"><b>0</b><span>'+T('orders yet. Browse jackets')+'</span><i>'+ARR+'</i></a></div>'+
 '<dl class="hm-d"><div><dt>'+T('Name')+'</dt><dd>'+esc(u.name)+'</dd></div><div><dt>'+T('Email')+'</dt><dd>'+esc(u.email)+'</dd></div><div><dt>'+T('Member since')+'</dt><dd>'+since+'</dd></div></dl>'+
 '<button type="button" class="btn au-go au-out" id="out">'+T('Sign out')+'</button></section></div>';
 rise();
 $('#out').onclick=function(){localStorage.removeItem(SK);sync();toast(T('Signed out'));renderAuth('s')};
}

/* ---------- create account / sign in ---------- */
function field(name,label,type,auto,mode,extra){
 return'<div class="fld" data-f="'+name+'"'+(mode?' data-m="'+mode+'"':'')+'><input id="f-'+name+'" name="'+name+'" type="'+type+'" placeholder=" " autocomplete="'+auto+'" aria-describedby="f-'+name+'-e"'+(extra||'')+'><label for="f-'+name+'">'+label+'</label>'+(type==='password'?'<button type="button" class="eye" aria-pressed="false" aria-label="'+T('Show password')+'">'+T('Show')+'</button>':'')+'<p class="err" id="f-'+name+'-e"></p></div>';
}
var COPY={
 r:{h:T('Create your account'),s:T('It takes a minute. Your cart stays exactly as it is.'),b:T('Create account'),a:T('Already have an account? '),l:T('Sign in'),auto:'new-password'},
 s:{h:T('Welcome back'),s:T('Sign in to pick up where you left off.'),b:T('Sign in'),a:T('New to Jacket Market? '),l:T('Create account'),auto:'current-password'}};
function renderAuth(start){
 R.innerHTML='<div class="auth">'+visual(T('Join the')+'<br><span class="tone">'+T('cold line.')+'</span>')+
 '<section class="au-card rise" aria-labelledby="auT">'+
  '<div class="au-tabs" role="tablist" aria-label="'+T('Account')+'" data-m="r"><i class="au-ind" aria-hidden="true"></i><button type="button" role="tab" id="tR" aria-selected="true" aria-controls="fm">'+T('Create account')+'</button><button type="button" role="tab" id="tS" aria-selected="false" aria-controls="fm" tabindex="-1">'+T('Sign in')+'</button></div>'+
  '<h2 id="auT"></h2><p class="au-sub" id="auS"></p>'+
  '<form id="fm" role="tabpanel" aria-labelledby="tR" novalidate>'+
   field('n',T('Full name'),'text','name','r')+field('e',T('Email'),'email','email')+field('p',T('Password'),'password','new-password')+
   '<div class="pw-help" data-m="r"><div class="meter" id="mt" data-s="0" aria-hidden="true"><i></i><i></i><i></i><i></i></div><p class="hint" id="hint" aria-live="polite">'+T('Use 8 or more characters with a number.')+'</p></div>'+
   '<div class="au-row" data-m="s"><button type="button" class="au-lnk" id="fg">'+T('Forgot password?')+'</button></div>'+
   '<div class="fld chkw" data-f="t" data-m="r"><label class="chk"><input type="checkbox" name="t" id="f-t" aria-describedby="f-t-e"><span>'+T('I agree to the terms and privacy policy')+'</span></label><p class="err" id="f-t-e"></p></div>'+
   '<button class="btn au-go" type="submit" id="go"></button></form>'+
  '<p class="au-alt" id="alt">x <button type="button" class="au-lnk" id="sw"></button></p></section></div>';
 rise();
 var mode='r',tabs=$('.au-tabs'),fm=$('#fm');
 function clearErr(){$$('.fld',fm).forEach(function(f){f.classList.remove('bad');$('.err',f).textContent='';$('input',f).removeAttribute('aria-invalid')})}
 function setMode(m,focus){
  mode=m;var c=COPY[m];tabs.dataset.m=m;
  $('#tR').setAttribute('aria-selected',m==='r');$('#tS').setAttribute('aria-selected',m==='s');
  $('#tR').tabIndex=m==='r'?0:-1;$('#tS').tabIndex=m==='s'?0:-1;fm.setAttribute('aria-labelledby',m==='r'?'tR':'tS');
  $('#auT').textContent=c.h;$('#auS').textContent=c.s;$('#go').textContent=c.b;$('#alt').firstChild.textContent=c.a;$('#sw').textContent=c.l;$('#f-p').autocomplete=c.auto;
  $$('[data-m]',fm).forEach(function(el){el.hidden=el.dataset.m!==m});
  clearErr();if(focus)$(m==='r'?'#f-n':'#f-e').focus();
  try{history.replaceState(null,'',m==='s'?'#signin':location.pathname+location.search)}catch(x){}
 }
 $('#tR').onclick=function(){setMode('r')};$('#tS').onclick=function(){setMode('s')};
 $('#sw').onclick=function(){setMode(mode==='r'?'s':'r',true)};
 tabs.addEventListener('keydown',function(e){if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;e.preventDefault();var m=mode==='r'?'s':'r';setMode(m);$(m==='r'?'#tR':'#tS').focus()});
 $('#fg').onclick=function(){toast(T('Password reset is not connected yet'))};
 $('.eye',fm).onclick=function(){var i=$('#f-p'),show=i.type==='password';i.type=show?'text':'password';this.textContent=show?T('Hide'):T('Show');this.setAttribute('aria-pressed',show);this.setAttribute('aria-label',show?T('Hide password'):T('Show password'))};
 var LV=['',T('Weak'),T('Okay'),T('Good'),T('Strong')];
 function score(v){var s=0;if(v.length>=8)s++;if(/\d/.test(v))s++;if(/[a-z]/.test(v)&&/[A-Z]/.test(v))s++;if(v.length>=12||/[^\w\s]/.test(v))s++;return v?Math.max(1,s):0}
 $('#f-p').addEventListener('input',function(){var s=score(this.value);$('#mt').dataset.s=s;$('#hint').textContent=s?LV[s]+(s<3?'. '+T('Use 8 or more characters with a number.'):'.'):T('Use 8 or more characters with a number.')});
 function bad(f,msg){f.classList.add('bad');$('.err',f).textContent=msg;$('input',f).setAttribute('aria-invalid','true')}
 fm.addEventListener('input',function(e){var f=e.target.closest('.fld');if(f&&f.classList.contains('bad')){f.classList.remove('bad');$('.err',f).textContent='';e.target.removeAttribute('aria-invalid')}});
 var go=$('#go');
 function busy(on){go.disabled=on;go.textContent=on?T('Please wait'):COPY[mode].b}
 fm.addEventListener('submit',function(e){
  e.preventDefault();clearErr();var first=null,F=function(n){return $('[data-f="'+n+'"]',fm)},V=function(n){return $('#f-'+n).value.trim()},hit=function(n,m){bad(F(n),m);if(!first)first=$('#f-'+n)};
  if(mode==='r'&&!V('n'))hit('n',T('Enter your name.'));
  if(!V('e'))hit('e',T('Enter your email.'));else if(!/^\S+@\S+\.\S+$/.test(V('e')))hit('e',T('That email doesn’t look right.'));
  var p=$('#f-p').value;
  if(!p)hit('p',mode==='r'?T('Create a password.'):T('Enter your password.'));else if(mode==='r'&&(p.length<8||!/\d/.test(p)))hit('p',T('Use 8 or more characters with at least one number.'));
  if(mode==='r'&&!$('#f-t').checked)hit('t',T('Agree to continue.'));
  if(first){first.focus();return}
  if(!(window.crypto&&crypto.subtle)){toast(T('Open the site over http://localhost to create accounts'));return}
  var email=V('e').toLowerCase();busy(true);
  if(mode==='r'){
   if(users().some(function(u){return u.email===email})){busy(false);hit('e',T('An account with this email already exists. Try signing in.'));first.focus();return}
   var salt=crypto.getRandomValues(new Uint8Array(16));
   derive(p,salt).then(function(h){
    var u={id:Date.now().toString(36),name:V('n'),email:email,salt:b64(salt),hash:h,created:new Date().toISOString()},all=users();all.push(u);saveUsers(all);
    localStorage.setItem(SK,JSON.stringify({email:email}));sync();
    try{history.replaceState(null,'',location.pathname+location.search)}catch(x){}
    toast(T('Account created. Welcome, {name}',{name:u.name.trim().split(' ')[0]}));renderHome(u);window.scrollTo(0,0);
   }).catch(function(){busy(false);toast(T('Could not create the account here'))});
  }else{
   var u=users().filter(function(x){return x.email===email})[0];
   var fail=function(){busy(false);hit('p',T('Email or password is incorrect.'));first.focus()};
   if(!u){derive(p,crypto.getRandomValues(new Uint8Array(16))).then(fail,fail);return}
   derive(p,unb64(u.salt)).then(function(h){
    if(h!==u.hash){fail();return}
    localStorage.setItem(SK,JSON.stringify({email:email}));sync();
    try{history.replaceState(null,'',location.pathname+location.search)}catch(x){}
    toast(T('Signed in. Welcome back, {name}',{name:u.name.trim().split(' ')[0]}));renderHome(u);window.scrollTo(0,0);
   }).catch(fail);
  }
 });
 setMode(start||(location.hash==='#signin'?'s':'r'));
}

var u=me();u?renderHome(u):renderAuth();
})();
