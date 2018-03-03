


//*********************************************game 1 starts here**************************************
function game1(){


//frame renewal
var FPS=50;
int=setInterval(function(){update();drawPlayers();optimal();drawBall();showScore();},1000/FPS);

//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//timer run
function Timer(){
    timer--;
    document.getElementById('timer').innerHTML="Timer "+timer;}
setInterval(function(){Timer();},1000);


//ball properties
var ball={
    pos:{x:200,y:50},
    radius: 20,
    color: 'white',
    speed: 3,
    angle: 80*Math.random(),
    slope: 0};

//player properties
var player={
    first:{
        pos:{x:350,y:365},
        width:10,
        height:70,
        color:'green',
        speed: 3,},
    second:{
        pos:{x:750,y:365},
        width:10,
        height:70,
        color:'green',
        speed: 3,}};

//targetspace variables
var spc={
    cColor: 'green',            
    lColor: 'yellow',
    rColor: 'yellow'};

//score
var score1=0;
var score2=0;
function showScore(){
    document.getElementById("score").innerHTML="score 1 is "+score1+"    score 2 is "+ score2}

//update 
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.slope=ball.angle*Math.PI/180;
    ctx.beginPath();
    ctx.fillStyle=spc.cColor;
    ctx.arc(400,250,50,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0,250,50,0,2*Math.PI);
    ctx.fillStyle=spc.lColor;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(800,250,50,0,2*Math.PI);
    ctx.fillStyle=spc.rColor;
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(400,0);
    ctx.lineTo(400,500);
    ctx.stroke();
    ball.pos.x+=2*Math.cos(ball.slope)*ball.speed;
    ball.pos.y+=2*Math.sin(ball.slope)*ball.speed;
    //bounce back
    if(ball.pos.x<0+ball.radius || ball.pos.x>canvas.width-ball.radius)
        {ball.angle=180-ball.angle;}
    else if(ball.pos.y<0+ball.radius || ball.pos.y>canvas.height - ball.radius)
        {ball.angle=-ball.angle;}
    //ball and player
    if(ball.pos.x + ball.radius>=player.first.pos.x && ball.pos.x - ball.radius<=player.first.pos.x+10 && ball.pos.y + ball.radius>=player.first.pos.y && ball.pos.y - ball.radius<=player.first.pos.y+70 )
        {ball.angle=ball.angle-180;}
    if(ball.pos.x + ball.radius>=player.second.pos.x && ball.pos.x - ball.radius<=player.second.pos.x+10 && ball.pos.y + ball.radius>=player.second.pos.y && ball.pos.y - ball.radius<=player.second.pos.y+70 )
        {ball.angle=ball.angle-180;}
    

}

//draw ball
function drawBall(){
    ctx.beginPath();
    ctx.fillStyle=ball.color;
    ctx.arc(ball.pos.x,ball.pos.y,ball.radius,0,2*Math.PI);
    ctx.fill();}

//draw players
function drawPlayers(){
    ctx.fillStyle=player.first.color;
    ctx.fillRect(player.first.pos.x,player.first.pos.y,player.first.width,player.first.height);
    ctx.fillStyle=player.second.color;
    ctx.fillRect(player.second.pos.x,player.second.pos.y,player.second.width,player.second.height);}

//target effect and scoring
function optimal(){
    if(Math.pow((ball.pos.x-400),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
        {spc.cColor='red';}
    else if(Math.pow((ball.pos.x-0),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
        {spc.lColor='red';
        score1++;
        ball.pos.x=400;
        ball.pos.y=250;}
    else if(Math.pow((ball.pos.x-800),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
        {spc.rColor='red';
        score2++;
        ball.pos.x=400;
        ball.pos.y=250;}
    else{spc.cColor='green';
        spc.rColor='yellow';
        spc.lColor='yellow';}}

//player movement
$(document).keypress(function(e){
    if(player.first.pos.x>=0)
        {switch(e.which){
        case 97: //a
        player.first.pos.x-=5*player.first.speed;
        break;}}
    if (player.first.pos.x<=800-player.first.width)
        {switch(e.which){
        case 100: //d
        player.first.pos.x+=5*player.first.speed;
        break;}}
    if (player.first.pos.y<=500-player.first.height)
        {switch(e.which){
        case 115: //s
        player.first.pos.y+=5*player.first.speed;
        break;}}
    if(player.first.pos.y>=0)
        {switch(e.which){
        case 119: //w
        player.first.pos.y-=5*player.first.speed;
        break;}}});

$(document).keydown(function(e){
    if(player.second.pos.x>=0)
        {switch(e.which){
        case 37: //left
        player.second.pos.x-=5*player.second.speed;
        break;}}
    if (player.second.pos.x<=800-player.second.width)
        {switch(e.which){
        case 39: //right
        player.second.pos.x+=5*player.second.speed;
        break;}}
    if (player.second.pos.y<=500-player.second.height) 
        {switch(e.which){
        case 40: //down
        player.second.pos.y+=5*player.second.speed;
        break;}}
    if (player.second.pos.y>=0) 
        {switch(e.which){
        case 38: //up
        player.second.pos.y-=5*player.second.speed;
        break;}}
    });








}

//***************************************************************game 1 stops here****************************************************
    

