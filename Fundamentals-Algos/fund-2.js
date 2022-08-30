// var arr = []

// function countdown(num){
//     for (let i = num; i >= 0; i--){
//         arr.push(i)
        
//     }
//     console.log(arr, arr.length)
// }

// countdown(5)

//
// function twoNum(a,b){
//     console.log(a)
//     return b
// }

// let bee = twoNum(4,5);
// console.log(bee)
//
// function firstPlus(arr){
    
//     return arr[0] + arr.length
// }

// let x = firstPlus([true,3,4])
// console.log(x)
// //
// let array = []
// function lenVal(a,b){
//     if (a === b){
//         console.log('Jinx!')
//     }else{

//         for (let i=0; i < a; i++){
//             array.push(b)
//         }
//         return array
//     }
// }
// let newAr = lenVal(5,5)
// console.log(newAr)
// //

// function fit(arr){
//     if (arr[0] > arr.length){
//         console.log('too big')
//     }else if (arr[0] < arr.length){
//         console.log('too small')
//     }else{
//         console.log('just right')
//     }
// }

// fit([3,3,4])
// //

const fahrenheitToCelsius = (fDegrees) => {
    var celsius = (fDegrees - 32) * (5/9)
    return celsius
}

let c = fahrenheitToCelsius(-40)
console.log(c)

const celsiusToFahrenheit = (cDegrees) => {
    var fahrenheit = (cDegrees * (9/5)) + 32
    return fahrenheit
}

let f = celsiusToFahrenheit(0)
console.log(f)



