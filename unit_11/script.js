// task 1 --------------------

let arr1 = [];
let input1 = document.querySelector('.u-1');
let out1 = document.querySelector('.out-1');

document.querySelector('.u-2__push').onclick = () => {

    out1.innerHTML = pushToArr(input1, arr1);

}

function pushToArr(input, arr) {

    if (input.value.trim().length > 0) {
        arr.push(input.value.trim());
        input.value = '';
    } else {
        alert('Введите значение');
        input.value = '';
    }

    return arr;

}

// task 2 --------------------

document.querySelector('.u-2__pop').onclick = () => {

    out1.innerHTML = popArr(arr1);

}

function popArr(arr) {

    arr.pop();

    return arr;

}

// task 3 --------------------

document.querySelector('.u-3__shift').onclick = () => {

    out1.innerHTML = shiftArr(arr1);

}

function shiftArr(arr) {

    arr.shift();

    return arr;

}

// task 4 --------------------

document.querySelector('.u-4__unshift').onclick = () => {

    out1.innerHTML = unshiftArr(arr1, input1);

}

function unshiftArr(arr, input) {

    if (input.value.trim().length > 0) {
        arr.unshift(input.value.trim());
        input.value = '';
    } else {
        alert('Введите значение');
        input.value = '';
    }

    return arr;

}

// task 5 --------------------

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.u-5__splice').onclick = () => {

    let start = document.querySelector('.f-5').value;
    let count = document.querySelector('.s-5').value;
    let out5 = document.querySelector('.out-5');

    out5.innerHTML = spliceArr(arr5, start, count);

}

function spliceArr(arr, start, count) {

    if (start.length > 0 && count.length > 0) {
        arr.splice(start, count);
        return arr;
    }
    else if (start.length == 0 && count.length > 0) {
        return 'Введите значения индекса';
    }
    else if (start.length > 0 && count.length == 0) {
        return 'Введите значения количества';
    }
    else {
        return 'Введите значения индекса и количества';
    }

}

// task 6 --------------------

let arr6 = [];

document.querySelector('.btn-6').onclick = () => {

    let out6 = document.querySelector('.out-6');
    let input6 = document.querySelector('.i-6');

    out6.innerText = funcPush(arr6, input6);

    input6.value = '';

}

function funcPush(arr, input) {

    arr[arr.length] = input.value;

    return arr;

}

// task 7 --------------------

let arr7 = [1, 2, 3, 22, 555, 'as', 'w', 0, '#fff', 1];

document.querySelector('.btn-7').onclick = () => {

    let out7 = document.querySelector('.out-7');

    out7.innerText = funcPop(arr7);

}

function funcPop(arr) {

    if (arr.length > 0)
        arr.length = arr.length - 1;

    return arr;

}

// task 8 --------------------

document.querySelector('.btn-8').onclick = () => {

    let out8 = document.querySelector('.out-8');

    out8.innerText = funcShift(arr7);

}

function funcShift(arr) {

    for (let i = 1; i <= arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    if (arr.length > 0)
        arr.length -= 1;

    return arr;

}

// task 9 --------------------

let arr9 = [];

document.querySelector('.btn-9').onclick = () => {

    let out9 = document.querySelector('.out-9');
    let input9 = document.querySelector('.i-9');

    out9.innerText = funcUnShift(arr9, input9);

}

function funcUnShift(arr, input) {

    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = input.value;

    input.value = '';

    return arr;

}

// task 10 --------------------

let arr10 = [2, 4, 6, 8, 10, 'hello'];

document.querySelector('.u-10__reverse').onclick = () => {

    arr10.reverse();
    document.querySelector('.out-10').innerHTML = arr10;

}

// task 11 --------------------

let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.u-11__button').onclick = () => {

    let input11 = document.querySelector('.u-11__input');

    let u11 = input11.value;

    u11 = parseInt(u11);

    document.querySelector('.out-11').innerHTML = arr11.indexOf(u11);

    input11.value = '';

}
// task 12 --------------------

document.querySelector('.u-12__button').onclick = () => {

    let input12 = document.querySelector('.u-12__input');

    document.querySelector('.out-12').innerHTML = funcIndexOf(input12, arr11);

    input12.value = '';

}

function funcIndexOf(input, arr) {

    let val = input.value;
    let res;

    if (val.length) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == parseInt(val)) {
                res = i;
                break;
            } else {
                res = -1;
            }
        }

        return res;

    } else {

        return 'Введите значение.';

    }

}

// task 13 --------------------

let arr13 = [1, 2, 3, 4, 5, 6, 7];

document.querySelector('.u-13__button').onclick = () => {

    document.querySelector('.out-13').innerHTML = funcReverse(arr13);

}

function funcReverse(arr) {

    let b = [];

    for (let i = arr.length - 1, k = 0; i >= 0, k < arr.length; i-- , k++) {

        b[k] = arr[i];

    }

    return b;

}

// task 14 --------------------

document.querySelector('.u-14__button').onclick = () => {

    let input14 = document.querySelector('.u-14__input');

    document.querySelector('.out-14').innerHTML = randomArr(input14);

    input14.value = '';

}

function randomArr(input) {

    let arr = [];

    if (input.value > 0) {

        for (let i = 0; i < input.value; i++) {

            arr[i] = random();

        }

        return arr;

    } else {

        return 'Введите значение длины массива.';

    }


}

function random(min = 1, max = 100) {

    let res = min + Math.random() * (max - min);

    return parseInt(res);

}

// task 15 --------------------

let arr15 = [1, 2, 3, 4, 5, 6, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.u-15__button').onclick = () => {

    document.querySelector('.out-15').innerHTML = eventArrElem(arr15);

}

function eventArrElem(arr) {

    let b = [];

    for (let i = 0; i < arr.length; i++) {

        if ((i + 1) % 2 == 0) {
            b.push(arr[i]);
        }

    }

    return b;

}

// task 16 --------------------

let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

document.querySelector('.u-16__button').onclick = () => {

    document.querySelector('.out-16').innerHTML = arr16_1.concat(arr16_2);

}

// task 17 --------------------

document.querySelector('.u-17__button').onclick = () => {

    document.querySelector('.out-17').innerHTML = funcConcat(arr16_1, arr16_2);

}

function funcConcat(arr1, arr2) {

    let length1 = arr1.length;

    for (let i = 0; i < arr2.length; i++) {

        arr1[i + length1] = arr2[i];

    }

    return arr1;

}

// task 18 --------------------

let arr18 = [3, 5, 7, 11, 12, 13, 14];

document.querySelector('.u-18__button').onclick = () => {

    let input18 = document.querySelector('.u-18__input');
    let elem = parseInt(input18.value);

    document.querySelector('.out-18').innerHTML = arr18.includes(elem);

    input18.value = '';

}

// task 19 --------------------

document.querySelector('.u-19__button').onclick = () => {

    let input19 = document.querySelector('.u-19__input');

    document.querySelector('.out-19').innerHTML = funcIncludes(input19, arr18);

    input19.value = '';

}

function funcIncludes(input, arr) {

    let val = parseInt(input.value);
    let res;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == val) {
            res = true;
            break;
        } else {
            res = false;
        }

    }
    return res;
}

// task 20 --------------------

let arr20 = ['a', 'b', 'c', 'd', 'e', 'f'];

document.querySelector('.btn-20').onclick = () => {

    document.querySelector('.out-20').innerText = arr20.join('-');

}