# gh-user [![Build Status](https://travis-ci.org/metacran/gh-ls.svg?branch=master)](https://travis-ci.org/metacran/gh-ls)

> Get list of files form a GitHub repository


## Install

```sh
$ npm install --save gh-ls
```


## Usage

```js
var ghls = require('gh-ls');

ghls('metacran/gh-ls', function (err, list) {
    console.log(list);
    // =>  { sha: '01a870392179ec5fdd59d99d58cfb89bc751df31',
    // =>    url: 'https://api.github.com/repos/metacran/gh-ls/git/trees/01a870392179ec5fdd59d99d58cfb89bc751df31',
    // =>    tree:
    // =>    [ { path: '.gitignore',
    // =>  	  mode: '100644',
    // =>  	  type: 'blob',
    // =>  	  sha: '07e6e472cc75fafa944e2a6d4b0f101bc476c060',
    // =>  	  size: 14,
    // =>  	  url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/07e6e472cc75fafa944e2a6d4b0f101bc476c060' },
    // =>  	{ path: '.travis.yml',
    // =>  	  mode: '100644',
    // =>  	  type: 'blob',
    // =>     sha: 'dedfc07f240bb03f9e07d8a5ed89983db52781ff',
    // =>  	  size: 72,
    // =>  	  url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/dedfc07f240bb03f9e07d8a5ed89983db52781ff' },
    // =>  	{ path: 'README.md',
    // =>  	  mode: '100644',
    // =>  	  type: 'blob',
    // =>  	  sha: '1445ec385e1479cc60957f81f8393e0c8085a675',
    // =>  	  size: 1092,
    // =>     url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/1445ec385e1479cc60957f81f8393e0c8085a675' },
    // =>  	{ path: 'index.js',
    // =>  	  mode: '100644',
    // =>  	  type: 'blob',
    // =>  	  sha: 'fbff262b9b3d507ff858ad87b0515e4a28fa3ed1',
    // =>  	  size: 700,
    // =>  	  url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/fbff262b9b3d507ff858ad87b0515e4a28fa3ed1' },
    // =>  	{ path: 'package.json',
    // =>  	  mode: '100644',
    // =>  	  type: 'blob',
    // =>  	  sha: '541e21012186ceaf61a804e1798c629feda86fc6',
    // =>  	  size: 564,
    // =>  	  url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/541e21012186ceaf61a804e1798c629feda86fc6' },
    // =>  	{ path: 'test.js',
    // =>     mode: '100644',
    // =>  	  type: 'blob',
    // =>  	  sha: 'b720394932711476abb9d31be4fa4d8a6c291a37',
    // =>  	  size: 633,
    // =>  	  url: 'https://api.github.com/repos/metacran/gh-ls/git/blobs/b720394932711476abb9d31be4fa4d8a6c291a37' } ],
    // =>     truncated: false }
});
```


## API

### ghls(repo, [params], callback)

#### repo

*Required*  
Type: `string`

GitHub repository.

#### params

Type: `object`  

Optional parameters:
* `token` Type: `string`.  
  GitHub [personal access token](https://github.com/settings/tokens/new).
* `sha` Type `string`.  
  Branch to list, defaults to `master`.

#### callback(err, list)

##### list

Type: `object`

Various [file and directory data](https://developer.github.com/v3/git/trees/#response).

## See also

* [gh-user](https://github.com/sindresorhus/gh-user)
* [gh-avatar](https://github.com/sindresorhus/gh-avatar)
* [gh-got](https://github.com/sindresorhus/gh-got)

## License

MIT © [Gabor Csardi](http://gaborcsardi.org)
