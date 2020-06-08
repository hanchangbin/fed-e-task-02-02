function Person(){
	this.name = 'icoder'
	this.age = 18
	this.getAge = function(){
		return this.age
	}
}
const p1 = new Person()
const a = p1.getAge()
// 不使用属性访问方法
function Person(){
	this.name = 'icoder'
	this.age = 18
	
}
const p2 = new Person()
const b = p2.age