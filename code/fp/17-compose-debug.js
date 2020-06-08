// 函数组合如何调试
// 案例把字符串NEVER SAY DIE 转换成 never-say-die
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
console.log(f('NEVER SAY DIE'))

