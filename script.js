const bar=document.getElementById('progress');
function update(){const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;bar.style.width=(max?100*h.scrollTop/max:0)+'%'}
addEventListener('scroll',update,{passive:true});update();