"use strict";

let count = 40
let arrai = ["1","1","1","1","1","1","1","1","1","2","1","1","1","1","2","1","1","3","1","1","8","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"] ;
console.log(arrai.length);
refrech();


function refrech (bar) {
    console.log("haha");

    arrai.unshift(Math.floor(Math.random()*32)) ;

    console.log(arrai);
    
    
    setTimeout(init,500) ;
    

}


function init () {

    let brt = 39 ;
    for (let i = 0 ; i < 40 ; i++ ){
        document.getElementById(i).style.height = arrai[brt] + "vw" ;
        brt-- ;
        
    }
    arrai.pop(40);
    
    setTimeout(refrech,500) ;
    
}



