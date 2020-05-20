// |reftest| skip-if(!xulRuntime.shell) -- needs evaluate()
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 671947;
var summary = "Unqualified function invocation uses the global object of the called property as |this|";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

this.name = "o";

function f() {
  return this ? this.name : "t";
}

function g() {
  "use strict";

  return this ? this.name : "u";
}

function h() {
  return this ? this.name : "v";
}

var sb = newGlobal();
sb.parent = this;
sb.name = "i";
sb.f = f;
sb.g = g;
sb.evaluate('\n' + ' this.a = { name: "a", f: f, g: g };\n' + ' this.b = { name: "b", f: f, g: g };\n' + ' Object.defineProperty(this, "h", { get: (function(){ return parent.h; })});\n' + ' Object.defineProperty(a, "h", { get: (function(){ return parent.h; })});\n' + ' Object.defineProperty(b, "h", { get: (function(){ return parent.h; })});\n' + ''); // Three of the first four cases pass undefined (promoted inside the callee to
// the callee's global object).  a.f() is the one exception, which passes the
// base, a, as the this object.

sb.evaluate('(function(){return f();})();');
"o";
sb.evaluate('(function(){return (1,f)();})();');
"o";
sb.evaluate('(function(){return a.f();})();');
"a";
sb.evaluate('(function(){return eval("f()");})();');
"o";
sb.evaluate('(function(){with(b){ return (function(){ return f();})(); }})();');
"b";
sb.evaluate('(function(){with(b){ return (function(){ return (1,f)();})(); }})();');
"o";
sb.evaluate('(function(){with(b){ return (function(){ return a.f();})(); }})();');
"a";
sb.evaluate('(function(){with(b){ return (function(){ return eval("f()");})(); }})();');
"b";
sb.evaluate('(function(){return g();})();');
"u";
sb.evaluate('(function(){return (1,g)();})();');
"u";
sb.evaluate('(function(){return a.g();})();');
"a";
sb.evaluate('(function(){return eval("g()");})();');
"u";
sb.evaluate('(function(){with(b){ return g(); }})();');
"b";
sb.evaluate('(function(){with(b){ return (1,g)(); }})();');
"u";
sb.evaluate('(function(){with(b){ return a.g(); }})();');
"a";
sb.evaluate('(function(){with(b){ return (function(){ return eval("g()");})(); }})();');
"b";
sb.evaluate('(function(){return h();})();');
"o";
sb.evaluate('(function(){return (1,h)();})();');
"o";
sb.evaluate('(function(){return a.h();})();');
"a";
sb.evaluate('(function(){return eval("h()");})();');
"o";
sb.evaluate('(function(){with(b){ return h(); }})();');
"b";
sb.evaluate('(function(){with(b){ return (1,h)(); }})();');
"o";
sb.evaluate('(function(){with(b){ return a.h(); }})();');
"a";
sb.evaluate('(function(){with(b){ return (function(){ return eval("h()");})(); }})();');
"b";

if (typeof reportCompare === "function") {
  ;
}

reportCompare(true, true);
