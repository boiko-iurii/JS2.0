// task 1 --------------------

let arr1 = [];
let input1 = document.querySelector('.u-1');
let out1 = document.querySelector('.out-1');

document.querySelector('.u-2__push').onclick = () => {

    out1.innerHTML = pushToArr(input1, arr1);

}

function pushToArr(input, arr) {

    arr.push(input.value);

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

// task 5 --------------------

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
