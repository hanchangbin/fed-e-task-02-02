// 构造函数内添加方法
var fn1 = function(){
	this.foo = function(){
		console.log(11111)
	}
}
let f1 = new fn1()

// 原型对象添加方法
var fn2 = function (){}
fn2.prototype.foo=function(){
	console.log(11111)
}
let f2 = new fn2()
