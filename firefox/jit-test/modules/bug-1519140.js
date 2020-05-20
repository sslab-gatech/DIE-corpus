// |jit-test| --more-compartments
newGlobal().eval(`import("javascript:")`).catch(() => {
  ;
});
