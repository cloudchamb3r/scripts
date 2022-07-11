#! /bin/bash

###
### Author: jjajjajja <jizon0123@protonmail.com>
### Description: this script resolve dns error 
###		 if you having trouble with resolving dns
###		 this script maybe very very useful
###		 check dns resolving error with 
###		 `curl --verbose https://google.com`
###		 if you met message like -> blah blah...  **network is unreachable**
###		 then this script may be helpful

mv /etc/resolv.conf /etc/resolv.conf.bak
cat <<EOF > /etc/resolv.conf
nameserver 8.8.8.8 
nameserver 8.8.4.4
EOF
