
'use strict';

var $ = require('jquery');

var logger = require('./util/logger');
var bind = require('./bind');

/**
 *
 * @param obj
 *     {
 *         events: {
 *
 *         },
 *         method:
 *     }
 */
module.exports = obj => {
    var events = obj.events;

    for (var attr in events) {
        if (events.hasOwnProperty(attr)) {
            var method = obj[events[attr]];
            if (method) bind(obj, attr, method);
            else logger.error(`no such a method: ${method}`)
        }
    }
};