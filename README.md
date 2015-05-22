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
	//=> { login: 'sindresorhus', id: 170270, ... }
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
