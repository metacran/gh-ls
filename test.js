'use strict';
var assert = require('assert');
var ghls = require('./');

it('should download the file list from master by default', function (done) {
    ghls('metacran/gh-ls', function (err, list) {
	assert(!err);
	var files = list.tree.map(function(x) { return x.path; });
	assert(files.indexOf('package.json') >= 0);
	done();
    })
})

it('should use the branch if specified', function(done) {
    ghls('metacran/gh-ls', { 'sha': 'master' }, function (err, list) {
	assert(!err);
	var files = list.tree.map(function(x) { return x.path; });
	assert(files.indexOf('package.json') >= 0);
	done();
    })
})

it('should error on non-existing repos', function(done) {
    ghls('metacran/this-obviously-does-not-exist', function(err, list) {
	assert(err);
	done();
    })
})
