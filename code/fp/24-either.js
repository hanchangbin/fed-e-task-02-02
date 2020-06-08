// Either函子,处理异常问题并且可以记录下来出错的信息
class Left {//left用来处理异常
    static of(value){
        return new Left(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return this;//返回对象本身
    }
}
class Right {//用来处理正确的值
    static of(value){
        return new Right(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return Left.of(fn(this._value))
    }
}
function parseJson (value){
    try {
        return Right.of(JSON.parse(value))
    } catch (error) {
        return Left.of({error:error.message})
    }
}
// let r = parseJson('{hcb:hhh}')
let r = parseJson('{"hcb":"hhh"}')
        .map(x => x.hcb.toUpperCase())
console.log(r)