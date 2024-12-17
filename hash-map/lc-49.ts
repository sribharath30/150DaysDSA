// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();
//   for (let s of strs) {
//     const key = s.split("").sort().join('');
//     const val = map.get(key);
//     if (val != undefined) {
//       map.set(key, [...val, s]);
//     } else {
//       map.set(key, [s]);
//     }
//   }
//   return [...map.values()];
// }

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let s of strs) {
    const hash = new Array(26).fill(0);
    for (let char of s) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      hash[index]++;
    }
    const key = hash.join(",");
    const val = map.get(key);
    if (val != undefined) {
      map.set(key, [...val, s]);
    } else {
      map.set(key, [s]);
    }
  }
  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
