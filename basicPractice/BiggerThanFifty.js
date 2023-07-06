//  Klavyeden Girilen 3 sayının ortalamasını hesaplayan ve bulunan sonuca göre sonuç 50 den büyük ise “geçti” değilse “kaldı” yazan javascript programını yazınız?

let num1 = parseInt(prompt("First number: "));
let num2 = parseInt(prompt("Second number: "));
let num3 = parseInt(prompt("Third number: "));

const avrg = (num1 + num2 + num3) / 3;

const result = (avrg > 50) ? "Passed!" : "Failed";

console.log(result);