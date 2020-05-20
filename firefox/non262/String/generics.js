var BUGNUMBER = 1263558;
var summary = "Self-host all String generics.";
print(BUGNUMBER + ": " + summary);
var result;
var str = "ABCde";
var strObj = {
  toString() {
    return "ABCde";
  }

}; // String.substring.

(() => String.substring())();

TypeError;
String.substring(str);
"ABCde";
String.substring(str, 1);
"BCde";
String.substring(str, 1, 3);
"BC";
String.substring(strObj);
"ABCde";
String.substring(strObj, 1);
"BCde";
String.substring(strObj, 1, 3);
"BC";

(() => String.substr())();

TypeError;
String.substr(str);
"ABCde";
String.substr(str, 1);
"BCde";
String.substr(str, 1, 3);
"BCd";
String.substr(strObj);
"ABCde";
String.substr(strObj, 1);
"BCde";
String.substr(strObj, 1, 3);
"BCd";

(() => String.slice())();

TypeError;
String.slice(str);
"ABCde";
String.slice(str, 1);
"BCde";
String.slice(str, 1, 3);
"BC";
String.slice(strObj);
"ABCde";
String.slice(strObj, 1);
"BCde";
String.slice(strObj, 1, 3);
"BC";

(() => String.match())();

TypeError;
result = String.match(str);
result.index;
0;
result.length;
1;
result[0];
"";
result = String.match(str, /c/i);
result.index;
2;
result.length;
1;
result[0];
"C";
result = String.match(strObj);
result.index;
0;
result.length;
1;
result[0];
"";
result = String.match(strObj, /c/i);
result.index;
2;
result.length;
1;
result[0];
"C";

(() => String.replace())();

TypeError;
String.replace(str);
"ABCde";
String.replace(str, /c/i);
"ABundefinedde";
String.replace(str, /c/i, "x");
"ABxde";
String.replace(strObj);
"ABCde";
String.replace(strObj, /c/i);
"ABundefinedde";
String.replace(strObj, /c/i, "x");
"ABxde";

(() => String.search())();

TypeError;
String.search(str);
0;
String.search(str, /c/i);
2;
String.search(strObj);
0;
String.search(strObj, /c/i);
2;

(() => String.split())();

TypeError;
String.split(str).join(",");
"ABCde";
String.split(str, /[bd]/i).join(",");
"A,C,e";
String.split(str, /[bd]/i, 2).join(",");
"A,C";
String.split(strObj).join(",");
"ABCde";
String.split(strObj, /[bd]/i).join(",");
"A,C,e";
String.split(strObj, /[bd]/i, 2).join(",");
"A,C";

(() => String.toLowerCase())();

TypeError;
String.toLowerCase(str);
"abcde";
String.toLowerCase(strObj);
"abcde";

(() => String.toUpperCase())();

TypeError;
String.toUpperCase(str);
"ABCDE";
String.toUpperCase(strObj);
"ABCDE";

(() => String.charAt())();

TypeError;
String.charAt(str);
"A";
String.charAt(str, 2);
"C";
String.charAt(strObj);
"A";
String.charAt(strObj, 2);
"C";

(() => String.charCodeAt())();

TypeError;
String.charCodeAt(str);
65;
String.charCodeAt(str, 2);
67;
String.charCodeAt(strObj);
65;
String.charCodeAt(strObj, 2);
67;

(() => String.includes())();

TypeError;
String.includes(str);
false;
String.includes(str, "C");
true;
String.includes(str, "C", 2);
true;
String.includes(str, "C", 3);
false;
String.includes(strObj);
false;
String.includes(strObj, "C");
true;
String.includes(strObj, "C", 2);
true;
String.includes(strObj, "C", 3);
false;

(() => String.indexOf())();

TypeError;
String.indexOf(str);
-1;
String.indexOf(str, "C");
2;
String.indexOf(str, "C", 2);
2;
String.indexOf(str, "C", 3);
-1;
String.indexOf(strObj);
-1;
String.indexOf(strObj, "C");
2;
String.indexOf(strObj, "C", 2);
2;
String.indexOf(strObj, "C", 3);
-1;

(() => String.lastIndexOf())();

TypeError;
String.lastIndexOf(str);
-1;
String.lastIndexOf(str, "C");
2;
String.lastIndexOf(str, "C", 2);
2;
String.lastIndexOf(str, "C", 1);
-1;
String.lastIndexOf(strObj);
-1;
String.lastIndexOf(strObj, "C");
2;
String.lastIndexOf(strObj, "C", 2);
2;
String.lastIndexOf(strObj, "C", 1);
-1;

(() => String.startsWith())();

TypeError;
String.startsWith(str);
false;
String.startsWith(str, "A");
true;
String.startsWith(str, "B", 0);
false;
String.startsWith(str, "B", 1);
true;
String.startsWith(strObj);
false;
String.startsWith(strObj, "A");
true;
String.startsWith(strObj, "B", 0);
false;
String.startsWith(strObj, "B", 1);
true;

(() => String.endsWith())();

TypeError;
String.endsWith(str);
false;
String.endsWith(str, "e");
true;
String.endsWith(str, "B", 0);
false;
String.endsWith(str, "B", 2);
true;
String.endsWith(strObj);
false;
String.endsWith(strObj, "e");
true;
String.endsWith(strObj, "B", 0);
false;
String.endsWith(strObj, "B", 2);
true;
// String.trim.
var str2 = "  ABCde  ";
var strObj2 = {
  toString() {
    return "  ABCde  ";
  }

};

(() => String.trim())();

TypeError;
String.trim(str2);
"ABCde";
String.trim(strObj2);
"ABCde";

(() => String.trimLeft())();

TypeError;
String.trimLeft(str2);
"ABCde  ";
String.trimLeft(strObj2);
"ABCde  ";

(() => String.trimRight())();

TypeError;
String.trimRight(str2);
"  ABCde";
String.trimRight(strObj2);
"  ABCde";

(() => String.toLocaleLowerCase())();

TypeError;
String.toLocaleLowerCase(str);
str.toLocaleLowerCase();
String.toLocaleLowerCase(strObj);
str.toLocaleLowerCase();

(() => String.toLocaleUpperCase())();

TypeError;
String.toLocaleUpperCase(str);
str.toLocaleUpperCase();
String.toLocaleUpperCase(strObj);
str.toLocaleUpperCase();

(() => String.localeCompare())();

TypeError;
String.localeCompare(str);
str.localeCompare();
String.localeCompare(str, "abcde");
str.localeCompare("abcde");
String.localeCompare(strObj);
str.localeCompare();
String.localeCompare(strObj, "abcde");
str.localeCompare("abcde");

// String.normalize.
if ("normalize" in String.prototype) {
  var str3 = "\u3082\u3058\u3089 \u3082\u3057\u3099\u3089";
  var strObj3 = {
    toString() {
      return "\u3082\u3058\u3089 \u3082\u3057\u3099\u3089";
    }

  };

  (() => String.normalize())();

  TypeError;
  String.normalize(str3);
  "\u3082\u3058\u3089 \u3082\u3058\u3089";
  String.normalize(str3, "NFD");
  "\u3082\u3057\u3099\u3089 \u3082\u3057\u3099\u3089";
  String.normalize(strObj3);
  "\u3082\u3058\u3089 \u3082\u3058\u3089";
  String.normalize(strObj3, "NFD");
  "\u3082\u3057\u3099\u3089 \u3082\u3057\u3099\u3089";
} // String.concat.


(() => String.concat())();

TypeError;
String.concat(str);
"ABCde";
String.concat(str, "f");
"ABCdef";
String.concat(str, "f", "g");
"ABCdefg";
String.concat(strObj);
"ABCde";
String.concat(strObj, "f");
"ABCdef";
String.concat(strObj, "f", "g");
"ABCdefg";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
