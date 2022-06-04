if(1+1===2){
    console.log("정답입니다!")
} else{
    console.log("틀렸습니다!")
}
// VM398:2 정답입니다!
undefined
if(true){
    console.log("정답입니다!")
} else{
    console.log("틀렸습니다!")
}
// VM421:2 정답입니다!
undefined
if(1+1===3){
    console.log("정답입니다!")
} else{
    console.log("틀렸습니다!")
}
// VM435:4 틀렸습니다!
// undefined
const pw1 = "123"
// undefined
const pw2 = "345"
// undefined
if(pw1 === pw2){
    alert("비밀번호가 일치합니다")
} else{
    alert("예?")
}

// --------------------------------------------------------------

const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if(profile.age>=20){
    console.log("성인입니다")
} else if(19>=profile.age && profile.age>=8){
    console.log("학생입니다")
} else{
    console.log("어린이입니다")
}
// VM1647:4 학생입니다