function* g() {
  ;
}

;
o = g();
o.next();

function TestException() {
  ;
}

;

(() => o.throw(new TestException()))();

TestException();
