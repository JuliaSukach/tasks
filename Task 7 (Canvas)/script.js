let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let addButton = document.getElementById('button-add');
let deleteButton = document.getElementById('button-delete');
let clearButton = document.getElementById('button-clear');

let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

let circles = [];
let offset = 0;

function getRandomColor() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}

 let addCircleFunc = function ()  {
    // Устанавливаем произвольный размер и позицию круга
    let x = 40 + (offset*60);
    let y = 40 + (offset*20);
    let radius = 30;

    offset++;

    let color = getRandomColor();

    let circle = new Circle(x, y, radius, color);

    circles.push(circle);

    drawCircle();
}

function drawCircle() {

    for(let i = 0; i < circles.length; i++) {
        if (i > 9) {
            showDialogWindow ();
        }

        let circle = circles[i];

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        ctx.fillStyle = circle.color;
        

        if (circle.isSelected) {
            ctx.lineWidth = 3;
            //ctx.setLineDash([10, 2]);
            ctx.strokeStyle = "black";  
        }

        else {
            ctx.lineWidth = 0.1;
        }
        ctx.fill();
        ctx.stroke();
              
    }
}

function showCover () {
    let coverWindow = document.createElement('div');
    coverWindow.className = 'cover-div';
    coverWindow.id = 'cover-div';
    container.appendChild(coverWindow);
}

function hideCover () {
    let removeCover = document.getElementById('cover-div');
    container.removeChild(removeCover);
}

function showDialogWindow () {
    showCover ();
    let dialogWindow = document.getElementById('dialog_window');
    let form = document.getElementById('form');
    
    form.elements.close.onclick = function() {
        hideCover();
        dialogWindow.style.display = 'none';
        console.log(dialogWindow.style.display);
    }

    dialogWindow.style.display = 'block';
}

let clearCanvas = function () {
    zIndexShape = 0;
    offset = 1;
    circles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let previousSelectedCircle;

let highlightCircle = function (position) {

    let clickX = position.pageX - canvas.offsetLeft;
    let clickY = position.pageY - canvas.offsetTop;

    for(let i = circles.length-1; i >= 0; i--) {
        let circle = circles[i];

        let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));
    
        if (distanceFromCenter <= circle.radius) {

          if (previousSelectedCircle != null) 
            previousSelectedCircle.isSelected = false;
            
            previousSelectedCircle = circle;
    
            circle.isSelected = true;
            drawCircle();  

            return;
        }
    } 
}


addButton.addEventListener('click', addCircleFunc);
//deleteButton.addEventListener('click', deleteShapeFunc);
clearButton.addEventListener('click', clearCanvas);
canvas.addEventListener('click', highlightCircle);




