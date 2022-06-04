const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]
// undefined
    for(let n = 0; n < fruits.length; n++){
    
        console.log(fruits[n].number + " " + fruits[n].title)
    }
// VM3392:3 1 레드향
// VM3392:3 2 샤인머스켓
// VM3392:3 3 산청딸기
// VM3392:3 4 한라봉
// VM3392:3 5 사과
// VM3392:3 6 애플망고
// VM3392:3 7 딸기
// VM3392:3 8 천혜향
// VM3392:3 9 과일선물세트
// VM3392:3 10 귤
// undefined