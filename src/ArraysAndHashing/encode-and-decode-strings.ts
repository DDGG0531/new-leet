export function encode(strs: string[]) {
  // 🚩對這題有印象，當初沒答對
  // 要利用字段長度
  // 組成: 3_我是誰3_我在哪
  // 最後從最前面找到第一個_前面的數字，往後找文字內容即可

  let result = "";
  let specialCharater = "_";

  for (let i = 0; i < strs.length; i++) {
    let strLength = strs[i].length;
    result += strLength + specialCharater + strs[i];
  }

  return result;
}

export function decode(str: string) {
  let specialCharater = "_";
  let result = [];

  while (str) {
    // 從頭開始找，找出第一個specialCharater
    let specialCharaterIndex = str.indexOf(specialCharater);
    let count = Number(str.slice(0, specialCharaterIndex));
    let contentStart = specialCharaterIndex + 1;
    let contentEnd = specialCharaterIndex + count;
    let content = str.slice(contentStart, contentEnd + 1);
    // remove該部分
    str = str.slice(contentEnd + 1);
    result.push(content);
  }

  return result;
}
