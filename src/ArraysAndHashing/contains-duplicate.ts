export function containsDuplicate(nums: number[]): boolean {
  // 🚩確認陣列是否有重複
  // 立馬想到set的長度vs原陣列長度

  let set = new Set(nums);
  let result = set.size !== nums.length;
  return result;
}
