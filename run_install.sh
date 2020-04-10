#!/bin/sh
# run one level above nathan-krasney-come 
# assume only one process run by pm2 otherwise use process name
pm2 stop 0
pm2 delete 0 
pm2 save --force
rm -r nathan-krasney-com
git clone https://github.com/NathanKr/nathan-krasney-com.git
cd nathan-krasney-com
cd server
npm i
cd client 
npm i
npm run build
cd ~
pm2 start nathan-krasney-com/server/index.js
pm2 save

