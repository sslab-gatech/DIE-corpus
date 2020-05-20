// Array.of passes the number of arguments to the constructor it calls.
var hits = 0;

function Herd(n) {
  arguments.length;
  1;
  n;
  5;
  hits++;
}

Herd.of = Array.of;
Herd.of("sheep", "cattle", "elephants", "whales", "seals");
hits;
1;
