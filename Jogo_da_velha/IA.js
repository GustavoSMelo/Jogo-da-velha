"use strict";

var rnd = Math.floor(Math.random() * 9);

import {$btn} from './Player.js';
$btn.addEventListener('click', IAJogar);

import {ValoresInvalidosUser} from './Player';

export function IAJogar(){
    var verificadorpos
    while(verificadorpos != undefined){
        verificadorpos = ValoresInvalidosUser.find((element) =>{
            return element == rnd;
        }); 
    }

    if(rnd == 0){
        const IA0 = window.document.querySelector('#pos0');
        IA0.innerHTML = '<h1>O</h1>';
    }

    else if(rnd ==1){
        const IA1 = window.document.querySelector('#pos1');
        IA1.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 2){
        const IA2 = window.document.querySelector('#pos2');
        IA2.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 3){
        const IA3 = window.document.querySelector('#pos3');
        IA3.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 4){
        const IA4 = window.document.querySelector('#pos4');
        IA4.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 5){
        const IA5 = window.document.querySelector('#pos5');
        IA5.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 6){
        const IA6 = window.document.querySelector('#pos6');
        IA6.innerHTML = '<h1>O</h1>';
    }

    else if(rnd == 7){
        const IA7 = window.document.querySelector('#pos7');
        IA7.innerHTML = '<h1>O</h1>';
    }

    else{
        const IA8 = window.document.querySelector('#pos8');
        IA8.innerHTML = '<h1>O</h1>';
    }
    ValoresInvalidosUser.push(rnd);
}
