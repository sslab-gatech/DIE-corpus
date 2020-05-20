//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var {
    get
  } = {
    get: 1
  };
  let {
    set
  } = {
    set: 2
  };
  console.log(1, get);
  console.log(2, set);
  const {
    get: x
  } = {
    get: 3
  };
  var {
    set: y
  } = {
    set: 4
  };
  console.log(3, x);
  console.log(4, y);
}

test1();

function test2() {
  let a1 = 1;
  ({
    x: {
      a1 = 2
    }
  } = {
    x: {}
  });
  console.log(a1);
}

test2();

function test3() {
  {
    var x3, x4;
    let {
      x: x1
    } = {
      x: 20
    };
    console.log(x1, 20);
    let {
      x2
    } = {
      x2: 20
    };
    console.log(x2, 20);
    ({
      x: x3
    } = {
      x: 20
    });
    console.log(x3, 20);
    ({
      x4
    } = {
      x4: 20
    });
    console.log(x4, 20);
  }
  {
    let {
      x: x1
    } = {};
    console.log(x1, undefined);
    let {
      x2
    } = {
      zee: 20
    };
    console.log(x2, undefined);
    let x3, x4;
    ({
      x: x3
    } = {});
    console.log(x3, undefined);
    ({
      x4
    } = {
      foobar: 20
    });
    console.log(x4, undefined);
  }
  {
    let {
      x: x1,
      y: y1,
      z: z1
    } = {
      x: 11,
      y: 22,
      z: 33,
      foo: 44
    };
    console.log(x1, 11);
    console.log(y1, 22);
    console.log(z1, 33);
    let x2, y2, z2;
    ({
      x: x2,
      y: y2,
      z: z2
    } = {
      x: 11,
      bar: 44,
      y: 22,
      z: 33
    });
    console.log(x2, 11);
    console.log(y2, 22);
    console.log(z2, 33);
  }
  {
    var y1, x1;
    var z = ({
      x: x1
    } = ({
      y: y1
    } = {
      x: 10,
      y: 20
    }));
    console.log(x1, 10);
    console.log(y1, 20);
  }
}

test3();

function test4() {
  let {
    x: a = 1
  } = {
    x: undefined
  };
  console.log(a, 1);
  let {
    x: a1 = 1
  } = {
    x: null
  };
  console.log(a1, null);
  let {
    x: x1 = 1,
    y: y1 = 2,
    z: z1 = 3
  } = {};
  console.log(x1, 1);
  console.log(y1, 2);
  console.log(z1, 3);
  let x2, y2, z2;
  ({
    x: x2 = 1,
    y: y2 = 2,
    z: z2 = 3
  } = {
    z: 11
  });
  console.log(x2, 1);
  console.log(y2, 2);
  console.log(z2, 11);
  let {
    x: {
      y: z
    } = {
      y: 21
    }
  } = {};
  console.log(z, 21);
  let {
    x: {
      y: {
        z: {
          k: k2 = 31
        } = {
          k: 21
        }
      } = {
        z: {
          k: 20
        }
      }
    } = {
      y: {
        z: {}
      }
    }
  } = {
    x: {
      y: {
        z: {}
      }
    }
  };
  console.log(k2, 31);
  ({
    x: {
      y: {
        z: {
          k: k2 = 31
        } = {
          k: 21
        }
      } = {
        z: {
          k: 20
        }
      }
    } = {
      y: {
        z: {}
      }
    }
  } = {
    x: {
      y: {
        z: undefined
      }
    }
  });
  console.log(k2, 21);
}

test4();

function test5() {
  let {
    1: x1,
    0: y1
  } = [11, 22];
  let {
    0: x2
  } = {
    "0": 33
  };
  let {
    function: x3
  } = {
    function: 44
  };
  console.log(x1, 22);
  console.log(y1, 11);
  console.log(x2, 33);
  console.log(x3, 44);
}

test5();

function test6() {
  {
    let key = 'x',
        x2;
    let {
      [key]: x1
    } = {
      x: 20
    };
    console.log(x1, 20);
    ({
      [key]: x2
    } = {
      x: 20
    });
    console.log(x2, 20);
    ({
      [`abc${"def"}`]: x2
    } = {
      abcdef: 30
    });
    console.log(x2, 30);
  }
  {
    let [i, j] = [0, 0];

    function getName() {
      if (i++ == 0) {
        return 'x';
      } else {
        return 'y';
      }
    }

    function getData() {
      console.log(i, 0);

      if (j++ == 0) {
        return 'this is x';
      } else {
        return 'this is y';
      }
    }

    let {
      [getName()]: x1,
      [getName()]: y1
    } = {
      x: getData(),
      y: getData()
    };
    console.log(x1, 'this is x');
    console.log(y1, 'this is y');
  }
}

test6();

function test7() {
  let a = {};
  ({
    x: a.x
  } = {
    x: 10
  });
  console.log(10, a.x);
  ({
    x: a['x']
  } = {
    x: 20
  });
  console.log(20, a["x"]);
  var obj = {
    x: 10,
    y: 20
  };

  function foo() {
    return obj;
  }

  ;
  ({
    x: foo().x,
    y: foo().y
  } = {
    x: 20,
    y: 30
  });
  console.log(20, obj.x);
  console.log(30, obj.y);
  ({
    x: foo().x,
    y: foo().y
  } = {
    x: 201,
    y: 301
  });
  console.log(201, obj.x);
  console.log(301, obj.y);
}

test7();

function test8() {
  let [...[a]] = [1, 2, 3];
  console.log(a, 1);
  let [...{
    1: x1
  }] = [1, 2, 3];
  console.log(x1, 2);
  let [...[, ...[[x2]]]] = [[1, 2], [3, 4], 5];
  console.log(x2, 3);
}

test8();

function test9() {
  let {
    first: f1,
    second: [, {
      y
    }]
  } = {
    first: 'first',
    second: [{
      y: 20,
      z: 30
    }, {
      y: 21,
      z: 31
    }, {
      y: 22,
      z: 32
    }]
  };
  console.log(f1, 'first');
  console.log(y, 21);
  let metadata = {
    title: "Foobar",
    copies: [{
      locale: "en",
      title: "first"
    }, {
      locale: "de",
      title: "second"
    }, {
      locale: "ps",
      title: "third"
    }],
    url: "http://foobar.com"
  };
  let {
    title: englishTitle,
    copies: [{
      locale: myLocale
    }]
  } = metadata;
  console.log(englishTitle, 'Foobar');
  console.log(myLocale, 'en');
  ({
    copies: [, {
      locale: myLocale
    }]
  } = metadata);
  console.log(myLocale, 'de');
  let [{
    x
  }, {
    z
  }] = [{
    x: 1,
    z: 20
  }, {
    x: 2,
    z: 30
  }, {
    x: 3,
    z: 40
  }];
  console.log(x, 1);
  console.log(z, 30);
  [{
    x: x
  },, {
    z: z
  }] = [{
    x: 11,
    z: 201
  }, {
    x: 21,
    z: 301
  }, {
    x: 31,
    z: 401
  }];
  console.log(x, 11);
  console.log(z, 401);
}

test9();

function test10() {
  let i = 0,
      data = [20, 30];

  for (let {
    x: item
  } of [{
    x: 20
  }, {
    x: 30
  }]) {
    console.log(item, data[i++]);
  }

  function data2() {
    return {
      x: [{
        y: [20]
      }, {
        y: [30]
      }]
    };
  }

  i = 0;

  for ({
    y: [item]
  } of data2().x) {
    console.log(item, data[i++]);
  }

  i = 0;
  data = [10, 12, 14, 16, 18];

  for (let {
    x,
    y
  } = {
    x: 10,
    y: 20
  }; x < y; ({
    x: x
  } = {
    x: x + 2
  })) {
    console.log(x, data[i++]);
  }

  let y2 = 20;
  i = 0;
  data = [18, 16, 14, 12, 10];

  while (({
    y: y2
  } = {
    y: y2 - 2
  })) {
    console.log(y2, data[i++]);

    if (y2 == 10) {
      break;
    }
  }
}

test10();
