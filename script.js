let number = parseInt(prompt("Введіть ціле число: "));

function isPrime(num) {
  if (num <= 1) {
    return false; // Числа, менші або рівні 1, не є простими
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Якщо знайдений дільник, то число не є простим
    }
  }
  
  return true; // Якщо жодного дільника не знайдено, число є простим
}

if (isPrime(number)) {
  console.log(`${number} є простим числом`);
} else {
  console.log(`${number} не є простим числом`);
}
