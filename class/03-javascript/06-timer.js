// let time = 180

// let pressedBtn = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("auth").innerText = token

//     setInterval(function(){
//         if(time > 0){
//             const min = String(Math.floor(time/60)).padStart(2, "0")
//             const sec = String(time % 60).padStart(2, "0")
//             document.getElementById("countdown_min").innerText = min;
//             document.getElementById("countdown_sec").innerText = sec;
//             time = time - 1
//         }

//         if(time == 0){
//             document.getElementById("success").style.color = white;
//             function pressedBtn2 () {
//                 undefined
//             }
//         }

//     }, 1000)
// }

let isStarted = false;
// let time = 180

function pressedBtn() {

    if(isStarted === false){

        isStarted = true;

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token

        let time = 60
        let timer = null

        timer = setInterval(function(){
            if(time >= 0){
                // const min = String(Math.floor(time/60)).padStart(2, "0")
                // const sec = String(time % 60).padStart(2, "0")
                // document.getElementById("countdown_min").innerText = min;
                // document.getElementById("countdown_sec").innerText = sec;
                document.getElementById("countdown").innerText = time;
                time = time - 1
            } else{
                document.getElementById("success").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }

        }, 1000)

    } else{
        alert("타이머가 이미 동작중입니다")
    }
}