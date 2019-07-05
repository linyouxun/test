## 功能
1. 类型注解 对函数，变量进行类型约束
2. 接口 保证接口
3. 类

## 基础类型
布尔型 数字 字符串 数组 void null undefined 元组[T,T] 枚举enum 任意类型ANY never (暂时性死区)

## 变量声明
let const 块作用域 重定义及屏蔽 解构

***readonly vs const
最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。***

***interface readonly [propName:string]***
