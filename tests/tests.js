test('getAll', function () {
    var q, a;

    q = $.urlParam('getAll');
    a = {};
    same(q, a, 'If you don\'t provide a URL, or the URL is undefined, window.location.search should be used as default URL');

    q = $.urlParam('getAll', '');
    a = {};
    same(q, a, 'Empty URL should return empty object');

    q = $.urlParam('getAll', 'someUrl');
    a = {};
    same(q, a, 'URL without parameters should return empty object');

    q = $.urlParam('getAll', 'someUrl?first');
    a = {first: ''};
    same(q, a, 'URL with empty first parameter should return object with the parameter name as property and an empty string as value');

    q = $.urlParam('getAll', 'someUrl?first=one');
    a = {first: 'one'};
    same(q, a, 'URL with one parameter should return object with the parameter name as property and the parameter value as value');

    q = $.urlParam('getAll', 'someUrl?first=one&second=two&third=three');
    a = {first: 'one', second: 'two', third: 'three'};
    same(q, a, 'URL with multiple parameters should return object with all parameters as properties');
});

test('get', function () {
    var q, a;

    q = $.urlParam('get', '', 'someUrl?first=one');
    a = undefined;
    same(q, a, 'Empty parameter name should return undefined');

    q = $.urlParam('get', '', '');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlParam('get', 'first', '');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlParam('get', 'second', 'someUrl?first=one');
    a = undefined;
    same(q, a, 'Search for non-existant parameter name should return undefined');

    q = $.urlParam('get', 'empty', 'someUrl?empty');
    a = '';
    same(q, a, 'Search for empty parameter should return empty string');

    q = $.urlParam('get', 'first', 'someUrl?first=one&second=two');
    a = 'one';
    same(q, a, 'Value of existing parameter name should be returned as string (first parameter)');

    q = $.urlParam('get', 'second', 'someUrl?first=one&second=two');
    a = 'two';
    same(q, a, 'Value of existing parameter name should be returned as string (second parameter)');

    q = $.urlParam('get', 'FIRST', 'someUrl?first=one');
    a = 'one';
    same(q, a, 'Parameter name should be case insensitive');
});

test('exists', function () {
    var q, a;

    q = $.urlParam('exists', 'first', 'someUrl?first=one');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL');

    q = $.urlParam('exists', 'second', 'someUrl?first=one&second=two');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL');

    q = $.urlParam('exists', 'empty', 'someUrl?empty');
    a = true;
    same(q, a, 'Should return true when parameter name exists in URL, even if parameter has no value');

    q = $.urlParam('exists', '', '');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlParam('exists', '', 'someUrl');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlParam('exists', 'one', 'someUrl');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');

    q = $.urlParam('exists', 'second', 'someUrl?first=one');
    a = false;
    same(q, a, 'Should return false when parameter name doesn\'t exist in URL');
});