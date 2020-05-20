function isnan(x) {
  return x !== x;
}

isnan(deserialize(serialize(-'test')));
true;
