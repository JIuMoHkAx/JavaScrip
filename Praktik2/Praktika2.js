//1
let arr = new Array(1,2,3,4,5,6,7,8,9)
let arr2 = [2,4,6,8,10,12,14,16]
let fruits = ['Яблоко', 'Апельсин', 'Слива']
console.log('1) 3 Массива созданы')

//2
console.log('2) 5й Элемент массива: ' + arr[4])
let A
let NUMA
do {
    A = prompt('Введите число')
    NUMA = Number(A)
} while (typeof NUMA != 'number' ||  NUMA.toString() === 'NaN');
arr[4] = NUMA
console.log('5й Элемент массива заменён новым значением')
console.log('4)')

//4
for (let i = 0; i < arr.length; i++) {   
    console.log(arr[i])
}

//5,6,7,8
let arrSum = arr.concat(arr2)
arrSum.pop()
arrSum.shift()
console.log('5) ' + arrSum)

//9,10
let date = new Date();
console.log('9) ' + date); 
let a=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
console.log('10) ' + `${date.getDate()} ${a[date.getMonth()]} ${date.getFullYear()}`)

//11
function Random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
    function mnojim(a,b){
        return Random(a,b) + Random(a,b);
    }
   console.log('11) ' + mnojim(0, 50));