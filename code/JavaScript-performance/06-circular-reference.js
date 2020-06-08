// 循环引用的对象无法回收
function fn(){
    const obj1 = {}
    const obj2 = {}
    obj1.name = obj2
    obj2.name = obj2
    return 'hh'
}
fn()