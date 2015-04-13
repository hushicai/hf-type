/**
 * @file isString
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isString(val) {
            return Object.prototype.toString.call(val) === '[object String]';
        }
        return isString;
    }
);
