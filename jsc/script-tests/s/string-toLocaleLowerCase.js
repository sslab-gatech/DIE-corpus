//@ skip if $hostOS == "windows"
console.log("This test checks String.prototype.toLocaleLowerCase().");
String.prototype.toLocaleLowerCase.length; // Check empty string optimization.

''.toLocaleLowerCase(); // Generic

String.prototype.toLocaleLowerCase.call({
  toString() {
    return 'A';
  }

});

try {
  String.prototype.toLocaleLowerCase.call({
    toString() {
      throw Error('1');
    }

  });
} catch (e) {
  ;
}

try {
  String.prototype.toLocaleLowerCase.call(null);
} catch (e) {
  ;
}

try {
  String.prototype.toLocaleLowerCase.call(undefined);
} catch (e) {
  ;
} // Ignores non-object, non-string locale list.


'A'.toLocaleLowerCase(9); // Handles array-like objects with holes.

'\u0130'.toLocaleLowerCase({
  length: 4,
  1: 'az',
  3: 'en'
}); // Doesn't throw, but ignores private tags.

'A'.toLocaleLowerCase('x-some-thing'); // Throws on problems with length, get, or toString.

try {
  'A'.toLocaleLowerCase(Object.create(null, {
    length: {
      get() {
        throw Error('a');
      }

    }
  }));
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase(Object.create(null, {
    length: {
      value: 1
    },
    0: {
      get() {
        throw Error('b');
      }

    }
  }));
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase([{
    toString() {
      throw Error('c');
    }

  }]);
} catch (e) {
  ;
} // Throws on bad tags.


try {
  'A'.toLocaleLowerCase([5]);
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('a');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('abcdefghij');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('#$');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-@-abc');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-u');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-u-kn-true-u-ko-true');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-x');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-*');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en-');
} catch (e) {
  ;
}

try {
  'A'.toLocaleLowerCase('en--US');
} catch (e) {
  ;
} // Check ascii and accents.


'AbCdEfGhIjKlMnOpQRStuvWXyZ0123456789'.toLocaleLowerCase();
'ÀÉÎÖŒØŪÑ'.toLocaleLowerCase(); // Check non-special case for dotted I.

'\u0130'.toLocaleLowerCase('und'); // Check for special casing of Azeri.

'\u0130'.toLocaleLowerCase('az');
'I\u0307'.toLocaleLowerCase('az');
'I\u0323\u0307'.toLocaleLowerCase('az');
'I\uD800\uDDFD\u0307'.toLocaleLowerCase('az');
'IA\u0307'.toLocaleLowerCase('az');
'I\u0300\u0307'.toLocaleLowerCase('az');
'I\uD834\uDD85\u0307'.toLocaleLowerCase('az');
'I'.toLocaleLowerCase('az');
'i'.toLocaleLowerCase('az');
'\u0131'.toLocaleLowerCase('az'); // Check for special casing of Lithuanian.

'I\u0300'.toLocaleLowerCase('lt');
'J\u0300'.toLocaleLowerCase('lt');
'\u012E\u0300'.toLocaleLowerCase('lt');
'I\uD834\uDD85'.toLocaleLowerCase('lt');
'J\uD834\uDD85'.toLocaleLowerCase('lt');
'\u012E\uD834\uDD85'.toLocaleLowerCase('lt');
'I\u0325\u0300'.toLocaleLowerCase('lt');
'J\u0325\u0300'.toLocaleLowerCase('lt');
'\u012E\u0325\u0300'.toLocaleLowerCase('lt');
'I\uD800\uDDFD\u0300'.toLocaleLowerCase('lt');
'J\uD800\uDDFD\u0300'.toLocaleLowerCase('lt');
'\u012E\uD800\uDDFD\u0300'.toLocaleLowerCase('lt');
'I\u0325\uD834\uDD85'.toLocaleLowerCase('lt');
'J\u0325\uD834\uDD85'.toLocaleLowerCase('lt');
'\u012E\u0325\uD834\uDD85'.toLocaleLowerCase('lt');
'I\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt');
'J\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt');
'\u012E\uD800\uDDFD\uD834\uDD85'.toLocaleLowerCase('lt');
'IA\u0300'.toLocaleLowerCase('lt');
'JA\u0300'.toLocaleLowerCase('lt');
'\u012EA\u0300'.toLocaleLowerCase('lt');
'IA\uD834\uDD85'.toLocaleLowerCase('lt');
'JA\uD834\uDD85'.toLocaleLowerCase('lt');
'\u012EA\uD834\uDD85'.toLocaleLowerCase('lt');
'\u00CC'.toLocaleLowerCase('lt');
'\u00CD'.toLocaleLowerCase('lt');
'\u0128'.toLocaleLowerCase('lt'); // Check for special casing of Turkish.

'\u0130'.toLocaleLowerCase('tr');
'I\u0307'.toLocaleLowerCase('tr');
'I\u0323\u0307'.toLocaleLowerCase('tr');
'I\uD800\uDDFD\u0307'.toLocaleLowerCase('tr');
'IA\u0307'.toLocaleLowerCase('tr');
'I\u0300\u0307'.toLocaleLowerCase('tr');
'I\uD834\uDD85\u0307'.toLocaleLowerCase('tr');
'I'.toLocaleLowerCase('tr');
'i'.toLocaleLowerCase('tr');
'\u0131'.toLocaleLowerCase('tr');
