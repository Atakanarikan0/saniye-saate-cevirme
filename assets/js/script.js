let question = Number(prompt('Saniye değeri giriniz :'));

let hour = Math.floor((question / 3600));
let minute = Math.floor((question % 3600) / 60);
let second = Math.floor((question % 3600) % 60);


alert(hour + ' Saat ' + minute + ' Dakika ' + second + ' Saniye')