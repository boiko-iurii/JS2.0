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
        arr.length = arr.length - 1;

    return arr;

}

// task 9 --------------------

let test = [1, 2, 3, 4, 5]

document.querySelector('.btn-9').onclick = () => {
    let input9 = document.querySelector('.i-9')
    let out9 = document.querySelector('.out-9');

    out9.innerText = funcUnShift(test, input9);

}

function funcUnShift(arr, input) {

    let b = [];

    console.log(arr.length);

    b.length = arr.length + 1;

    console.log(arr.length);

    for (let i = 0; i < arr.length; i++) {

        b[i + 1] = arr[i];
        // b[i] = input.value;
    }

    return b;

}

// task 10 --------------------

let arr10 = [2, 4, 6, 8, 10, 'hello'];

document.querySelector('.u-10__reverse').onclick = () => {

    arr10.reverse();
    document.querySelector('.out-10').innerHTML = arr10;

}

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
