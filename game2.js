



//*********************************************game 2 starts here**************************************
function game2(){



//frame renewal
var FPS=50;
int=setInterval(function(){update();optimal();draw();showScore();},1000/FPS);

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
	color: 'blue',
	speed: document.forms["form"]["level"].value,
	angle: 80,
	slope: 0};

//targetspace variables
var spc={
	cColor: 'green',			
	uColor: 'yellow',
	dColor: 'yellow',
	lColor: 'yellow',
	rColor: 'yellow'};

//score
var score=0;
function showScore(){
	document.getElementById("score").innerHTML="score "+score}

//update 
function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.slope=ball.angle*Math.PI/180;
	ctx.beginPath();
	ctx.fillStyle=spc.cColor;
	ctx.arc(250,250,50,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(0,250,50,0,2*Math.PI);
	ctx.fillStyle=spc.lColor;
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(250,0,50,0,2*Math.PI);
	ctx.fillStyle=spc.uColor;
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(500,250,50,0,2*Math.PI);
	ctx.fillStyle=spc.rColor;
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(250,500,50,0,2*Math.PI);
	ctx.fillStyle=spc.dColor;
	ctx.fill();
	ctx.stroke();
	ball.pos.x+=2*Math.cos(ball.slope)*ball.speed;
	ball.pos.y+=2*Math.sin(ball.slope)*ball.speed;
	
	//bounce back
	if(ball.pos.x<0+ball.radius || ball.pos.x>canvas.width-ball.radius)
		{ball.angle-=7600;}
	else if(ball.pos.y<0+ball.radius || ball.pos.y>canvas.height - ball.radius)
		{ball.angle-=2720;}}

//draw
function draw(){
	ctx.beginPath();
	ctx.fillStyle=ball.color;
	ctx.arc(ball.pos.x,ball.pos.y,ball.radius,0,2*Math.PI);
	ctx.fill();}

//target effect
function optimal(){
	if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
		{spc.cColor='red';}
	else if(Math.pow((ball.pos.x-0),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
		{spc.lColor='red';}
	else if(Math.pow((ball.pos.x-500),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50+ball.radius),2))
		{spc.rColor='red';}
	else if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-0),2)<=Math.pow((50+ball.radius),2))
		{spc.uColor='red';}
	else if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-500),2)<=Math.pow((50+ball.radius),2))
		{spc.dColor='red';}
	else{spc.cColor='green';
		spc.uColor='yellow';
		spc.dColor='yellow';
		spc.rColor='yellow';
		spc.lColor='yellow';}}

//score

$(document).keypress(function(e){
	switch(e.which){
		case 99: //space
			if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50-ball.radius),2))
				{score++;}
			else{score--;}
			break;}});

$(document).keydown(function(e){
	switch(e.which){
		case 37: //left
			if(Math.pow((ball.pos.x-0),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50-ball.radius),2))
				{score++;}
			else{score--;}
			break;

		case 38: //up
			if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-0),2)<=Math.pow((50-ball.radius),2))
				{score++;}
			else{score--;}
			break;

		case 39: //right
			if(Math.pow((ball.pos.x-500),2)+Math.pow((ball.pos.y-250),2)<=Math.pow((50-ball.radius),2))
				{score++;}
			else{score--;}
			break;

		case 40: //down
			if(Math.pow((ball.pos.x-250),2)+Math.pow((ball.pos.y-500),2)<=Math.pow((50-ball.radius),2))
				{score++;}
			else{score--;}
			break;}});



}

//***************************************************************game 2 stops here****************************************************
	

