# A short cut event binding for jquery, like backbone view.

## quick start

## quick start

### 1. load resources

```
var seeView = require('see-view');
seeView({...});

// or
 var $ = require('jquery');
$.seeView({...});
```

or load scripts directly

```
<script src="path/to/jquery"></script>
<script src="path/to/jquery.seeView"></script>
<script>
seeView({...});
// or
$.seeView({...});
</script>
```

### 2. how to use

```
seeView({
    el: void 0, // delegate element, default is document.body
    events: {
        'eventName selectors': 'methodName',
        // do not use delegating
        '!eventName selectors': 'methodName',
    },
    methodName: (e) => {
        // do something
    }
});
```

* use a blank space to split eventName and selectors
* `eventName`: event name, like `click`, `focus`
* `selectors`: use `,` to split multi selectors, like `#id`, `#id, .class, tagName`, `#id tagName, .class tagName`
* if you do not want to use `event delegating`, you add `!` before `eventName`

## [demo code](./example)