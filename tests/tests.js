test('getAll', function () {
    var q, a;

    q = $.urlparams('getAll');
    a = {};
    same(q, a, 'If you don\'t provide a URL, or the URL is undefined, window.location.search should be used as default URL');

    q = $.urlparams('getAll', '');
    a = {};
    same(q, a, 'Empty URL should return empty object');

    q = $.urlparams('getAll', 'someUrl');
    a = {};
    same(q, a, 'URL without parameters should return empty object');

    q = $.urlparams('getAll', 'someUrl?first');
    a = {first: ''};
    same(q, a, 'URL with empty first parameter should return object with the parameter name as property and an empty string as value');

    q = $.urlparams('getAll', 'someUrl?first=one');
    a = {first: 'one'};
    same(q, a, 'URL with one parameter should return object with the parameter name as property and the parameter value as value');

    q = $.urlparams('getAll', 'someUrl?first=one&second=two&third=three');
    a = {first: 'one', second: 'two', third: 'three'};
    same(q, a, 'URL with multiple parameters should return object with all parameters as properties');
});

test('get', function () {
    var q, a;

    q = $.urlparams('get', '', 'someUrl?first=one');
    a = undefined;
    same(q, a, 'Empty parameter name should return undefined');

    q = $.urlparams('get', '', '');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlparams('get', 'first', '');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlparams('get', 'second', 'someUrl?first=one');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlparams('get', 'empty', 'someUrl?empty');
    a = '';
    same(q, a, 'Search for empty parameter should return empty string');

    q = $.urlparams('get', 'first', 'someUrl?first=one&second=two');
    a = 'one';
    same(q, a, 'Value of existing parameter name should be returned as string (first parameter)');

    q = $.urlparams('get', 'second', 'someUrl?first=one&second=two');
    a = 'two';
    same(q, a, 'Value of existing parameter name should be returned as string (second parameter)');

    q = $.urlparams('get', 'FIRST', 'someUrl?first=one');
    a = 'one';
    same(q, a, 'Parameter name should be case insensitive');
});

test('exists', function () {
    var q, a;

    q = $.urlparams('exists', 'first', 'someUrl?first=one');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL');

    q = $.urlparams('exists', 'second', 'someUrl?first=one&second=two');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL');

    q = $.urlparams('exists', 'empty', 'someUrl?empty');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL, even if parameter has no value');

    q = $.urlparams('exists', '', '');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlparams('exists', '', 'someUrl');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlparams('exists', 'one', 'someUrl');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlparams('exists', 'second', 'someUrl?first=one');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');
});

test('examples', function () {
    var q, a;
    var exampleURL = 'http://example.com/?controller=user&action=delete&id=10&quick';

    q = $.urlparams('getAll', exampleURL);
    a = {controller: 'user', action: 'delete', id: '10', quick: ''};
    same(q, a, '');

    q = $.urlparams('get', 'controller', exampleURL);
    a = 'user';
    same(q, a, '');

    q = $.urlparams('exists', 'controller', exampleURL);
    a = true;
    same(q, a, '');
});
