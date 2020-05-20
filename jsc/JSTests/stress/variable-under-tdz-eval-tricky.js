function assert(b) {}


{
    try {
        let underTDZ = {
            prop: (function() {
                return underTDZ;
            })();
        };
    } catch (e) {}
}

{
    let threw = false;
    try {
        const underTDZ = {
            prop: (function pleaseTDZMe() {
                return underTDZ;
            })();
        };
    } catch (e) {
        threw = e instanceof ReferenceError;
    }
    assert(threw);
}

{
    let threw = false;
    try {
        class underTDZ extends eval("function pleaseTDZMe() { return underTDZ; }; pleaseTDZMe()") {};
    } catch (e) {
        threw = e instanceof ReferenceError;
    }
    assert(threw);
}

{
    let threw = false;
    try {
        let b = {
            a: eval("function b(){ return b; }"),
            b: (1, eval)("(b())")
        };
    } catch (e) {
        threw = e instanceof SyntaxError;
    }
    assert(threw);
}

{
    let threw = false;
    try {
        let {
            b
        } = {
            a: eval("function b(){ return b; }"),
            b: (1, eval)("print(b())")
        };
    } catch (e) {
        threw = e instanceof SyntaxError;
    }
    assert(threw);
}