// Functions which have been marked as singletons should not be cloned.
BeatDetektor = function () {
  this.config = BeatDetektor.config;
  this.config.a;
  0;
  this.config.b;
  1;
};

BeatDetektor.config_default = {
  a: 0,
  b: 1
};
BeatDetektor.config = BeatDetektor.config_default;
var bd = new BeatDetektor();
bd.config === BeatDetektor.config;
true;
