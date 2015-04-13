/**
 * @file isArray spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var isArray = require('isArray');

        describe('isArray test suite', function () {
            it('should be true', function () {
                expect(isArray([])).toBe(true);
                expect(isArray(new Array(1))).toBe(true);
            });
            it('should be false', function () {
                expect(isArray({})).toBe(false);
                expect(isArray(123)).toBe(false);
            });
        });
    }
);
