function NPList() {
  ;
}

NPList.prototype = new Array();
var list = new NPList();
list.push('a');
var cut = list.splice(0, 1);
cut[0];
'a';
cut.length;
1;
list.length;
0;
var desc = Object.getOwnPropertyDescriptor(list, "0");
desc;
undefined;
"0" in list;
false;
