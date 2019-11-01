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

for (let branch in a11) {

    out11 += branch + ': [';

    for (let i = 0; i < a11[branch].length; i++) {

        if ([i] == a11[branch].length - 1)
            out11 += `${a11[branch][i]} `;
        else
            out11 += `${a11[branch][i]}, `;

    }

    out11 += ']<br>';

}

document.querySelector('.out-11').innerHTML = out11;

// task 12 --------------------

document.querySelector('.btn-12').onclick = () => {

    let branch = document.querySelector('.u12-branch').value;

    let out = '';

    for (let i = 0; i < a11[branch].length; i++) {

        if ([i] == a11[branch].length - 1)
            out += `${[i + 1]}. ${a11[branch][i]}.`;
        else
            out += `${[i + 1]}. ${a11[branch][i]},<br>`;


    }

    document.querySelector('.out-12').innerHTML = out;

}


// task 13 --------------------

document.querySelector('.u13-reverse').onclick = () => {

    let branch = document.querySelector('.u12-branch').value;
    let out = '';

    for (let i = 0, k = a11[branch].length - 1; i < a11[branch].length, k >= 0; i++ , k--) {

        if ([i] == a11[branch].length - 1)
            out += `${[i + 1]}. ${a11[branch][k]}.`;
        else
            out += `${[i + 1]}. ${a11[branch][k]},<br>`;

    }

    document.querySelector('.out-13').innerHTML = out;

}

// task 14 --------------------

document.querySelector('.btn-14').onclick = () => {

    let station = document.querySelector('.u14-find-station').value;
    let out = '';
    let branch = getKeyObj(a11, station);

    if (branch == 'red')
        out = 'Станция находится на крассной ветке.';
    else if (branch == 'green')
        out = 'Станция находится на зеленой ветке.';
    else if (branch == 'blue')
        out = 'Станция находится на синей ветке.';

    document.querySelector('.out-14').innerHTML = out;

}

function getKeyObj(obj, value) {
    for (let key in obj) {
        if (obj[key].indexOf(value) != -1)
            return key;
    }
}

// task 15 --------------------

document.querySelector('.btn-15').onclick = () => {

    let firstStation = document.querySelector('.u15-first-station').value;
    let secondStation = document.querySelector('.u15-second-station').value;
    let distance = 0;
    let a = getKeyObj(a11, firstStation);
    let stationA = a11[a].indexOf(firstStation)
    let b = getKeyObj(a11, secondStation);
    let stationB = a11[b].indexOf(secondStation)

    if (a == b)
        if (stationA > stationB)
            distance = stationA - stationB - 1;
        else if (stationA < stationB)
            distance = stationB - stationA - 1;

    document.querySelector('.out-15').innerHTML = distance;

}

// task 16 --------------------

document.querySelectorAll('.u16-radio').forEach(function (element) {

    let select = document.querySelector('.u16-select');

    element.oninput = function () {

        select.innerHTML = '';

        for (let i = 0; i < a11[this.value].length; i++) {

            addOption(select, a11[this.value][i]);

        }

    }

});

function addOption(select, value) {

    let option = document.createElement('option');

    option.innerText = value;
    option.value = value;
    select.append(option);

}

// task 17 --------------------

const a17 = {
    "red": [['Академгородок', 0], 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', ['Театральная', 1], ['Крещатик', 1], 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', ['Лесная', 0]],
    "blue": [['Героев Днепра', 0], 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', ['Площадь Независимости', 1], ['Площадь Льва Толстого', 1], 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Васильковская', 'Выставочный центр', 'Ипподром', ['Теремки', 0]],
    "green": [['Сырец', 0], 'Дорогожичи', 'Лукьяновская', ['Золотые ворота', 1], ['Дворец спорта', 1], 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', ['Красный хутор', 0]],
}

let out17 = '';

for (let branch in a17) {

    out17 += branch + ': [';

    for (let i = 0; i < a17[branch].length; i++) {

        // if ([i] == a17[branch].length - 1)
        //     out17 += `${a17[branch][i]} `;
        // else
        out17 += `${a17[branch][i]}, `;

    }

    out17 += ']<br>';


}
console.log(a17.red[0].length);
console.log(a17.red[1].length);

document.querySelector('.out-17').innerHTML = out17;

// task 18 --------------------

// task 19 --------------------

// task 20 --------------------
