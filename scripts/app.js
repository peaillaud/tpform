function verif(tel) {
    if ((tel.length == 10)&& (tel[0] == 0)&& (tel[1] == 7 || tel[1] == 6)) {
        console.log("true")
    } else {
        console.log("false")
    }
}