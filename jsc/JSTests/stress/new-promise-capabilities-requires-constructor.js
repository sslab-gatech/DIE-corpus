function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

shouldThrow(() => {
  Promise.race.call(() => {
    ;
  }, []);
}, `TypeError: promise capability requires a constructor function`);
