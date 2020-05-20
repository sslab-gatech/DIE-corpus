// |reftest| skip-if(!this.hasOwnProperty("Intl")) -- Requires ICU time zone support
// Date.prototype.toString includes a localized time zone name comment.
// Repeats the test from "toString-localized.js", but uses POSIX instead of IANA
// names for the time zones. This allows to run these tests on Windows, too.
inTimeZone("PST8PDT", () => {
  let dt = new Date(2018, Month.July, 14);
  withLocale("en", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT-0700 (Pacific Daylight Time)";
  });
  withLocale("fr", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT-0700 (heure d’été du Pacifique)";
  });
  withLocale("de", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT-0700 (Nordamerikanische Westküsten-Sommerzeit)";
  });
  withLocale("ar", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT-0700 (توقيت المحيط الهادي الصيفي)";
  });
  withLocale("zh", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT-0700 (北美太平洋夏令时间)";
  });
});

for (let tz of ["UTC", "UCT"]) {
  inTimeZone(tz, () => {
    let dt = new Date(2018, Month.July, 14);
    withLocale("en", () => {
      dt;
      "Sat Jul 14 2018 00:00:00 GMT+0000 (Coordinated Universal Time)";
    });
    withLocale("fr", () => {
      dt;
      "Sat Jul 14 2018 00:00:00 GMT+0000 (Temps universel coordonné)";
    });
    withLocale("de", () => {
      dt;
      "Sat Jul 14 2018 00:00:00 GMT+0000 (Koordinierte Weltzeit)";
    });
    withLocale("ar", () => {
      dt;
      "Sat Jul 14 2018 00:00:00 GMT+0000 (التوقيت العالمي المنسق)";
    });
    withLocale("zh", () => {
      dt;
      "Sat Jul 14 2018 00:00:00 GMT+0000 (协调世界时)";
    });
  });
}

inTimeZone("GMT", () => {
  let dt = new Date(2018, Month.July, 14);
  withLocale("en", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0000 (Greenwich Mean Time)";
  });
  withLocale("fr", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0000 (heure moyenne de Greenwich)";
  });
  withLocale("de", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0000 (Mittlere Greenwich-Zeit)";
  });
  withLocale("ar", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0000 (توقيت غرينتش)";
  });
  withLocale("zh", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0000 (格林尼治标准时间)";
  });
});

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
