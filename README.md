urlparams
====================

Important links
---------------------
* [Home page / Source](https://github.com/arex1337/urlparams/)
* [Issues / Bug tracker / Suggest improvements](https://github.com/arex1337/urlparams/issues)
* [Wiki](https://github.com/arex1337/urlparams/wiki)

Feel free to contact me at [tal@lystadonline.no](mailto:tal@lystadonline.no)


Description
---------------------
This jQuery plugin makes it easier to access URL parameters from Javascript.


Installation
---------------------
Download the .js file in [the lib directory](https://github.com/arex1337/urlparams/tree/master/lib/) and put it in your page. You're ready to go.


API
---------------------
`$.urlparams('getAll');`  
Returns an object representation of all the current URL parameters (using window.location.search as the URL)

`$.urlparams('getAll', urlString);`  
Returns an object representation of all the current URL parameters (using the provided urlString parameter as the URL)

`$.urlparams('get', paramString);`  
Returns the string value of the provided URL parameter name (using window.location.search as the URL)

`$.urlparams('get', paramString, urlString);`  
Returns the string value of the provided URL parameter name (using the provided urlString parameter as the URL)

`$.urlparams('exists', paramString);`  
Returns a boolean value indicating if the provideded URL parameter name exists in the URL (using window.location.search as the URL)

`$.urlparams('exists', paramString, urlString);`  
Returns the string value of the provided URL parameter name (using the provided urlString parameter as the URL)


Examples
---------------------
If you use this code while on the URL http://example.com/?controller=user&action=delete&id=10&quick  
`$.urlparams('getAll')` will return the object `{controller: 'user', action: 'delete', id: '10', quick: ''}`  
`$.urlparams('get', 'controller')` will return the string value `'user'`  
`$.urlparams('exists', 'controller')` will return the boolean value `true`

If you want to extract URL parameters from your own string you can specify the urlString parameter in all methods.  
If you have an image `<img src="generate_chart?type=pie&height=146&width=200" />`,  
`$.urlparams('get', 'height', $('#someChart').attr('src'))` would return the string value `'146'`


Tests
---------------------
In [the tests directory](https://github.com/arex1337/urlparams/tree/master/tests/) you will find [QUnit](http://docs.jquery.com/QUnit) based unit tests.


License
---------------------
Copyright (c) 2010 T. Alexander Lystad <tal@lystadonline.no>
Licensed under the GPL license, see http://www.gnu.org/licenses/gpl-3.0.html