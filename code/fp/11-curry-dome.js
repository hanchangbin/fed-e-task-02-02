// 柯里化案例
// 假设我们判断字符串中是否有空白字符或提取字符串中的空白字符可以使用字符串的match方法
// 面向对象方法
// ''.match(/\s+/g);//匹配提取字符串中的所有空白字符
// ''.match(/\d+/g);//匹配提取字符串中的所有数字
// 那如何提取数组中的元素的空白字符或数字呢?
// 使用函数式的方法匹配提取字符串中的内容
// match纯函数
// function match(reg,str){
//     return str.match(reg)
// }
const _ = require('lodash')

// 进行柯里化处理
const match = _.curry(function(reg,str){
    return str.match(reg)
})
// 判断是否有空白字符
const haveSpace = match(/\s+/g)
console.log(haveSpace('helloworld'));//如果有空白字符就会以数组的形式返回提取出来的空白字符,如果没有空白字符就会返回null

// 判断是否有数字
const haveNumber = match(/\d+/g)
console.log(haveNumber('hcb5d6'))
// 现在我们要过滤一个数组,要找到这个数组中所有具有空白字符的元素
const filter = _.curry(function(func,array){
    return array.filter(func)
})
console.log(filter(haveSpace,['john Connor','john_Donne']));//'john Connor'
// 但是我们直接定义filter这样的意义并不大,我们还可以改造一下
//我们可以利用filter来生成这种具有特定功能的函数
const findSpace = filter(haveSpace);
console.log(findSpace(['john Connor','john_Donne']))

// 需要注意的是,函数式编程能够让我们定义一次然后可以重复性的使用