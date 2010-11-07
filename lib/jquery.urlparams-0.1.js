/*
 * urlparams (0.1)
 * by T. Alexander Lystad (tal@lystadonline.no)
 *
 * This jQuery plugin makes it easier to access URL parameters from Javascript.
 *
 * Copyright (c) 2010 T. Alexander Lystad <tal@lystadonline.no>
 * Licensed under the GPL license, see http://www.gnu.org/licenses/gpl-3.0.html
 *
 * NOTE: This script requires jQuery to work. Download jQuery at jquery.com
 *
 */
(function($) {
    var methods = {
        getAll: function(string) {
            var object = {};
            if (typeof string === 'undefined') {
                string = window.location.search;
            }
            if (string.indexOf('?') >= 0) {
                var hash;
                var hashes = string.slice(string.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    if (hash[0].length > 0) {
                        if (typeof hash[1] === 'undefined') {
                            object[hash[0].toLowerCase()] = '';
                        }
                        else {
                            object[hash[0].toLowerCase()] = hash[1];
                        }
                    }
                }
            }
            return object;
        },
        get: function(param, string) {
            var object = $.urlparams('getAll', string);
            return object[param.toLowerCase()];
        },
        exists: function(param, string) {
            var value = $.urlparams('get', param.toLowerCase(), string);
            return (typeof value !== 'undefined')
        }
    };
    $.urlparams = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on $.urlparams');
            return false;
        }
    };
})(jQuery)