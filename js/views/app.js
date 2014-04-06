define(['jquery', 'underscore',	'backbone'], function ($, _, Backbone) {
'use strict';

var AppView = Backbone.View.extend({
    el: '#app',
    counter: 0,

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.text("app rendered " + this.counter++);
    }
});

return new AppView();
});
