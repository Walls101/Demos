// https://script.google.com/macros/s/AKfycbxbybQCyfbvpD782BiXEu-hf1OtWTtaaq3ZwL7pCQWvfu-0Gms/exec

function reviewinfo(){
    document.getElementById("modal-fname").innerHTML = document.getElementById("fname").value
    document.getElementById("modal-lname").innerHTML = document.getElementById("lname").value
    document.getElementById("modal-address").innerHTML = document.getElementById("address").value
    document.getElementById("modal-dob").innerHTML = document.getElementById("dob").value
    document.getElementById("modal-telenum").innerHTML = document.getElementById("telenum").value
}

function handlesubmit(){
    let obj={}
    obj.fname = document.getElementById("fname").value 
    obj.lname = document.getElementById("lname").value
    obj.address = document.getElementById("address").value
    obj.dob = document.getElementById("dob").value
    obj.telenum = document.getElementById("telenum").value
    obj.newpt = true

    let tag= document.createElement("script")
    tag.src = "https://script.google.com/macros/s/AKfycbxbybQCyfbvpD782BiXEu-hf1OtWTtaaq3ZwL7pCQWvfu-0Gms/exec?data="+encodeURI(JSON.stringify(obj))
    document.getElementsByTagName("body")[0].appendChild(tag)
    // console.log(tag, typeof tag)
}

function oldinfo(){
    document.getElementById("modal-fname").innerHTML = document.getElementById("fname").value
    document.getElementById("modal-lname").innerHTML = document.getElementById("lname").value
    document.getElementById("modal-dob").innerHTML = document.getElementById("dob").value

}

function turnin(){
    let obj={}
    obj.fname = document.getElementById("fname").value 
    obj.lname = document.getElementById("lname").value
    obj.dob = document.getElementById("dob").value
    obj.newpt = false

    let tag= document.createElement("script")
    tag.src = "https://script.google.com/macros/s/AKfycbxbybQCyfbvpD782BiXEu-hf1OtWTtaaq3ZwL7pCQWvfu-0Gms/exec?data="+encodeURI(JSON.stringify(obj))
    document.getElementsByTagName("body")[0].appendChild(tag)
}