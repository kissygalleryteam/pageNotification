## 综述

版本1.0.0

![http://gtms03.alicdn.com/tps/i3/TB1mYvEHXXXXXbsXpXXifb32pXX-220-160.png](http://gtms03.alicdn.com/tps/i3/TB1mYvEHXXXXXbsXpXXifb32pXX-220-160.png)

notification组件的制作思路是满足大众化普遍的需求力求使用简单；

notification组件分为两个部分，notice容器和notice；你可以设置notice容器的宽度来定义每条notice的宽度，高度是auto；

一条notice可以有3种形式：1、只有内容 2、有标题和内容 3、有标题、内容和图片；你也可以定制你的notice形式， 组件提供了相应的支持；

notification组件pc上支持到ie8+, 对于ie7-浏览器没测试， 未知支持情况。

注： 如果你的notice中有图片，请预加载你的图片，优化体验； 当然这不是必须的。

欢迎大家反馈，对于特殊应用场景有提供了方式去扩展， 如果给你带来不便，非常抱歉，希望您能反馈并指教(@粟一)。

## 初始化组件
```javascript
S.use('kg/notification/1.0.0/index', function (S, Notification) {
    var notification = new Notification();
});
```


## API
** 对于var notification = new Notification(options)来说：**

### options是个object，其中属性有：
属性名 | 类型 | 必填 | 默认值 | 说明
------------ | -------------| -------------| -------------| -------------
effect | string | N | 'fadeInDown' | 弹窗出现的效果， 默认是’fadeInDown’，效果类似bootstrap的modal效果；
cls | string | N | 无 | 用户自定义class，可以有多个class，之间用空格分隔，会在组件的容器将加入这个class，方便用户定制UI，如果你想让notice容器放置在左边，cls中可以加入'left'；
stayTime | int | N | 3000 | notice停留的时间，默认是3000（单位毫秒），数据类型为整数；
gapTime | int | N |  1000 | notice之间消失的间隔时间，默认是1000（单位毫秒），数据类型为整数；
boxEffect | string | N | 无 | notice出现的效果, 还可以取值'ls'、'rs';
boxCls | string | N | 'primary'  | notice的class,你可以自己定义，也可以采用组件中的，已经提供primary、success、warning、danger、info； 每一种表示一种notice风格；
mPartTitle | string | N | 无 | notice的标题，对应的值会放置在.title中；如果没填，那notice就不会有标题；
mPartMsg | string | Y | 无  | notice的内容，对应的值会放置在.msg中；
mPartImg | string | N | 无 | notice的图片，图标会显示在右侧，长宽分别是48px * 48px, 你也可以自己定制；
tPartHtml | string | N | 无 | notice的顶部html
mPartHtml | string | N | 无 | notice的中部html
bPartHtml | string | N | 无 | notice的底部html

    ** 以上以. 开始的字符串，比如 .title是指class=“title”的结点 **
 


### notification对象实例上的属性：
* $container： notice容器对象

    ** $开头的属性都是kissy封装的dom结点。 **


### notification对象实例上的方法：
* notify(param, key)：
    * param：必填参数，可以是字符串或者object， 如果是字符串会认为这个notice只有内容会就值放置在.msg中;
如果是object, 这个对象将中可以有boxCls、mPartImg、mPartTitle、mPartMsg， 这些参数的含义见以上关于属性的说明; 
你还可以自己制作的notice结点，你的notice结点的根节点请加入class：vc-notify-box，这时候key=true；
	  * key：非必填参数， 如果你自己制作notice结点，请设置key为true。；






