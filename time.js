// 変数はいくつでも作れる

// -------------------------------------------------------
// document.write(now.getSeconds()); = 現在の秒数を表示
// 機能を纏めたものをオブジェクトと考える
// new Date = 新しいDateというオブジェクト
// 新しいDateというオブジェクトをlet nowに代入
// -------------------------------------------------------

// -----------------------↓↓↓↓↓↓--------------------------

// let now = new Date();
// document.write(now.getSeconds());


// ________________________________________________________


// -----------------------------------------------------------
// 分数を取得↓
// -----------------------------------------------------------

// let now = new Date();
// document.write(now.getMinutes());

// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿


// ------------------------------------------------------------------
// document.write(now.getHours()); = 時間を取得↓
// document.write(firstday.getHours()); = 2021-01-01 00:00:00を取得
// ------------------------------------------------------------------

// let now = new Date();
// let firstday = new Date('2021-01-01 00:00:00');
// document.write(now.getHours());
// document.write('<br>')
// document.write(firstday.getHours());


// 現在の時間を表示

const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

document.write(hours + ':' + minutes + ':' + seconds);