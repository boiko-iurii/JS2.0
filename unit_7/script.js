// task 1 --------------------

document.querySelector('.btn-1').onclick = displayName;

function displayName() {

    console.log('Iurii');

}

// task 2 --------------------

function displayName2(name) {

    console.log(name);

}

displayName2('Sergey');

// task 3 --------------------

document.querySelector('.btn-3').onclick = () => {

    displayNumber(1.3);

}

function displayNumber(num) {

    console.log(num * 10);

}

// task 4 --------------------

document.querySelector('.btn-4').onclick = function () {

    this.style.background = 'red';

}

// task 5 --------------------

document.querySelector('#i-5').onchange = function () {

    console.log(getName(this.value));

}

function getName(name) {

    return name;

}

// task 6 --------------------

function compareTwoNumbers(a, b) {

    let res = (a > b) ? a : b;

    return res;

}

// task 7 --------------------

function getAge(year) {

    return 2019 - year;

}

// task 8 --------------------

function random() {

    let min = 1;
    let max = 10;

    return min + Math.random() * (max - min);

}

// task 9 --------------------

function random_9(min = 5, max = 10) {

    return min + Math.random() * (max - min);

}

// task 10 --------------------

function getColor() {

    let r = random_9(0, 255).toFixed(0);
    let g = random_9(0, 255).toFixed(0);
    let b = random_9(0, 255).toFixed(0);

    return `rgb(${r}, ${g}, ${b})`;

}

// task 11 --------------------

function f11() {

    return 5;

}

function multiply11(a = f11(), b) {

    return a * b;

}

// task 12 --------------------

function toNum(input) {

    return parseFloat(input.value);

}

document.querySelector('#i-12').onchange = function () {

    console.log(toNum(this));

}

// task 13 --------------------

function emptyInput(input) {

    let res = input.value.trim();

    if (res.length > 0) {

        return res;

    } else {

        return false;

    }

}

document.querySelector('#i-13').onchange = function () {

    console.log(emptyInput(this));

}

// task 14 --------------------

function f_14(num) {

    return (num % 2 == 0) ? true : false;

}

// task 15 --------------------

document.querySelector('.div-15').onmousemove = () => {

    console.log('move');

}

// task 16 --------------------

document.querySelector('.div-16').onmouseenter = () => {

    console.log('enter');

}

// task 17 --------------------

document.querySelector('.div-17').onmouseleave = () => {

    console.log('leave');

}

// task 18 --------------------

document.querySelector('.div-18').onclick = function () {

    this.style.background = 'red';

}

// task 19 --------------------

document.querySelector('.div-19').onclick = () => {

    this.style.background = 'red';

}

// task 20 --------------------

let div = document.querySelectorAll('.go');

for (let i = 0; i < div.length; i++) {

    div[i].onclick = function () {

        this.style.background = 'red';

    }

}