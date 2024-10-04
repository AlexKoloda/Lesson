

/* 1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности) или массив (любой сложности и вложенности) или примитив.
 Функция должна вернуть то же самое что приняла аргументом, но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые). 
 Функция не должна использовать хак с JSON.parse(JSON.stringify(data)). */

/*   let intern = {

    name: 'Alex',
    age: 32,
    skills : {
        html: true,
        js: true,
    },
  };

function deepCloneObjectOne(object) {
    return structuredClone(object);
};

function deepCloneObject(object) {

    let cloneObject;
    let prop;

    if (typeof object !== 'object' || typeof object === null) return object;

    cloneObject = Array.isArray(object) ? [] : {};

    for (key in object) {

        prop = object[key];

        cloneObject[key] = deepCloneObject(prop);
    }

    return cloneObject;
};

  
deepCloneObject(intern);
 */

/* 1) Написать рекурсивную функцию возведения в степень. На вход принимать число и его степень, на выходе выдавать рассчитанное значение. */


/* function getPow(a, n) {

if (n == 1 ) { 
    return a;
} else {
    return a * getPow(a, n - 1);
}
}

console.log(getPow(2,3));

 */



