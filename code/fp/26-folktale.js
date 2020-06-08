// folktale是一个 函数式编程库,其中的 task方法可以处理异步操作的问题
// 下面 我们来看一下folktale中的compose和curry 
const { compose , curry } = require('folktale/core/lambda')
const { toUpper ,  first } = require('lodash/fp')
// folktale中的curry和lodash 中的curry还是有些区别的
// 柯里化curry
// curry的第一个参数 声明传递的参数个数,第二个参数是传入的函数
// let f = curry(2,(x,y)=>{
//     return x + y
// })
// console.log(f(1,2))
// console.log(f(1)(2))
// -------------------------------------
// compose(函数组合)
let f = compose(toUpper,first)
console.log(f(['ind','hcb']))