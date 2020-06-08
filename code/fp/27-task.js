// task 处理异步任务
// 案例通过读取文件演示异步任务
// 读取package.json文件,并把version解析出来
// task在folktale^2.0版本提供的是函数 形式,在folktale^1.0版本提供的是类
const { task } = require('folktale/concurrency/task')
//  node环境读取文件使用fs模块
const fs = require('fs');

//切割 package.json并找到version需要用到lodash/fp模块的split和find
const { split , find } = require('lodash/fp') 

// 写一个读取文件的函数
function readFile(filename){//传入文件的路径,同层相对路径可以直接写名字
    // 返回一个task函子,task函数的返回值是一个Task对象,
    // task函数本身需要接收一个函数,这个函数的参数时固定的叫resolver
    
    return task(resolver =>{
        // resolver是一个对象,提供了两个方法
        // resolve执行成功调用的方法
        // reject执行失败调用的方法

        //fs.readFile是异步读取文件
        fs.readFile(filename,'utf-8',(err,data) =>{
            // 先判断读文件的时候是否出错了,如果出错调用resolver.reject方法
            if(err) resolver.reject(err)
            // 如果执行成功调用resolver.resolve方法
            resolver.resolve(data)
        }) 
    })
}

// 执行读取文件的函数,当我们读取文件的时候返回的是一个task函子
// readFile('package.json')
// // 想要读取文件的话调用Task函子中的run方法
//     .run()
// // Task函子还提供了监听事件方法listen(),用来接收resolve和reject的值
//     .listen({
//         onRejected : err =>{
//             console.log(err)
//         },
//         onResolved: value=>{
//             console.log(value)
//         }
//     })
    // 执行node命令可以看到读出来的文件
//------------------------------------------------

//我们知道readFile方法返回的是一个Task函子,而Task函子都有一个map方法
//所以在run直接我们可以调用Task函子的map方法,在map方法里面来处理拿到的结果
readFile('package.json')
// 切割换行符,截取字符串返回数组
    .map(split('\n'))
// 通过find方法查找数组中的每一项是否具有version
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onRejected : err =>{
            console.log(err)
        },
        onResolved: value=>{
            console.log(value)
        }
    })