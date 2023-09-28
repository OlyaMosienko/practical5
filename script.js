'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }

// Домашнее задание
// Задача 1
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = 'Ку-ку! А я <strong>жирный</strong>!'
// };

// Задача 2
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<h3>Текст превратился в h3!</h3>';
// };

// Задача 3
// function buttonClick(){
//     let elem = document.querySelector('.text');
//     elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
// }

// Задача 4
function sum(){
    let input = document.querySelectorAll('.input');
    let input1 = input[0];
    let input2 = input[1];
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let sum = document.querySelector('.sum');
    sum.innerHTML = value1 + value2;
};

// Задача 5
function buttonClick(){
    let text = document.querySelectorAll('.text');
    for(let i = 0; i < text.length; i++){
        text[i].innerHTML = i;
    }
}