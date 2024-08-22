export default function groupAnagrams(strs: string[]): string[][] {
  // 🚩 立馬想到要組建一個map
  // key: 排序好的字串
  // value：array<值>

  let map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sortedStr = str.split("").sort().join("");
    let content = map.get(sortedStr) || [];
    map.set(sortedStr, [...content, str]);
  }

  // loop map=> 拿出每個key的結果
  // ? 怎麼拿map的key
  // 只能用for of
  // for in 會讀不到

  let result = [];
  for (let key of map.keys()) {
    result.push(map.get(key)!);
  }

  return result;
}
