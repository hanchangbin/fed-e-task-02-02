// 可达对象
function objGroup(obj1,obj2){
    obj1.next = obj2
    obj2.prev = obj1
    return {
        o1:obj1,
        o2:obj2
    }
}
let obj = objGroup({name:'obj1'},{name:'obj2'})
console.log(obj)
//{ o1: { name: 'obj1', next: { name: 'obj2', prev: [Circular] } },
//o2: { name: 'obj2', prev: { name: 'obj1', next: [Circular] } } }