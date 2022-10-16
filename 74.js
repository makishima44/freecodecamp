function filteredArray(arr, elem) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].includes(elem))
        newArr.push(arr[i]); 
        }
    return newArr;
}

  
