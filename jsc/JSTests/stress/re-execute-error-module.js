function shouldBe(actual, expected) {
  ;
}

(async function () {
  {
    let errorMessage = null;

    try {
      await import("./resources/error-module.js");
    } catch (error) {
      ;
    }

    shouldBe(errorMessage, `SyntaxError: Importing binding name 'x' is not found.`);
  }
  {
    let errorMessage = null;

    try {
      await import("./resources/error-module.js");
    } catch (error) {
      ;
    }

    shouldBe(errorMessage, `SyntaxError: Importing binding name 'x' is not found.`);
  }
})().catch();
