/* 3) Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.

Например: 441 => четыреста сорок один */


  const tenth = {
    1: 'один',
    2: 'два',
    3: 'три ',
    4: 'четыре ',
    5: 'пять ',
    6: 'шесть ',
    7: 'семь ',
    8: 'восемь ',
    9: 'девять ',
  };
  const doubleTenth = {
    10: 'десять',
    11: 'одиннадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семнадцать',
    18: 'восемнадцать',
    19: 'девятнадцать',
  };
  const belowHundred = {
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  };
  const hundred = {
    100: 'сто',
    200: 'двести',
    300: 'триста',
    400: 'четыреста',
    500: 'пятьсот',
    600: 'шестьсот',
    700: 'семьсот',
    800: 'восемьсот',
    900: 'девятьсот'
  };
  const resultArray = [

  ];

    function showResult(arg) {

        getNumberToText(arg);
        console.log(resultArray.join(' '));
        return;        
    };


    function getNumberToText(arg) {

        if ( arg < 0 || arg > 100_000 ) return console.log('Число вне диапозона от 0 до 100_000');
        
        if (arg === 0) return 'ноль';

        return result(arg);  

    };


    const result = (arg) => {

        if (arg === 0) return ''; 
    
        switch (true) {
    
            case (arg < 10):
                return resultArray.push(tenth[arg]);
    
            case (arg < 20):
                return resultArray.push(doubleTenth[arg]);
    
            case (arg < 100):
                let remainder = arg % 10;
                resultArray.push(belowHundred[Math.floor(arg / 10)])
                result(remainder);
                return;
    
            case (arg < 1000):
                resultArray.push(hundred[arg - (arg % 100)]);
                result(arg % 100);
                return;
    
            case (arg < 10_000):
                checkEnding(arg);
                return;
            
            case (arg < 20_000):
                resultArray.push(doubleTenth[Math.floor(arg / 1000)] + ' тысяч')
                result(arg % 1000);
                return;

            case (arg < 100_000):
                resultArray.push(belowHundred[Math.floor(arg / 10000)])
                result(arg % 10000);
                return;
    };
};

    function checkEnding (arg) {

        let stringThouthends = String(tenth[Math.floor(arg / 1000)]);        

        if (arg >= 1000 && arg < 2000) {             
            resultArray.push(stringThouthends.at(0) + 'дна ' + 'тысяча');
            result(arg % 1000);
            return;
        } if (arg >= 2000 && arg < 3000) {
            resultArray.push(stringThouthends.at(0) + 'ве ' + 'тысячи');
             result(arg % 1000);
             return;
        } if (arg >= 3000 && arg <= 5000) {
            resultArray.push(stringThouthends + 'тысячи');
            result(arg % 1000);
            return;
        } if (arg > 5000 && arg < 10_000) {
            resultArray.push(stringThouthends + 'тысяч')
            result(arg % 1000);
            return;
        }
    };
    
    showResult(9);
