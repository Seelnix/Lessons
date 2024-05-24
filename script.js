let number = prompt("Будь ласка, введіть тризначне число:");

let digits = number.toString();

let allSame = digits[0] === digits[1] && digits[1] === digits[2];

let anySame = digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2];

alert(`Чи правда, що всі цифри однакові? ${allSame ? "Так" : "Ні"}`);
alert(`Чи є серед цифр цифри однакові? ${anySame ? "Так" : "Ні"}`);
