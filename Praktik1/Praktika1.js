//0
const firstVariable = 'SomeText'
console.log(typeof firstVariable)
typeof firstVariable==='string'?  console.log('Вариант со строкой') : console.log('Вариант не со строкой')

// 1
let Putn
do {
     Putn = prompt('Кто президент мира?')
switch (Putn) {
    case 'Путин':
        alert('Верно, живи спокойно')
        console.log('Верно, живи спокойно')
        break;
    case 'Байден':
        alert('ФСБ выехало. Прощай')
        console.log('ФСБ выехало. Прощай')
        break;
    case 'Королева Елизаветта':
        alert('Боже храни королеву. Но нет. Попробуй ещё>')
        console.log('Боже храни королеву. Но нет. Попробуй ещё')
        break;
    default:
        alert('Введено непонятно что')
        console.log('Введено непонятно что')
        break;    
}
} while (Putn!='Путин');

// 2.1
for (let i = 1; i <= 40; i++) {   
    console.log(i)
}
alert('Вывел первый сорокет')
// 2.2
let i = 1
while ( i <= 40) {
    console.log(i)
    i++
}
alert('Вывел второй сорокет')
// 2.3
let j = 1
do {   
    console.log(j)
    j++
} while (j < 41);
alert('Вывел третий сорокет')

// 3 - 4
let OTVET
do {
    OTVET = prompt('Введите цифру больше чем 5')
    let OTVETNUM = Number(OTVET)
    if (OTVETNUM > 5) {
        alert('Введена цифра больше чем 5. Молодец!')
        console.log('Введена цифра больше чем 5. Молодец!')
        break
    } else {
        continue
    }
}while (Putn <= 5);

//5
for (let n = 8; n <= 20; n++) {
    if (n % 2 == 0) {
      console.log(n);
    }
  }
  console.log('Вывел чётные');
  alert('Вывел чётные')
//6
for (let g = 1; g <= 7; g++) {
    if (g != 5){
        if (g % 2 != 0) {
            console.log(g);
        }
    }  
}
console.log('Вывел нечётные')
alert('Вывел нечётные')


