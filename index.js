

const menuBtn=document.querySelector('.stripes-button');
const navBar= document.querySelector('.link-bar');

menuBtn.addEventListener("click",function(){
    navBar.classList.toggle('mobile-button');
});