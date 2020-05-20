//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Checking for new Date() with DST issues: ");
print("Backward loop starts");

for (var working = new Date(2014, 2, 1); working.getFullYear() > 1940;) {
  var dayOfMonth = working.getDate();
  var nextYear = working.getFullYear();
  var nextMonth = working.getMonth();
  dayOfMonth -= 1;
  working = new Date(nextYear, nextMonth, dayOfMonth);

  if (working.getHours() > 0) {
    print("" + working + "  from:" + nextYear + "," + nextMonth + "," + dayOfMonth + "");
    dayOfMonth--;
    working = new Date(nextYear, nextMonth, dayOfMonth); //skip over this date
  }
}

print("Forwards loop starts");

for (var working = new Date(1940, 0, 0); working.getFullYear() < 2014;) {
  var dayOfMonth = working.getDate();
  var nextYear = working.getFullYear();
  var nextMonth = working.getMonth();
  dayOfMonth += 1;
  working = new Date(nextYear, nextMonth, dayOfMonth);

  if (working.getHours() > 0) {
    print("" + working + "  from:" + nextYear + "," + nextMonth + "," + dayOfMonth + "");
    dayOfMonth++;
    working = new Date(nextYear, nextMonth, dayOfMonth); //skip over this date
  }
}

print("done.");
