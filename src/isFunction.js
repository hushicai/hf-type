/**
 * @file isFunction
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function isFunction(val) {
            return typeof val === 'function';
        }
        return isFunction;
    }
);
