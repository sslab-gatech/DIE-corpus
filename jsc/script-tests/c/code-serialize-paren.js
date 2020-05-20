(function () {
  return (x + y) * z;
}).toString().search('return.*[(]') != -1;
