function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    let left = 0;
    let right = cleanedStr.length - 1;
  
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  console.log(isPalindrome("civic"))       // true
  console.log(isPalindrome("katak"))       // true
  console.log(isPalindrome("kasur rusak")) // true
  console.log(isPalindrome("kupu-kupu"))   // false
  console.log(isPalindrome("lion"))        // false
