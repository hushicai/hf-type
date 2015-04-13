/**
 * @file isBoolean
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isBoolean(val) {
            return val === true
                || val === false
                || Object.prototype.toString.call(val) === '[object Boolean]';
        }
        return isBoolean;
    }
);
