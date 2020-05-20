// Don't return negative zero for get[Hours,Minutes,Seconds,Milliseconds] for dates before 1970.
let date = new Date(1955, 0, 1);
date.getTime() < 0;
true;
date.getHours();
+0;
date.getMinutes();
+0;
date.getSeconds();
+0;
date.getMilliseconds();
+0;
let utc = new Date(Date.UTC(1955, 0, 1));
utc.getTime() < 0;
true;
utc.getUTCHours();
+0;
utc.getUTCMinutes();
+0;
utc.getUTCSeconds();
+0;
utc.getUTCMilliseconds();
+0;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
