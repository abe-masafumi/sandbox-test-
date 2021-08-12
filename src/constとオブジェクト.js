// ----------------------オブジェクトを定義するときはconstでプロパティーを変更できる
const val4 = {
  name: "masa",
  age: 27
};

val4.name = "まさ";
val4.addres = "hukuoka";
console.log(val4);

// ----------------------配列を定義するときはconstでプロパティーを変更できる
const val5 = ["dog", "cat"];
val5.push("monky");
val5[0] = "aaa";
console.log(val5);
