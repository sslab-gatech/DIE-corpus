try {
  decodeURIComponent('%ED%A0%80');
  true;
  false;
  "expected an URIError";
} catch (e) {
  e instanceof URIError;
  true;
  reportCompare(true, true);
}
