//greetings
/*var name=prompt('name','<write your name here>');
alert('Hello '+ name);
$('#greetings').append("Hello "+ name);*/
//renew
var int;
//timer
var timer=30;

//timer reset

function tt(){if (timer<=0)
{reset1();}}

//timer checker
function checker(){setInterval(function(){tt();},500);}


//reset
function reset()
{window.location.reload();
timer=30;}

function reset1()
{clearInterval(int);
timer=30;}

//start game 2
$('#rect').click(function(){
	$('#myCanvas').append('<canvas id="canvas" width="500" height="500"></canvas>');
	$('.selGame').hide();
	$('#greetStart').show();
	$('.divi').show();
	$('#start').click(function(){
	checker();
	game2();
	document.getElementById('start').innerHTML="STOP/RESET";
	$('#start').click(function(){reset1();});
	$(".divi").hide();
	});
});

//start game 1
$('#fotb').click(function(){
	$('#myCanvas').append('<canvas id="canvas" width="800" height="500"></canvas>');
	$('.selGame').hide();
	$('#greetStart').show();
	$('#start').click(function(){
	checker();
	game1();
	document.getElementById('start').innerHTML="STOP/RESET";
	$('#start').click(function(){reset();});
	});
});

