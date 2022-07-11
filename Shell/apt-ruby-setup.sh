#! /bin/bash
### 
### Author: jjajjajja <jizon0123@protonmail.com>
### Description: Resolve Permission Error when execute  `gem install <package_name>` 
###		 if you use .rbenv, you do not have to run this script! :)
###

mkdir -p ~/.ruby
echo 'export GEM_HOME=~/.ruby/' >> ~/.bashrc
echo 'export PATH="$PATH:~/.ruby/bin"' >> ~/.bashrc
source ~/.bashrc