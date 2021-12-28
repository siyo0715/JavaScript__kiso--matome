// prompt = 入力ができるアラート
// if if else else


// 比較演算子
// ==, === [等しい]
// A < B [AがBより小さい]
// A <= B [BがA以下]
// A >= B [AがBより大きい]
// A > B [BがA以下]
// A != B, A !==B AとBが等しくない


// const answer = prompt('1+1の答えは？');

// if (answer == 2) {
//     alert('正解!');
// } else if (answer == 1){
//     alert('まさかの掛け算！？');
// } else {
//     alert('残念...');
// }



// 問題を作る
const today = new Date();
const q1 = today.getMilliseconds();
const q2 = today.getSeconds();
let answer = prompt(`${q1}+${q2}の答えは？`);
const collect = q1 + q2;


if (answer == collect) {
    alert('正解!');
} else {
    alert('残念...');
}