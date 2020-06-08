/**
 *  Monad解决   可以IO 函子 的问题
 * Monad函子是可以变扁的Ponit函子,可以解决函子嵌套的问题,
 * 一个函子如果具备join和of两个方法并遵守一定的 定律就是Monad
 * IO函子的问题:
 * 
 * IO函子的问题:
 * 我们在调用嵌套函子的时候非常不方便,如果函子有嵌套的话,
 * 我们想要调用嵌套函子中的函数,我们需要._value()._value(),
 * 虽然这样也可以实现,但是这种api的风格看起来很不爽
 */

const fs = require('fs');
const fp  = require('lodash/fp')
class IO {
    static of(value){
        return new IO(function(){
            return value
        })
    }
    constructor(fn){
        this._value = fn
    }
    map(fn){
        // 这里使用new IO的构造函数而不是使用IO.of方法是因为在map方法里面我们需要把当前函子的value也就是这个函数和我们传入的这个函数组合成一个新的函数,而不是去调用函数处理值,这是跟以前不一样的地方
        return new IO(fp.flowRight(fn,this._value))
    }
    join () {
        return this._value()
    }
    flatMap(fn){
        // 该方法的作用就是同时调用map和join
        return this.map(fn).join()
    }
}


// linux下有一个cat命令,这个命令的作用是读取文件的内容,
// 并且把内容打印出来,下面模拟一下这个命令
// 先写一个读取文件的函数,再写一个打印的函数,然后组合成一个cat函数
let readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf-8')
    })
}
let print = function(x){
    return new IO(function(){
        console.log(x)
        return x;
    })
}
let r = readFile('package.json')
            .map(x=>x.toUpperCase())
            .flatMap(print)
            .join()
console.log(r)
/**
 * 什么是monad?
 * 就是一个具有静态的IO方法并且具有专业方法的这么一个函子
 * 什么时候使用monad呢?
 * 让一个函数返回一个函子的时候,我们要想到monad
 * monad可以帮我们解决函子嵌套的问题
 * 当我们想要合并一个函数,并且这个函数返回一个值,
 * 这个时候我们可以调用map方法
 * 当我们想要去合并函数,但是这个 函数返回一个函子,
 * 这个时候我们要用flatMap方法
 */