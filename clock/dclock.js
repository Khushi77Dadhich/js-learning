function updating() {
    let d = new Date()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let second = d.getSeconds()

    document.getElementById('input').innerHTML = hour + ":" + minute + ":" + second;
}
setInterval(updating, 1000);