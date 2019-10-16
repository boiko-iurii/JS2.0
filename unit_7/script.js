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

function random2(min = 5, max = 10) {

    return min + Math.random() * (max - min);

}

// task 10 --------------------

// task 11 --------------------

// task 12 --------------------

// task 13 --------------------

// task 14 --------------------

// task 15 --------------------

// task 16 --------------------

// task 17 --------------------

// task 18 --------------------

// task 19 --------------------

// task 20 --------------------
