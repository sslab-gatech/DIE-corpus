console.log("This test checks the behavior of computed property names in object literals.");
var a = "propertyName";

function runTest(test) {
  test = "(" + test + ")";
  test;
  {
    'use strict';

    test;
  }

  (function () {
    'use strict';

    return test;
  })();
}

runTest("{[a]: true}.propertyName");
runTest("{[(1,a)]: true}.propertyName");
runTest("{[a+1]: true}.propertyName1");
runTest("{propertyName: false, [a]: true}.propertyName");
runTest("{[a]: false, propertyName: true}.propertyName");
runTest("{get propertyName(){ return false; }, [a]: true}.propertyName");
runTest("{[a]: false, get propertyName(){ return true; }}.propertyName");
runTest("{__proto__: {get propertyName(){ return false; }}, [a]: true}.propertyName");
runTest("{__proto__: {get propertyName(){ return false; }}, propertyName: true}.propertyName");
a = 0;
runTest("{[a]: true}[0]");
runTest("{[a+1]: true}[1]");
runTest("{0: false, [a]: true}[0]");
runTest("{[a]: false, 0: true}[0]");
runTest("{get '0'(){ return false; }, [a]: true}[0]");
runTest("{[a]: false, get '0'(){ return true; }}[0]");
runTest("{__proto__: {get '0'(){ return false; }}, [a]: true}[0]");

function runTestThrow(test) {
  test = "(" + test + ")";

  try {
    test;
  } catch (e) {
    ;
  }

  try {
    'use strict';

    test;
  } catch (e) {
    ;
  }

  try {
    (function () {
      'use strict';

      return test;
    })();
  } catch (e) {
    ;
  }
}

a = "propertyName";
runTestThrow("{[1,a]: true}.propertyName");
runTestThrow("{propertyName: false, [1,a]: true}.propertyName");
runTestThrow("{[1,a]: false, propertyName: true}.propertyName");
runTestThrow("{get propertyName(){ return false; }, [1,a]: true}.propertyName");
