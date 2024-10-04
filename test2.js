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

        if (isCheckFirstElem && isCheckLastElem) {
            acc.push(true);
        } else {
            acc.push(false)
        }
        return acc;
    }, [])
}

checkString(["asd", "afffd", "cc", "kk"]); */

