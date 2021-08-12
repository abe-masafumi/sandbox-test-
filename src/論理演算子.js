// 論理演算子mの本当の意味を知ろう　 && ||

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("１か２はtrueになります");
}

if (flag1 && flag2) {
  console.log("１も２もtrueになります");
}

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
