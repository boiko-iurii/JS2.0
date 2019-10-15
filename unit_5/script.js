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

let divs11 = document.querySelectorAll('.one');

document.querySelector('.out-11').innerText = 'Количество div.one на странице: ' + divs11.length;


// task 12 --------------------

document.querySelector('.btn-12').onclick = () => {

    let divs12 = document.querySelectorAll('.one');

    for (let i = 0; i < divs12.length; i++) {

        divs12[i].style.background = 'orange';

    }

}

// task 13 --------------------

document.querySelector('.btn-13').onclick = () => {

    let divs13 = document.querySelectorAll('.one');

    for (let i = 0; i < divs13.length; i++) {

        console.log(divs13[i].innerHTML);

    }

}

// task 14 --------------------

document.querySelector('.btn-14').onclick = () => {

    let inputs14 = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < inputs14.length; i++) {

        inputs14[i].setAttribute('placeholder', 'Введите данные');

    }

}

// task 15 --------------------

document.querySelector('.btn-15').onclick = () => {

    let inputs15 = document.querySelectorAll('input[type="text"]');

    console.log('Количество input[type="text"]: ', inputs15.length)

}

// task 16 --------------------

let radioButtons16 = document.querySelectorAll('input[name="p1"]');

document.querySelector('.btn-16').onclick = () => {

    for (let i = 0; i < radioButtons16.length; i++) {

        if (radioButtons16[i].checked) {

            document.querySelector('.out-16').innerText = radioButtons16[i].value;

        }

    }

}

// task 17 --------------------

document.querySelector('.btn-17').onclick = () => {

    radioButtons16[0].checked = true;

}

// task 18 --------------------

document.querySelector('.btn-18').onclick = () => {

    for (let i = 0; i < radioButtons16.length; i++) {

        radioButtons16[i].setAttribute('value', i);

    }

}

// task 19 --------------------

document.querySelector('.btn-19').onclick = () => {

    let radioButtons19 = document.querySelectorAll('input[name="p2"]');

    for (let i = 0; i < radioButtons19.length; i++) {

        if (radioButtons19[i].checked) {

            if (radioButtons19[i].value == '6') {

                document.querySelector('.out-19').innerText = 'true';

            } else {

                document.querySelector('.out-19').innerText = 'false';

            }

        }

    }

}

// task 20 --------------------

let radioButtons20 = document.querySelectorAll('input[name="p3"]');

for (let i = 0; i < radioButtons20.length; i++) {

    radioButtons20[i].oninput = () => {

        console.log('Был изменен input.');

    }

}