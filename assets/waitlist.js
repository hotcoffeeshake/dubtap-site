(function(){
  var URL_='https://ebwnfjtywielivkejkxc.supabase.co/rest/v1/waitlist';
  var KEY='sb_publishable_jrQMW7zH_326XezlhpBblw_vG7_lMAh';
  function msg(f,text,ok){var m=f.querySelector('.wl-msg');m.textContent=text;m.className='wl-msg '+(ok?'ok':'err');}
  document.addEventListener('submit',function(e){
    var f=e.target; if(!f.classList||!f.classList.contains('wl'))return;
    e.preventDefault();
    if(f.querySelector('[name=website]').value)return; // bot trap
    var email=f.querySelector('[name=email]').value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){msg(f,'Please enter a valid email.',false);return;}
    var btn=f.querySelector('button');btn.disabled=true;var label=btn.textContent;btn.textContent='Joining…';
    fetch(URL_,{method:'POST',headers:{'apikey':KEY,'Authorization':'Bearer '+KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({email:email,source:(f.getAttribute('data-source')||location.pathname).slice(0,100),
        referrer:(document.referrer||'').slice(0,300),locale:(navigator.language||'').slice(0,20)})})
    .then(function(r){
      if(r.ok||r.status===409){f.classList.add('done');msg(f,r.status===409?"You're already on the list. We'll email your code at launch.":"You're on the list! We'll email your 7-day free code when Dubtap launches.",true);}
      else{throw new Error(r.status);}
    }).catch(function(){msg(f,'Something went wrong. Please try again, or email support@dubtap.app.',false);btn.disabled=false;btn.textContent=label;});
  });
})();
