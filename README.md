# see-view

A shortcut event binding for jquery, like backbone view.

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
