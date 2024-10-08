

/* 1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности) или массив (любой сложности и вложенности) или примитив.
 Функция должна вернуть то же самое что приняла аргументом, но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые). 
 Функция не должна использовать хак с JSON.parse(JSON.stringify(data)). */

 let intern = {

    name: 'Alex',
    age: 32,
    skills : {
        html: true,
        js: true,
         skills : {
        html: true,
        js: true,
    },
    },
    adress: [
        'Russia',
        'Taganrog',
    ]
  };
  
function deepCloneObjectOne(object) {
    return structuredClone(object);
};

function deepCloneObject(element) {

    if (typeof (element) !== 'object' || element === null ) return element;

    let cloneObject = Array.isArray(element) ? [] : {};

    for (key in element) {
      cloneObject[key] = deepCloneObject(element [key]);
    }
    return cloneObject;
};
  
const a = deepCloneObject(intern);
delete intern.name;
console.log(a);
console.log(intern);
console.log(a.skills === intern.skills);


/* 1) Написать рекурсивную функцию возведения в степень. На вход принимать число и его степень, на выходе выдавать рассчитанное значение. */


/* function getPow(a, n) {

if (n == 1 ) { 
    return a;
} else {
    return a * getPow(a, n - 1);
}
};

console.log(getPow(2,3));

 */



