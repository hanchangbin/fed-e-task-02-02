// 函数组合(compose)
// 函数组合演示
// 传入两个函数f和g
// 注意函数组合 组合的是纯函数,从右往左执行函数
function compose(f,g){
    return function(value){
        return f(g(value))
    }
}
function reverse(array){
    return array.reverse()
}
function first (array){
    return array[0]
}
const last  = compose(first,reverse)
console.log(last([1,2,3,4]))