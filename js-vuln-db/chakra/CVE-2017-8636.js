let args = new Array(0x10000);
args = args.fill(0x1234).join(', ');
eval('new Array(' + args + ')');
