var re = /abc(WHOO!)?def/y;
var input = 'abcdefabcdefabcdef';
var count = 0;

while ((match = re.exec(input)) !== null) {
  print(count++);
  match[0];
  'abcdef';
  match[1];
  undefined;
}
