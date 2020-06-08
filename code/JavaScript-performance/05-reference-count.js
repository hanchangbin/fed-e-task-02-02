// 引用计数器实现原理

const u1 = {a:1}
const u2 = {a:2}
const u3 = {a:3}

const uList = [u1.a,u2.a,u3.a]
function fn(){
    const n1 = 1;
    const n2 = 2;
}
fn();//调用后销毁，