---
title: 'Re:AppSwap'
categories:
  - study
  - other
tags: T9
date: 2016-06-02 21:28:28
---

## English

Thank you for your letter，I regret the delay in answering your letter because I spent too much time in Demo.

About your searching for advise in the E-mail, in order to help you better understanding the T9-Pinyin, I would like to take some time to explain.

<!--more-->

### Pinyin

Pinyin is a form of Chinese letters expressed by the Latin alphabet。
Chinese words and Pinyin are one to one correspondence in a paragraph of text

#### one to one

**One** Chinese word corresponds to **One** Pinyin In most cases.

> _e.g._ > ** Pinyin **
> 中 国 <--> Zhong Guo
>
> ** T9 **
> 中 国 <--> Z G
>
> _(The English translation: China)_

#### one to more

**One** Chinese word corresponds to **multiple** Pinyin In few cases.

> _e.g._ > ** Pinyin **
> 银 **行** <--> Yin **Hang** > **行** 走 <--> **Xing** Zou
>
> ** T9**
> 银 **行** <--> Y **H** > **行** 走 <--> **X** Z
>
> _(The English translation: Bank、Walk)_

#### For example

| English    |    Chinese     |               PinYin |        T9 |
| ---------- | :------------: | -------------------: | --------: |
| Alipay     |    支 付 宝    |           Zhi Fu Bao |     Z F B |
| Angry Bird | 愤 怒 的 小 鸟 | Feng Nu De Xiao Niao | F N D X N |
| Love       |     爱 情      |              Ai Qing |       A Q |
| Virus      |     病 毒      |              Bing Du |       B D |
| Grass      |     小 草      |             Xiao Cao |       X C |
| Bank       |     银 行      |             Yin Hang |       Y H |
| Walk       |     行 走      |             Xing Zou |       X Z |
| Swan       |     天 鹅      |               Tian E |       T E |
| A Dog      |    一 只 狗    |           Yi Zhi Gou |     Y Z G |
| Bitchy     |     矫 情      |            Jiao Qing |       J Q |

translate into Json

```json
var Pinyin = {
    "a": ["爱"],
    "b": ["宝"],
    "c": ["病","草"],
    "d": ["的","毒"],
    "e": ["鹅"],
    "f": ["付","愤"],
    "g": ["狗"],
    "h": ["行"],
    "i": ["贱"],
    "j": ["矫","就"],
    "k": [],
    "l": [],
    "m": [],
    "n": ["怒","鸟"],
    "o": [],
    "p": [],
    "q": ["情"],
    "r": ["人"],
    "s": ["是"],
    "t": ["天"],
    "u": [],
    "v": [],
    "w": [],
    "x": ["小","行"],
    "y": ["银","一"],
    "z": ["支","走","只"]
}
```

> **important!** > [ **行** ] with T9[ **h** ] and T9[ **x** ]

---

### Demo

_<a href="/demo/demos/JS-T9输入法/" target="_blank" style="color:blue">T9 Demo</a> _

#### Library

If you need it:

-   _<a href="/demo/demos/JS-T9输入法/lib/T9_pinyin_tbl.js" target="_blank" style="color:blue">Pinyin and T9num</a> _
-   _<a href="/demo/demos/JS-T9输入法/lib/T9_pinyin_short.js" target="_blank" style="color:blue">T9</a> _

(maybe not all)

---

### Suggest

#### More simple

##### UI Del①②③

![aw_s1_ui](aw_s1_ui.jpg)

Mini mode is considered to be more fast and simple. Will delete some not commonly used buttons of ①②③.

① is not commonly used bug occupy the important position, The full Symbol of the application name is very few.

I don't think there will be a lot of application name like this

> ×&#@$

---

If the application name like this

> App ! Name #^&

We can aatch by _App_ or _Name_ .

---

If the application name like this

> A!p#p$N\*a!m&e

I don't think anyone like that name, and We can renamed by AppSwap. like this

> AppName

---

Delete ① and ③ , Move ② to ① positon。Mini mode will become like this
![aw_s1_ui_min](aw_s1_ui_min.jpg)

In this case，the T9 number corresponding to the location of application. We can quickly start the application by long press or slide T9 numbers.

---

I think you can use this app to find more simple ideas

_[AppDialer](https://play.google.com/store/apps/details?id=name.pilgr.appdialer "AppDialer")_

and more fast algorithm
*https://github.com/pilgr/Paper*

---

#### logic

![aw_l1](aw_l1.jpg)
In slide down, the keyboard should be the same as the start AppSwap in setting.

---

![aw_l2](aw_l2.jpg)
**Hide** in the yellow area when the green area is slide **up**.
**Show** in the yellow area when the green area is slide **Down**.

---

#### Other

![aw_o1](aw_o1.jpg)
It's a real hassle to apply the classification. If you can import through the Navo Launch will be a good way.

---

### BUG

#### INFO

-   App Swap 1.00.468
-   Nexus 5
-   Andriod 5.1.1

#### Problem

1. Pinyin filter can not use the delete key in T9.
   ![aw_q0](aw_q0.gif)
2. I don't know how these two options come into effect, or have no effect?
   ![aw_q1](aw_q1.jpg)

3. Garbled of the pay page (Maybe the font is not totally in my ROM)
   ![aw_q2](aw_q2.jpg)

4. Pinyin unable to match from the middle in T9

5. Green areas slide up can not show more applications in Mini mode
   ![aw_q3](aw_q3.jpg)

### Last

Thank you very much for your application to make Android more beautiful, if there is any problem please reply to my email, I will try to answer.

## 中文

谢谢你的来信，因为在 Demo 上花费了一些时间，没有及时回信。
关于你在 Email 中寻求的建议，为了帮助你理解，我想先花费一些时间说说 T9-Pinyin。

### Pinyin

Pinyin 是中文字母拉丁字母化的一种方式。一段文字中的中文和 Pinyin 的个数是一一对应的。

#### 一对一

大多数情况下，一个中文字母对应一个拼音，例如

> ** 全拼**
> 中 国 <--> Zhong Guo
>
> ** T9**
> 中 国 <--> Z G
>
> (英文翻译是 China)

#### 一对多

还有一些中文字母在不同情况下对应不同拼音，例如

> ** 全拼**
> 银 **行** <--> Yin **Hang** > **行** 走 <--> **Xing** Zou
>
> ** T9**
> 银 **行** <--> Y **H** > **行** 走 <--> **X** Z
>
> (英文翻译是 Bank、Walk)

#### 一些例子

| English    |    Chinese     |               PinYin |        T9 |
| ---------- | :------------: | -------------------: | --------: |
| Alipay     |    支 付 宝    |           Zhi Fu Bao |     Z F B |
| Angry Bird | 愤 怒 的 小 鸟 | Feng Nu De Xiao Niao | F N D X N |
| Love       |     爱 情      |              Ai Qing |       A Q |
| Virus      |     病 毒      |              Bing Du |       B D |
| Grass      |     小 草      |             Xiao Cao |       X C |
| Bank       |     银 行      |             Yin Hang |       Y H |
| Walk       |     行 走      |             Xing Zou |       X Z |
| Swan       |     天 鹅      |               Tian E |       T E |
| A Dog      |    一 只 狗    |           Yi Zhi Gou |     Y Z G |
| Bitchy     |     矫 情      |            Jiao Qing |       J Q |

转化为 Json 格式为

```json
var Pinyin = {
    "a": ["爱"],
    "b": ["宝"],
    "c": ["病","草"],
    "d": ["的","毒"],
    "e": ["鹅"],
    "f": ["付","愤"],
    "g": ["狗"],
    "h": ["行"],
    "i": ["贱"],
    "j": ["矫","就"],
    "k": [],
    "l": [],
    "m": [],
    "n": ["怒","鸟"],
    "o": [],
    "p": [],
    "q": ["情"],
    "r": ["人"],
    "s": ["是"],
    "t": ["天"],
    "u": [],
    "v": [],
    "w": [],
    "x": ["小","行"],
    "y": ["银","一"],
    "z": ["支","走","只"]
}
```

> 注意 Pinyin [ **h** ] 和 Pinyin [ **x** ] 中都有 [ **行** ]

---

### Demo

_<a href="/demo/demos/JS-T9输入法/" target="_blank" style="color:blue">T9 Demo</a> _

#### 库

如果你需要的话

-   _<a href="/demo/demos/JS-T9输入法/lib/T9_pinyin_tbl.js" target="_blank" style="color:blue">Pinyin and T9num</a> _
-   _<a href="/demo/demos/JS-T9输入法/lib/T9_pinyin_short.js" target="_blank" style="color:blue">T9</a> _
    (也许不全)

---

### 建议

#### 精简

##### UI Del①②③

![aw_s1_ui](aw_s1_ui.jpg)
标准模式大而全，迷你模式我认为应该更快速，更精简，将一些不常用的删除。
①②③ 都可以取消。
① 的使用率太低了却占用了一个很重要的位置，很少有应用是全字符的。而且通过匹配应用名中其他拉丁字母或者更改应用别名来取代 ① 的作用。

我不认为会有很多应用名字全为

> ×&#@$

---

而如果应用名字是

> App ! Name #^&

我们也可以通过 _App_ 或者 _Name_ 来匹配。

---

如果应用名为

> A!p#p$N\*a!m&e

我想没人喜欢这样的名字，而且我们可以通过 App Swap 中修改应用的显示名为

> AppName

---

把 ② 换到 ① 的位置将 ③ 删除，迷你模式将变成这样。
![aw_s1_ui_min](aw_s1_ui_min.jpg)

这时候 T9 数字刚好对应上方的应用图标，可以通过长按或者滑动 T9 数字来快速启动应用

---

我想你可以通过以下应用获得更轻的想法

_[AppDialer](https://play.google.com/store/apps/details?id=name.pilgr.appdialer "AppDialer")_

和更快的算法
*https://github.com/pilgr/Paper*

---

#### 逻辑

![aw_l1](aw_l1.jpg)
首页下拉出现的输入法 应该和启动时打开的键盘相同，由设置中决定。

---

![aw_l2](aw_l2.jpg)
在绿色区域向**上**滑动时 黄色区域**隐藏**
在绿色区域向**下**滑动时 黄色区域**显示**

---

#### 其他

![aw_o1](aw_o1.jpg)
给应用分类真是个麻烦的事情。
如果可以通过 Navo Launch 导入将是个美好的事情。

---

### BUG

#### 信息

-   App Swap 1.00.468
-   Nexus 5
-   Andriod 5.1.1

#### 问题

1. T9 模式下，拼音筛选无法使用删除键。
   ![aw_q0](aw_q0.gif)
2. 我不知道这两个选项如何生效，或者说没有效果？
   ![aw_q1](aw_q1.jpg)

3. 捐赠乱码
   这个也许是我 ROM 字体不全
   ![aw_q2](aw_q2.jpg)

4. T9 模式下，Pinyin 无法从中间开始匹配

5. 迷你模式绿色区域向上滑动无法显示更 duo 应用
   ![aw_q3](aw_q3.jpg)

### 最后

非常感谢您的应用让安卓更美好，如果有任何问题请回复我的邮箱，我将尽力解答。

<script src="jquery.min.js"></script>
<script>
$(function(){
var olvandel = $(".nav:eq(0)");
olvandel.parent().append(olvandel.children());
olvandel.remove();
var olnavfirst = $(".nav-level-2>ol");
olnavfirst.attr("class","nav");
$("h2").addClass("blockquote-center");
});
</script>
