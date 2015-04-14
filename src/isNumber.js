/**
 * @file isNumber
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isNumber(val) {
            return typeof val === 'number';
        }
        return isNumber;
    }
);
