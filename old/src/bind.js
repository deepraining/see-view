
'use strict';

var $ = require('jquery');

var logger = require('./util/logger');

module.exports = (obj, attr, method) => {
    /**
     * if use event delegate
     * @type {boolean}
     */
    var noDelegate = attr.slice(0, 1) == '!';

    /**
     * real attr
     * @type {Buffer|Blob|ArrayBuffer|Array.<T>|string}
     */
    var cleanAttr = noDelegate ? attr.slice(1) : attr;
    /**
     * 'click #id, .class, tagName'
     * ->
     * ['click', '#id,', '.class,', 'tagName']
     * @type {Array}
     */
    var attrArray = cleanAttr.split(/\s+/g);

    if (attrArray.length < 2) {
        logger.throwError(`invalid event key: ${attr}`);
        return;
    }

    /**
     * event name, like click
     * @type {*}
     */
    var eventName = attrArray[0];
    attrArray.shift();

    /**
     * all selectors
     * @type {string}
     */
    var selectors = attrArray.join(' ');

    if (selectors == 'window') {
        $(window).on(eventName, (e) => {
            method.call(obj, e);
        });
    }
    else if (selectors == 'document') {
        $(document).on(eventName, (e) => {
            method.call(obj, e);
        });
    }
    else if (noDelegate) {
        $(selectors).on(eventName, (e) => {
            method.call(obj, e);
        });
    }
    else if (obj.el) {
        $(obj.el).on(eventName, selectors, (e) => {
            method.call(obj, e);
        });
    }
    else {
        $(document).on(eventName, selectors, (e) => {
            method.call(obj, e);
        });
    }
};
