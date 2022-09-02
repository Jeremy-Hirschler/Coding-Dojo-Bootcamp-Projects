//Remove Blanks
function removeBlanks(str){
    let arr = str.split(' ');
    console.log('Split array is: ', arr)
    let joinedStr = arr.join('');
    
    return joinedStr;
}

// console.log(removeBlanks('Pl ayTha tF unkyM usi c'));
// console.log(removeBlanks(`I can not BELIEVE it's not butter`));


//Get Digits
function getDigits(str){
    //initialize new array and push when number is found in string
    let numArray = [];
    for (let i=0; i < str.length; i++){
        //if number is found at index i in string str
        if (!isNaN(str[i])){
            numArray.push(str[i])
        }
    }
    //console.log('Num array is: ', numArray)
    let joinedNums = numArray.join('');
    let newNum = Number(joinedNums);
    return newNum;
}

// console.log(getDigits('abc8c0d1ngd0j0!8'))
// console.log(getDigits('0s1a3y5w7h9a2t4?6!8?0'))


//Acronyms
function acronym(str){
    //split at space to get words
    let arr = str.split(' ');
    let array = []
    //capitalize first letter by using index arr[i][0]
    for (let i=0; i < arr.length; i++){
        //console.log('arr[i]', arr[i])
        let capital = arr[i][0].toUpperCase();
        //push each new capital to array and join
        array.push(capital);
        var joinedCapitals = array.join('');
    }
    return joinedCapitals;
}

//console.log(acronym(`there's no free lunch - gotta pay yer way`))
//console.log(acronym(`Live from New York, it's Saturday night!`))


//Count Non-Spaces
function nonSpace(str){
    //count variable, for loop with conditional
    let count = 0;
    for (let i=0; i < str.length; i++){
        if (!(str[i] === ' ')){
            count ++;
        }
    }
    return count
}

//console.log(nonSpace('Honey pie, you are driving me crazy'));
//console.log(nonSpace('Hello world !'));


//Remove Shorter Strings
function removeShorterStrings(arr, num){
    //length property
    let newArray = [];
    for (let i=0; i < arr.length; i++){
        //console.log(arr[i].length)
        if (arr[i].length >= num){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth',
// 'says', 'hello'], 4))
//console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))