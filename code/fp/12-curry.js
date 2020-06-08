// 柯里化的实现原理
// 模拟实现lodash中的curry方法

// const _ = require('lodash')
function getSum(a,b,c){
    return a + b + c;
}
// const curried = _.curry(getSum)
// console.log(curried(1,2,3));
// console.log(curried(1)(2,3))
// console.log(curried(1,2)(3))

// curry函数内部实现

function curry (func){
    // 当传入一个普通纯函数时会返回一个新的函数
    console.log(func.length);
    return function curriedFn (...args){//标记:回调函数1
        // 判断当前函数获取到的实参的个数是否小于func的形参的个数
        if(args.length < func.length ){
            // 当是参个数小于形参个数时,
            //表示curry函数只传递了一部分参数
            // 此时返回一个新的函数
            return function(){//标记:回调函数2
                // 在这个函数中应该再次执行一些回调函数1
                // 这里我们用的是递归的方式执行curriedFn
                // 此时传递的参数应该是回调函数1的参数与回调函数2的合并值
                // 因为这个函数的参数arguments是一个伪数组,需要转换成数组
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        // 当实参个数大于等于形参个数时
        // 此时相当于一次性传递全部参数
        return func(...args);


    }
}
const curried = curry(getSum)
console.log(curried(1,2,3));
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))

/**
 * 柯里化总结:
 * 1.柯里化可以让我们给函数传递较少的参数,
 *   从而得到一个已经记住某些固定参数的新函数
 * 2.这是一种使用闭包对函数参数的缓存
 * 3.让函数变得更灵活,让函数的粒度更小
 * 4.可以把多元函数转换成一元函数,可以组合使用函数产生强大的功能
 * */ 