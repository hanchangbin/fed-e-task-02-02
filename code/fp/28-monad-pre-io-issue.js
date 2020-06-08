/**
 *  IO 函子 的问题
 * IO函子回顾 :
 * IO函子中的_value是一个函数,这是把函数当做值来处理
 * IO函子可以把不纯的动作存储到_value中,延时执行这个不纯的操作(惰性操作),包装当前纯的操作
 * 把不纯的操作交给调用者来处理
 * 
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
}
// const r = IO.of(process)//当我吗调用of方法时,它会把我们传入的值包装在一个函数里来,当我们需要的时候再来获取这个值
//     .map(p=>p.execPath)
//     console.log(r);//IO { _value: [Function] }
//     //我们当前调用完这个函数之后会返回一个IO函子,这个IO函子的value保存的是一个function,我们可以直接调用一下
//     console.log(r._value())//:\Program Files\nodejs\node.exe当前进程的路径

// // ----------------------------------------
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
let cat = fp.flowRight(print,readFile);
// IO(IO(x))//返回的是 嵌套函子
let r = cat('package.json')._value()._value()
console.log(r)
/**
 * IO函子的问题:
 * 我们在调用嵌套函子的时候非常不方便,如果函子有嵌套的话,
 * 我们想要调用嵌套函子中的函数,我们需要._value()._value(),
 * 虽然这样也可以实现,但是这种api的风格看起来很不爽
 */