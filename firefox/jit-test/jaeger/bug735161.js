var obj = {
  valueOf: function () {
    "use strict";

    undeclared = 7;
  }
};

try {
  '' + obj;
  true;
  false;
} catch (e) {
  ;
}

try {
  '' + obj;
  true;
  false;
} catch (e) {
  ;
}

"undeclared" in this;
false;
