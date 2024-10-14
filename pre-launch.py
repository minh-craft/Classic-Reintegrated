#!/usr/bin/python3

from os import system, chdir, path
import subprocess

def main():
    chdir(path.dirname(path.realpath(__file__)))
    subprocess.call("pakku fetch", shell=True)

if __name__=="__main__": main()