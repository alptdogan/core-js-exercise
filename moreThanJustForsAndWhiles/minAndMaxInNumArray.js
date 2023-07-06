// numbers = [4, 15, 8, 23, 42, 16]; dizisindeki en küçük ve en büyük sayıyı bulun ve bu iki sayıyı,
// “min: 3, max: 21” şeklinde döndürün.

let numbers = [4, 15, 8, 23, 42, 16];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(max + " as max");
console.log(min + " as min");
