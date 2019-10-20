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

console.log('3-й:', arr9[2], '7-й:', arr9[6], arr9);

// task 10 --------------------

const arr10 = [1, , , , true, , , , , '10'];

let out10 = document.querySelector('.out-10');
out10.innerHTML = arr10 + '<br>';
out10.innerHTML += 'длина массива :' + arr10.length;

console.log(arr10, 'длина: ', arr10.length);

// task 11 --------------------

const c = [77, 88, 99, 66];

function replaceElements(arr) {

    let a = arr[0];
    let b = arr[2];

    arr[0] = b;
    arr[2] = a;

    return arr;

}

document.querySelector('.btn-11').onclick = () => {
    replaceElements(c);
}

// task 12 --------------------

function func_12(arr) {

    let first = arr[0];
    let last = arr[arr.length - 1];

    arr[0] = last;
    arr[arr.length - 1] = first;

    console.log(arr);
}

func_12(c);

// task 13 --------------------

let out13 = function () {

    const d = ['y', 4, 22, 'o'];
    let res = '';

    for (let i = 0; i < d.length; i++) {
        res += d[i] + ' ';
    }

    return res;

}

document.querySelector('.out-13').innerHTML = out13();

// task 14 --------------------

const e = [1, 2, 3, 'hello', 66];

let out14 = function (arr) {

    let res = '';
    let k = arr.length;

    while (k > 0) {
        k--;
        res += arr[k] + ' ';
    }

    return res;

}

document.querySelector('.out-14').innerHTML = out14(e);

// task 15 --------------------

const d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let out15 = function (arr) {

    let res = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res += arr[i] + ' ';
        }
    }

    return res;

}

document.querySelector('.out-15').innerHTML = out15(d);

// task 16 --------------------

let out16 = function (arr) {

    let a1 = [];
    let a2 = [];
    let k = 0;

    for (let i = 0; i < arr.length; i++) {

        if ((i + 1) % 2 == 0) {

            a1.push(arr[i]);

        } else {

            a2.push(arr[i]);

        }

    }

    return `a1: ${a1}<br>a2: ${a2}`;

}

document.querySelector('.out-16').innerHTML = out16(d);


// task 17 --------------------

let w = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function counter(arr, el) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            count += 1;
        }
    }

    return count;

}

console.log(counter(w, 0));


// task 18 --------------------

function getMaxOfArray(numArray) {

    return Math.max.apply(null, numArray);

}

console.log(getMaxOfArray(w));

// task 19 --------------------

// task 20 --------------------
