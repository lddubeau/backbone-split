'use strict';

require.config({
    shim: {
	underscore: {
	    exports: '_'
	}
    },
    paths: {
	jquery: '../bower_components/jquery/jquery',
	underscore: '../bower_components/underscore/underscore',
	backbone: '../bower_components/backbone/backbone'
    }
});

require([
	'backbone',
	'routers/router'
], function (Backbone, router) {
	router.initialize();
	Backbone.history.start();
});
