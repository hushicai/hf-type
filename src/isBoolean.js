/**
 * @file isBoolean
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isBoolean(val) {
            return typeof val === 'boolean';
        }
        return isBoolean;
    }
);
