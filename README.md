## Corpus set used by [DIE](https://github.com/sslab-gatech/DIE)

This repo includes pre-processed corpus set used by DIE.
The JS files in this repo are collected from [ChakraCore](https://github.com/microsoft/ChakraCore/tree/master/test),
[d8](https://github.com/v8/v8/tree/master/test), [jsc](https://github.com/WebKit/webkit/tree/master/JSTests), [spidermonkey](https://github.com/mozilla/spidernode/tree/master/test), and [js-vuln-db](https://github.com/tunz/js-vuln-db).

To resolve runtime errors and get type information, these corpus set was sanitized once. Please check the algorithm in the [paper](https://gts3.org/assets/papers/2020/park:die.pdf).


#### MISC
- Recursively search '.js' files for mutating/testing
- Do not test js files ends with '.js_'. These files temporarily have compatible issues, which cannot be easily solved.

- ch.js is linked when fuzzing samples under ChakraCore/
- jsc.js is linked when fuzzing samples under jsc/
- v8.js is linked when fuzzing samples under v8/
- ffx.js is linked when fuzzing samples under firefox/
- lib.js is linked when fuzzing 
