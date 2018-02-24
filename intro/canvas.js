//@ts-check
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

// context.fillStyle = 'rgba(255, 0, 0, 0.5)';
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = 'rgba(0, 0, 255, 0.5)';
// context.fillRect(400, 100, 100, 100);
// context.fillStyle = 'rgba(0, 255, 0, 0.5)';
// context.fillRect(300, 300, 100, 100);
// console.log(canvas);

//line
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "indigo"
// context.stroke();

// Arc / Circle;
// context.beginPath();
// context.arc(300, 300, 30, 0, Math.PI * 2, false);
// context.strokeStyle = 'blue';
// context.stroke();

// for (let i = 0; i < 100 ; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = getRandomColor();
//     context.stroke();
// }

function getRandomColor() {
    let chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.outline = getRandomColor();
        this.fill = getRandomColor();
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = getRandomColor();
        context.stroke();
        context.fillStyle = getRandomColor();
        context.fill()
    }

    update() {
        if (this.x + this.radius> innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
    }
}

let circles = [];

for (let i = 0; i < 100; i++) {
    let radius = 30;

    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    circles.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0 ,innerWidth, innerHeight);

    circles.forEach(circle => {
        circle.update()
    });
}

animate()