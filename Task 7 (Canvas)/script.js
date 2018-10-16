let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let addButton = document.getElementById('button-add');
let deleteButton = document.getElementById('button-delete');
let clearButton = document.getElementById('button-clear');

let mouse = {
    x : 0,
    y : 0
};

let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

let circles = [];
let offset = 0;

let selected = false;
let changeScale = false;

let isCursorInCircle = function (circle) {
    return (mouse.x > (circle.x - circle.radius)) && (mouse.x < (circle.x + circle.radius)) &&
    (mouse.y > (circle.y - circle.radius)) && (mouse.y < (circle.y + circle.radius));
}

function getRandomColor() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}

 let addCircleFunc = function ()  {

    if (offset < 10) {
        let x = 40 + (offset*65);
        let y = 40 + (offset*20);
        let radius = 30;

        offset++;

        let color = getRandomColor();

        let circle = new Circle(x, y, radius, color);

        circles.push(circle);

        drawCircle();

    }
    else {
        showDialogWindow ();
    }  
}

function drawCircle() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < circles.length; i++) {

        let circle = circles[i];

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        ctx.fillStyle = circle.color;

        ctx.fill();            
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
};

setInterval( function () {

    for(let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        ctx.fillStyle = circle.color;

        if(isCursorInCircle (circle)) {
            if (previousSelectedCircle != null) 
            previousSelectedCircle.isSelected = false;
            
            previousSelectedCircle = circle;
            circle.isSelected = true;    

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i < circles.length; i++) {

                let circle = circles[i];

                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
                ctx.fillStyle = circle.color;
          
                if (circle.isSelected) {
                    ctx.lineWidth = 2;
                    ctx.setLineDash([10, 2]);
                    ctx.strokeStyle = "black";
                    deleteButton.removeAttribute("disabled");
                    ctx.fillRect((circle.x + circle.radius-5),circle.y-5,10,10);
                    ctx.fillRect(circle.x-5,(circle.y + circle.radius-5),10,10);
                    ctx.fillRect((circle.x - circle.radius-5),circle.y-5,10,10);
                    ctx.fillRect(circle.x-5,(circle.y - circle.radius-5),10,10);
                }

                else {
                    ctx.lineWidth = 0.0001;
                }
                ctx.fill();
                ctx.stroke();
            }       
        }
        if (selected) {
            selected.x = mouse.x;
            selected.y = mouse.y;
            //change size of circle
           /* selected.x = mouse.x;
            selected.y = mouse.y;
            selected.radius = mouse.radius;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI*2);
                ctx.fillStyle = circle.color;*/
               /* let deleteShape = deleteButton.addEventListener('click', function () {
                console.log('hi');
                let deleteX = selected.x - 31;
                let deleteY = selected.y - 31;
                let deleteWidth = selected.radius *2 + 5;
                let deleteHight = selected.radius *2 + 5;
                ctx.clearRect(deleteX, deleteY, deleteWidth,deleteHight);
                delete circles[i];
            });*/
            
        }
    }
},30);

let deleteShapeFunc = function (deletePosition) {
    console.log(deletePosition);
    //ctx.clearRect(deleteX, deleteY, canvas.deleteWidth, canvas.deleteHight);
}

window.onmousemove = function (event) {
    mouse.x = event.pageX - canvas.offsetLeft;
    mouse.y = event.pageY - canvas.offsetTop;
    mouse.radius = Math.sqrt(Math.pow(mouse.x, 2) + Math.pow(mouse.y, 2));
};

window.onmousedown = function () {
    if (!selected) {
        
        let i;
        for(i in circles) {

        if(isCursorInCircle (circles[i])) {
            selected = circles[i];       
        }
    }      
}}

window.onmouseup = function () {
    selected = false;
};

addButton.addEventListener('click', addCircleFunc);
//let deleteShape = deleteButton.addEventListener('click', deleteShapeFunc)
clearButton.addEventListener('click', clearCanvas);
canvas.addEventListener('click', highlightCircle);




