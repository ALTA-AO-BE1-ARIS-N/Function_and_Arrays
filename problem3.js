function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
  
    let currentIndex = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[currentIndex]) {
        currentIndex++;
        nums[currentIndex] = nums[i];
      }
    }
  
    return currentIndex + 1;
  }
  
  const input1 = [2, 3, 3, 3, 6, 9, 9];
  const output1 = removeDuplicates(input1);
  console.log(output1); // Output: 4
  
  const input2 = [2, 3, 4, 5, 6, 9, 9];
  const output2 = removeDuplicates(input2);
  console.log(output2); // Output: 6

  const input3 = [2, 2, 2, 11];
  const output3 = removeDuplicates(input1);
  console.log(output3); // Output: 2

  const input4 = [1, 1, 2, 2, 3, 3, 4, 4];
  const output4 = removeDuplicates(input1);
  console.log(output4); // Output: 4

  const input5 = [1, 2, 3, 11, 11];
  const output5 = removeDuplicates(input1);
  console.log(output5); // Output: 4