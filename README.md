# see-view

[English Documentation](./README.en.md)

一个 JQuery 事件绑定的快捷方式，类似 Backbone.View.

```
npm install see-view --save
```

```
import seeView from 'see-view';

seeView({
  events: {
    'eventName selectors': 'methodName', // 默认使用事件代理
    '!eventName selectors': 'methodName', // 不使用事件代理
  },
  methodName(e) {
    // do something
  },
});
```

- `eventName`: 事件名称, `click, focus, ...`
- `selectors`: 用 `,` 分隔多个元素选择器, `#id`, `#id, .class, tagName`, `#id tagName, .class tagName`
- 用空格分隔事件名称与元素选择器
- 如果你不想使用事件代理，可以添加 `!` 到 `eventName` 的前面
