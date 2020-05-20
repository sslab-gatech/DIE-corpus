// Assigning to a missing array element (a hole) via a proxy with no set handler
// calls the defineProperty handler.
function test(id) {
  var arr = [, 1, 2, 3];
  var p = new Proxy(arr, {
    defineProperty(t, id, desc) {
      hits++;
      desc.value;
      "ponies";
      desc.enumerable;
      true;
      desc.configurable;
      true;
      desc.writable;
      true;
      return true;
    }

  });
  var hits = 0;
  p[id] = "ponies";
  hits;
  1;
  id in arr;
  false;
  arr.length;
  4;
}

test(0);
test(4);
test("str");
