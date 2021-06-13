const values = {
    cs:0,
    s:0,
    noDoplication: false,
    timer: document.getElementById("timer"),
    Timer: "I am declared"
}
//functions
const start = () => {
    if (values.noDoplication) {
        return;
    } else {
        values.noDoplication = true;
        values.Timer = setInterval(function myTimer() {
            if (values.cs < 100){
                if (values.cs <= 9) {
                    if (values.s <=9){
                        values.timer.textContent = `0${values.s} : 0${values.cs}`
                    } else {
                        values.timer.textContent = `${values.s} : 0${values.cs}`
                    }
                } else {
                    if (values.s <=9){
                        values.timer.textContent = `0${values.s} : ${values.cs}`
                    } else {
                        values.timer.textContent = `${values.s} : ${values.cs}`
                    }
                }
                values.cs++
            } else {
                values.cs = 0;
                values.s++
                if (values.cs <= 9) {
                    if (values.s <=9 ) {
                        values.timer.textContent = `0${values.s} : 0${values.cs}`
                    } else {
                        values.timer.textContent = `${values.s} : 0${values.cs}`
                    }
                } else {
                    if (values.s <= 9) {
                        values.timer.textContent = `0${values.s} : ${values.cs}`
                    } else {
                        values.timer.textContent = `0${values.s} : ${values.cs}`
                    }
                }
            }
        }, 10);
    }
}
document.getElementById("startButton").addEventListener("click", start);
const stop = () => {
    clearInterval(values.Timer);
    values.noDoplication = false;
}
document.getElementById("stopButton").addEventListener("click", stop);
const reset = () => {
    clearInterval(values.Timer);
    values.noDoplication = false;
    values.cs = 0;
    values.s  = 0;
    values.m  = 0;
    values.timer.textContent = `0${values.s} : 0${values.cs}`
}
document.getElementById("resetButton").addEventListener("click", reset);
