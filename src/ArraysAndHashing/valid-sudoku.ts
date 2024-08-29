export default function isValidSudoku(board: string[][]): boolean {
  // 嘗試用O(n)的方式來解
  // 寫一個hash map，來記錄每個點的訊息
  // 例如：這個點本身的數字，這個點
  // 另一個map紀錄橫軸、縱軸的紀錄

  let rowMap = new Map<string, Set<string>>();
  let columnMap = new Map<string, Set<string>>();
  let zoneMap = new Map<string, Set<string>>();

  function findZone(x: number, y: number) {
    return `${Math.floor(x / 3) * 10 + Math.floor(y / 3)}`;
  }

  for (let x = 0; x <= 8; x++) {
    for (let y = 0; y <= 8; y++) {
      let nodeX = `${x}`;
      let nodeY = `${y}`;
      let nodeValue = board[x][y];
      let zone = findZone(x, y);

      let rowValue = rowMap.get(nodeY) || new Set<string>();
      let columnValue = columnMap.get(nodeX) || new Set<string>();
      let zoneValue = zoneMap.get(zone) || new Set<string>();

      if (
        rowValue.has(nodeValue) ||
        columnValue.has(nodeValue) ||
        zoneValue.has(nodeValue)
      ) {
        return false;
      }

      if (nodeValue !== ".") {
        rowMap.set(nodeY, rowValue.add(nodeValue));
        columnMap.set(nodeX, columnValue.add(nodeValue));
        zoneMap.set(zone, zoneValue.add(nodeValue));
      }
    }
  }
  return true;
}
