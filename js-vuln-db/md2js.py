#!/usr/bin/python
import os, sys

folder = sys.argv[1]
for f in os.listdir(folder):
    if f.endswith('.md'):
        lines = open(os.path.join(folder, f), 'r').readlines()
        start = False
        js = ""
        for line in lines:
            if line.startswith('```'):
                if start:
                    jsf = open(os.path.join(folder, f[:-2] + 'js'), 'w')
                    jsf.write(js)
                    jsf.close()
                    break
                else:
                    start = True
            elif start:
                js += line
