//functor 函子,把副作用控制在可控范围内, 函子可以处理异常和异步操作
// 函子是一个特殊的容器,通过一个普通的对象来实现,该对象 具有map方法,map方法可以运行一个函数对值进行处理(变形关系)

// 函子是一个对象,并且维护一个值,对外公布map方法

// class Container {
//     constructor(value){
//         // 现在函子这个盒子里要维护一个值,这个值不对外公布 
//         this._value = value
//     }
//     // 现在我们对外公布map方法,接收一个处理值得函数
//     // 这个函数是纯函数,因为我们要把value传递给这个函数,由这个函数来处理这个值
//     map(fn){
//         // 当我们调用map方法的时候,map方法会调用fn处理这个值,并且把处理的结果返给一个新的函子,由新的函子来保存
//         // 返回一个新的值的时候,我们把fn函数处理的值传递给Container
//         return new Container(fn(this._value))
//     }
// }
// let r = new Container(5)
//     .map(x=>x + 1)
//     .map(x => x * x)
// console.log(r)
// //所以我们的map方法返回的不是值而是一个新的函子对象,在这个新的函子对象里面保存一个新的值,我们始终不把值对外公布,我们想要处理值的话就要给map对象传递一个处理值得函数

//----------------------如何不使用new实例化Container呢?
// 在Container中创建静态方法,返回实例化 的Container
class Container {
    static of(value){
        return new Container(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return Container.of(fn(this._value))
    }
}
let r = Container.of(5)
    .map(x=>x + 2)
    .map(x => x * x)
console.log(r)
// ---------------------------
// 如果 给函子传递null undefined就会报错 ,怎么解决这类问题?
Container.of(null)
    .map(v=>v.toUpperCase())
