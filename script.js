let exchangeRate = 26;
let result = "";

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let costInHryvnias = dollars * exchangeRate;
    result += `Вартість ${dollars} доларів: ${costInHryvnias} гривень\n`;
}

console.log(result);