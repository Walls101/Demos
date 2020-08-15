function cockroachSpeed(s) {
    //Good Luck!

    let spd = s
    spd = spd * 100000
    spd = spd / 3600

    console.log(spd)
    return Math.floor(spd)
  }

  cockroachSpeed(1.08)