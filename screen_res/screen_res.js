window.onresize=function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let win=document.querySelector('.dis');
    win.textContent='';
    win.textContent=width+' x '+height;
}
window.onload=function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let win=document.querySelector('.dis');
    win.textContent=width+' x '+height;
}