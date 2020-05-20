// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
new Error().hasOwnProperty('message');
false;
new Error(undefined).hasOwnProperty('message');
false;
reportCompare(0, 0, 'ok');
