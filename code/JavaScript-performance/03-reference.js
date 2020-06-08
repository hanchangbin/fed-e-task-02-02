// js中的引用

// 引用说明
let obj = {name:'xm'};//obj引用了这个对象空间，同时xm是可达的
let ali = obj;//ali通过obj引用了obj的对象空间
obj = null;//obj为空的时候，xm还是可达的对象，因为ali还在引用xm的对象空间