// lodash中的fp模块,对函数是变成提供了友好的支持,fp模块提供的每一个方法都是柯里化的,如果有多个参数的话都是函数优先数据滞后,这些方法都可以在函数组合的时候使用
// lodash处理
const _ = require('lodash');
// 检测组合函数中的函数
// const log = (v)=>{
//     console.log(v);
//     return v
// }
// 进一步确定追踪的对象
const trace = _.curry((tag,v)=>{
    
    console.log(`${tag}`,v)
    return v

})

// 去空格分割字符串转数组
const split = _.curry((spe,str)=>_.split(str,spe))
// 大写转成小写
// _.toLower
// toLower会把数组直接用逗号拼接成字符串,我们需要用map函数处理一下
const map = _.curry((fn,array)=> _.map(array,fn))
// 数组转成字符串
const join = _.curry((spe,arr)=>_.join(arr,spe))
// 函数组合
const f = _.flowRight(join('-'),map(_.toLower),trace('split之后'),split(' '))
// console.log(f('NEVER SAY DIE'))

//------------------------------------------------------------------------------
// fp模块处理
// fp模块简化,减少了上面各种方法的包装
const fp = require('lodash/fp');
const f2 = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
console.log(f2('NEVER SAY DIE'))