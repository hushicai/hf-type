/**
 * @file isArray
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isArray(val) {
            return Object.prototype.toString.call(val) === '[object Array]';
        }
        return isArray;
    }
);
