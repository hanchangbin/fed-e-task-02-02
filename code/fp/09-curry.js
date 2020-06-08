// 柯里化演示

// function checkAge(age){
//     let min = 18
//     return age >= min
// }
//--------------------------
// 进一步改进---普通的纯函数
// function checkAge (min,age){
//     return age >= min
// }
// console.log(checkAge(18,20))
// console.log(checkAge(18,24))
// console.log(checkAge(19,22))
//-----------------------------
// 当最小值一直都是18的时候上面这种调用方法就不合适了
// 更进一步改进----闭包/高级函数
// function checkAge(min){
//     return function(age){
//         return age >= min
//     }
// }
// es6写法
let checkAge = min => (age => age >= min);
let checkAge18 = checkAge(18);//最小年龄18
let checkAge20 = checkAge(20);//最小年龄20

console.log(checkAge18(20))
console.log(checkAge20(24))
/**
 * 以上这种形式就是函数的柯里化
 * 当我们的函数有多个参数的时候,我们可以对这个函数进行改造
 * 我们可以调用一个函数只传递部分的参数,
 * 并且让这个函数返回新的函数,
 * 让这个新的函数去接收剩余的参数并且返回相应的结果,
 * 这就是函数的柯里化
 * */ 
/**
 * 总结:
 * 柯里化(currying)
 *      1.当一函数有多个参数的时候先传递一部分参数调用它(这部分参数以后永远不变)
 *      2.然后返回一个新的函数接收剩余的参数,返回结果
 */