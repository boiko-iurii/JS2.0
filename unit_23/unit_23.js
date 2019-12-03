
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem(5, 11);
}
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
    const a2 = [7, 6, 5];
    localStorage.setItem('a2', JSON.stringify(a2));
}
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3(arr, out) {
    arr = JSON.parse(arr);
    for (let key in arr) {
        out.innerHTML += `${key} ${arr[key]}<br>`;
    }
}
document.querySelector('.b-3').onclick = () => {
    let a2 = localStorage.getItem('a2');
    t3(a2, document.querySelector('.out-3'));

}

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
    const a4 = {
        hello: 'world',
        hi: 'mahai'
    }
    localStorage.setItem('a4', JSON.stringify(a4))
}
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5(arr, out) {
    t3(arr, out);
}
document.querySelector('.b-5').onclick = () => {
    let a4 = localStorage.getItem('a4');
    t5(a4, document.querySelector('.out-5'));
};

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

const a7 = [];

function t7() {
    let input = document.querySelector('.i-7');
    a7.push(input.value);
    localStorage.setItem('a7', JSON.stringify(a7));
}
document.querySelector('.b-7').onclick = () => {
    t7();
    document.querySelector('.i-7').value = '';
}


// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

function t9(element) {
    localStorage.setItem('bg', element.value);
}

document.querySelectorAll('input[name="rb-9"]').forEach(element => {
    element.onchange = function () {
        t9(this);
    };
});

window.addEventListener('storage', function (e) {
    if (e.key == 'bg')
        document.body.style.background = e.newValue;
});

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {
    localStorage.setItem('card', JSON.stringify(card));
    t11();
    t12();
    t13();
}
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    let c11 = localStorage.getItem('card');
    let out = '';
    c11 = JSON.parse(c11);

    for (let key in c11) {
        out += `<div data-product="${key}" class="table-row">
                    <div class="product">
                        ${key}
                    </div>
                    <div class="quantity">
                        <span data-quantity="${c11[key]}">${c11[key]}</span>
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>`;
    }
    document.querySelector('.out-10').innerHTML = out;
}

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
    document.querySelectorAll('[data-product]').forEach(item => {

        let quantity = item.querySelector('[data-quantity]').getAttribute('data-quantity');

        item.querySelector('.plus').onclick = function () {
            quantity++;
            setQuantity();
        }

        item.querySelector('.minus').onclick = function () {
            if (quantity > 0)
                quantity--;
            setQuantity();
        }

        function setQuantity() {
            item.querySelector('[data-quantity]').setAttribute('data-quantity', quantity);
            item.querySelector('[data-quantity]').textContent = quantity;
            card[item.getAttribute('data-product')] = quantity;
            localStorage.setItem('card', JSON.stringify(card));
            refreshTotalAmount(document.querySelector('.table-footer'));
        }

    });
}

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {
    let footer = document.createElement('div');

    document.querySelector('.out-10').append(footer);
    footer.classList.add('table-footer');
    refreshTotalAmount(footer);
}

function totalAmount() {
    let res = 0;
    for (let key in card) {
        res += card[key];
    }
    return res;
}

function refreshTotalAmount(footer) {
    footer.innerHTML = `Количество: <b>${totalAmount()}</b>`;
}

// Task 14 ============================================
/*  Добавьте функцию t14, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t14() {
    if (localStorage.getItem('card')) {
        t11();
        t12();
        t13();
    }
    else
        document.querySelector('.out-10').textContent = 'Корзина пуста.';
}
// t14();