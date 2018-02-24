//@ts-check
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

context.fillRect(100, 100, 100, 100);
console.log(canvas)