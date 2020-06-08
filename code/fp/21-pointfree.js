// point free 案例
//把一个字符串中的首字母提取并转换成大写,使用.号分隔符
// world wild web ==> W.W.W
const fp = require('lodash/fp')
// const aToB = fp.flowRight(fp.join(', '),fp.map(fp.first),fp.map(fp.toLower),fp.split(' '))
// 上面我们调用了两次map,如何能值调取一个map?看下面
const aToB = fp.flowRight(fp.join(', '),fp.map(fp.flowRight(fp.first,fp.toLower)),fp.split(' '))
console.log(aToB('world wild web'))