define(['jquery', 'underscore',	'backbone'], function ($, _, Backbone) {
'use strict';

var AppView = Backbone.View.extend({
    el: '#foo',
    counter: 0,

    render: function () {
        this.$el.text("foo rendered " + this.counter++);
    }

});

return new AppView();
});
