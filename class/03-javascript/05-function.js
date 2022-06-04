// function pressedBtn() {

//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("auth").innerText = token
// }


let pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token
    document.getElementById("auth").style.color = "#" + token
}

// function hello(name){
//     alert( name + "님 안녕하세요")
// }
// undefined
// let pf = "김현기"
// undefined
// hello(pf)
// undefined
// hello("최정윤")
// undefined

// function hello(name) {
//     return name + "님 안녕하세요"
// }
// undefined
// console.log("성시윤님 안녕하세요")
// VM693:1 성시윤님 안녕하세요
// undefined
// hello("최정윤")
// '최정윤님 안녕하세요'