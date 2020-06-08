// lodash 和lodash/fp 模块中 map 方法的区别

//区别:所接收的函数的的参数不一样,lodash中map的函数所接收参数是三个,fp中的map所接收的参数是一个

// 调用map方法把数组中的所有元素都转换成整数
// lodash的处理方式
const _ = require('lodash')

console.log(_.map(['23','8','10'],parseInt));//[ 23, NaN, 2 ]
// 为什么会打印出NaN呢?
// 鼠标放在map上我们可以看到该方法的解释中有这么一段话Creates an array of values by running each element in collection through iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).
// map的第二个参数是一个函数,函数必须有三个参数:值,索引/键,集合
// 下面我们展开一下map调用perseInt方法的过程
_.map(['23','8','10'],function(value,index,array){
    // console.log(value,index,array)
    // parseInt(string, radix)   将一个字符串 string 转换为 radix 进制的整数， radix 为介于2-36之间的数。
    // perseInt的两个参数分别是string(被解析的字符串),radix(几进制)
    // 按顺序传递参数给parseInt会造成value对标string,index对标radix
    return parseInt(value,index,array)
})
// 这样造成的结果就是
// parseInt('23',0,array)
// parseInt('8',1,array)//8为1进制,不存在的,进制的范围是2-36,所以返回的是NaN
// parseInt('10',2,array)

// 解决上面的问题可以自己封装一个parseInt,只接受一个参数,这样就可以解决了

//------------------------------------------
// fp模块的map方法就不会出现这样的问题
const fp = require('lodash/fp')
// fp模块的map方法只传递一个参数的时候接收的是一个函数,因为fp模块中的方法是函数优先的,当前这甘薯只接收一个参数,而lodash中的函数所接收的参数是三个
console.log(fp.map(parseInt,['23','8','10']))
