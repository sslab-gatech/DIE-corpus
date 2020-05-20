// |reftest| skip-if(xulRuntime.OS=="WINNT"||!this.hasOwnProperty("Intl")) -- Windows doesn't accept IANA names for the TZ env variable; Requires ICU time zone support
// Date.prototype.toString includes a localized time zone name comment.
inTimeZone("Europe/Paris", () => {
  let dt = new Date(2018, Month.July, 14);
  withLocale("en", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0200 (Central European Summer Time)";
  });
  withLocale("fr", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0200 (heure d’été d’Europe centrale)";
  });
  withLocale("de", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)";
  });
  withLocale("ar", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0200 (توقيت وسط أوروبا الصيفي)";
  });
  withLocale("zh", () => {
    dt;
    "Sat Jul 14 2018 00:00:00 GMT+0200 (中欧夏令时间)";
  });
});
inTimeZone("America/Los_Angeles", () => {
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

for (let tz of ["UTC", "UCT", "Zulu", "Universal", "Etc/UTC", "Etc/UCT", "Etc/Zulu", "Etc/Universal"]) {
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

for (let tz of ["GMT", "Etc/GMT"]) {
  inTimeZone(tz, () => {
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
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
