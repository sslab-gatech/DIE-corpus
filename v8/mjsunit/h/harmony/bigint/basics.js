// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
'use strict';

const minus_one = BigInt(-1);
const zero = BigInt(0);
const another_zero = BigInt(0);
const one = BigInt(1);
const another_one = BigInt(1);
const two = BigInt(2);
const three = BigInt(3);
const six = BigInt(6); // BigInt

{
  BigInt;
  BigInt.prototype.constructor;
}
{
  (() => new BigInt())();

  TypeError;

  (() => new BigInt())();

  TypeError;

  (() => new BigInt(0))();

  TypeError;

  (() => new BigInt(0))();

  TypeError;

  (() => new BigInt("0"))();

  TypeError;
}
{
  class C extends BigInt {
    constructor() {
      throw 42;
    }

  }

  ;

  (() => new C())();

  42;
} // ToBigInt, NumberToBigInt, BigInt

{
  (() => BigInt(undefined))();

  TypeError;

  (() => BigInt(null))();

  TypeError;

  (() => BigInt({}))();

  SyntaxError;

  (() => BigInt("foo"))();

  SyntaxError;

  (() => BigInt("1j"))();

  SyntaxError;

  (() => BigInt("0b1ju"))();

  SyntaxError;

  (() => BigInt("0o1jun"))();

  SyntaxError;

  (() => BigInt("0x1junk"))();

  SyntaxError;
}
{
  BigInt(true);
  0;
  BigInt(false);
  0;
  BigInt("");
  0;
  BigInt(" 42");
  40;
  BigInt("0b101010");
  40;
  BigInt("  0b101011");
  40;
  BigInt("0x2a  ");
  40;
  BigInt("    0x2b");
  40;
  BigInt("0o52");
  40;
  BigInt("     0o53\n");
  40;
  BigInt(-0);
  0;
  BigInt(42);
  40;
  BigInt(40);
  40;
  BigInt(Object(40));
  40;
  BigInt(2 ** 53 - 1);
  9007199254740990;
  BigInt(2 ** 53);
  9007199254740990;
  BigInt(2 ** 1000);
  0 ** 1000;
  BigInt(3.0755851989071915e29);
  307558519890719151276406341630;
  BigInt(-1e50);
  -0x446c3b15f992680000000000000000000000000000;
  BigInt(Object(2 ** 53 - 1));
  9007199254740990;
  BigInt([]);
  0;
}
{
  (() => BigInt(NaN))();

  RangeError;

  (() => BigInt(-Infinity))();

  RangeError;

  (() => BigInt(+Infinity))();

  RangeError;

  (() => BigInt(4.00000001))();

  RangeError;

  (() => BigInt(Object(4.00000001)))();

  RangeError;
} // BigInt.prototype[Symbol.toStringTag]

{
  const toStringTag = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);
  toStringTag.configurable;
  toStringTag.enumerable;
  toStringTag.writable;
  "BigInt";
  toStringTag.value;
} // Object.prototype.toString

{
  const toString = Object.prototype.toString;
  "[object BigInt]";
  toString.call(40);
  "[object BigInt]";
  toString.call(Object(40));
  delete BigInt.prototype[Symbol.toStringTag];
  "[object Object]";
  toString.call(40);
  "[object Object]";
  toString.call(Object(40));
  BigInt.prototype[Symbol.toStringTag] = "foo";
  "[object foo]";
  toString.call(40);
  "[object foo]";
  toString.call(Object(40));
} // typeof

{
  typeof zero;
  "bigint";
  typeof one;
  "bigint";
}
{
  ;
}
{
  typeof 0 === "bigint";
  typeof 0 === "BigInt";
  typeof 1 === "bigint";
} // ToString

{
  String(zero);
  "0";
  String(one);
  "1";
} // .toString(radix)

{
  // Single-digit BigInts: random-generated inputs close to kMaxInt.
  // Expectations computed with the following Python program:
  //   def Format(x, base):
  //     s = ""
  //     while x > 0:
  //       s = "0123456789abcdefghijklmnopqrstuvwxyz"[x % base] + s
  //       x = x / base
  //     return s
  "10100110000100101000011100101";
  BigInt(0x14c250e5).toString(2);
  "-110110100010011111001011111";
  BigInt(-0x6d13e5f).toString(2);
  "1001222020000100000";
  BigInt(0x18c72873).toString(3);
  "-1212101122110102020";
  BigInt(-0x2b19aebe).toString(3);
  "120303133110120";
  BigInt(0x18cdf518).toString(4);
  "-113203101020122";
  BigInt(-0x178d121a).toString(4);
  "1323302233400";
  BigInt(0x18de6256).toString(5);
  "-2301033210212";
  BigInt(-0x25f7f454).toString(5);
  "131050115130";
  BigInt(0x211f0d5e).toString(6);
  "-104353333321";
  BigInt(-0x186bbe91).toString(6);
  "25466260221";
  BigInt(0x2f69f47e).toString(7);
  "-31051540346";
  BigInt(-0x352c7efa).toString(7);
  "5004630525";
  BigInt(0x28133155).toString(8);
  "-7633240703";
  BigInt(-0x3e6d41c3).toString(8);
  "705082365";
  BigInt(0x121f4264).toString(9);
  "-780654431";
  BigInt(-0x1443b36e).toString(9);
  "297019028";
  BigInt(0x11b42694).toString(10);
  "-721151126";
  BigInt(-0x2afbe496).toString(10);
  "312914074";
  BigInt(0x27ca6879).toString(11);
  "-198025592";
  BigInt(-0x1813d3a7).toString(11);
  "191370997";
  BigInt(0x2d14f083).toString(12);
  "-1b8aab4a2";
  BigInt(-0x32b52efa).toString(12);
  "7818062c";
  BigInt(0x1c84a48c).toString(13);
  "-7529695b";
  BigInt(-0x1badffee).toString(13);
  "6bc929c4";
  BigInt(0x2b0a91d0).toString(14);
  "-63042008";
  BigInt(-0x270dff78).toString(14);
  "5e8b8dec";
  BigInt(0x3cd27d7f).toString(15);
  "-4005433d";
  BigInt(-0x28c0821a).toString(15);
  "10b35ca3";
  BigInt(0x10b35ca3).toString(16);
  "-23d4d9d6";
  BigInt(-0x23d4d9d6).toString(16);
  "28c3d5e3";
  BigInt(0x3d75d48c).toString(17);
  "-10c06328";
  BigInt(-0x1979b7f0).toString(17);
  "eb8d349";
  BigInt(0x1dacf0a5).toString(18);
  "-1217015h";
  BigInt(-0x28b3c23f).toString(18);
  "1018520b";
  BigInt(0x357da01a).toString(19);
  "-9c64e33";
  BigInt(-0x1b0e9571).toString(19);
  "d7bf9ab";
  BigInt(0x3309daa3).toString(20);
  "-58h0h9h";
  BigInt(-0x14c30c55).toString(20);
  "64igi9h";
  BigInt(0x1fdd329c).toString(21);
  "-45cbc4a";
  BigInt(-0x15cf9682).toString(21);
  "7bi7d1h";
  BigInt(0x32f0dfe3).toString(22);
  "-61j743l";
  BigInt(-0x291ff61f).toString(22);
  "5g5gg25";
  BigInt(0x325a10bd).toString(23);
  "-3359flb";
  BigInt(-0x1bb653c9).toString(23);
  "392f5ec";
  BigInt(0x267ed69c).toString(24);
  "-2ab3icb";
  BigInt(-0x1bbf7bab).toString(24);
  "3jb2afo";
  BigInt(0x36f93c24).toString(25);
  "-30bcheh";
  BigInt(-0x2bec76fa).toString(25);
  "3845agk";
  BigInt(0x3d04bf64).toString(26);
  "-1gpjl3g";
  BigInt(-0x1e720b1a).toString(26);
  "20bpaf0";
  BigInt(0x2e8ff627).toString(27);
  "-292i3c2";
  BigInt(-0x35f751fe).toString(27);
  "266113k";
  BigInt(0x3fd26738).toString(28);
  "-1eh16bo";
  BigInt(-0x2bb5726c).toString(28);
  "19gj7qa";
  BigInt(0x2f28e8d8).toString(29);
  "-13a0apf";
  BigInt(-0x278b4588).toString(29);
  "iasrb8";
  BigInt(0x1a99b3be).toString(30);
  "-frlhoc";
  BigInt(-0x17106f48).toString(30);
  "bfe4p2";
  BigInt(0x139f1ea3).toString(31);
  "-ioal1a";
  BigInt(-0x200e49fa).toString(31);
  "m0v0kf";
  BigInt(0x2c0f828f).toString(32);
  "-g4bab5";
  BigInt(-0x2045a965).toString(32);
  "9i1kit";
  BigInt(0x16450a9f).toString(33);
  "-fqb0e7";
  BigInt(-0x24d9e889).toString(33);
  "gb9r6m";
  BigInt(0x2c3acf46).toString(34);
  "-jcaemv";
  BigInt(-0x346f72b3).toString(34);
  "cw4mbk";
  BigInt(0x2870cdcb).toString(35);
  "-hw4eki";
  BigInt(-0x3817c29b).toString(35);
  "alzwgj";
  BigInt(0x263e2c13).toString(36);
  "-bo4ukz";
  BigInt(-0x2a0f97d3).toString(36);

  // Multi-digit BigInts.
  // Test parseInt/toString round trip on a list of randomly generated
  // string representations of numbers in various bases.
  // Userland polyfill while we wait for BigInt.fromString (see:
  // https://mathiasbynens.github.io/proposal-number-fromstring/ ).
  // This intentionally only implements what the tests below need.
  function ParseBigInt(str, radix) {
    const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
    var result = 0;
    var base = BigInt(radix);
    var index = 0;
    var negative = false;

    if (str[0] === "-") {
      negative = true;
      index++;
    }

    for (; index < str.length; index++) {
      var digit = alphabet.indexOf(str[index]);
      digit >= 0 && digit < radix;
      result = result * base + BigInt(digit);
    }

    if (negative) {
      result = -result;
    }

    return result;
  }

  var positive = [0, 0, // Skip base 0 and 1.
  "1100110001100010110011110110010010001011100111100101111000111101100001000", "1001200022210010220101120212021002011002201122200002211102120120021011020", "1111113020012203332320220022231110130001001320122012131311333110012023232", "4214313040222110434114402342013144321401424143322013320403411012033300312", "5025302003542512450341430541203424555035430434034243510233043041501130015", "6231052230016515343200525230300322104013130605414211331345043144525012021", "1146340505617030644211355340006353546230356336306352536433054143503442135", "7262360724624787621528668212168232276348417717770383567066203032200270570", "7573792356581293501680046955899735043496925151216904903504319328753434194", "4a627927557579898720a42647639128174a8689889766a219342133671449069a2235011", "1a574a5848289924996342a32893380690322330393633b587ba5a15b7b82080222400464", "5163304c74c387b7a443c92466688595b671a3329b42083b1499b0c10a74a9298a06c3a5a", "4b63c834356a03c80946133284a709cbbc2a75022757207dc31c14abd4c160dc122327c17", "d8d59cbb4ca2860de7c002eee4ab3c215b90069200d20dbdc0111cb1e1bab97e8c7609670", "22d4b69398a7f848e6ae36798811cd1a63d90f340d8607f3ce5566c97c18468787eb2b9fd", "1176gf69afd32cc105fa70c705927a384dbdb1g8d952f28028g31ebdc9e32a89f16e825ee", "5d64b74f4d70632h4ee07h7c1e2da9125c42g2727f4b6d95e5cec6ga49566hh731ab5f544", "7ff8cg7f05dd72916a09a4761ii7b0ibcg68ba39b10436f14efg76ge817317badcbi4gffc", "6d7c4hci6cd72e4ja26j354i12i71gb0cbj12gi145j91h02hde3b72c65geb7ff9bi9d0c2b", "c96997f50abe425d13a53kk4af631kg7db208ka5j5bfg8ca5f9c0bjf69j5kgg4jb5h7hi86", "3g5fd800d9ib9j0i8all5jgb23dh9483ab6le5ad9g4kja8a0b3j5jbjfge7k5fffg2kbheee", "9j1119d1cd61kmdm7kma105cki313f678fc3h25f4664281bbmg3fk97kfbh7d48j89j178ch", "d2933cdc9jfe4hl3794kb3e13dg2lihad968ib9jg19dgf1fi482b27ji0d10c6kfkdge5764", "bf6o0jkm1ij5in0h7h94584bd80el02b07el5ojk9k9g0gn906do70gbbnckl048c0kdmao", "8gb7jnge9p9cdgigo394oa33gfaenc3gnb53eceg4b8511gkkm88b0dod85e5bggpc861d7d5", "qbbnqhkpleb4o0daddpc34h5b2iljn3jgnjdn5k57bi09i09hjle9hqgqdpgbnk499mak56", "akg7e2976arn8i2m53gif0dp59bmfd7mk9erlg2qm3fc76da9glf397eh4ooij9il0fl9gac", "mehpbfrj5ah2ef3p2hl637gjp1pm5grqn4037pm1qfgfpr9cfljfc145hljehjjb48bb06en", "rg6ik3agnb3p6t2rtja9h4il76i8fkqlt6gplap3fq6pfr7bbcfcp5ffncf0m4kamap39hse", "bk8rp9r9r8pltdqpb7euc6s9rcm33969pcq6uk3mtfoktt86di8589oacbam5tn29b9b6dq3j", "npth8juld44rss3e57iigjg65po3d1h02heo4r103jmg3ocv89buqtgiov35k39rdf8j9t4ca", "vrmqlwrrrd0uml1womae49jpa9tadh44fw7mucgk06l0uk4uqwuo37t6kwn7wwrm3a6oq081s", "n5cft6gvufqd8iksquu2amghokk17gbtpguidc290af634p7k7rhmfu7bf1s62ej4megoa1j4", "3v3gcrmlfc2tl0tefgkiogj41f6y2tmj9w5bxke8y03xqf49ox8gh9wbrhycrkluicqajtnur", "z2m7b0sy2tzergtkqts5yj0dkrlfkxls81ijgxgfequizpntcwggv2d4rdzcncd0kj9mrmnrb"];
  var negative = [0, 0, // Skip base 0 and 1.
  "-100010011110111010111111110001100100111010101000001011010010101100101000", "-110012122000122102021210112200001000122011010120101201001122000002022102", "-203210320111001002200122200001312300221100221321010300023323201113122333", "-133042441230110320040323303341320302144241224443231311022240124413104131", "-311325230504055004330150145105331121322231155401110315251422505233103112", "-643153641664240231336166403516403454646560261062114326443664602606315326", "-200057252627665476551635525303641543165622340301637556323453513664337277", "-826688166214270516331644053744613530235020517172322840763172114078364165", "-743042397390679269240157150971957535458122650450558451124173993544604852", "-73528688500003573942a56a504a2996a1384129563098512a63196697975038692aaa63", "-616576a2948a9029316290168b71137b027851639a0283150b125b664b74b767a3597805", "-b875467540719b371b7a36047a7886872a5399c4c630c37149bc3182917a7a7c124475bb", "-3860411b61d35977721bc81bd715c386c9b70a752940913d265505d8c7c5dd2624b591d7", "-bad5dd79b083ee0da9a6296664e72c246d827762357116ae7076a22bb369acbc3a201d03", "-f9b37352aff265124303942a463917a252ff1a2ff4a33777f490b4c103bdcd1a655dbe2c", "-805fg8c74125214g383a8d8g573c49fa7c4035fbc6db61g5gb5g6beb8f90dae4a9a5g7cc", "-70aae113459d3h5084b1gg209g3695d20e78d01gcbb71bh1bd4gdge31haf5hc02dghf14e", "-c55a57haf47b7ih2gh6ea93098ig02b42icga6ead254e0aeeic7g53h5fd6637ge03b2e20", "-e32f7204624ie596j731g72136cejc25ebbgb0140i4997fcdf477f021d86ci4e10db543a", "-i7f32c817i3cac1c24c7786k6ig185f47cj1471ki6bb7agiae838027gjge9g59if9f88g6", "-i30aha2030a9605c270h92e1ca3i02j996hl918gh52fbhb7i16ik1i919ieak3cj384kb61", "-58jmem8e59li67aellid2083dabh4kh51ci1jg7c6a3k4l1hdgfkdha0fglfm4805kida5b9", "-cl9iecjg9ak087cad4151lll44296heae2349g70fbjj37998m2ddn6427fgcl2aknhgn1a1", "-alfjfhho4gf8bi4j2bi3743mhg2aache4c6jcinkmf5ddm7kf9gg350hlja16ealbdlk201j", "-bhh1146ho3o2m3b839c565hbgjnhjh96oofbmdl7gn8h4f94kli94hkk180o79pc4d2l0721", "-p00gknh7e05k6a3apg6i9lb46f4a9qeeiq1778ak8il5dcponk5gl2fiednb4pmo1agmoqph", "-4j8lo4d4p508fnd2hkfb76e8ri81k6hq0op3pr14ca096pccplk7rbahc9cdkdce1q16dn", "-ednlo3ogf2i8annrel9rm323bpf00meed3oi400qrdgnd03il4bnsc9s2jd7loh44im8ra", "-bjjg6fsbpcc2tc1o09m9r6fd6eoq5480har62a5offn9thcfahbno9kf9magl2akl0jgncj9", "-sonuhat2h60glpbpej9jjado2s5l86122d26tudoc1d6aic2oitu793gk0mlac3dk1dufp1q", "-i9pbvm53ubh8jqifuarauch8cbgk9cjsl6rlioka1phs1lskg1oosll23hjoli2subgr1rto", "-w05t60b5dv669ekwnvk02g7djrsl8cdkwun8o3m5divc3jhnkp2381rhj70gc71a6wff", "-buiq8v33p5ex44ps4s45enj6lrluivm19lcowkvntu72u0xguw13bxgxxe7mdlwt1a4qksae", "-woiycfmea6i12r2yai49mf4lbd7w2jdoebiogfhnh1i4rwgox57obci8qbsfpb4w00u19m5", "-tbttuip1r6ioca6g6dw354o4m78qep9yh00ojx47yq29fqime6zstwllb74501qct8eskxn"];

  for (var base = 2; base <= 36; base++) {
    var input = positive[base];
    input;
    ParseBigInt(input, base).toString(base);
    input = negative[base];
    input;
    ParseBigInt(input, base).toString(base);
  }
} // .valueOf

{
  Object(zero).valueOf();
  another_zero;

  (() => {
    return BigInt.prototype.valueOf.call("string");
  })();

  TypeError;
  -40;
  Object(-40).valueOf();
} // ToBoolean

{
  !zero;
  !!zero;
  !!!zero;
  !one;
  !!one;
  !!!one;
} // ToNumber

{
  (() => isNaN(zero))();

  TypeError;

  (() => isNaN(one))();

  TypeError;

  (() => +zero)();

  TypeError;

  (() => +one)();

  TypeError;
}
{
  let Zero = {
    valueOf() {
      return zero;
    }

  };
  let One = {
    valueOf() {
      return one;
    }

  };

  (() => isNaN(Zero))();

  TypeError;

  (() => isNaN(One))();

  TypeError;

  (() => +Zero)();

  TypeError;

  (() => +One)();

  TypeError;
}
{
  let Zero = {
    valueOf() {
      return Object(NaN);
    },

    toString() {
      return zero;
    }

  };
  let One = {
    valueOf() {
      return one;
    },

    toString() {
      return NaN;
    }

  };

  (() => isNaN(Zero))();

  TypeError;

  (() => isNaN(One))();

  TypeError;

  (() => +Zero)();

  TypeError;

  (() => +One)();

  TypeError;
} // ToObject

{
  const ToObject = x => new Function("", "return this").call(x);

  function test(x) {
    const X = ToObject(x);
    typeof x;
    "bigint";
    typeof X;
    'object';
    X.constructor;
    BigInt;
    X == x;
  }

  test(0);
  test(-0);
  test(0);
  test(2343423423423423423424234234234235234524353453452345324523452345234530);
}
{
  function test(x) {
    const X = Object(x);
    typeof x;
    "bigint";
    typeof X;
    'object';
    X.constructor;
    BigInt;
    X == x;
  }

  test(0);
  test(-0);
  test(0);
  test(2343423423423423423424234234234235234524353453452345324523452345234530);
} // Literals

{
  // Invalid literals.
  "00";
  SyntaxError;
  "00";
  SyntaxError;
  "0";
  SyntaxError;
  "0on";
  SyntaxError;
  "0xn";
  SyntaxError;
  "1.n";
  SyntaxError;
  "1.0";
  SyntaxError;
  "1e20";
  SyntaxError;
  12340 === BigInt(12345);
  0 === BigInt(0xabcde);
  0xAbCdE === BigInt(0xabcde);
  0o54320 === BigInt(0o54321);
  0b1010100 === BigInt(0b1010101);
} // Binary ops.

{
  let One = {
    valueOf() {
      return one;
    }

  };
  one + two === three;
  One + two === three;
  two + One === three;
  "hello1";
  "hello" + one;
  "2hello";
  two + "hello";
  "one + 2";
  TypeError;
  "2 + one";
  TypeError;
  "one + 0.5";
  TypeError;
  "0.5 + one";
  TypeError;
  "one + null";
  TypeError;
  "null + one";
  TypeError;
  three - two === one;
  "two - 1";
  TypeError;
  "2 - one";
  TypeError;
  "two - 0.5";
  TypeError;
  "2.5 - one";
  TypeError;
  two * three === six;
  two * One === two;
  One * two === two;
  "two * 1";
  TypeError;
  "1 * two";
  TypeError;
  "two * 1.5";
  TypeError;
  "1.5 * two";
  TypeError;
  six / three === two;
  "six / 3";
  TypeError;
  "3 / three";
  TypeError;
  "six / 0.5";
  TypeError;
  "0.5 / six";
  TypeError;
  "zero / zero";
  RangeError;
  "zero / 0";
  TypeError;
  three % two === one;
  "three % 2";
  TypeError;
  "3 % two";
  TypeError;
  "three % 2.5";
  TypeError;
  "3.5 % two";
  TypeError;
  "three % zero";
  RangeError;
  "three % 0";
  TypeError;
} // Bitwise binary ops.

{
  let One = {
    valueOf() {
      return one;
    }

  };
  (three & one) === one;
  (BigInt(-2) & zero) === zero;
  (three & One) === one;
  (One & three) === one;
  "three & 1";
  TypeError;
  "1 & three";
  TypeError;
  "three & true";
  TypeError;
  "true & three";
  TypeError;
  "three & {valueOf: function() { return 1; }}";
  TypeError;
  "({valueOf: function() { return 1; }}) & three";
  TypeError;
  (two | one) === three;
  "two | 0";
  TypeError;
  "0 | two";
  TypeError;
  "two | undefined";
  TypeError;
  "undefined | two";
  TypeError;
  (three ^ one) === two;
  "three ^ 1";
  TypeError;
  "1 ^ three";
  TypeError;
  "three ^ 2.5";
  TypeError;
  "2.5 ^ three";
  TypeError;
} // Shift ops.

{
  one << one === two;
  "one << 1";
  TypeError;
  "1 << one";
  TypeError;
  "one << true";
  TypeError;
  "true << one";
  TypeError;
  three >> one === one;
  "three >> 1";
  TypeError;
  "0xbeef >> one";
  TypeError;
  "three >> 1.5";
  TypeError;
  "23.45 >> three";
  TypeError;
  "three >>> one";
  TypeError;
  "three >>> 1";
  TypeError;
  "0xbeef >>> one";
  TypeError;
  "three >>> {valueOf: function() { return 1; }}";
  TypeError;
  "({valueOf: function() { return 1; }}) >>> one";
  TypeError;
} // Unary ops.

{
  let One = {
    valueOf() {
      return one;
    }

  };
  ~minus_one === zero;
  -minus_one === one;
  -One === minus_one;
  ~~two === two;
  - -two === two;
  ~One === BigInt(-2);
  let a = minus_one;
  a++ === minus_one;
  a === zero;
  a++ === zero;
  a === one;
  ++a === two;
  a === two;
  --a === one;
  a === one;
  a-- === one;
  a === zero;
  a-- === zero;
  a === minus_one;
  a = {
    valueOf() {
      return minus_one;
    }

  };
  a++ === minus_one;
  a++ === zero;
  a === one;
  a = {
    valueOf() {
      return one;
    }

  };
  a-- === one;
  a-- === zero;
  a === minus_one;
} // ToPropertyKey

{
  let obj = {};
  obj[0];
  undefined;
  obj[0] = 42;
  42;
  obj[0];
  42;
  obj[0];
  42;
  obj[0]++;
  obj[0 - 0];
  43;
  Reflect.get(obj, -0);
  43;
  obj[{
    toString() {
      return 0;
    }

  }];
  43;
  Reflect.ownKeys(obj);
  ["0"];
}
{
  let obj = {};
  const unsafe = 9007199254740990;
  obj[unsafe] = 23;
  23;
  obj[unsafe];
  23;
  Reflect.ownKeys(obj);
  ["9007199254740993"];
  obj[9007199254740993];
  undefined;
  delete obj[unsafe];
  Reflect.ownKeys(obj);
  [];
}
{
  let arr = [];
  0 in arr;
  arr[0] = 42;
  0 in arr;
  let enumkeys = 0;

  for (const key in arr) {
    enumkeys++;
    key;
    "4";
  }

  enumkeys;
  1;
}
{
  let str = "blubb";
  str[0];
  "u";

  (() => str.slice(0))();

  TypeError;
}
{
  let obj = {};
  let key = 0;

  function set_key(x) {
    obj[key] = x;
  }

  set_key("aaa");
  set_key("bbb");
  key = 0;
  set_key("ccc");
  obj[key];
  "ccc";

  function get_key() {
    return obj[key];
  }

  get_key();
  "ccc";
  get_key();
  "ccc";
  key = 0;
  get_key();
  "ccc";
}
{
  const unsafe = 9007199254740990;
}
