console.log("This test checks regular expressions using extended (> 255) characters and character classes."); // shouldThrow('var r = new RegExp("[\u0101-\u0100]"); r.exec("a")', 'null');

new RegExp("[\u0100-\u0101]").exec("a");
new RegExp("[\u0100]").exec("a");
new RegExp("\u0100").exec("a");
new RegExp("[\u0061]").exec("a").toString();
new RegExp("[\u0100-\u0101a]").exec("a").toString();
new RegExp("[\u0100a]").exec("a").toString();
new RegExp("\u0061").exec("a").toString();
new RegExp("[a-\u0100]").exec("a").toString();
new RegExp("[\u0100]").exec("\u0100").toString();
new RegExp("[\u0100-\u0101]").exec("\u0100").toString();
new RegExp("\u0100").exec("\u0100").toString();
