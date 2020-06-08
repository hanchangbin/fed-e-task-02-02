// 模拟常用高阶函数:map  every some
// map--数组中的方法,对数组中的每一个成员遍历,并对每一个元素进行处理,然后把处理的结果存储到一个新的结果中返回

// 函数表达式的方式
const map = (array,fn) => {
    let results = []
    for(let value of array){
        results.push(fn(value))
    }
    return results
}
// 测试
let arr = [1,2,3,4]
// 求每个数组值的平方的函数
arr = map(arr,v => v*v);
console.log(arr);//[ 1, 4, 9, 16 ]
/**
 * map函数的好处是我们可以使用第二个参数来对数组中的每一个成员做任意处理,所以函数作为参数会让map参数更灵活
*/
//-------------------------------------
//every --判断数组中的每一个元素是否都匹配指定的条件
const every = (array,fn) =>{
    // console.log(array,fn)
    let result = true
    for(let value of array){
        result = fn(value)
        if(!result){
            break;
        }
    }
    return result;
}
// 测试
let arr2 = [12,11,55]
let r2 = every(arr2,v =>v > 10);
console.log(r2)
/**
 * every函数有一个参数时函数的时候也可以让我们的函数变得非常灵活,可以检测数组中的元素是否满足任意的条件
 */
//------------------------------------
// some--检测数组中的元素是否有一个满足指定的条件
const some = (array,fn) =>{
    // console.log(array,fn)
    let result = true
    for(let value of array){
        result = fn(value)
        if(result){
            break;
        }
    }
    return result;
}
// 测试
// 检测数组中是否有偶数
let arr3 = [1,2,3,9]
let r3 = some(arr3,v => v%2 === 0)
console.log(r3)
// 高阶函数:通过把一个函数传递给另一个函数可以让这个函数更灵活