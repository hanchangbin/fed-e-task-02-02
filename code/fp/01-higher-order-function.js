// 高阶函数-函数作为参数

// 封装一个forEach函数,遍历每一个数组中的元素
function forEach(array,fn){
    for(let i = 0 ; i < array.length ; i++){
        fn(array[i])
    }
}
//测试一下这个函数
let arr = [1,3,5,7,9]
forEach(arr,function(item){
    console.log(item)
})
// 封装一个fliter函数，过滤一个满足条件的数组

function filter (array,fn){
    
    let result = []
    for(let i = 0 ; i < array.length ; i++){
        // 在fn中指定满足的条件,处理每个对象
        // 如果满足条件
        if(fn(array[i])){
            result.push(array[i])
        }
    }
    return result;
}
// 测试
let arr2 = [1,2,4,7,8]
let r = filter(arr2,function(item){
    return item%2 === 0
})
console.log(r)//[ 2, 4, 8 ]