// task 1 --------------------

let out1 = '';

for (let i = 1; i <= 10; i++) {

    out1 += i + ' ';

}

console.log(out1);

// task 2 --------------------

let out2 = '';

for (let i = 1; i <= 10; i++) {

    out2 += i + ' ';

}

document.querySelector('.out-2').innerText = out2;

// task 3 --------------------

let out3 = '';

for (let i = 10; i >= 0; i--) {

    out3 += i + ' ';

}

document.querySelector('.out-3').innerText = out3;

// task 4 --------------------

let out4 = '';

for (let i = 0; i <= 10; i += 2) {

    out4 += i + ' ';
}

document.querySelector('.out-4').innerText = out4;

// task 5 --------------------

let out5 = '';

for (let i = 21; i >= 0; i -= 3) {

    out5 += i + ' ';

}

document.querySelector('.out-5').innerText = out5;

// task 6 --------------------

let out6 = '';

for (let i = 1; i <= 6; i++) {

    out6 += '******<br>';

}

document.querySelector('.out-6').innerHTML = out6;

// task 7 --------------------

document.querySelector('.btn-7').onclick = () => {

    let start = document.querySelector('#i-7').value;
    let out7 = '';

    start = parseInt(start);

    for (let i = start; i >= 0; i--) {
        out7 += i + ' ';
    }

    document.querySelector('.out-7').innerText = out7;

}

// task 8 --------------------

document.querySelector('.btn-8').onclick = () => {

    let start = document.querySelector('#f-8').value;
    let end = document.querySelector('#s-8').value;
    let out8 = '';

    start = parseInt(start);
    end = parseInt(end);

    for (let i = start; i <= end; i++) {
        out8 += i + ' ';
    }

    document.querySelector('.out-8').innerText = out8;

}

// task 9 --------------------

document.querySelector('.btn-9').onclick = () => {

    let start = document.querySelector('#f-9').value;
    let end = document.querySelector('#s-9').value;
    let out9 = '';

    start = parseInt(start);
    end = parseInt(end);

    if (start <= end) {

        for (let i = start; i <= end; i++) {
            out9 += i + ' ';
        }

    } else {

        alert('Ошибка');

    }

    document.querySelector('.out-9').innerText = out9;

}

// task 10 --------------------

let start10 = 1901;
let end10 = 1950;
let out10 = '';

for (let i = start10; i <= end10; i++) {

    if (i % 2 == 0) {

        out10 += i + ' ';

    }

}

document.querySelector('.out-10').innerText = out10;

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
