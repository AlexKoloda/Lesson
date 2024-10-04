/* 3) Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр. */


 
 function doSpiralMatrix(n) {
    let matrix = [];
  
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
            row.push(j);
        }
        matrix.push(row);
    }

 
  return matrix;
 };



 console.log(doSpiralMatrix(3)); 
 
