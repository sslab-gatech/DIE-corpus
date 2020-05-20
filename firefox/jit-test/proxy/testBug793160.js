var obj = new Proxy(Object.create(null), {});
typeof obj;
'object';
obj != null;
true;
