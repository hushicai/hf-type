/**
 * @file isDate
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isDate(val) {
            return Object.prototype.toString.call(val) === '[object Date]';
        }
        return isDate;
    }
);
