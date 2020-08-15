function pluck(arr, name) {
    let i = 0
    let pick = []
    while (i < arr.length){
        console.log(arr[i][name])
        pick.push(arr[i][name])
        i++
    }
    console.log(pick)
    return pick
}

pluck([{a:1}, {a:3}, {a:21}, {b:0}], "a")
