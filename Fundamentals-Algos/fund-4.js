function lastCall(arr){
    let i = 0;
    let j = arr.length-1
    while (i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++
        j--
    }
    return arr
}

function keepLast(arr, num){
    lastCall(arr)
    arr.length = num;
    lastCall(arr)
    console.log(arr)
    return arr
}
// keepLast([2,4,6,8,10],3)
//

function mathHelp(m, b){
    x = -b / m;
    console.log(x)
}
// mathHelp(12, 3)
//
function whatHappensToday(prev){
    let newDay = prev + 5;
    console.log(`Today is ${newDay} raptures`)
}
// whatHappensToday(10)
//
function iq(start){
    for (let i=0.01; i <=0.98; i += 0.01){
        start += i
    }
    console.log(start)
}
// iq(101)
//
function assign(score){
    if (score >= 90){
        console.log(`Score: ${score}. Grade: A`)
    }else if (89 >= score && score >= 80){
        console.log(`Score: ${score}. Grade: B`)
    }else if (79 >= score && score >= 70){
        console.log(`Score: ${score}. Grade: C`)
    }else if (69 >= score && score >= 60){
        console.log(`Score: ${score}. Grade: D`)
    }else{
        console.log(`Score: ${score}. Grade: F`)
    }

}
// assign(91)
// assign(24)
// assign(84)
// assign(73)
// assign(60)
//

function moreGrades(score){
    let plusMinus = 0.02 * 100;
    if (score >= 90){
        console.log(`Score: ${score}. Grade: A`)
    }else if (89 >= score && score >= 80){
        let bPlus = 90 - plusMinus
        let bMinus = 80 + plusMinus
        if (score >=  bPlus){
            console.log(`Score: ${score}. Grade: B+`)
        }else if(bMinus >= score){
            console.log(`Score ${score}. Grade: B-`)
        }else{
            console.log(`Score ${score}. Grade: B`)
        }
    }//do the same for C and D
}

// moreGrades(88)
// moreGrades(80)
// moreGrades(85)