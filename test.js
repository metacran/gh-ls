'use strict';
var assert = require('assert');
var ghls = require('./');

it('should download the file list from master', function () {
    ghls('metacran/gh-ls', function (err, list) {
	var files = list.tree.map(function(x) { return x.path; });
	assert(files.indexOf('package.json') >= 0)
    })
    ghls('metacran/gh-ls', { 'sha': 'master' }, function (err, list) {
	var files = list.tree.map(function(x) { return x.path; });
	assert(files.indexOf('package.json') >= 0)
    })
})

it('should error on non-existing repos', function() {
    ghls('metacran/this-obviously-does-not-exist', function(err, list) {
	assert(err);
    })
})
