// 纯函数的好处
//1.可缓存----提高程序的性能


//记忆函数 memoise函数
const _ = require('lodash');
// 计算圆的面积
function getArea(r){
    console.log(r)
    return Math.PI * r * r
}
// 调用memoise使getArea方法的返回值有缓存
// let getAreaWithMemory = _.memoize(getArea);
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
/**4
 * 50.26548245743669
 * 50.26548245743669
 * 50.26548245743669
 * 50.26548245743669
 * 从输出结果我们可以看到getArea函数只调用了一次
*/
//-------------------------------------
// memoise函数的内部实现过程
function memoize(f){
    let cache = {}
    return function(){
        let key = JSON.stringify(arguments)
        // 先判断返回中是否有值,如果有值直接返回,如果没有值就返回f函数
        cache[key] = cache[key]|| f.apply(f,arguments)
        return cache[key]
    }
}
let getAreaWithMemory = memoize(getArea);
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
// 测试的结果和刚才的一样,说明我们模拟的结果是ok的
//-------------------------------------------------------------- 
// 2.可测试
// 3. 并行处理
    // 在多线程环境下并行操作共享的内存数据很可能会出现意外情况
    //纯函数不需要范文共享的内存数据,所以在并行环境下可以任意运行纯函数,
    //如JavaScript现在多出了Web Worker线程
