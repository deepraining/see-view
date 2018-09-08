
module.exports = seeView => {
    seeView({
        events: {
            '!click #test-1, #test-4': 'onTest'
        },
        onTest: function(e) {
            console.log(e);
            this.log('test-1, test-4');
        },
        log: function(str) {
            console.log(str);
        }
    });

    seeView({
        events: {
            'click .test-2, .test-5': 'onTest'
        },
        onTest: function(e) {
            console.log(e);
            this.log('test-2, test-5');
        },
        log: function(str) {
            console.log(str);
        }
    });

    seeView({
        el: 'body',
        events: {
            'click [data-type]': 'onTest'
        },
        onTest: function(e) {
            console.log(e);
            this.log('test-3, test-6');
        },
        log: function(str) {
            console.log(str);
        }
    });

};
