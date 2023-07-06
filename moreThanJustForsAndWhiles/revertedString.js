// let sentence = "Merhaba Dünya!"; şeklinde bir cümle verilmiştir. Bu cümleyi tersine çevirin ve kelimeler arasındaki boşlukları “_” karakteri ile değiştirin.

let sentence = "Hello World!";

let revertedSentence = sentence.split(" ").reverse().join("_");

console.log(revertedSentence);