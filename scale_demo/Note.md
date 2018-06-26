### 尺度

数据可视化中，数值从数据领域映射到图形领域就是数据模型映射到可视化模型 数值->长度、宽度、颜色

d3的数值尺度类似数学中的函数，f(a) = b， a为定义域，b为值域，f为映射关系，例如：
```
    var linear = d3.scale
        .linear() // 这里其实是创建一种函数映射关系，linear就是线性函数
        .domain([1, 10])  // 函数的定义域
        .range([1, 10])   // 函数的值域
```
d3会自动计算线性函数中an+b a和b的值来满足上述的公式，其他函数类似

### d3 插值
d3可以进行简单的如数字对象的插值，也可以进行复杂对象的插值（颜色，对象等）
interpolators是一个栈，后推添加的插值函数先匹配，每次遍历数组使用符合条件的插值器每个function处理符合条件的值，默认情况包含： 
 - 数字插值器 
 - 字符插值器
 - 颜色插值器
 - 对象插值器
 - 数组插值器