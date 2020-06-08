// 函数组合要满足结合律
const _ = require('lodash')
// const reverse = arr => arr.reverse()
// const first = arr => arr[0]
// const toUpper = s => s.toUpperCase()
// 使用lodash中的纯函数,简单方便
// const getLastValue = _.flowRight(_.toUpper,_.first,_.reverse)
// console.log(getLastValue(['hcb','pgl','hzx']))
// 下面演示结合律,当我们组合函数的时候可以先组合前两个函数也可以组合后两个函数,都是一样的
// const f = _.flowRight(_.flowRight(_.toUpper,_.first),_.reverse)
const f = _.flowRight(_.toUpper,_.flowRight(_.first,_.reverse))
console.log(f(['hcb','pgl','hzx']))