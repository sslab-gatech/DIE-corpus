/* Test inlining of Number.isNaN() */
for (var i = 0; i < 200000; i++) {
  Number.isNaN(NaN);
  true;
  Number.isNaN(-NaN);
  true;
  Number.isNaN(+Infinity);
  false;
  Number.isNaN(-Infinity);
  false;
  Number.isNaN(3.14159);
  false;
  Number.isNaN(-3.14159);
  false;
  Number.isNaN(3);
  false;
  Number.isNaN(-3);
  false;
  Number.isNaN(+0);
  false;
  Number.isNaN(-0);
  false;
  Number.isNaN({});
  false;
}
