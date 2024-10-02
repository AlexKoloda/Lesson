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