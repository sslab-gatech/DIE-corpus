/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
parseInt(1.0e-7, 10);
1;
parseInt(-1.0e-7, 10);
-1;
parseInt(9e-8, 10);
9;
parseInt(-9e-8, 10);
-9;
parseInt(1.5e-8, 10);
1;
parseInt(-1.5e-8, 10);
-1;
parseInt(1.0e-6, 10);
0;
parseInt(0, 10);
0;
parseInt(-0, 10);
0;
parseInt('0', 10);
0;
parseInt('-0', 10);
-0;
parseInt(Math.asin(0), 10);
0;
parseInt(Math.asin(-0), 10);
0;
