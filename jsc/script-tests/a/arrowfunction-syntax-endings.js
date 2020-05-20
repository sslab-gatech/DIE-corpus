console.log("Tests for ES6 arrow function endings");

var afEOL = x => x + 1;

result = afEOL(12);
afEOL(12);

try {
  x => x + 1;
} catch (e) {
  ;
}

var afEOLTxt = 'x=>x+1' + String.fromCharCode(10);
afEOLTxt;

var f = function () {
  var result = 0;
  var afEOF;

  afEOF = x => x * 10000 + x * 1000 - x * 10000 - x * 1000 + x;

  result = afEOF(12);
  result = result + afEOF(13);
  result = result + afEOF(14);
  return result;
};

f();

var af = x => x * 2;

console.log("eval('var af = x=>x*2')");
af(10);

var af1 = x => x * 3,
    af2 = x => x * 4;

console.log("eval('var af1 = x=>x*3, af2=x=>x*4')");
af1(10);
af2(10);

var af3 = x => x * 3;

console.log("eval('var af1 = x=>x*3;')");
af3(10);

var af4 = x => x * 3;

console.log("eval('var af4 = x=>(x*3)')");
af4(10);

var af5 = x => {
  return x * 3;
};

console.log("eval('var af5 = x=> { return x*3; }')");
af5(10);
var successfullyParsed = true;
