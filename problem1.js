// problem 1
// Exponentiation
// menggunakan pendekatan rekursif

function exponentiation(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
  
    if (n % 2 === 0) {
      const halfExp = exponentiation(x, n / 2);
      return halfExp * halfExp;
    } else {
      const halfExp = exponentiation(x, (n - 1) / 2);
      return x * halfExp * halfExp;
    }
  }
  
  console.log(exponentiation(2, 3)) // 8
  console.log(exponentiation(2, 12)) // 4096
  console.log(exponentiation(7, 2)) // 49
  console.log(exponentiation(9, 3)) // 729
  console.log(exponentiation(22, 5)) // 5153632
  console.log(exponentiation(1996, 0)) // 1
  