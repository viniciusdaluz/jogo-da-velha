var jogo = [];
var tabuleiro = [];
var quemJoga = 1; // 0 para Player1, 1 para CPU ou Player2
var vitoria;
var jogoRolando = true;
var nivel = 1;
var jogadaCpu = 1;
var quemComeca = 1;
var numJogadas = 0;


function jogada(p){
    numJogadas++
    verificaVez(quemJoga);
    
    if((quemJoga === 0) && (jogoRolando === true)){
        switch(p){
                case 00 :
                if(jogo[0][0] === ''){
                    jogo[0][0] = 'X';
                    quemJoga = 1;
                }; break;
                
                case 01 :
                if(jogo[0][1] === ''){
                    jogo[0][1] = 'X';
                    quemJoga = 1;
                }; break;
                case 02 :
                if(jogo[0][2] === ''){
                    jogo[0][2] = 'X';
                    quemJoga = 1;
                }; break;
                case 10 :
                if(jogo[1][0] === ''){
                    jogo[1][0] = 'X';
                    quemJoga = 1;
                }; break;            
                case 11 :
                if(jogo[1][1] === ''){
                    jogo[1][1] = 'X';
                    quemJoga = 1;
                }; break;            
                case 12 :
                if(jogo[1][2] === ''){
                    jogo[1][2] = 'X';
                    quemJoga = 1;
                }; break;            
                case 20 :
                if(jogo[2][0] === ''){
                    jogo[2][0] = 'X';
                    quemJoga = 1;
                }; break;            
                case 21 :
                if(jogo[2][1] === ''){
                    jogo[2][1] = 'X';
                    quemJoga = 1;
                }; break;            
                case 22 :
                if(jogo[2][2] === ''){
                    jogo[2][2] = 'X';
                    quemJoga = 1;
                }; break;
        }
    }
    //////////////////////// Daqui pra frente são jogadas do Player 2:
    else if((quemJoga === 1) && (jogoRolando)){
        switch(p){
                case 00 :
                if(jogo[0][0] === ''){
                    jogo[0][0] = 'O';
                    quemJoga = 0;
                }; break;
                case 01 :
                if(jogo[0][1] === ''){
                    jogo[0][1] = 'O';
                    quemJoga = 0;
                }; break;
                case 02 :
                if(jogo[0][2] === ''){
                    jogo[0][2] = 'O';
                    quemJoga = 0;
                }; break;
                case 10 :
                if(jogo[1][0] === ''){
                    jogo[1][0] = 'O';
                    quemJoga = 0;
                }; break;            
                case 11 :
                if(jogo[1][1] === ''){
                    jogo[1][1] = 'O';
                    quemJoga = 0;
                }; break;            
                case 12 :
                if(jogo[1][2] === ''){
                    jogo[1][2] = 'O';
                    quemJoga = 0;
                }; break;            
                case 20 :
                if(jogo[2][0] === ''){
                    jogo[2][0] = 'O';
                    quemJoga = 0;
                }; break;            
                case 21 :
                if(jogo[2][1] === ''){
                    jogo[2][1] = 'O';
                    quemJoga = 0;
                }; break;            
                case 22 :
                if(jogo[2][2] === ''){
                    jogo[2][2] = 'O';
                    quemJoga = 0;
                }; break;
        }
    }   

    atualizaTabuleiro();
    vitoria = verificaVitoria();
    
    if (vitoria != ''){
        if (quemJoga = 0){
           // alert(vitoria + " Venceu!");
           mensagemWinner(vitoria);
            jogoRolando=false;
        } else {
            mensagemWinner(vitoria);
               // alert(vitoria + " Venceu!");
                jogoRolando=false;
            
        }
    }
}

function verificaVitoria(){
    //linhas
    for(var l = 0 ; l < 3 ; l++){
        if (jogo[l][0] === jogo[l][1] && jogo[l][1] === jogo[l][2]){
            return jogo[l][0]
            }
        }
    //colunas
    for(var c = 0 ; c < 3 ; c++){
        if (jogo[0][c] === jogo[1][c] && jogo[1][c] === jogo[2][c]){
            return jogo[1][c];
        }
    }    
    //diagonais
    if (jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0]){
        return jogo[1][1];
    }
    if (jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2]){
        return jogo[1][1];
    }
    //DRAW

    if ((numJogadas === 9) && (jogoRolando)){
        return 'draw';
    }

    return '';
}        

function atualizaTabuleiro(){

    for(var l=0; l<jogo.length;l++){
        for(var c=0; c<jogo.length;c++){
            
            tabuleiro[l][c].innerText = jogo[l][c];
            
        }    
        
    }     
}

function inicia(){

    quemJoga = 0; 
    

    verificaVez(quemJoga);
    
    jogoRolando = true;

    jogo = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
    tabuleiro = [
            [document.getElementById('00'),document.getElementById('01'),document.getElementById('02')],
            [document.getElementById('10'),document.getElementById('11'),document.getElementById('12')],
            [document.getElementById('20'),document.getElementById('21'),document.getElementById('22')]
    ];
    

}

window.addEventListener('load', inicia);

function restart(){
    location.reload();
}

function mensagemWinner(vitoria){
    console.log(vitoria);
    if(vitoria === 'X'){
        document.getElementById('x').style.display='block'
    } else if(vitoria === 'O') {
        document.getElementById('o').style.display='block'
    } else if((vitoria === 'draw')) {
        document.getElementById('draw').style.display='block'   
    }
}   

function verificaVez(vez){
    
    if(vez === 1 ){
        document.getElementById('turn').innerText = "X"
    } else {
        document.getElementById('turn').innerText = "O"
    }
}



function jogadaComp(p){
    numJogadas++;
    verificaVez(quemJoga);
    
    if((quemJoga === 0) && (jogoRolando === true)){
        switch(p){
                case 00 :
                if(jogo[0][0] === ''){
                    jogo[0][0] = 'X';
                    quemJoga = 1;
                }; break;
                
                case 01 :
                if(jogo[0][1] === ''){
                    jogo[0][1] = 'X';
                    quemJoga = 1;
                }; break;
                case 02 :
                if(jogo[0][2] === ''){
                    jogo[0][2] = 'X';
                    quemJoga = 1;
                }; break;
                case 10 :
                if(jogo[1][0] === ''){
                    jogo[1][0] = 'X';
                    quemJoga = 1;
                }; break;            
                case 11 :
                if(jogo[1][1] === ''){
                    jogo[1][1] = 'X';
                    quemJoga = 1;
                }; break;            
                case 12 :
                if(jogo[1][2] === ''){
                    jogo[1][2] = 'X';
                    quemJoga = 1;
                }; break;            
                case 20 :
                if(jogo[2][0] === ''){
                    jogo[2][0] = 'X';
                    quemJoga = 1;
                }; break;            
                case 21 :
                if(jogo[2][1] === ''){
                    jogo[2][1] = 'X';
                    quemJoga = 1;
                }; break;            
                case 22 :
                if(jogo[2][2] === ''){
                    jogo[2][2] = 'X';
                    quemJoga = 1;
                }; break;
        }
    }
       
    
    cpuJoga();
    atualizaTabuleiro();
    vitoria = verificaVitoria();
    
    if (vitoria != ''){
        if (quemJoga = 0){
           // alert(vitoria + " Venceu!");
           mensagemWinner(vitoria);
            jogoRolando=false;
        } else {
            mensagemWinner(vitoria);
               // alert(vitoria + " Venceu!");
                jogoRolando=false;
            
        }
    }
}


function cpuJoga(){
    numJogadas++
    verificaVez(quemJoga);

    if (jogoRolando)  {
        var l,c;
        if (nivel == 1){
              do {
                  l = Math.round(Math.random()*3);
                  c = Math.round(Math.random()*3);
              } while ( jogo[l][c] != "");

              jogo[l][c] = "O";
              quemJoga = 0;
               
        }
    }    
}

 
/* 
window.addEventListener('load', function(){

    var cel = document.getElementsByClassName('cel');

    for( var i = 0; i<cel.length; i++){
        cel[i].addEventListener('click', function(){
            jogada();
        })
      }


}) */



/* function selecionaJogo(){
    var casa = document.body.getElementsByClassName("cel")
    var select = document.getElementsByTagName('option');


    for (i=0; i <3; i++){
    var valorSelecionado = select[i].value;
    }    

    console.log(`O jogo selecionado é : ${valorSelecionado} `)    
    
    

        for (i=0; i <9; i++){
            if (valorSelecionado == '1'){
                casa[i].removeEventListener('click', verificador_XO_pxpc_1)
                casa[i].addEventListener('click', jogada);   
            } else if (valorSelecionado == '2') {
                casa[i].removeEventListener('click', jogada);         
                casa[i].addEventListener('click', jogadaComp);              
            }
    return valorSelecionado
        }

    } */


/* window.addEventListener('load', () => {
      
    var casa = document.body.getElementsByClassName("cel")

    for (i=0; i <9; i++){
            casa[i].addEventListener('click', jogada);   
    }
 
    var trocaJogo = document.getElementsByTagName('select');
    trocaJogo.addEventListener('change', () => {selecionaJogo()});

}); */