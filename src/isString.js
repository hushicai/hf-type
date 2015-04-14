/**
 * @file isString
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isString(val) {
            return typeof val === 'string';
        }
        return isString;
    }
);
