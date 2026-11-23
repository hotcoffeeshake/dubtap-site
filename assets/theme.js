(function(){
  var root=document.documentElement;
  function current(){return root.getAttribute('data-theme')||(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('.theme');if(!b)return;
    var next=current()==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    b.setAttribute('aria-label',next==='dark'?'Switch to light mode':'Switch to dark mode');
    try{localStorage.setItem('theme',next)}catch(err){}
  });
})();
