class badBase {}

badBase;
TypeError;

class badSub extends class {} {}

badSub;
TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
