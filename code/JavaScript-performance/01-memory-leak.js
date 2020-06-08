// 内存泄漏

function fn(){
    arrList = []
    arrList[10000] = 'lg is a coder'
}
fn()