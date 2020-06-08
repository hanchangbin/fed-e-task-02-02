// lodash中的curry基本使用
const _ = require('lodash')
//有三个参数叫三元函数,有几个参数就叫几元函数
function getSum(a,b,c){
    return a + b + c;
}
// 柯里化可以把多元函数最终转化为一个一元函数
const curried = _.curry(getSum)
console.log(curried(1,2,3));//仅仅是包装没意义
// 如果我们传递getSum的部分参数,
// curry会返回一个新的函数用来接收剩余参数
console.log(curried(1)(2,3))//此时结果是一样的
// lodash的curry函数是吧多元函数编程一元函数
console.log(curried(1,2)(3))

