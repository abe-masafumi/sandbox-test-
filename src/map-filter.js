// mapやfilterを使った配列の処理
// mapは配列の全てに同じ処理をして
// 配列を返すまたは結果を返す

const nameArr = ["田中", "山田", "あべ"];

// 今までのやり方
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i}番目は${nameArr[i]}です`);
}
// mapでのやり方
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, index) => {
  return console.log(`${index}番目は${name}です。`);
});

// filterの使い方
// 奇数を取り出す
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// あべ以外の人には”さん”をつける関数
const newNameArr2 = nameArr.map((name) => {
  if (name === "あべ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr2);
