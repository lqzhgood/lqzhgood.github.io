---
title: JS原型链的继承
tags: js
categories:
  - study
  - js
date: 2016-06-23 15:27:24
---

在面向对象编程 JS 的原型链继承 这里卡几天了，觉得还是有必要把这个坑记下来。

#### 原型链

先从简单的例子来。

```javascript
function a() {
    this.y = 2;
}
a.prototype.x = 1;
var b = new a();

b.y; //2
b.x; //1
```

每个函数对象都有一个 _prototype_ ，通过 _new_ 创建的实例的原型会指向函数的 _prototype_ ，也就是继承函数 _prototype_ 的属性。其中 x 属性是 b 原型上继承的， y 属性是 b 上面的，具象化脑图为。 每个函数对象都有一个 _prototype_ ，通过 _new_ 创建的实例的原型会指向函数的 _prototype_ ，也就是继承函数 _prototype_ 的属性。其中 x 属性是 b 原型上继承的， y 属性是 b 上面的，具象化脑图为。▼

<!--more-->

![js1.jpg](nt1.jpg)

b 可以查找到自身属性 y = 1；还可以通过原型链继承 a 函数 _prototype_ 上的 x = 1; 以及 Obj 上的 _toString_ 、 _valueOf_ 等方法。 即原型链的继承。
**P.S _ \_proto _ 仅为抽象属性(chrome)，用于上一层 _prototype_ 的指针, 其他浏览器可以使用 obj.getPrototypeOf(obj) **

<hr/>

#### 原型链的嵌套

再把问题升级一下。▼

![js2.jpg](js2.jpg)

这几天主要是卡在红框处，先来看红框之前的代码。▼

![nt2.jpg](nt2.jpg)

之前一直在想为什么不能写成 **student.prototype = person.prototype;** 想了两天才记起来 _prototype_ 是对象，对象的赋值是指针，如果直接赋值 _person_ 的 _prototype_ ，将导致两者 “共用” 一个 _prototype_，除了继承 _person.prototype_ 的属性以外（红框处的 LEGS_NUM 等），还会为 _student.prototype_ 添加独有属性时 “污染” 到 _person.prototype_ 。▼

![nt3.jpg](nt3.jpg)

因此，应该使用 ** student.prototype = Object.create(person.prototype);** ，创立一个继承 _person_ 的空对象，然后将空对象的 _prototype_ 赋值给 _student.prototype_ ， 从而达到 _student.prototype_ 继承 _person.prototype_ 的目的。▼
![nt4.jpg](nt4.jpg)

说直白一点，这几天就一直坑在这里

```javascript
var a = { x: 1 };
var b = a;
b.c = 123;

alert(a.c); //123;
```

T.T 这么简单的事想几天…… 要死要死要死

<hr/>

画脑图的时候翻到之前离职时候的交接，这特么叫没做事！！！

**去!年!买!的!表!**

![ntty.png](ntty.png)
