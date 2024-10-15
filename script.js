// 2.1 ОБЪЕКТЫ //

/* !-- Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

/*   let user = {};
  user.name  = 'Jhon';
  user.surname = 'Smith';
  user.name = 'Pete';
  delete user.name; */

/* !-- Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. */

/*   let schedule = {};

  alert( isEmpty(schedule) ); // true

  schedule["8:30"] = "get up";

  alert( isEmpty(schedule) ); // false

  function isEmpty(obj) {
    for (let prop in obj) {
      return false;
    }
      return true;
  }

 */

/* !-- Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. */

/*   let salaries = {
    John: 0,
    Ann: 0,
    Pete: 0
  }

  function calcSum(obj) {
    let result = 0;

    for (prop in obj) {
        result += obj[prop];
    }
    return result;
  }

  calcSum(salaries);
 */

/* !-- Cоздайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. */

/*   let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {

    for (prop in obj) {
       if (typeof obj[prop] == 'number')
        obj[prop] *= 2;
    }
  };

  multiplyNumeric(menu); */

/* !-- Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */

/* let calculator = {
    a: 0,
    b: 0,

    read: function () {
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    },

    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

/* !-- Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */

/*   function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    }
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
  }

  let calculator = new Calculator();
  calculator.read();

  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );
    */

/* Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value. */
/*
  function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', '0');
   };
}

  let accumulator = new Accumulator(1); // начальное значение 1

  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

  alert(accumulator.value) */

// 5.2 ЧИСЛА //

/* Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму. */

/*   let number1 = prompt('Первое число?', '0');
  let number2 = prompt('Второе число?', '0');

  alert(Number(number1) + Number(number2)); */

/* !-- Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт. */

/* let number = prompt ('Введите число', '');




function readNumber() {

    if ( number == '' || number == null) {
        alert ('Отмена');
     }

    while (!isFinite(number)) {
    number = prompt ('Введите число', '');
 }
}

readNumber(); */

// 5.3 СТРОКИ //

/* !-- Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. */

/* function ucFirst(str) {
  return (str.length > 0) ? str[0].toUpperCase() + str.slice(1) : '';
}
 */

/* !-- Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру: */

/*   function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
  } */

/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. */

/*   function truncate(str, maxlength) {
      return ( str.length > maxlength ) ? str.substr(0,[maxlength - 1]) + "…" : str;
     } */

/* Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.   */

/* function extractCurrencyValue(str) {
    return Number(str.slice(1))
}
 */

// 5.4 МАССИВЫ //

/* !-- Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива. */

/* let styles = ['Джаз', 'Блюз',]

styles.push('Рок-н-Ролл');
sstyles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift('Рэп','Регги')

 */

/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива. */

/* function sumInput() {
    let arr = [];
    let result = 0;
    while (true) {
        let number = +prompt('Введите число', '')

        if (number == '' || number == null) {
            break;
        } else {
            arr.push(number)
        }
    }

    for (key of arr) {
        result += key;
    }
    alert(result);
}

sumInput() */

/* Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму. */

/* function getMaxSubSum(arr) {
  let currentKey;

  for ( key in arr) {
    currentKey = key; 
    key++;
    if (currentKey === key) {
      console.log(key);
    }
  }


}







console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5 */

/* !-- Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». */

/*   function camelize(str) {

    return str.split('-').map (( word, index ) => {
    return index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    }).join('')

  }
  camelize("background-color"); */

/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и
возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный. */
/* let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a, b) {
    let newArr = [];

    arr.forEach(element => {
      if( element >= a && element <= b) {
        newArr.push(element);
      }
    });

    return newArr;
}
 */

/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать. */

/* let arr = [5, 3, 8, 1];


filterRangeInPlace(arr, 1, 4);

function filterRangeInPlace (arr, a, b) {

for ( let element of arr ) {
  if ( !(element <= b && element >= a) ) {

    const index = arr.indexOf(element);

    arr.splice(index, 1)
}
}
}
console.log(arr); */

/* !-- Сортировать в порядке по убыванию
 */
/*
let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log( arr ); // 8, 5, 2, 1, -10 */

/* !-- У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

/* let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);


function copySorted(arr) {
  return arr.slice().sort();
}

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */

/* !-- У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша */

/* ! --- У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname. */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( user => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id,
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин */

/* Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
return arr.reduce((sum, user, ) => (sum + user.age),0) / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

/* ! -- Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */

/* let strings = ["кришна", "кришна", "харе", "харе", \\ Решение только с использованием методов массива
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {

  let resaultArr = [];

  for (let string of arr) {

    if (!resaultArr.includes(string,0)) {
       resaultArr.push(string)
    }
  }

  return resaultArr;
}


alert(unique(strings)); // кришна, харе, :-O */

/* function unique(arr) { // Решение коллег интернов
let newArr = {};

arr.forEach(element => {
newArr[element]
if ( !newArr[element]) {
  newArr[element] = element;
}
});
Object.entries(newArr).flat();
}

alert( unique(strings) ); // кришна, харе, :-O
 */

/* Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений. */

/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


function groupById(arr) {

  return arr.reduce(function (obj, user){
      obj[user.id] = user;
      return obj;
  },{})
}

let usersById = groupById(users); */

// 5.9 OBJECT.KEYS, VALUES, ENTRIES //

/* !-- Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of. */

/* let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(salaries) {
  let result = 0;

  for ( let salary of Object.values(salaries)) {
    result += salary;
  }

  return result;

}
alert( sumSalaries(salaries) ); // 650 */

/* !-- Напишите функцию count(obj), которая возвращает количество свойств объекта: */

/* let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  let result = 0;

  for ( let key of Object.keys(obj)) { //  Мое решение
    result++;
  }

  return result;
}

alert( count(user) ); // 2 */

/* function count(obj) {
  return Object.keys(obj).length;  // Решение из учебника
} */

// 5.10 ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ //

/* !-- Напишите деструктурирующее присваивание, которое: */

/* let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
 */

/* !-- Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника. */

/* let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for ( let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
  }

  topSalary(); */

// 5.11 ДАТА И ВРЕМЯ //

/* !--  Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная. */

/* let date = new Date (2021, 1, 20, 3, 12);
alert (date); */

/* !-- Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */

/* function getWeekDay(date) {
    let days = [
     "ВС",
     "ПН",
     "ВТ",
     "СР",
     "ЧТ",
     "ПТ",
     "СБ",
    ]
    return days[date.getDay()];
 } */

/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

/* function getLocalDay(date) {

let day = date.getDay();

  if (day == 0) { /
    day = 7;
  }

  return day;
} */

// 5.12 ФОРМАТ JSON, МЕТОД TOJSON //

/* !-- Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную. */

/* let user = {
  name: "Василий Иванович",
  age: 35
};


JSON.stringify(user)

let user2 = JSON.parse(JSON.stringify(user)); */

// 6.1 РЕКУРСИЯ И СТЕК //

/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. */
/* 
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
 */

/* function sumTo(n) { 
  let res = 0;
  for ( let i=0; i<=n; i++) { // Решение с использованием цикла
    res +=i;
  }
  return res;
 }
*/

/* alert( sumTo(100) ); // 5050 */

/* function sumTo(n) {    // Решение с использованием рекусрии
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n-1)
  }
} */

/*   function sumTo(n) {
    return n * (n + 1) / 2;  // Решение с использованем формулы.
  }
   */

/* ! -- Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию. */

/* function factorial(n) {

  if (n === 1 ) {
    return 1;
  } else {
    return n * factorial(n-1);
  }

}
alert( factorial(5) ); // 120 */

/* !-- Напишите функцию fib(n) которая возвращает n-е число Фибоначчи. */

/* function fib(n) {
 
  if ( n <= 1 ) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}


alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757 */

/* !-- Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.*/

/* function sum(a) {
 
return  function(b) {
  return a + b;
 }

}


console.log(sum(1)(2)); */

/* function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert(i) // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д. */

// 6.8 ПЛАНИРОВАНИЕ: SETTIMEOUT И SETINTERVAL //

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
 */

/* function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
 */
/*  printNumbers(1,4)

 function printNumbers(from, to) {
  let current = from;

  setTimeout ( function go(){
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    } current++; 
  }) 
 } */

/* Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

Класс должен поддерживать свойства message, name и stack. */

/* 

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'Format name';
  }

}
let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError) */

// 11.2 ПРОМИСЫ //

/* !-- Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then: */

/* function delay(ms) {
 
  let timer = new Promise ( resolve =>  {
  return setTimeout(()=> resolve, ms)
  },) 
  return timer;
}

delay(3000).then(() => alert('выполнилось через 3 секунды')); */

/* !-- Переписать на промисы функуцию  */

/* function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Привет, мир!");
  });
}

function showCircle(cx, cy, radius) {

  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise (resolve => {
    setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
    

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
})
}


showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
 */

/* async function f() {
  return 1;
}

let res = f();
console.log(typeof(res));
 */

/* ! -- Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch: */
/* 
function loadJson(url) {     // Исходный код
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); / */

/*   async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
    let json = await response.json();
        } else {
          throw new Error(response.status);
        }
      
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404 */

//    14.1 PROXY //

/* !-- Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности. */

/* let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
     get(target, prop, receiver) {
      if ( prop in target) {
        return Reflect.get(target, prop, receiver );
      } else {
        throw new ReferenceError(`Свойство не существует: ${prop}`)
      }
     } 
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует */

/* function switchItUp(number){
  let words = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',  
  ]
    
    return words[number-1];
    
  }

  console.log(switchItUp(5),); */

/* 
  function invert(array) {
    let invertArray = []; 
    for ( key of array) {
    invertArray.push(-key);
    }
    return invertArray;
  }

  console.log(invert([1,2,3,4,5])); */

//  БРАУЗЕР: ДОКУМЕНТ, СОБЫТИЯ, ИНТЕРФЕЙСЫ  //

// получаем координаты элемента в контексте документа

/* function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
} */

/* !-- Спрячьте сообщения с помощью делегирования --! */

// container.onclick = function (event) {
//   if (event.target.className != "remove-button") return;

//   let pane = event.target.closest(".pane");
//   pane.remove();
// };

/* Создайте дерево, которое по клику на заголовок скрывает-показывает потомков: */

/* const list = document.querySelector(".tree");

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener("click", (event) => {
  if (event.target.tagName !== "SPAN") {
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
}); */

/* Сортировка таблицы // TODO Сделать на выходных*/

// const table = document.getElementById("grid");

// table.addEventListener("click", (event) => {
//   let tbody = grid.querySelector("tbody");

//   if (event.target.dataset.type === "number") {
//     let arrAge = Array.from(tbody.rows);
//     console.log(arrAge);
//   }
// });

/* !-- Напишите JS-код, реализующий поведение «подсказка». */

let toolTip;
const buttonTooltip = document.querySelector(".button-sumbit");

buttonTooltip.addEventListener("mouseover", (e) => {
  let target = e.target;
  let toolTipHtml = target.dataset.tooltip;
  if (!toolTipHtml) {
    return;
  }

  toolTipElem = document.createElement("div");
  toolTipElem.classList.add("tooltip");
  toolTipElem.innerHTML = toolTipHtml;
  document.body.append(toolTipElem);

  let cords = target.getBoundingClientRect();

  let left = cords.left + (target.offsetWidth - toolTipElem.offsetWidth) / 2;

  if (left < 0) left = 0;
  let top = cords.top - toolTipElem.offsetHeight - 5;

  if (top < 0) {
    top = cords.top + target.offsetHeight + 5;
  }

  toolTipElem.style.left = left + "px";
  toolTipElem.style.top = top + "px";
});

buttonTooltip.addEventListener("mouseout", (e) => {
  if (toolTipElem) {
    toolTipElem.remove();
    toolTipElem = null;
  }
});

/*  !-- Сделайте так, чтобы при клике на ссылки внутри элемента id="contents"
 пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. */

let contents = document.getElementById("contents");

contents.addEventListener("click", (e) => {
  let elem = e.target.closest("a");

  if (elem === null) {
    return;
  }

  if (!elem.getAttribute("href")) {
    e.preventDefault();
    elem = elem.parentNode;
  }

  let res = confirm(`Перейти на ${elem.getAttribute("href")} ?`);

  if (res === false) {
    e.preventDefault();
    return;
  }
});

/* Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах. */

const list = document.getElementById("ul");

list.addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") {
    return;
  }

  if (event.ctrlKey || event.metaKey) {
    addSelect(event.target);
    return;
  }

  singleSelect(event.target);
});

function addSelect(li) {
  li.classList.toggle("selected");
}

function singleSelect(li) {
  let selected = ul.querySelectorAll(".selected");
  for (let elem of selected) {
    if( elem !== li) {
    elem.classList.remove("selected");
    }
  }
  li.classList.toggle("selected");
  return;
}

ul.onmousedown = function () {
  return false;
};

/* !-- Создайте слайдер:
Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. 
При этом бегунок должен останавливаться чётко в нужном конце полосы.
При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя). */

const thumb = document.querySelector(".thumb");



thumb.addEventListener('mousedown', (event) => {
  event.preventDefault();

  let shiftX = event.clientX + thumb.getBoundingClientRect().left;;
  
  console.log(shiftX);
  

  moveAT(event.pageX);

  function moveAT(pageX) {
    thumb.style.left = pageX - shiftX + 'px';
  };

  document.body.addEventListener('mousemove', mouseSlide);

  function mouseSlide(event) {
    moveAT(event.pageX);
  };

  document.body.addEventListener ('mouseup', () => {
      document.body.removeEventListener('mousemove', mouseSlide);
  })
});
 
