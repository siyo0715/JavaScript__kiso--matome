let age = prompt('年齢は？')

if (age >= 18) {
    alert('登録できます')
} else if (age >= 15) {
    alert('登録できませんが、近い将来お楽しみに！')
}else {
    alert('登録できません')
}