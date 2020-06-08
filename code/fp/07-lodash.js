// 演示lodash的几个常用方法
// first / last / toUpper / reverse / each / includes / find / findIndex
// 配置package.json文件 npm init -yes
// 安装lodash npm i lodash
const _ = require('lodash');

let arr = ['yrn','hcb','pjg','slg'];

console.log(_.first(arr));//@return — Returns the first element of array.获取第一个
console.log(_.last(arr))//@return — Returns the last element of array.获取最后一个
console.log(_.toUpper(arr[0]))//@return — Returns the upper cased string.全部大写
console.log(_.reverse(arr));//翻转数组
// 遍历简写
_.each(arr,(item,index)=>{
    console.log(item,index)
})
// includes:判断在当前集合中是否存在这个值,索引默认从0开始,如果是负数就从末尾开始检索
console.log(_.includes(arr,'hcb',0))
//find 在集合中查找到第一个匹配的元素并返回,第二个参数可以是Array|Function|Object|string

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
console.log(_.find(users,['active',false]));//{ user: 'fred', age: 40, active: false }
console.log(_.find(users,o => o.age < 36))
console.log(_.find(users,'active'))
// findIndex类似find区别是返回的是第一个查找到的元素的索引,而不是元素本身
console.log(_.findIndex(users,'active'))
