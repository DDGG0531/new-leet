export default function longestConsecutive(nums: number[]): number {
  // 限制：O(n)
  // 🚩要找到最長的連續的數字
  // 手上有1就要找2，再找3，依此類推
  // 在陣列中找數字很慢，用Map or Set最快
  // 這題用Set，因為重複的數字不重要可排除

  let set = new Set(nums);

  // 遍歷這個set，每次都找出以該數字為首的連續數字長度
  let maxLength = 0;
  for (let num of set) {
    // ⚡️: 如果該數字在別條序列的中間，那就沒必要找了
    let lastNum = num - 1;
    if (set.has(lastNum)) {
      continue;
    }

    let currentLength = 1;
    let nextNum = num + 1;
    while (set.has(nextNum)) {
      currentLength++;
      nextNum++;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}
