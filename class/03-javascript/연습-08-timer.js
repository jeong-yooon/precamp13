setTimeout(function(){
    console.log("펑")
}, 3000)
// 1
// VM271:2 펑
setInterval(function(){
console.log("1초가 지났습니다")
},1000)
// 2
// 23VM597:2 1초가 지났습니다



setInterval(function(){
    if(time >= 0) {
        console.log(time)
            time = time - 1
    }
},1000)
// 1
// VM1171:3 10
// VM1171:3 9
// VM1171:3 8
// VM1171:3 7
// VM1171:3 6
// VM1171:3 5
// VM1171:3 4
// VM1171:3 3
// VM1171:3 2
// VM1171:3 1
// VM1171:3 0



let time = 180
// undefined
setInterval(function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2, "0")
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
}, 1000)