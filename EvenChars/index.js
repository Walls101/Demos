function evenChars(string) {
    //keep coding!
    string.split("")
    let i = 1
    let ord = []
    if (string.length < 2 || string.length > 100){
        return"invalid string"
    }

    while(i < string.length){
       
        if (i % 2 == 1){
            ord.push(string[i])
        } 
        i++
    }
    console.log(ord)
    return(ord)
    }
    
    console.log(evenChars("a"))