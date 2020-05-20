var outer = "unmodified";

function f(v) {
  if (v + "") {
    ({
      [outer = "modified"]: v
    } = v);
  }
}

outer;
"unmodified";
f(true);
outer;
"modified";
outer = "unmodified";
f({});
outer;
"modified";
outer = "unmodified";

(() => f(null))();

TypeError;
outer;
"unmodified";

(() => f(undefined))();

TypeError;
outer;
"unmodified";

function g(v) {
  if (v + "") {
    ({
      [{
        toString() {
          outer = "modified";
          return 0;
        }

      }]: v
    } = v);
  }
}

outer = "unmodified";
g(true);
outer;
"modified";
outer = "unmodified";
g({});
outer;
"modified";
outer = "unmodified";

(() => g(undefined))();

TypeError;
outer;
"unmodified";

(() => g(null))();

TypeError;
outer;
"unmodified";
