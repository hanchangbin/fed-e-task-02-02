// 高阶函数-函数作为返回值
// 想象一下，如果函数作为返回值的话，就是一个函数去生成另一个函数
// 下面是基本语法演示
function makeFn(){
    let msg = 'hello function'
    return function (){
        console.log(msg)
    }
}
// 调用方法1
const mf = makeFn();
mf();//hello function
// 调用方式2
makeFn()();//hello function
// ---------------------------
/**lodash中的once函数--对于一个函数只执行一次，
 * 可以用于用户支付的时候，
 * 不管用户点多少次按钮只支付一次订单
*/
function once (fn){
    // 如何只执行一次呢？
    // 1.定义一个变量，这个变量是一个标记
    let done = false;//默认fn函数没有执行
    return function(){//返回一个函数
        if(!done){//2.先判断一下这个函数是否已经被执行过
            // 如果判断fn函数没有执行过,
            // 我们先把fn设置为执行过
            done = true
            // this指向当前的函数的 this
            // arguments获取当前函数的参数
            const _this = this;
            console.log(_this,arguments)
            
            return fn.apply(this,arguments)
        }
    }
}
// 通过once函数生成一个只能够执行一次的函数
let pay = once(function(money){
    console.log(`支付：${money} RMB`)
    
})
pay(5)
pay(6)
pay(7)
pay(8)
