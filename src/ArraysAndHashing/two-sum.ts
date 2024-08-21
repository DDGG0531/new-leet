export function twoSum(nums: number[], target: number): number[] {
  // 🚩 目的是要找到兩個index，那兩個位置的數值相加會等於target
  // 立馬想到 Map 把數值當作key，把index當作value
  // 迭代，走到某數字時，可以確定缺多少，有沒有在map裡面

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    let diff = target - el;
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    // ⚡️放到這邊才設定，避免拿到自己
    map.set(el, i);
  }
  return [];
}
