// point free
/**
 * Point Free 概念:我们可以把数据处理的过程定义成与数据无关的合成运算,不需要用到代表数据的那个参数,只要把简单的运算步骤合成到一起,在使用这种模式之前我们需要定义一些辅助的基本运算函数.
 * 
 * 重点关注下面三句话:
 * 1.不需要指明处理的结果
 * 2.只需要合成运算过程
 * 3.需要定义一些辅助的基本运算函数
 * 
*/


// hello World => hello_world
// 两个步骤:
// 1.转换成小写
// 2.把空格替换成_
const fp = require('lodash/fp')
const aToB = fp.flowRight(fp.replace(/\s+/g,'_'),fp.toLower)
console.log(aToB('hello World'))