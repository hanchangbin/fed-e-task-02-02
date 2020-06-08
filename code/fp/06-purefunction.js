// 纯函数和不纯的函数
//案例 slice / splice
let arr = [1,2,3,4,5]
// 纯函数:相同的输入有相同的输出
console.log(arr.slice(0,3))
console.log(arr.slice(0,3))
console.log(arr.slice(0,3))

// 不纯的函数:相同的输入有不同的输出
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))

// -------------------------
// 自己写一个纯函数
function getSum (n1 , n2){
    return n1 + n2
}

console.log(getSum(1,3))
console.log(getSum(1,3))
console.log(getSum(1,3))
// 函数式编程不会保留计算中间的结果,所以变量是不可变得(无状态的)
//当我们在调用这个函数的时候,我们吧一个函数的执行结果交给另一个函数去处理