//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  try {
    function f1() {
      class C {
        [f = 5]() {
          ;
        }

      }
    }

    f1();
  } catch (e) {
    ;
  }

  try {
    function f2() {
      class C {
        static [f = 5]() {
          ;
        }

      }
    }

    f2();
  } catch (e) {
    ;
  }

  try {
    function f3() {
      "use strict";

      class C {
        [f = 5]() {
          ;
        }

      }
    }

    f3();
  } catch (e) {
    ;
  }
}

t1();

function t2() {
  try {
    function f1() {
      var a = {};
      Object.defineProperty(a, 'b', {
        value: 5,
        writable: false
      });

      class C {
        [a.b = 6]() {
          ;
        }

      }
    }

    f1();
  } catch (e) {
    ;
  }

  try {
    function f2() {
      var a = {};
      Object.defineProperty(a, 'b', {
        value: 5,
        writable: false
      });

      class C {
        static [a.b = 6]() {
          ;
        }

      }
    }

    f2();
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  try {
    function f1() {
      var a = {
        get b() {
          return 5;
        }

      };

      class C {
        [a.b = 6]() {
          ;
        }

      }
    }

    f1();
  } catch (e) {
    ;
  }

  try {
    function f2() {
      var a = {
        get b() {
          return 5;
        }

      };

      class C {
        static [a.b = 6]() {
          ;
        }

      }
    }

    f2();
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  try {
    function f1() {
      var a = {};
      Object.preventExtensions(a);

      class C {
        [a.b = 5]() {
          ;
        }

      }
    }

    f1();
  } catch (e) {
    ;
  }

  try {
    function f2() {
      var a = {};
      Object.preventExtensions(a);

      class C {
        static [a.b = 5]() {
          ;
        }

      }
    }

    f2();
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  try {
    function f1() {
      class C {
        [delete Object.prototype]() {
          ;
        }

      }
    }

    f1();
  } catch (e) {
    ;
  }

  try {
    function f2() {
      class C {
        static [delete Object.prototype]() {
          ;
        }

      }
    }

    f2();
  } catch (e) {
    ;
  }

  try {
    function f3() {
      var a = 5;

      class C {
        [a < 6 ? delete Object.prototype : 5]() {
          ;
        }

      }
    }

    f3();
  } catch (e) {
    ;
  }

  try {
    function f4() {
      var a = 5;

      class C {
        static [a < 6 ? delete Object.prototype : 5]() {
          ;
        }

      }
    }

    f4();
  } catch (e) {
    ;
  }

  try {
    function f5() {
      var a = {};
      Object.preventExtensions(a);

      class C {
        [a && delete Object.prototype]() {
          ;
        }

      }
    }

    f5();
  } catch (e) {
    ;
  }

  try {
    function f6() {
      var a = {};
      Object.preventExtensions(a);

      class C {
        static [a && delete Object.prototype]() {
          ;
        }

      }
    }

    f6();
  } catch (e) {
    ;
  }

  try {
    function f7() {
      var a = {};
      Object.defineProperty(a, "x", {
        value: 5,
        configurable: false
      });

      class C {
        [delete a["x"]]() {
          ;
        }

      }
    }

    f7();
  } catch (e) {
    ;
  }

  try {
    function f8() {
      var a = {};
      Object.defineProperty(a, "x", {
        value: 5,
        configurable: false
      });

      class C {
        static [delete a["x"]]() {
          ;
        }

      }
    }

    f8();
  } catch (e) {
    ;
  }
}

t5();
