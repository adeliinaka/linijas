const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();

var myVar = setInterval(linijas, 100)

function linijas(){
		
		ctx.moveTo(x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight);
	
		ctx.lineTo(x, y);



  	var x = Math.random() * window.innerWidth;
  	var y = Math.random() * window.innerHeight;
	
  	ctx.lineTo(x, y);
		
		ctx.strokeStyle = 'black';
		ctx.stroke();
}


