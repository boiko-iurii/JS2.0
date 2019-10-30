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

let a7 = {};

document.querySelector('.btn-7').onclick = () => {

    let keyInput = document.querySelector('.u7-key__input');
    let valInput = document.querySelector('.u7-value__input');
    let outer7 = document.querySelector('.out-7');
    let out7 = '';
    let key = keyInput.value.trim();
    let val = valInput.value.trim();

    if (key && key.length && val && val.length) {
        if (val && key)
            a7[key] = val;

        keyInput.value = '';
        valInput.value = '';

        for (let key in a7) {
            out7 += `${key} : ${a7[key]},<br>`;
        }

        outer7.innerHTML = out7;
    }
    else if (key && key.length) {
        outer7.innerText = 'Введите значение';
    }
    else {
        outer7.innerText = 'Введите ключ';
    }

}

// task 8 --------------------

document.querySelector('.btn-8').onclick = () => {

    let keyInput = document.querySelector('.u8-key__input');
    let outer8 = document.querySelector('.out-8');
    let out8 = '';

    let el = keyInput.value.trim();

    keyInput.value = '';

    if (el && a7[el]) {

        delete a7[el];

        for (let key in a7) {
            out8 += `${key} : ${a7[key]},<br>`;
        }

        outer8.innerHTML = out8;

    }
    else if (el && !a7[el]) {

        outer8.textContent = 'Такого ключа в массиве не существует';

    }
    else {

        outer8.textContent = 'Введите значение';

    }

}

// task 9 --------------------

document.querySelector('.btn-9').onclick = () => {

    let keyInput = document.querySelector('.u9-delete-value__input');
    let outer9 = document.querySelector('.out-9');
    let out9 = '';
    let el = keyInput.value.trim();

    keyInput.value = '';

    if (el && el.length) {

        for (let key in a7) {

            if (a7[key] == el) {

                let t = key;

                delete a7[t];
                out9 = '';

                for (let k in a7) {
                    out9 += `${k} : ${a7[k]},<br>`;
                }

                break;

            }
            else {
                out9 = 'Такое значение в массиве не существует.';
            }
        }
        outer9.innerHTML = out9;

    }
    else {
        outer9.textContent = 'Введите значение';
    }

}

// task 10 --------------------

function existKey(key, arr) {

    if (key && arr[key])
        return true;
    else
        return false;

}

document.querySelector('.btn-10').onclick = () => {

    let keyInput = document.querySelector('.u10-has-key__input');
    let outer10 = document.querySelector('.out-10');
    let key = keyInput.value.trim();

    keyInput.value = '';

    if (key.length)
        outer10.innerText = existKey(key, a7);
    else
        outer10.innerText = 'Введите значение';

}

// task 11 --------------------

const a11 = {
    "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
    "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
    "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
}

let out11 = '';

for (let line in a11) {

    out11 += line + ': [';

    for (let i = 0; i < a11[line].length; i++) {

        out11 += `${a11[line][i]}, `;

    }

    out11 += ']<br>';

}

document.querySelector('.out-11').innerHTML = out11;

// task 12 --------------------

document.querySelector('.btn-12').onclick = () => {

    let line = document.querySelector('.u12-branch').value;

    let out = '';

    for (let i = 0; i < a11[line].length; i++) {

        if ([i] == a11[line].length - 1)
            out += `${[i + 1]}. ${a11[line][i]}.`;
        else
            out += `${[i + 1]}. ${a11[line][i]},<br>`;


    }

    document.querySelector('.out-12').innerHTML = out;

}

// task 13 --------------------

// task 14 --------------------

// task 15 --------------------

// task 16 --------------------

// task 17 --------------------

// task 18 --------------------

// task 19 --------------------

// task 20 --------------------
