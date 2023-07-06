// actually reverted the sentence here.

let sentence = "Hello World!";

let revertedSentence = "";

for (let i = sentence.length - 1; i >= 0; i--) {
    revertedSentence += sentence.charAt(i);
}

console.log(revertedSentence);