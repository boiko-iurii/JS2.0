// task 1 --------------------

const arr = ['a', 2, '5', true];

console.log(arr);

// task 2 --------------------

const arr2 = [0, 'x', 2, '5', true, ' '];

document.querySelector('.out-2').innerHTML = arr2;

// task 3 --------------------

const a = [2, 'hello', 17, 34, 'privet'];

console.log('a.length: ', a.length);

// task 4 --------------------

let summ4 = a[0] + a[3] + a[8];

console.log('summ4: ', summ4);

// task 5 --------------------

let summ5 = a[0] + a[2] + a[3];

console.log('summ5: ', summ5);

// task 6 --------------------

const aboutMe = ['Юрий', 'Близнецы', 21, 'июнь'];

document.querySelector('.out-6').innerHTML = aboutMe;

// task 7 --------------------

let b = ['one', 1, 2, 'two'];

b[4] = 'hi';
b[5] = 'foo';
b[6] = 'bar';

document.querySelector('.out-7').innerHTML = b;

// task 8 --------------------

(function () {

    let b = ['one', 1, 2, 'two'];

    b[3] = 3.14;
    b[4] = 17;
    b[6] = 5;

    let out8 = document.querySelector('.out-8');

    out8.innerHTML = b + '<br>';
    out8.innerHTML += 'длина массива :' + b.length;
    console.log(b, 'длина: ', b.length);

}());

// task 9 --------------------

const arr9 = [1, 'll', 'Ivan', false, true, Infinity, '55', 8, 9, '10']

console.log('3-й:', arr9[3], '7-й:', arr9[7], arr9);

// task 10 --------------------

const arr10 = [, 1, , , , true, , , , '10'];

let out10 = document.querySelector('.out-10');
out10.innerHTML = arr10 + '<br>';
out10.innerHTML += 'длина массива :' + arr10.length;

console.log(arr10, 'длина: ', arr10.length);

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
