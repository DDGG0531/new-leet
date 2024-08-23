export default function topKFrequent(nums: number[], k: number): number[] {
  // 取得前K多的數字
  // 🚩 立馬想到用Map
  // key: 次數
  // value: 數字陣列
  // 建立好map後，拿出key做排序，把前Ｋ大的value做回傳
  // 🧐 思考了一下，這個map不好建立，某個數字數量增加時，要做的步驟太繁瑣
  // 🚩 想法二：既然K是定植，那不如紀錄要進入前K，最少要有幾個
  // 掃過一輪建立每個數有幾個，同時紀錄最少的個數
  // 再掃一輪，這一回做比較拿出結果
  // 🧐 總覺得哪裡不對，直接看答案
  // 原來要用陣列來充當排序工具

  let map = new Map<number, number>();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let array = Array.from({ length: nums.length + 1 }, () => [] as number[]);

  for (let key of map.keys()) {
    let value = map.get(key)!;
    array[value].push(key);
  }

  let result = [] as number[];

  for (let i = array.length - 1; i >= 0 && k > 0; i--) {
    if (array[i].length) {
      result.push(...array[i]);
      k -= array[i].length;
    }
  }

  return result;
}
