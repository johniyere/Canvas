/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

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
var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function getRandomColor() {
    var chars = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

var Circle = function () {
    function Circle(x, y, dx, dy, radius) {
        _classCallCheck(this, Circle);

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.minRadius = radius;
        this.dx = dx;
        this.dy = dy;
        this.outline = getRandomColor();
        this.fill = Circle.colorArray()[Math.floor(Math.random() * Circle.colorArray().length)];
    }

    _createClass(Circle, [{
        key: 'draw',
        value: function draw() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.stroke();
            context.fillStyle = this.fill;
            context.fill();
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            // interactivity
            if (this.getDistanceFromMouse() < 50 && this.radius < Circle.maxRadius()) {
                this.radius += 1;
            } else if (this.radius > this.minRadius) {
                this.radius -= 1 % this.radius;
            }

            this.draw();
        }
    }, {
        key: 'getDistanceFromMouse',
        value: function getDistanceFromMouse() {
            var x = Math.pow(mouse.x - this.x, 2);
            var y = Math.pow(mouse.y - this.y, 2);

            return Math.sqrt(x + y);
        }
    }], [{
        key: 'maxRadius',
        value: function maxRadius() {
            return 40;
        }
    }, {
        key: 'colorArray',
        value: function colorArray() {
            return ['#F3021A', '#010326', '#05D7C6', '#F5B603', '#F38806'];
        }
    }]);

    return Circle;
}();

var circles = [];

function init() {
    circles = [];

    for (var i = 0; i < 1000; i++) {
        var radius = Math.random() * 3 + 1;

        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 1;
        var dy = (Math.random() - 0.5) * 1;
        circles.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach(function (circle) {
        circle.update();
    });
}

init();
animate();

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map