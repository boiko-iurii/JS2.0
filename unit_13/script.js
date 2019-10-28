// task 1 --------------------

const a1 = {
    '3': 'hello',
    'one': 'hi'
};
let out1 = '';

for (let key in a1) {
    out1 += `${key} : ${a1[key]} <br>`;
}

document.querySelector('.out-1').innerHTML = out1;

// task 2 --------------------

const a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
let out2 = '';

for (let key in a2) {
    if (a2[key].length > 4)
        out2 += `${key} : ${a2[key]} <br>`;
}

document.querySelector('.out-2').innerHTML = out2;

// task 3 --------------------

const a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
let out3 = '';

for (let key in a3) {
    if (key.length > 4)
        out3 += `${key} : ${a3[key]} <br>`;
}

document.querySelector('.out-3').innerHTML = out3;

// task 4 --------------------

const a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};
let out4 = '';

for (let key in a4) {
    if (typeof a4[key] == 'number')
        out4 += `${key} : ${a4[key]} <br>`;
}

document.querySelector('.out-4').innerHTML = out4;

// task 5 --------------------

const a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};
let out5 = 0;

for (let key in a5) {
    out5 += a5[key];
}

document.querySelector('.out-5').innerText = out5;

// task 6 --------------------

const a6 = {
    'name': 'Iurii',
    'age': 33,
    'sex': 'male',
    'height': 173
};
let out6 = '';

for (let key in a6) {
    out6 += `${key} : ${a6[key]},<br>`;
}

document.querySelector('.out-6').innerHTML = out6;

// task 7 --------------------

const a7 = {};

document.querySelector('.btn-7').onclick = () => {

    let keyInput = document.querySelector('.u7-key__input');
    let valInput = document.querySelector('.u7-value__input');
    let out7 = '';
    let key = keyInput.value;
    let val = valInput.value;

    if (val && key)
        a7[key] = val;

    keyInput.value = '';
    valInput.value = '';

    for (let key in a7) {
        out7 += `${key} : ${a7[key]},<br>`;
    }

    document.querySelector('.out-7').innerHTML = out7;

}

// task 8 --------------------

document.querySelector('.btn-8').onclick = () => {

    let keyInput = document.querySelector('.u8-key__input');
    let out8 = '';

    delete a7[keyInput.value];

    keyInput.value = '';

    for (let key in a7) {
        out8 += `${key} : ${a7[key]},<br>`;
    }

    document.querySelector('.out-8').innerHTML = out8;

}

// task 9 --------------------

const a9 = {
    a: 5,
    b: 7,
    g: 12
}

document.querySelector('.btn-9').onclick = () => {

    let keyInput = document.querySelector('.u9-delete-value__input');
    let out9 = '';

    for (let key in a7) {

        if (a7[key] == keyInput.value) {

            let t = key;

            delete a7[t];

            for (let k in a7) {

                out9 += `${k} : ${a7[k]},<br>`;

            }

            // break;

        }
    }
    keyInput.value = '';

    document.querySelector('.out-9').innerHTML = out9;

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
