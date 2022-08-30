const volta = document.querySelector('.btn__volta')
const avanca = document.querySelector('.btn__avanca')
let i = 1;
const info = document.querySelectorAll('.informations')

avanca.addEventListener('click', ()=>{
    const fotoFundo = document.querySelector('.photos__back');
    if(i >= 3){
        fotoFundo.style.backgroundImage = `url('./images/desktop-image-hero-1.jpg')`;
        i = 1
        informations();
    }else{
        i++;
        fotoFundo.style.backgroundImage = `url('./images/desktop-image-hero-${i}.jpg')`;
        informations();
    }
})

volta.addEventListener('click', ()=>{
    const fotoFundo = document.querySelector('.photos__back');
    if(i <= 1){
        fotoFundo.style.backgroundImage = `url('./images/desktop-image-hero-3.jpg')`;
        i = 3
        informations();
    }else{
        i--;
        fotoFundo.style.backgroundImage = `url('./images/desktop-image-hero-${i}.jpg')`;
        informations();
    }
})


function informations (){
    info.forEach(element =>{
        element.classList.add('visible');      
    })
    info[i-1].classList.remove('visible');
}