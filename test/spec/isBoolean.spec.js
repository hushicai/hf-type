/**
 * @file isBoolean spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var isBoolean = require('isBoolean');

        describe('isBoolean test suite', function () {
            it('isBoolean', function () {
                expect(isBoolean(true)).toBe(true);
                expect(isBoolean(false)).toBe(true);
                /* eslint-disable no-new-wrappers */
                expect(isBoolean(new Boolean(true))).toBe(false);
                expect(isBoolean(new Boolean(false))).toBe(false);
                /* eslint-enable no-new-wrappers */
                expect(isBoolean(1)).toBe(false);
            });
        });
    }
);
