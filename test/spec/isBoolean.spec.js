/**
 * @file isBoolean spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var isBoolean = require('isBoolean');

        describe('isBoolean test suite', function () {
            it('should be true', function () {
                expect(isBoolean(true)).toBe(true);
                expect(isBoolean(false)).toBe(true);
                /* eslint-disable no-new-wrappers */
                expect(isBoolean(new Boolean(true))).toBe(true);
                expect(isBoolean(new Boolean(false))).toBe(true);
                /* eslint-enable no-new-wrappers */
            });
            it('should be false', function () {
                expect(isBoolean(1)).toBe(false);
            });
        });
    }
);
