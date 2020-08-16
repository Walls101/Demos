function divisors(integer) {
  let results = []
  for (i=2; i<integer; i++){
      if (integer % i == 0){
        results.push(i)
      }
  }
  if(results.length ==- 0){
    document.getElementById("output").innerHTML= (integer.toString()+" is prime")
    return
    }
document.getElementById("output").innerHTML=results
return(results)
}
console.log()