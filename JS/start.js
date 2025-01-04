let Iwantsmoking = 0;

function start(){
    Iwantsmoking = 0;
    let B = document.querySelector(".mmm");
    let LOGO = document.querySelector(".logo");
    LOGO.style.animationPlayState = 'running';
    B.style.animationPlayState = 'running';
    setTimeout(() => {
        window.location.href = 'page1.html';
    }, 1000);
    
    
}

