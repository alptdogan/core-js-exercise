// let numbers = [4, 15, 8, 23, 42, 16]; olarak verilen sayı dizisini küçükten büyüğe sıralayın ve ardından her sayının karesini alarak yeni bir dizi oluşturun.

let numbers = [4, 15, 8, 23, 42, 16];

let sortedandSquared = numbers.sort((a, b) => a - b).map(x => Math.pow(x, 2));

console.log(sortedandSquared);
