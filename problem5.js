// Jika jumlah elemen genap, median adalah rata-rata dua nilai tengah
// Jika jumlah elemen ganjil, median adalah nilai tengah
function calculateMeanMedian(numbers) {
    const n = numbers.length;
  
    //rumus mean (rata-rata)
    const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
  
    //rumus median
    let median;
    if (n % 2 === 0) {
      const midIndex = n / 2;
      median = (numbers[midIndex - 1] + numbers[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(n / 2);
      median = numbers[midIndex];
    }
  
    return { mean: mean.toFixed(1), median: median.toFixed(1) };
  }
  

  const input1 = [1, 2, 3, 4];{
  const result1 = calculateMeanMedian(input1);
  console.log(result1); //mean: 2.5, median: 2.5

  const input2 = [1, 2, 3, 4, 5];
  const result2 = calculateMeanMedian(input2);
  console.log(result2); //mean: 3, median: 3

  const input3 = [7, 8, 9, 13, 15];
  const result3 = calculateMeanMedian(input3);
  console.log(result3); //mean: 10.4, median: 9

  const input4 = [10, 20, 30, 40, 50];
  const result4 = calculateMeanMedian(input4);
  console.log(result4); //mean: 30, median: 30

  const input5 = [15, 20, 30, 60, 120];
  const result5 = calculateMeanMedian(input5);
  console.log(result5); //mean: 49, median: 30
  }