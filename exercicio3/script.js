let array1 = [8, 9, 15, 3, 78, 45, 2, 1, 0];
let array2 = ["Disney", "Marvel", "DC", "Star Wars"];
let array3 = [1, 2, 3, "Disney", "Marvel", "DC", true, true];

let array1Copia = array1.slice();
let array2Copia = array2.slice();
let array3Copia = array3.slice();

array1.push(92);
console.log(array1);
console.log(array1Copia);

array2.pop();
console.log(array2);
console.log(array2Copia);

array3.splice(2,1);
console.log(array3);
console.log(array3Copia);
