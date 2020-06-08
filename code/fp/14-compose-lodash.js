/**
 * lodash中的函数组合方法flow和flowRight
 * flow()从左到右执行,flowRight()从右到左执行
 * 下面演示_.flowRight()方法实现获取数组中的最后一个元素并转换成大写
*/
const _ = require('lodash')
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()
const getLastValue = _.flowRight(toUpper,first,reverse)
console.log(getLastValue(['hcb','pgl','hzx']))