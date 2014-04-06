define(['jquery', 'underscore',	'backbone'], function ($, _, Backbone) {
'use strict';

var AppView = Backbone.View.extend({
    el: '#bar',
    counter: 0,

    render: function () {
        this.$el.text("bar rendered " + this.counter++);
    }

});

return new AppView();
});
