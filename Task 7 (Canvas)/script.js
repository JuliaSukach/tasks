
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let addButton = document.getElementById('button-add');

let addShapeFunc = function () {
    console.log('add shape...');
    ctx.fillStyle = 'green';
    ctx.fillRect( 125, 50, 30, 30);
    //ctx.fill();
}

addButton.addEventListener('click', addShapeFunc);

