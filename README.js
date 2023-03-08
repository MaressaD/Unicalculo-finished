/* 
Em Unicalculo você é Carlos, um unicórnio professor de cálculo que descobrio que o que está assolando seus alunos e fazendo eles sucumbirem a reprovação são os malfeitosos números primos. Seu trabalho é destruílos atirando uma nota baixa neles. Mas cuidado! os outros números podem confundí-lo e você será penalizado..
Unicalculo é um jogo desenvolvido em JacaScript utilizando a plataforma >>>js nome da plataforma<<<. Neste game vo
    Equipe: 
        Nome Joyce Barbosa Cabral- Subturma A (Líder) 
        Nome Maressa Dâmaris Lima Diógenes - Subturma A 
        Etapa 9 e 10
*/
//link do jogo: https://maressad.github.io/Unicalculo-finished/jogo/
//link do projeto no p5.js:https://editor.p5js.org/Unicalculo/sketches/fQ99mHmi7
var vidas=3;
var dificuldade=1;
var pontos=0;
var x=40;
var y=200;
var xd;
var yd;
var estadoDisparo=false;
var vxo=[];
var vyo=[];
var quantNum=25;
var objetivo=30 //pontos
var numDivisivel=2;
var tela=1;
var movimento=[];
var uni;
var contFrame=0;
var paraFrame=0;
var nota0;
var tela2;
var telaInicial;
var numbers=[];
var contNum=0;
var contNum2=0;
var myFont;
function setup() {
  frameRate(30);
 createCanvas(650, 400);
 for(var i=0;i<=quantNum;i++){
    
   vxo[i]=650+random(500);
    vyo[i]=random(0,500); 
 }
 
}


function preload(){
  for(a=1;a<7;a++){
  movimento[a]=loadImage('Unicornio'+a+'.png');
  }
  nota0=loadImage('letraF4.png');
  telaInicial=loadImage('paisagem.jpg');
  tela2=loadImage('tttela2.png');
 for(i=0;i<=quantNum;i++){
  numbers[i]=loadImage('number'+i+'.png');
 }
  myFont = loadFont('bitwise.ttf');   
}



function draw(){
  if(tela==1){
    background(telaInicial);
    textFont(myFont);
    textSize(72);
    fill('#00BFFF');
    text("Unicalculo",150,200);
    textSize(30);
    text("Press Space to play",175,250);
    if(keyIsDown(32)){
      tela=2;
    } 
  }
    
  if(tela==2){
    background('#FA5882');
    background(tela2);
    textSize(32);
    text('Aperte Enter para continuar',200,380);
      if(keyIsDown(ENTER)){
      tela=3;
      }
    }
  if(tela==8){
    background('#BF00FF');
  textSize(56);
    fill('#FFFF00')
    textSize(25);
    text(' Elimine os números primos ',100,275);
    textSize(15);
    text("Aperte a Espaço para começar",25,350);
    if(keyIsDown(32)){
       tela=3;
       }
  }
  
  if(tela==3){
  
  background('#FA5882')
 
    
  fill("#01DFD7");  
  textSize(20);
  text('Vidas: ' + vidas, 10, 30);
  text('Pontos: ' + pontos, 160, 30);
  text('Nível: ' + dificuldade, 320, 30);
  text('Objetivo: '+objetivo+' pnts',440,30);



  //Código dos tiros
  
  if(keyIsDown(CONTROL)&& estadoDisparo==false){
     xd=x;
     yd=y;
     estadoDisparo=true;
     }
  if(estadoDisparo==true){
    ellipse(xd,yd,2,2);
    xd=xd+10;
    imageMode(CENTER);
    image(nota0,xd-10,yd);

    if(xd>650){
      estadoDisparo=false;
    }
  }
 
 
  
  //Fim do código dos tiros
  
  //Unicórnio 
  
  fill("#7B68EE");
  ellipse(x,y,2,2);
     
    
  if(keyIsDown(DOWN_ARROW)){
     y+=5; 
   
     }
  if(keyIsDown(UP_ARROW)){
     y-=5;
   
  }
    paraFrame++;
 if(keyIsDown(DOWN_ARROW)|| keyIsDown(UP_ARROW)){
  
     if(paraFrame>2){
      contFrame=contFrame+2;
      paraFrame=0;
           if(contFrame>5){
              contFrame=1;
              }
    
    }
 }
else{
contFrame=1;
  }
    
    uni=movimento[contFrame];
    imageMode(CENTER);
    image(uni,x,y);

   
    
  //fim.
  
  
  //Código dos inimigos 
  for(var i=0;i<=quantNum;i++){
    fill("#343434");   
  ellipse(vxo[i],vyo[i],3,3)
    vxo[i]=vxo[i]-5;
    
   
   if(vxo[i]<0){
    
    vxo[i]=650+random(50);
     vyo[i]=random(0,500);
  } 
    imageMode(CENTER);
    image(numbers[i],vxo[i],vyo[i]);
    
    /* Código para perder vida ao tocar no inimigo*/
 
  if(dist(vxo[i],vyo[i], x, y)<=26+15){
   for(b=1;b<=i;b++){
     if(i%b==0){
          contNum++;
          }
    }  
    if(contNum==2){
    vidas=vidas-1;
    vxo[i]=700
    vyo[i]=450
    contNum=0;
    }
    }
    /*codigo dos tiros*/
    
  if(dist(vxo[i],vyo[i], xd, yd)<=4+15){
    for(c=1;c<=i;c++){
     if(i%c==0){
          contNum2++;
          }
    }  
    if(contNum2==2){ 
       vxo[i]=700
    vyo[i]=450
    xd=800;
    yd=550;
    pontos+=10;
    contNum2=0;
    }
    else{
      vidas-=1;
      vxo[i]=700
    vyo[i]=450
    xd=800;
    yd=550;  
    contNum2=0;
      }
  }  
  if(vidas<0){
  tela=4;
  }  
  //Código dos pontos para passar de nível
  if(pontos==objetivo){
    dificuldade++;
    objetivo+=20;
    vidas=3;
    pontos=0;
    vxo[i]=650+random(50);
    vyo[i]=random(0,500);
    tela=5;
  }  
  if(dificuldade>5){
  tela=6;
  }
  }
  
}
  
   if(tela==4){
      background('#BF00FF');
        fill('#FFFF00');
        textSize(76);
        text("Game \nOver",200,150)
      
    }
  if(tela==5){
    background('#BF00FF');
  textSize(56);
    fill('#FFFF00')
    text("Nivel Completo\n Proximo objetivo:",100,150);
    textSize(30);
    text(objetivo+" pontos",100,275);
    textSize(15);
    text("Aperte Enter para ir para o Proximo Nivel",325,350);
  if(keyIsDown(ENTER)){
    tela=3;
     }
  }
  if(tela==6){
  background('#00BFFF');
    textSize(76);
    text("You \nWin",200,150);
  }
}
