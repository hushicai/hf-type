/**
 * @file isNumber
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isNumber(val) {
            return Object.prototype.toString.call(val) === '[object Number]';
        }
        return isNumber;
    }
);
