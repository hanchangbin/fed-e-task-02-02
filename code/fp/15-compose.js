// 函数组合的使用原理
// 模拟lodash中的flowRight方法的函数组合实现原理
const _ = require('lodash')
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()
const getLastValue = _.flowRight(toUpper,first,reverse)
console.log(getLastValue(['hcb','pgl','hzx']))
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// 具体看https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 模拟compose函数
// 1.传递的参数为函数
// function compose(...args){
//     // 2.用剩余参数...获取函数类参数的数组
//     // 3.返回一个函数,这个返回的函数需要做预处理,这个function中需要接受一个参数value
//     return function(value){

         
//         //4.因为函数组合中执行的函数是从右到左执行的,我们需要把函数类参数的数使用reverse翻转一下
//         // 5.然后使用reduce函数执行该数组,把每个数组中的元素去执行一个我们需要的函数,最后汇总成一个结果返回
//         return args.reverse().reduce(function(acc,fn){//参数1是上一次调用回调返回的积累结果或者初始结果,参数二是数组中正在处理的元素,在这个函数组成的数组中每个元素都是函数
//             return fn(acc)   
//         },value)
//     }
// }

// es6简写
const compose = (...args)=>value=>args.reverse().reduce((acc,fn)=>fn(acc),value);

const glv = compose(toUpper,first,reverse);
console.log(glv(['hcb','pgl','hzx']))