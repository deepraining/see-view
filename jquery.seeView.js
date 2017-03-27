if (typeof jQuery === 'undefined') {
    throw new Error('jquery.seeView requires jQuery')
}

(function($) {

    /**
     * 绑定事件
     * @param obj
     * @param eventString 事件字符串
     * @param callback 回调函数
     */
    function bindEvent(obj, eventString, callback) {
        /**
         * 修复微信浏览器不支持函数 startsWith, 用slice函数代替
         */
        var noDelegate = eventString.slice(0, 1) == '!',
            eventStr = noDelegate ? eventString.slice(1) : eventString,
            eventStringArray = eventStr.split(/\s+/g),
            eventName = eventStringArray[0],
            elements;
        if (eventStringArray.length <= 1) {
            console.error("无法解析事件 " + eventString);
            return;
        }
        //把事件名移除
        eventStringArray.shift();
        elements = eventStringArray.join(' ');

        //window和document直接处理
        elements == "window" || elements == "document" ? (
            elements == "window" ? (
                $(window).on(eventName, function (e) {
                    callback.call(obj, e);
                })
            ) : (
                $(document).on(eventName, function (e) {
                    callback.call(obj, e);
                })
            )
        ) : (
            //不使用代理
            noDelegate ? (
                $(elements).on(eventName, function (e) {
                    callback.call(obj, e);
                })
            ) : (
                //有代理元素
                !!obj.el ? (
                    $(obj.el).on(eventName, elements, function (e) {
                        callback.call(obj, e);
                    })
                ) : (
                    //否则使用document
                    $(document).on(eventName, elements, function (e) {
                        callback.call(obj, e);
                    })
                )
            )
        );
    }

    /**
     * 处理事件监听
     * @param obj
     */
    function eventHandle(obj) {
        var events = obj.events;//事件集合
        Object.keys(events).map(function (key) {
            //绑定
            !!obj[events[key]] ? bindEvent(obj, key, obj[events[key]]) : (console.error("方法 " + events[key] + " 不存在"));
        });
    }

    $.seeView = function (obj) {
        eventHandle(obj);
    };

})( jQuery );