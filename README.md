# A short cut view of jquery, like backbone view.

## use

### 1. 加载脚本
```
<script src="jquery.js"></script>
<script src="jquery.seeView.js"></script>
```
### 2. 加载配置
```
$.seeView({
    //事件代理元素，默认是document
    el: "body",
    events: {
        //重中之重，元素与事件之间使用空格分隔，多个事件之间用逗号分隔，且不能有空格
        //一个事件，一个监听对象，默认使用代理
        "click #id": "haha",
        //前面加一个感叹号表示不使用代理
        "!focus tagName": "haha",
        //二级元素，也使用代理
        "click .class tagName": "haha",
        //多个事件
        "click,focus #id": "haha",
        //多个事件，不使用代理
        "!click,focus tagName": "haha",
        //多个元素
        "click .class, tagName, #id .class tagName": "haha"
    },
    haha: function(e) {

    }
});
```

说明

* el: 事件代理元素，默认是document
* events: 事件总集，与backbone基本一致。如果不想使用代理，可在事件前面加上 "!"
