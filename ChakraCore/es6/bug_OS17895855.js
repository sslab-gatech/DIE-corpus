//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test1() {
    var l = a => '0' in [123]
    l.toString();
    l();
}
test1();

function test2() {
    for (var a = () => 'pass' in []) {
        ;
    }
    a();

    for (var a2 = () => 'pass' in [123]) {
        console.log(a2);
    }
    console.log(a2);
}
test2();

function test3() {
    for (var b = () => 'pass' in [] in []) {
        ;
    }
    b();

    for (var b2 = () => 'pass' in '0' in [123]) {
        ;
    }
    b2();
}
test3();
