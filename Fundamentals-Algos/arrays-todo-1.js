//push front
function pushFront(arr, num){
    if(arr.length > 1){

        for (let i=arr.length-1; i > 0; i--){
            arr[i] = arr[i-1]
        }
        arr[0] = num;
    }else if (arr.length != 0){
        let temp = arr[0];
        arr[0] = num;
        arr.push(temp);
    }else{
        arr.push(num);
    }
    console.log(arr);
}

// pushFront([5,7,2,3],8)
// pushFront([99],7)
// pushFront([],2)

//pop front
function popFront(arr){
    let removedVal = arr[0];
    for (let i=0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = removedVal;
    arr.pop();
    console.log(arr)
    return removedVal
}

// console.log(popFront([0,5,10,15]))
// console.log(popFront([4,5,7,9]))

//insert at
function insert(arr, idx, val){
    arr.push(val);
    for (let i=arr.length-1; i > 0; i--){
        if (i === idx){
            arr[i] = val;
            break;
        }else{
            arr[i] = arr[i-1];
        }
    }
    console.log(arr);
}

// insert([100,200,5],2,311);
// insert([9,33,7],1,42);

//remove at


// remove([1000,3,204,77],1)

//swap pairs

function swap(arr){
    for (let i=0; i < arr.length-1; i += 2){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    console.log(arr)
}
// swap([1,2,3,4])
// swap(['Brendan', true, 42])

//remove duplicates
