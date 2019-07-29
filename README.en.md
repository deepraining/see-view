# see-view

[中文文档](./README.md)

A shortcut way of event binding for JQuery, like Backbone.View.

```
npm install see-view --save
```

```
import seeView from 'see-view';

seeView({
  events: {
    'eventName selectors': 'methodName', // default use event delegating
    '!eventName selectors': 'methodName', // do not use event delegating.
  },
  methodName(e) {
    // do something
  },
});
```

- `eventName`: event name, `click, focus, ...`
- `selectors`: use `,` to split multiple selectors, `#id`, `#id, .class, tagName`, `#id tagName, .class tagName`
- use spaces to split eventName and selectors
- if you do not want to use event delegating, add `!` before `eventName`
