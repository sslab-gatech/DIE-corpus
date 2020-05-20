import os, sys

for root, dir, files in os.walk(sys.argv[1]):
    for f in files:
        if f.endswith('.js'):
            path = os.path.join(root, f)
            if 'load(\'' in open(path, 'r').read():
                os.rename(path, path + "_")
                os.system("rm %s.*" % path)
