console.log("This tests that bytecode code generation doesn't crash when it encounters odd cases of an ignored result.");

function emptyStatementDoWhileTest() {
  do {
    ;
  } while (false);

  {
    ;
  }
  return true;
}

emptyStatementDoWhileTest();

function debuggerDoWhileTest() {
  do {
    debugger;
  } while (false);

  {
    ;
  }
  return true;
}

debuggerDoWhileTest();

function continueDoWhileTest() {
  var i = 0;

  do {
    i++;
  } while (i < 10);

  {
    do {
      continue;
    } while (false);

    {
      ;
    }
  }
  return true;
}

continueDoWhileTest();

function breakDoWhileTest() {
  var i = 0;

  do {
    i++;
  } while (i < 10);

  {
    do {
      continue;
    } while (false);

    {
      ;
    }
  }
  return true;
}

breakDoWhileTest();

function tryDoWhileTest() {
  do {
    try {
      ;
    } catch (o) {
      ;
    }
  } while (false);

  {
    ;
  }
  return true;
}

tryDoWhileTest();
