# see-view

A shortcut event binding for jquery, like backbone view.

## Quick start.

```
const seeView = require('see-view');
```

### How to use.

```
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

- Use a blank space to split eventName and selectors.
- `eventName`: Event name, like `click`, `focus`.
- `selectors`: Use `,` to split multiple selectors, like `#id`, `#id, .class, tagName`, `#id tagName, .class tagName`.
- If you do not want to use `event delegating`, add `!` before `eventName`.
