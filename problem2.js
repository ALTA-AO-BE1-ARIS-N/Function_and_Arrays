

function joinArrayRemoveDuplicate(arrA, arrB) {
    const combinedArray = [...arrA, ...arrB];
  
    // Set untuk menghapus duplikat
    const uniqueArray = [...new Set(combinedArray)];
  
    return uniqueArray;
  }
  
  const input1 = ["apel", "anggur"];{
  const input2 = ["lemon", "leci", "nanas"];
  
  const output1 = joinArrayRemoveDuplicate(input1, input2);
  console.log(output1); // ["apel", "anggur", "lemon", "leci", "nanas"]
  
  const input3 = ["samsung", "apple"];
  const input4 = ["apple", "sony", "xiaomi"];
  
  const output2 = joinArrayRemoveDuplicate(input3, input4);
  console.log(output2); // ["samsung", "apple", "sony", "xiaomi"]
  
  const input5 = ["football", "basketball"];
  const input6 = ["basketball", "football"];

  const output3 = joinArrayRemoveDuplicate(input5, input6);
  console.log(output3); // [“football”, “basketball”]
  }

