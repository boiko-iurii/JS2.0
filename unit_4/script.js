// task 1 --------------------

document.querySelector('.btn-1').onclick = () => {
    alert('1');
}

// task 2 --------------------

document.querySelector('#i-2').onclick = () => {
    alert('2');
}

// task 3 --------------------

document.querySelector('.p-3').onclick = () => {
    alert('3');
}

// task 4 --------------------

document.querySelector('.btn-4').onclick = () => {

    let checkbox = document.querySelector('#i-4');

    console.log(checkbox.checked);

}

// task 5 --------------------

document.querySelector('.btn-5').onclick = () => {

    let checkbox = document.querySelector('#i-5');

    if (checkbox.checked) {
        console.log(checkbox.value);
    } else {
        console.log('false')
    }

}

// task 6 --------------------

document.querySelector('.btn-6').onclick = () => {

    let value = document.querySelector('#i-6').value;

    alert(value);

}

// task 7 --------------------

document.querySelector('.btn-7').onclick = () => {

    let password = document.querySelector('#i-7').value;

    if (password.length < 6) {
        alert('Длина пароля меньше 6 символов.');
    } else {
        alert(password);
    }

}

// task 8 --------------------

document.querySelector('.btn-8').onclick = () => {

    let div8 = document.querySelector('.d-8');

    div8.innerHTML = '<input type="text" id="inner-input"><button class="btn-inner">next click</button>';

    document.querySelector('.btn-inner').onclick = () => {

        let innerInput = document.querySelector('#inner-input');

        alert(innerInput.value);

    }

}

// task 9 --------------------

document.querySelector('.btn-9').onclick = () => {

    let radio = document.querySelector('#i-9');

    if (radio.checked) {
        alert(radio.value);
    } else {
        alert('false');
    }

}

// task 10 --------------------

document.querySelector('.btn-10').onclick = () => {

    let color = document.querySelector('#i-10').value;

    document.querySelector('.div-10').style.background = color;

}

// task 11 --------------------

document.querySelector('.btn-11').onclick = () => {

    let first = document.querySelector('#f-11').value;

    document.querySelector('#s-11').value = first;

}

// task 12 --------------------

document.querySelector('.btn-12').onclick = () => {

    let date = document.querySelector('#date-12').value;

    document.querySelector('.out-12').innerText = date;

}

// task 13 --------------------

document.querySelector('.btn-13').onclick = () => {

    let range = document.querySelector('#range-13');

    document.querySelector('.out-13').innerText = range.value;

}

document.querySelector('#range-13').oninput = function () {

    document.querySelector('#out-13').innerText = this.value;

}

// task 14 --------------------

document.querySelector('.btn-14').onclick = () => {

    let textarea = document.querySelector('#textarea-14').value;

    document.querySelector('.out-14').innerText = textarea;

}

// task 15 --------------------

document.querySelector('.btn-15').onclick = () => {

    let input = document.querySelector('#i-15').value;

    document.querySelector('#textarea-15').value = input;

    document.querySelector('.out-15').innerText = input;

}

// task 16 --------------------

document.querySelector('.btn-16').onclick = () => {

    let select = document.querySelector('#select-16').value;

    document.querySelector('.out-16').innerText = select;

}

// task 17 --------------------



// task 18 --------------------

document.querySelector('#select-18').onchange = function () {

    document.querySelector('.out-18').innerText = this.value;

}

// task 19 --------------------

document.querySelector('.btn-19').onclick = (event) => {

    event.preventDefault();

    let text = document.querySelector('#txt-19');
    let pass = document.querySelector('#pass-19');

    console.log(text.value);
    console.log(pass.value);

}

// task 20 --------------------

document.querySelector('.btn-20').onclick = (event) => {

    event.preventDefault();

    let form = document.querySelector('#form-20');

    console.log(form.elements.txt.value);
    console.log(form.elements.pass.value);

}
