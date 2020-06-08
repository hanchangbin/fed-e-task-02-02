# 韩长斌 | Part1 | 模块二
[有道笔记有配图](http://note.youdao.com/noteshare?id=878c1b063a03c90579f4c4538d954d0e&sub=3977729962E74D7B805FA3735BE25A2C)
## 简答题
### 1.
- 引用计数算法实现原理：给对象空间设置引用数，通过引用计数器时刻监控引用数的变化，当引用关系改变的时候修改引用数值，当引用数为0的时候立刻进行垃圾回收
- 优点：
	- 发现垃圾及时回收
	- 最大限度减少程序暂停
>说明：最大限度减少程序暂停是指应用程序在运行时必然会消耗内存，而我们当前的执行平台的内存是有上限的，所以内存肯定有暂满的时候，不过，由于引用计数算法时刻监控着那些引用计数的对象，所以当某一个对象即将爆满的时候，引用对象立刻会找到数字为0的空间进行释放，这样就保证了我们当前内存不会有暂满的时候，这也就是所谓的减少程序暂停的说法
- 缺点：
	- 无法回收循环引用的对象
	- 时间开销大
>说明：引用计数时间开销大是因为引用计数器需要维护数值的变化，时刻监视当前对象的引用数值是否修改，本身来说，对象引用数值的修改就需要消耗时间，对象越多，时间越大
### 2.
- 标记整理算法的工作流程：首先找到所有活动对象进行标记，然后对所有活动对象进行整理集中，之后清除非活动对象释放空间

### 3.
![image](EF0A9B44E35A42BF9793304528033736)
- V8新生代存储区垃圾回收流程：新生代存储区等分两个相同大小的存储空间form和to，form为使用空间，to为空闲空间，活动对象存储于form空间，我们使用标记整理算法把form空间的活动对象全部标记并进行整理，然后使用复制算法把form空间中的活动对象拷贝到to空间，form与同交互进而完成空间的释放
- ![image](4A3D42BE70B4466C91739A82A5DC9732)
### 4.
- 增量标记算法何时使用：老生代对象回收时使用
- 工作原理：所谓的标记增量是指将一整段的垃圾回收操作拆分成多个小部分，组合的去完成垃圾回收，从而替代之前一口气做完的垃圾回收操作，这样做的好处是实现垃圾回收和程序执行的交替过程，而不像以前那样程序执行的时候就不能进行垃圾回收，而进行垃圾回收的时候就不能进行程序的运行，这个时候来的消耗就更加合理一些
![image](20D8975AC98F4B38A0D73DE07118DB6E)
## 代码题
### 代码题1
#### 练习1
	- 答案：
	
```
const isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
```

	- 说明：使用fp.flowRight进行函数组合从右向左执行，先使用fp.last获取当前数组cars中的最后一个成员car,然后用fp.prop获取当前对象car的in_stock属性的值
#### 练习2
	- 答案：

```
const isLastInStock = fp.flowRight(fp.prop('name'),fp.first)
```

	- 说明: 使用fp.flowRight进行函数组合从右向左执行，先使用fp.last获取当前数组cars中的第一个成员car,然后用fp.prop获取当前对象car的name属性的值
#### 练习3
	- 答案：

```
const averageDollarValue = fp.flowRight(_average,fp.map(car=>car.dollar_value))
```

	- 说明:使用fp.flowRight进行函数组合从右向左执行，先使用fp.map获取dollar_values,然后在把得到的dollar_values使用_average进行处理
#### 练习4
	- 答案：

```
let sanitizeNames = fp.flowRight(_underscore,fp.map(v=>fp.toLower(v.name)))
```

	- 说明:使用fp.flowRight进行函数组合从右向左执行，先用fp.map获取cars的name返回一个数组,然后数组传递给_underscore,返回一个下划线连接的小写字符串
### 代码题2

#### 练习1
	- 答案：

```
let ex1 = (fn,num)=>fn.map(fp.map(x=>fp.add(x,num)))
```
    - 说明:创建函数的参数为函子fn和增加的值num,这里的fn指的是maybe变量,函子fn执行map方法传入函数fp.map(x=>fp.add(x,num)作为参数,然后返回一个新的函子,函数fp.map(x=>fp.add(x,num)方法中的x就是初始传入Maybe函子的数组遍历后的每一个值,num是增加的值,我们使用fp.add为每个值增加数量   

#### 练习2
	- 答案：

```
let ex2 = fn=>fp.first(fn._value)
```
    - 说明: 创建个函数,参数是一个函子,也就是xs,把xs._value传递给fp.first能够得到列表第一个元素

#### 练习3
	- 答案：

```
let ex3 = v=>fp.first(safeProp('name',v)._value);
```
    - 说明:首先调用saftProp获取user对象中name属性的值,然后返回一个函子,我们把函子的_value传递给fp.first会得到名字的首字母

#### 练习4
	- 答案：

```
let ex4 = v=>Maybe.of(v).map(x=>parseInt(x))

```
    - 说明:创建一个函数接收一个参数v,使用Maybe函子的静态方法接收v,然后调用map方法使用parseInt方法进行处理

## 项目文件说明
- notes : 笔记
- code : 代码
