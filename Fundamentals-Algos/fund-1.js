    var myNum = 42;
    var myName = 'Jeremy';

    var temp = myNum;
    var myNum = myName;
    var myName = temp;

    console.log(myNum, myName);
//next challenge
    // for (let i=-52;i<=1066;i++){
    //     console.log(i)
    // }
//
    // function beCheerful(){
    //     console.log('Good Morning')
    // }

    // for (let i=0;i<=98;i++){
    //     beCheerful();
    // }
//
    // for (let i= -300; i <=0;i++){
    //     if(i === -3 || i === -6){
    //         continue
    //     }
    //     if (i % 3 == 0){
    //         console.log(i)
    //     }
    // }
//
    // var num = 2000;
    // while (num <= 5280){
    //     console.log(num);
    //     num++;
    // }
//

// var bmonth = 6;
// var bday = 8;
// if (bmonth + bday)

//
    // var year = 100;
    // if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0){
    //     console.log('Leap year')
    // }
//
// let count = 0;
// for (let i=512; i<=4096;i++){
//     if (i % 5==0){
//         console.log(i)
//         count ++
//     }
// }
// console.log(count)
// for(let i=0; i<=100; i++){
//     if (i %5==0 && i%10 ==0){
//         console.log('Coding Dojo')
//     }else if(i%5==0){
//         console.log('Coding')
//     }
//     else{
//         console.log(i)
//     }
// }
// function myFunc(incoming){
//     console.log(incoming)
// }
// myFunc('Heydere')
// let number = 2016;
// while (number > 0){
//     console.log(number)
//     number -= 4
// }

// function flexCount(low, high, mult){
//     for (i=high;i>low; i -= mult){
//         console.log(i)
//     }
// }
// flexCount(2,9,3)

// function final(p1,p2,p3,p4){
//     while (p1 <p3){
//         if(p1 === p4){
//             continue
//         }
//         console.log(p1)
//         p1 += 
//     }
// }
function final(p1,p2,p3,p4){
    for(let i=p2;i<p3;i++){
        if (i == p4){
            continue
        }
        if (i%p1 ==0){

            console.log(i)
        }
    }
}
final(3,5,17,9)