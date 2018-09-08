/*!
 * 
 *     see-view v0.1.1
 * 
 *     https://github.com/senntyou/see-view
 * 
 *     @senntyou <jiangjinbelief@163.com>
 * 
 *     2018-05-19 11:20:46
 *     
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["seeView"] = factory(require("jquery"));
	else
		root["seeView"] = factory(root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var prefix = 'see-view: ';

module.exports = {
    log: function log(str) {
        console.log(prefix + str);
    },
    info: function info(str) {
        console.info(prefix + str);
    },
    warn: function warn(str) {
        console.warn(prefix + str);
    },
    error: function error(str) {
        console.error(prefix + str);
    },
    throwError: function throwError(str) {
        throw new Error(prefix + str);
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var $ = __webpack_require__(0);

var logger = __webpack_require__(1);
var bind = __webpack_require__(3);

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
module.exports = function (obj) {
    var events = obj.events;

    for (var attr in events) {
        if (events.hasOwnProperty(attr)) {
            var method = obj[events[attr]];
            if (method) bind(obj, attr, method);else logger.error('no such a method: ' + method);
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var $ = __webpack_require__(0);

var logger = __webpack_require__(1);

module.exports = function (obj, attr, method) {
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
        logger.throwError('invalid event key: ' + attr);
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
        $(window).on(eventName, function (e) {
            method.call(obj, e);
        });
    } else if (selectors == 'document') {
        $(document).on(eventName, function (e) {
            method.call(obj, e);
        });
    } else if (noDelegate) {
        $(selectors).on(eventName, function (e) {
            method.call(obj, e);
        });
    } else if (obj.el) {
        $(obj.el).on(eventName, selectors, function (e) {
            method.call(obj, e);
        });
    } else {
        $(document).on(eventName, selectors, function (e) {
            method.call(obj, e);
        });
    }
};

/***/ })
/******/ ]);
});