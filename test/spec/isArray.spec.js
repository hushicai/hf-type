/**
 * @file isArray spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var isArray = require('isArray');

        describe('isArray test suite', function () {
            it('isArray', function () {
                expect(typeof []).toBe('object');
                expect([] instanceof Array).toBe(true);

                var iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                var iWindow = iframe.contentWindow;
                iWindow.document.write('<script>var arr = [];</script>');
                expect(iWindow.arr instanceof Array).toBe(false);
                expect(iWindow.arr instanceof iWindow.Array).toBe(true);
                expect(iWindow.Array === Array).toBe(false);

                expect(isArray(123)).toBe(false);
                expect(isArray(true)).toBe(false);
                expect(isArray('xxx')).toBe(false);
                expect(isArray({})).toBe(false);
                expect(isArray(arguments)).toBe(false);
                expect(isArray([])).toBe(true);
                expect(isArray(new Array(1))).toBe(true);
                expect(isArray(iWindow.arr)).toBe(true);
            });
        });
    }
);
