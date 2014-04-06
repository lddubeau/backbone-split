define(['jquery', 'backbone', 'views/app'], function ($, Backbone) {

'use strict';

var Router = Backbone.Router.extend({
    routes: {
	'foo': 'foo',
	'bar': 'bar'
    },

    foo: function (param) {
        require(["views/foo"], function (view) {
            view.render();
        });
    },

    bar: function (param) {
        require(["views/bar"], function (view) {
            view.render();
        });
    }
});

function initialize() {
    new Router();
}

return { initialize: initialize };
});
