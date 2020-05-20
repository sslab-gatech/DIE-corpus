// 05bcc0b8a621315ae996916f3079516d847a9c12
// /home/soyeon/jsfuzz/js-samples/ChakraCore/fieldopts/finaltype-objheaderinlining2.js

var x = 0;
function test0() {
  function v2() {
    for (var v5 = 0; v5 < 3; v5++) {
      var v6 = { a: 0 };
      if (v5 % 2)
        v6.p = 0x41414141;
      Object.prototype.__defineSetter__.call(v6,new Proxy({}, {}),function () { 
      })
      v6.p = 0x42424242;
      // Crash because of assignment without size check
      v6.z = 0x43434343;
      v5=x;
    }
  }
  v2();
};
test0();
