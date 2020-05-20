//@ skip if $hostOS == "windows"
console.log('This test case tests the Date constructor. ' + 'In particular, it tests many cases of creating a Date from another Date ' + 'and creating a Date from an object that has both valueOf and toString functions.');
var object = new Object();

object.valueOf = function () {
  return 1111;
};

object.toString = function () {
  return "2222";
};

isNaN(new Date(""));
var timeZoneOffset = Date.parse("Dec 25 1995") - Date.parse("Dec 25 1995 GMT");
new Date(1111).getTime();
new Date(object).getTime();
new Date(new Date(1111)).getTime();
new Date(new Date(1111).toString()).getTime();
new Date(1111, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(1111, 1, 1, 1, 1, 1, 1, 1, 1).getTime() - timeZoneOffset;
new Date(new Date(1111, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset;
new Date(new Date(1111, 1, 1, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset;
Number(new Date(new Date(Infinity, 1, 1, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, Infinity, 1, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, Infinity, 1, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, 1, Infinity, 1, 1, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, 1, 1, Infinity, 1, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, 1, 1, 1, Infinity, 1, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, 1, 1, 1, 1, Infinity, 1, 1)).getTime() - timeZoneOffset);
Number(new Date(new Date(1, 1, 1, 1, 1, 1, 1, 1, Infinity)).getTime() - timeZoneOffset);
new Date(6501480442020679337816440, 81696082856817131586190070, 1, 1, 1, 1, 1).getTime();
new Date(Date.parse('28 Feb 1000 GMT')).toGMTString();
new Date(Date.parse('1 Dec 988 GMT')).toGMTString();
new Date(Date.parse('1 Mar 1000 GMT')).toGMTString(); // In Firefox, the results of the following tests are timezone-dependent, which likely implies that the implementation is not quite correct.
// Our results are even worse, though, as the dates are clipped: (new Date(1111, 1201).getTime()) == (new Date(1111, 601).getTime())
// shouldBe('new Date(1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111).getTime() - timeZoneOffset', '-24085894227889');
// shouldBe('new Date(new Date(1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111)).getTime() - timeZoneOffset', '-24085894227889');
// Regression test for Bug 26978 (https://bugs.webkit.org/show_bug.cgi?id=26978)

var testStr = "";
var year = {
  valueOf: function () {
    testStr += 1;
    return 2007;
  }
};
var month = {
  valueOf: function () {
    testStr += 2;
    return 2;
  }
};
var date = {
  valueOf: function () {
    testStr += 3;
    return 4;
  }
};
var hours = {
  valueOf: function () {
    testStr += 4;
    return 13;
  }
};
var minutes = {
  valueOf: function () {
    testStr += 5;
    return 50;
  }
};
var seconds = {
  valueOf: function () {
    testStr += 6;
    return 0;
  }
};
var ms = {
  valueOf: function () {
    testStr += 7;
    return 999;
  }
};
testStr = "";
new Date(year, month, date, hours, minutes, seconds, ms);
testStr;
testStr = "";
Date.UTC(year, month, date, hours, minutes, seconds, ms);
testStr; // Regression test for Bug 130123 (https://bugs.webkit.org/show_bug.cgi?id=130123)

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function testDate(year, month, date) {
  var success = true;
  var dateString = monthNames[month] + " " + date + ", " + year;
  var dateObj = new Date(dateString);

  if (dateObj.getFullYear() != year) {
    shouldBe("new Date(" + dateString + ").getFullYear()", year);
    success = false;
  }

  if (dateObj.getMonth() != month) {
    shouldBe("new Date(" + dateString + ").getMonth()", month);
    success = false;
  }

  if (dateObj.getDate() != date) {
    shouldBe("new Date(" + dateString + ").getDate()", date);
    success = false;
  }

  return success;
}

var leapTestResult = true;
var year = 100;
var month = 0;
var date = 1;

while (year < 10000) {
  leapTestResult = leapTestResult && testDate(year, month, date);
  year += 1;
  month = (month + 7) % 12;
  date = (date + 13) % 28 + 1;
}

leapTestResult;
