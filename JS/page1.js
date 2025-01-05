let Imge = document.getElementById("imge");
let boutton = document.getElementById("buttom");
let Iwantsmoking = 0;
function plyin(){
    Imge.style.animationName = "in";
    Imge.style.animationPlayState = "running";
    boutton.style.animationName = "in";
    boutton.style.animationPlayState = "running";


}

function YES(){
    Iwantsmoking =1 ;
    Imge.style.animationName = "OUT";
    Imge.style.animationDuration = "3s";
    Imge.style.animationPlayState = "running";
    boutton.style.animationName = "OUT";
    boutton.style.animationDuration = "3s";
    boutton.style.animationPlayState = "running";
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 1000);
    
    

}


function NO(){
    Imge.style.animationName = "OUT";
    Imge.style.animationDuration = "3s";
    Imge.style.animationPlayState = "running";
    boutton.style.animationName = "OUT";
    boutton.style.animationDuration = "3s";
    boutton.style.animationPlayState = "running";
    setTimeout(() => {
        window.location.href = 'end.html';
    }, 1000);

}
