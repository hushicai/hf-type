/**
 * @file entry
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        return {
            isArray: require('./src/isArray'),
            isBoolean: require('./src/isBoolean'),
            isDate: require('./src/isDate'),
            isError: require('./src/isError'),
            isNull: require('./src/isNull'),
            isNumber: require('./src/isNumber'),
            isObject: require('./src/isObject'),
            isRegExp: require('./src/isRegExp'),
            isString: require('./src/isRequire'),
            isUndefined: require('./src/isRequired')
        };
    }
);
