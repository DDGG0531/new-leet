// version2: ai版本，細節處理得太美了，還很精簡
// 不需要轉陣列、直接在for迴圈中處理出Map
export function validAnagram(s: string, t: string): boolean {
  // 🚩 要看兩個字串的組成元素是否一樣
  // 立馬想到Map(快速比對某元素是否存在)

  // ⚡️：ai 提示，確實要先檢查長度最準
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    charCount.set(t[i], (charCount.get(t[i]) || 0) - 1);
  }

  for (let count of charCount.values()) {
    if (count !== 0) return false;
  }

  return true;
}

// version1：我流
// export function validAnagram(s: string, t: string): boolean {
//   // 🚩 要看兩個字串的組成元素是否一樣
//   // 立馬想到Map(快速比對某元素是否存在)

//   // ⚡️：ai 提示，確實要先檢查長度最準
//   if (s.length !== t.length) return false;

//   let sArray = s.split("");
//   let tArray = t.split("");
//   let sMap = new Map();

//   // 建立sMap，當作比較對象
//   for (let el of sArray) {
//     //⚡️：這個ai一行code真美
//     sMap.set(el, sMap.get(el) + 1 || 1);
//   }

//   for (let el of tArray) {
//     if (!sMap.has(el)) {
//       return false;
//     }

//     sMap.set(el, sMap.get(el) - 1);
//   }

//   // 符合條件：sMap的每個value都必須為0
//   for (let value of sMap.values()) {
//     if (value !== 0) {
//       return false;
//     }
//   }

//   return true;
// }
