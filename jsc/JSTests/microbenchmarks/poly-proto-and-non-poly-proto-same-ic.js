function assert(b, m) {
  ;
}

function foo() {
  class C {
    constructor() {
      this.p0 = 0;
      this.p1 = 1;
      this.p2 = 2;
      this.p3 = 3;
      this.p4 = 4;
      this.p5 = 5;
      this.p6 = 6;
      this.p7 = 7;
      this.p8 = 8;
      this.p9 = 9;
      this.p10 = 10;
      this.p11 = 11;
      this.p12 = 12;
      this.p13 = 13;
      this.p14 = 14;
      this.p15 = 15;
      this.p16 = 16;
      this.p17 = 17;
      this.p18 = 18;
      this.p19 = 19;
      this.p20 = 20;
      this.p21 = 21;
      this.p22 = 22;
      this.p23 = 23;
      this.p24 = 24;
      this.p25 = 25;
      this.p26 = 26;
      this.p27 = 27;
      this.p28 = 28;
      this.p29 = 29;
      this.p30 = 30;
      this.p31 = 31;
      this.p32 = 32;
      this.p33 = 33;
      this.p34 = 34;
      this.p35 = 35;
      this.p36 = 36;
      this.p37 = 37;
      this.p38 = 38;
      this.p39 = 39;
    }

  }

  ;
  return new C();
}

let items = [];

for (let i = 0; i < 15; ++i) {
  items.push(foo());
}

function validate() {
  for (let i = 0; i < items.length; ++i) {
    item = items[i];
    item.p0 === 0;
    item.p1 === 1;
    item.p2 === 2;
    item.p3 === 3;
    item.p4 === 4;
    item.p5 === 5;
    item.p6 === 6;
    item.p7 === 7;
    item.p8 === 8;
    item.p9 === 9;
    item.p10 === 10;
    item.p11 === 11;
    item.p12 === 12;
    item.p13 === 13;
    item.p14 === 14;
    item.p15 === 15;
    item.p16 === 16;
    item.p17 === 17;
    item.p18 === 18;
    item.p19 === 19;
    item.p20 === 20;
    item.p21 === 21;
    item.p22 === 22;
    item.p23 === 23;
    item.p24 === 24;
    item.p25 === 25;
    item.p26 === 26;
    item.p27 === 27;
    item.p28 === 28;
    item.p29 === 29;
    item.p30 === 30;
    item.p31 === 31;
    item.p32 === 32;
    item.p33 === 33;
    item.p34 === 34;
    item.p35 === 35;
    item.p36 === 36;
    item.p37 === 37;
    item.p38 === 38;
    item.p39 === 39;
  }
}

let start = Date.now();

for (let i = 0; i < 10000; ++i) {
  validate();
}

if (false) {
  print(Date.now() - start);
}
