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

        start = parseInt(start);
        count = parseInt(count);

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

// task 7 --------------------

// task 8 --------------------

// task 9 --------------------

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
