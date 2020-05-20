/* Test inlining of Number.isFinite() */
for (var i = 0; i < 200000; i++) {
  Number.isFinite(NaN);
  false;
  Number.isFinite(-NaN);
  false;
  Number.isFinite(+Infinity);
  false;
  Number.isFinite(-Infinity);
  false;
  Number.isFinite(3);
  true;
  Number.isFinite(3.141592654);
  true;
  Number.isFinite(+0);
  true;
  Number.isFinite(-0);
  true;
  Number.isFinite(-3);
  true;
  Number.isFinite(-3.141592654);
  true;
  Number.isFinite({});
  false;
}
