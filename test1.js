

/* 1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности) или массив (любой сложности и вложенности) или примитив.
 Функция должна вернуть то же самое что приняла аргументом, но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые). 
 Функция не должна использовать хак с JSON.parse(JSON.stringify(data)). */

  let intern = {

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







