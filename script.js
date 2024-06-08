let start = 20;
let end = 30;
let step = 0.5;
let result = "";

for (let i = start; i <= end; i += step) {
    result += i + " ";
}

console.log(result.trim());