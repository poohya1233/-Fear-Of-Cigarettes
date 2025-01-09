let Imge2 = document.getElementById("imge2");
let boutton2 = document.getElementById("buttom2");
let Iwantsmoking2 = Iwantsmoking;

function YES2(){
    imge2.style.animationName = "OUT2";
    imge2.style.animationDuration = "3s";
    imge2.style.animationPlayState = "running";
    boutton2.style.animationName = "OUT2";
    boutton2.style.animationDuration = "3s";
    boutton2.style.animationPlayState = "running";
    setTimeout(() => {
        window.location.href = '/-Fear-Of-Cigarettes/end3.html';
    }, 1000);
    
    

}


function NO2(){
    imge2.style.animationName = "OUT2";
    imge2.style.animationDuration = "3s";
    imge2.style.animationPlayState = "running";
    boutton2.style.animationName = "OUT2";
    boutton2.style.animationDuration = "3s";
    boutton2.style.animationPlayState = "running";
    setTimeout(() => {
        window.location.href = '/-Fear-Of-Cigarettes/end2.html';
    }, 1000);

}
