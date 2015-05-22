'use strict';
var ghGot = require('gh-got');

module.exports = function (repo, params, cb) {

    if (typeof repo !== 'string') {
	throw new Error('`repo` required');
    }
    
    if (typeof params === 'function') {
	cb = params;
	params = { };
    }

    params.sha = params.sha || 'master';

    ghGot('repos/' + repo + '/git/trees/' + params.sha + '?recursive=1', {
	token: params.token,
	headers: {
	    'user-agent': 'https://github.com/metacran/gh-ls'
	}
    }, function (err, data) {
	if (err && err.code === 404) {
	    cb(new Error('Repo/sha `' + repo + '/' + params.sha +
			 '` doesn\'t exist'));
	    return;
	}
	
	if (err) {
	    cb(err);
	    return;
	}
	
	cb(null, data);
    });
};
