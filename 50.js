function countdown(n){
    if(n < 1) {
        return [];
    } else {
        let array = countdown(n - 1)
        array.unshift(n) 
        return array
    }
  }

 console.log(countdown(5))

 