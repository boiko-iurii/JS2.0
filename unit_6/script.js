// task 1 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k < 3; k++) {

        output1.innerHTML += '*';

    }

    output1.innerHTML += '  ';

}

// task 2 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k < 5; k++) {

        output2.innerHTML += '*';

    }

    output2.innerHTML += '<br>';

}

// task 3 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k < 6; k++) {

        if (k % 2 == 0) {

            output3.innerHTML += '1';

        }

        else {

            output3.innerHTML += '0';

        }

    }

    output3.innerHTML += '<br>';

}

// task 4 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k < 6; k++) {

        if ((k + 1) % 3 == 0) {

            output4.innerHTML += 'x';

        }

        else if ((k + 1) % 2 == 0) {

            output4.innerHTML += '0';

        }

        else {

            output4.innerHTML += '1';

        }

    }

    output4.innerHTML += '<br>';

}

// task 5 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k <= i; k++) {

        output5.innerHTML += '*';

    }

    output5.innerHTML += '<br>';
}

// task 6 --------------------

for (let i = 4; i >= 0; i--) {

    for (let k = i; k >= 0; k--) {

        output6.innerHTML += '*';

    }

    output6.innerHTML += '<br>';
}

// task 7 --------------------

for (let i = 3; i > 0; i--) {

    for (let j = i - 1; j > 0; j--) {

        output7.innerHTML += '&nbsp;';

    }

    for (let k = 5; k > 0; k--) {

        output7.innerHTML += '*';

    }

    output7.innerHTML += '<br>';

}

// task 8 --------------------

for (let i = 1; i <= 3; i++) {

    for (let k = 1; k <= i; k++) {

        output8.innerHTML += '*';

    }

    output8.innerHTML += '<br>';

}

for (let i = 2; i >= 1; i--) {

    for (let k = 1; k <= i; k++) {

        output8.innerHTML += '*';

    }

    output8.innerHTML += '<br>';

}

// task 9 --------------------

for (let i = 1; i <= 5; i++) {

    if (i == 1 || i == 5) {

        for (let k = 1; k <= 6; k++) {

            output9.innerHTML += '*';

        }

    } else {

        for (let k = 1; k <= 6; k++) {

            if (k == 1 || k == 6) {

                output9.innerHTML += '*';

            } else {

                output9.innerHTML += '&nbsp;';

            }

        }
    }

    output9.innerHTML += '<br>';

}

// task 10 --------------------

document.querySelector('.btn-10').onclick = () => {

    let symb = document.querySelector('#i-10').value;

    for (let i = 1; i <= 5; i++) {

        if (i == 1 || i == 5) {

            for (let k = 1; k <= 6; k++) {

                if (symb.length == 0) {

                    output10.innerHTML += '*';

                } else {

                    output10.innerHTML += symb;

                }

            }

        } else {

            for (let k = 1; k <= 6; k++) {

                if (k == 1 || k == 6) {

                    if (symb.length == 0) {

                        output10.innerHTML += '*';

                    } else {

                        output10.innerHTML += symb;

                    }

                } else {

                    output10.innerHTML += '&nbsp;';

                }

            }
        }

        output10.innerHTML += '<br>';

    }

}

// task 11 --------------------

for (let i = 6; i <= 7; i++) {

    for (let k = 1; k <= 10; k++) {

        output11.innerHTML += `${i} * ${k} = ${i * k}`;

        output11.innerHTML += '<br>';
    }

    output11.innerHTML += '<br>';

}

// task 12 --------------------

for (let i = 1; i <= 5; i++) {

    for (let k = 1; k <= i; k++) {

        output12.innerHTML += k + '&nbsp;';

    }

    output12.innerHTML += '<br>';

}

// task 13 --------------------

for (let i = 0; i < 5; i++) {

    for (let k = 1; k <= 10; k++) {

        if (k == 10) {

            output13.innerHTML += `${i + 1}0`;

        } else {

            output13.innerHTML += `${i}${k}&nbsp;`;

        }

    }

    output13.innerHTML += '<br>';

}

// task 14 --------------------

for (let i = 5; i >= 1; i--) {

    for (let k = i; k >= 1; k--) {

        output14.innerHTML += k + '&nbsp;';

    }

    output14.innerHTML += '<br>';

}

// task 15 --------------------

for (let i = 1; i <= 5; i++) {

    for (let k = 5; k > i; k--) {

        output15.innerHTML += 'x&nbsp;';

    }

    for (let k = i; k >= 1; k--) {

        output15.innerHTML += `${k}&nbsp;`;

    }

    output15.innerHTML += '<br>';

}

// task 16 --------------------

for (let i = 1; i <= 5; i++) {

    for (let k = i; k >= 1; k--) {

        output16.innerHTML += `${i}&nbsp;`;

    }

    output16.innerHTML += '<br>';

}

// task 17 --------------------

for (let i = 5; i >= 1; i--) {

    for (let j = i; j <= 5; j++) {

        output17.innerHTML += `${i}&nbsp;`;

    }

    output17.innerHTML += '<br>';

}

// task 18 --------------------

for (let i = 5; i >= 1; i--) {

    if (i % 2 == 0) {

        for (let j = i; j <= 5; j++) {

            output18.innerHTML += `x&nbsp;`;

        }

    } else {


        for (let j = i; j <= 5; j++) {

            output18.innerHTML += `${i}&nbsp;`;

        }

    }

    output18.innerHTML += '<br>';

}

// task 19 --------------------

for (let i = 0; i < 3; i++) {

    for (let k = 0; k < 5 + i * 2; k++) {

        output19.innerHTML += '*';

    }

    output19.innerHTML += '<br>';
}

// task 20 --------------------

for (let i = 1; i <= 3; i++) {

    for (let k = 0; k < i * 2; k++) {

        output20.innerHTML += '*';

    }

    output20.innerHTML += '<br>';

}

for (let i = 2; i >= 1; i--) {

    for (let k = 0; k < i * 2; k++) {

        output20.innerHTML += '*';

    }

    output20.innerHTML += '<br>';

}