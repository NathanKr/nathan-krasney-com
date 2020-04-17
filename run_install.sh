#!/bin/sh
# run one level above nathan-krasney-come 
# assume only one process run by pm2 otherwise use process name
# do once : NODE_ENV must be set to "production" on /etc/environment and reboot
# do once : very the port on /etc/nginx/sites-available/default is correct 
#            in case you need to change it e.g. to 5000 you need : 
#            nginx -t   
#            service nginx restart   
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

