export default function isPalindrome(s: string): boolean {
  // 🚩想一下就會冒出，同時比較兩端點的念頭 aka Two pointer
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer <= rightPointer) {
    // ⚡️ 沒想到regex
    let alphanumericRegex = /^[a-zA-Z0-9]$/;
    let isLeftAlphanumeric = alphanumericRegex.test(s[leftPointer]);
    let isRightAlphanumeric = alphanumericRegex.test(s[rightPointer]);
    let skipCompare = !isLeftAlphanumeric || !isRightAlphanumeric;

    if (skipCompare) {
      if (!isLeftAlphanumeric) {
        leftPointer++;
      }
      if (!isRightAlphanumeric) {
        rightPointer--;
      }
      continue;
    }

    if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return true;
}
