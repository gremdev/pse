# pse

## Installation
    $ npm install pse -g

## Option
```
pse quote [stock]  view a single stock quote
pse list           view all listed stock in Philippine Stock Exchange
```
## Termux workaround
If you have issues in running `pse` globally in termux environment, please run
```
apt install coreutils
termux-fix-shebang ../../usr/bin/pse

This is still work in progress
