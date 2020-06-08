// MayBe 函子 处理空值的问题
class MayBe {
    constructor (value){
        this._value = value
    }
    static of(value){
        return new MayBe(value)
    }
    map(fn){
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    // 判断传入的值是不是null或undefined
    isNothing(){
        return this._value === null || this._value === undefined
    }
}
const m = MayBe.of('hello world')
    .map(v=> v.toUpperCase())
// console.log(m);//MayBe { _value: 'HELLO WORLD' }
const b = MayBe.of(null).map(v => v.toUpperCase())
// console.log(b)//MayBe { _value: 'null' }
// -----------------------------------------

// maybe函子的问题:当我们多次调用map的时候我们不知道哪一次传入了空值 
const c = MayBe.of('hello world')
    .map(v=> v.toUpperCase())
    .map(v=> null)
    .map(v=> v.split(' '))
    console.log(c)