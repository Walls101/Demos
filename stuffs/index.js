function cockroachSpeed() {
    //Good Luck!
    let spd = document.getElementById("speed").value
    spd = spd * 100000
    spd = spd / 3600

    console.log(spd)
    
    document.getElementById("ans").innerHTML = spd
    return Math.floor(spd)
  }