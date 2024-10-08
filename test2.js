/*
2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. 
Если у одной строки с последующей совпадают первый и последний символы, то true. Например ["asd", "afffd", "cc", "kk"]. 
Для такого массива функция должна вернуть [true, false, false] */





/* function checkString(array) {

    return array.reduce( function(acc, val, index, array) {

        if (!array[index + 1]) {
            return acc;
        }

        const isCheckFirstElem = (val.at(0) === array[index + 1].at(0));
        const isCheckLastElem = (val.at(-1) === array[index + 1].at(-1));
        // true | false
         acc.push(isCheckFirstElem && isCheckLastElem)

        // if (isCheckFirstElem && isCheckLastElem) {
        //     acc.push(true);
        // } else {
        //     acc.push(false)
        // }
        return acc;
    }, [])
}

checkString(["asd", "afffd", "cc", "kk"]); */


/* 
2) Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.

Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */


/* function getFlat(array) {

  let resArr = [];

  array.forEach(element => {

    if(Array.isArray(element)) {
        resArr = resArr.concat(getFlat(element))
    } else {
        resArr.push(element);
    }
  });
  return resArr;
}

console.log(
getFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log(getFlat('string')) */