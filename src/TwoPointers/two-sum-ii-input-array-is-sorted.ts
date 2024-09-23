export default function twoSum(numbers: number[], target: number): number[] {
  // 題目說numbers陣列是遞增數列，會想到把雙指標放在兩端
  // 答案太小，移動左指標
  // 答案太大，移動右指標
  // 直到找到答案
  // PS: 會懷疑左或右不能折返，這樣會不會漏掉答案呢？
  // 思考後是不會，因為如果答案在當前答案的外側，那在前面的步驟就該遇到了
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
