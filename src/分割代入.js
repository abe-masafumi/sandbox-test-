// ----------------------分割代入
// オブジェクトの場合
const myProfile = {
  name: "masa",
  age: 28
};

const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message3);

const { name, age } = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

// 配列の場合
const myprofile2 = ["masa", 27];
const message5 = `名前は${myprofile2[0]}です。年齢は${myprofile2[1]}です。`;
console.log(message5);

const [name1, age1] = myprofile2;
const message6 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message6);
