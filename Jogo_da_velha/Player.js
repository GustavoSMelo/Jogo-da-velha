"use strict";

const $btn = window.document.querySelector('#btnJogar');
$btn.addEventListener('click', Jogar);
const ValoresInvalidosUser = [];
const p0 = window.document.querySelector('#pos0');
const p1 = window.document.querySelector('#pos1');
const p2 = window.document.querySelector('#pos2');
const p3 = window.document.querySelector('#pos3');
const p4 = window.document.querySelector('#pos4');
const p5 = window.document.querySelector('#pos5');
const p6 = window.document.querySelector('#pos6');
const p7 = window.document.querySelector('#pos7');
const p8 = window.document.querySelector('#pos8');
function Jogar()
{
    var $valor = window.document.querySelector('#txtPos');
    $valor = $valor.value;

    if($valor < 0 || $valor > 8){
        window.alert('Numero invalido! ');
    }

    else{
        const verificador = ValoresInvalidosUser.find((element) => {return element == $valor});

        if(verificador == undefined)
        {

            if($valor == 0){
                
                p0.innerHTML = "<h1>X</h1>";
            }
            
            else if($valor == 1){
                
                p1.innerHTML = '<h1>X</h1>';
            }

            else if($valor == 2){
                
                p2.innerHTML = '<h1>X</h1>';
            }

            else if($valor == 3){
                
                p3.innerHTML = '<H1>X</H1>';
            }

            else if($valor == 4){
                
                p4.innerHTML = '<h1>X</h1>';
            }

            else if($valor == 5){
                
                p5.innerHTML = '<h1>X</h1>';
            }

            else if($valor == 6){
                
                p6.innerHTML = '<h1>X</h1>';
            }

            else if($valor ==7){
                
                p7.innerHTML = '<h1>X</h1>';
            }

            else{
                
                p8.innerHTML = '<h1>X</h1>';
            }

            ValoresInvalidosUser.push($valor);
        }
        else{
            window.alert('Posição já preenchida! ');
        }
        console.log(ValoresInvalidosUser.toString());
        
        var rnd = Math.floor(Math.random() * 9);
        var verificadorpos
        while(verificadorpos != undefined){
            rnd = Math.floor(Math.random() * 9);
            verificadorpos = ValoresInvalidosUser.find((element) =>{
                return element == rnd;
            }); 
        }
        if(verificadorpos == undefined){
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
        }
        else{
            verificadorpos += 1;
        }
       
        ValoresInvalidosUser.push(rnd);
    }
}

const ganhador = setInterval(() =>{
    if(p0.innerText == 'X' && p1.innerText == 'X' && p2.innerText == 'X'){
        window.alert('Voce ganhou ');
        parent.window.document.location.href = '';
    }

    else if(p3.innerText == 'X' && p4.innerText == 'X' && p5.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p6.innerText == 'X' && p7.innerText == 'X' && p8.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p0.innerText == 'X' && p3.innerText == 'X' && p6.innerText == 'X'){
        window.alert('voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p1.innerText == 'X' && p4.innerText == 'X' && p7.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p2.innerText == 'X' && p5.innerText == 'X' && p8.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p0.innerText == 'X' && p4.innerText == 'X' && p8.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location.href = '';
    }

    else if(p2.innerText =='X' && p4.innerText == 'X' && p6.innerText == 'X'){
        window.alert('Voce ganhou! ');
        parent.window.document.location = '';
    }

    //IA

    else if(p0.innerText == 'O' && p1.innerText == 'O' && p2.innerText == 'O'){
        window.alert('Voce perdeu ');
        parent.window.document.location.href = '';
    }
    else if(p3.innerText == 'O' && p4.innerText == 'O' && p5.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p6.innerText == 'O' && p7.innerText == 'O' && p8.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p0.innerText == 'O' && p3.innerText == 'O' && p6.innerText == 'O'){
        window.alert('voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p1.innerText == 'O' && p4.innerText == 'O' && p7.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p2.innerText == 'O' && p5.innerText == 'O' && p8.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p0.innerText == 'O' && p4.innerText == 'O' && p8.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location.href = '';
    }
    else if(p2.innerText =='O' && p4.innerText == 'O' && p6.innerText == 'O'){
        window.alert('Voce perdeu! ');
        parent.window.document.location = '';
    }

    else{
        let somador;
        for(var c = 0; c < ValoresInvalidosUser.length ; c++){
            somador += ValoresInvalidosUser[c];
        }

        if(somador == 36){
            window.alert('EMPATE');
            parent.window.document.location.href = '';
        }
    }

}, 100);
