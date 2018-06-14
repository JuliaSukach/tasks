function displayCanvas(){
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext ('2d');

	//Расчет координат центра и радиуса часов
	let radiusClock = canvas.width/2 - 10;
	let xCenterClock = canvas.width/2;
	let yCenterClock = canvas.width/2;

    //очистка экрана
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);


    //Стрелки
    let lengthSeconds = radiusClock - 20;
    let lengthMinutes = radiusClock - 25;
    let lengthHours = lengthMinutes / 1.5;
    let d = new Date();
    let t_sec = 6*d.getSeconds();
    let t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    let t_hours = 30*(d.getHours() + (1/60)* d.getMinutes());

    //Рисуем секунды
    ctx.beginPath();
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 3;
    ctx.moveTo(xCenterClock, yCenterClock);
    ctx.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
               yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    //Рисуем минуты
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 6;
    ctx.moveTo(xCenterClock, yCenterClock);
    ctx.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
               yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    //Рисуем часы
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 15;
    ctx.moveTo(xCenterClock, yCenterClock);
    ctx.lineTo(xCenterClock + lengthHours*Math.cos(Math.PI/2 - t_hours*(Math.PI/180)),
               yCenterClock - lengthHours*Math.sin(Math.PI/2 - t_hours*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    return;

}

window.onload = function(){
	window.setInterval(fTime,1000);
	function fTime(){
              let d = new Date();
              document.getElementById("clock").innerHTML = d.toLocaleTimeString();
              displayCanvas();
          }
}

/*window.onload = function(){
	window.setInterval(getSetTime,1000);
	function getSetTime(){
              let time =  document.getElementById('time').value;
              let set = new Date(time);
              document.getElementById('clock').innerHTML = set.toLocaleTimeString();
              displayCanvas();
          }
}*/

