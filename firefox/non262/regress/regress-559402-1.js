/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var expect = "No error";
var actual = expect;

if (typeof options == "function") {
    var opts = options();
    if (!/\bstrict\b/.test(opts))
        if (!/\bwerror\b/.test(opts))
}

try {
    eval('function foo() { "use strict"; }');
} catch (e) {
    actual = '' + e;
}

reportCompare(expect, actual, "ok");