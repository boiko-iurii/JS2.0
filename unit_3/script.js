// task 1 --------------------

let a = 4;
if (a == 4) {
    console.log('true')
}

// task 2 --------------------

let b = 8;
let c = 10;

if (b > c) {
    console.log('b > c');
} else {
    console.log('c > b');
}

// task 3 --------------------

if (b > c) {
    console.log('b > c');
} else if (b == c) {
    console.log('b = c');
} else {
    console.log('c > b');
}

// task 4 --------------------

document.querySelector('.res-4').onclick = () => {

    let f = document.querySelector('#f-4').value;
    let s = document.querySelector('#s-4').value;
    let out = document.querySelector('.p-4');

    f = parseFloat(f);
    s = parseFloat(s);

    if (f > s) {
        out.innerText = f;
    } else if (f == s) {
        out.innerText = 'равны';
    } else {
        out.innerText = s;
    }

}

// task 5 --------------------

document.querySelector('.res-5').onclick = () => {

    let year = document.querySelector('#year-5').value;
    year = parseInt(year);
    let age = 2019 - year;

    if (year < 2000) {
        document.querySelector('.p-5').innerText = age;
    } else {
        console.log(age);
    }

}

// task 6 --------------------

document.querySelector('#number-6').oninput = function () {

    let apartmentsNumber = parseInt(this.value);
    let out = document.querySelector('.p-6');

    if (apartmentsNumber >= 1 && apartmentsNumber <= 32) {
        out.innerText = 'Такая квартира есть.';
    } else {
        out.innerText = 'Такой квартиры не существует.';
    }

}

// task 7 --------------------

document.querySelector('.res-7').onclick = function () {

    let num = document.querySelector('#i-7').value;
    let out = document.querySelector('.p-7');
    num = parseFloat(num);

    if (num > 0) {
        out.innerText = `Число ${num} больше 0.`;
    } else if (num < 0) {
        out.innerText = `Число ${num} меньше 0.`;
    }

}

// task 8 --------------------

document.querySelector('.res-8').onclick = function () {

    let num = document.querySelector('#i-8').value;
    let out = document.querySelector('.p-8');
    num = parseFloat(num);

    if (num % 2 == 0) {
        out.innerText = `Число ${num} четное`;
    } else {
        out.innerText = `Число ${num} не четное.`;
    }

}

// task 9 --------------------

document.querySelector('.btn-9').onclick = function () {

    let num = document.querySelector('#f-9').value;
    let exp = document.querySelector('#s-9').value;
    let out = document.querySelector('.out-9');

    if (num.length != 0 && exp.length != 0)

        out.innerText = parseFloat(num) ** parseFloat(exp);

    else

        out.innerText = 'Введите второе значение.';

}

// task 10 --------------------

document.querySelector('.btn-10').onclick = function () {

    let name = document.querySelector('#name-10').value;

    if (name.indexOf(' ') != -1)
        alert('Введите имя без пробелов.');
    else if (name.length == 0)
        alert('Вы ничего не ввели.');
    else
        alert(`Hello, ${name}.`);

}

// task 11 --------------------

document.querySelector('.btn-11').onclick = function () {

    let name = document.querySelector('#name-11').value;

    name = name.trim();

    if (name == '')
        alert('Введите Ваше имя');
    else if (name.indexOf(' ') != -1)
        alert('Введите имя без пробелов.');
    else
        alert(`Hello, ${name}.`);

}

// task 12 --------------------

document.querySelector('#i-12').oninput = function () {
    num = parseInt(this.value);

    switch (num) {
        case 1:
            console.log('один');
            break;
        case 2:
            console.log('два');
            break;
        case 3:
            console.log('три');
            break;
        default:
            console.log('Введите число от 1 до 3.')
    }

}

// task 13 --------------------

document.querySelector('#i-13').oninput = function () {
    let out = document.querySelector('.out-13');
    num = this.value;

    if (num >= 1 && num <= 5) {
        out.innerText = 'улица 1';
    } else if (num <= 10) {
        out.innerText = 'улица 2';
    } else if (num <= 20) {
        out.innerText = 'улица 3';
    } else {
        out.innerText = '';
    }

}

// task 14 --------------------

document.querySelector('#i-14').oninput = function () {
    let out = document.querySelector('.out-14');
    xRays = this.value;

    if (xRays >= 0 && xRays < 25) {
        out.innerText = 'не обнаруживается.';
    } else if (xRays < 50) {
        out.innerText = 'снижение числа лимфоцитов.';
    } else if (xRays < 100) {
        out.innerText = 'Вялость, рвота.';
    } else if (xRays < 150) {
        out.innerText = 'Смертность 5%.';
    } else if (xRays < 350) {
        out.innerText = 'Смертность 50% за 30 суток.';
    } else if (xRays < 600) {
        out.innerText = '90% смертность за 2 недели';
    } else if (xRays >= 600) {
        out.innerText = 'Смертность 100%';
    }

}

// task 15 --------------------

let x = 2;
let y = 5;

console.log(x && y);
console.log(x || y);

// task 16 --------------------

document.querySelector('.btn-16').onclick = function () {

    let volume = document.querySelector('#i-16').value;
    let out = document.querySelector('.out-16');
    volume = parseInt(volume);

    if (volume < 0) {
        out.innerText = 'Введите корректное значение.';
    } else if (volume >= 0 && volume < 500) {
        out.innerText = 'Налог составляет 2525 тенге.';
    } else if (volume < 1200) {
        out.innerText = 'Налог составляет 5050 тенге.';
    } else if (volume < 1600) {
        out.innerText = 'Налог составляет 8275 тенге.';
    } else if (volume < 1900) {
        out.innerText = 'Налог составляет 9675 тенге.';
    } else if (volume < 2000) {
        out.innerText = 'Налог составляет 11075 тенге.';
    } else {
        out.innerText = 'Налог составляет 15000 тенге.';
    }

}

// task 17 --------------------

document.querySelector('.btn-17').onclick = function () {

    let money = document.querySelector('#money-17').value;
    let currency = document.querySelector('#currency-17').value;
    let out = document.querySelector('.out-17');
    money = parseFloat(money);

    if (currency == 'euro') {
        out.innerHTML = money * 0.91 + ' &euro;';
    } else if (currency == 'rub') {
        out.innerHTML = money * 64.2 + ' &#x20bd;';
    } else if (currency == 'uah') {
        out.innerHTML = money * 24.63 + ' &#8372;';
    } else {
        out.innerText = 'Введите корректное название валюты.';
    }

}

// task 18 --------------------

document.querySelector('.btn-18').onclick = function () {

    let money = document.querySelector('#money-18').value;
    let currency = document.querySelector('#currency-18').value;
    let out = document.querySelector('.out-18');

    money = parseFloat(money);

    switch (currency) {
        case 'euro':
            out.innerHTML = money * 0.91 + ' &euro;';
            break;
        case 'rub':
            out.innerHTML = money * 64.2 + ' &#x20bd;';
            break;
        case 'uah':
            out.innerHTML = money * 24.63 + ' &#8372;';
            break;
        default:
            out.innerHTML = 'Введите корректное название валюты.';
    }

}

// task 19 --------------------

document.querySelector('.btn-19').onclick = function () {

    let a = document.querySelector('#f-19').value;
    let b = document.querySelector('#s-19').value;
    let sign = document.querySelector('#sign-19').value;
    let out = document.querySelector('.out-19');

    sign = sign.trim();
    a = parseFloat(a);
    b = parseFloat(b);

    if (sign == '+') {
        out.innerHTML = 'Ваш результат: ' + (a + b) + '.';
    } else if (sign == '-') {
        out.innerHTML = 'Ваш результат: ' + (a - b) + '.';
    } else if (sign == '*') {
        out.innerHTML = 'Ваш результат: ' + (a * b) + '.';
    } else if (sign == '/') {
        out.innerHTML = 'Ваш результат: ' + (a / b) + '.';
    } else {
        out.innerText = 'Введите корректный арифметический знак.';
    }

}

// task 20 --------------------

document.querySelector('.btn-20').onclick = function () {

    let a = document.querySelector('#f-20').value;
    let b = document.querySelector('#s-20').value;
    let sign = document.querySelector('#sign-20').value;
    let out = document.querySelector('.out-20');

    sign = sign.trim();
    a = parseFloat(a);
    b = parseFloat(b);

    switch (sign) {
        case '+':
            out.innerHTML = 'Ваш результат: ' + (a + b) + '.';
            break;
        case '-':
            out.innerHTML = 'Ваш результат: ' + (a - b) + '.';
            break;
        case '*':
            out.innerHTML = 'Ваш результат: ' + (a * b) + '.';
            break;
        case '/':
            out.innerHTML = 'Ваш результат: ' + (a / b) + '.';
            break;
        default:
            out.innerText = 'Введите корректный арифметический знак.';
    }

}