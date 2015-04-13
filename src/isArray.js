/**
 * @file isArray
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        // es5 `Array.isArray`
        var isArray = Array.isArray || function (val) {
            return Object.prototype.toString.call(val) === '[object Array]';
        };
        return isArray;
    }
);
