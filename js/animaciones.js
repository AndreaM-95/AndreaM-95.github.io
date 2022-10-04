//Botón volver arriba
const btn_scrolltop=document.querySelector('#btn_scrolltop');
btn_scrolltop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

window.onscroll = ()=>{
    if(window.scrollY < 200){
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    }else{
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
};

//SONIDOS CLICK
let sonido = new Audio();
sonido.src = "./multimedia/botones.mp3";