const hours = document.querySelector('#h')
const mins = document.querySelector('#m')
const seconds = document.querySelector('#sec')

function time(){
    var d = new Date();
    const hour = d.getHours()
    const min = d.getMinutes()
    let second = d.getSeconds()
    second = timechecker(second)
    hours.style.transform = `rotate(${(hour * 30) + 180}deg)`
    mins.style.transform = `rotate(${(min * 6) + 180}deg)`
    seconds.style.transform = `rotate(${(second * 6) + 180}deg)`
}

setInterval(time,1000)


function timechecker(second){
    if(second < 10){ second = "0"+second}
    return second
}