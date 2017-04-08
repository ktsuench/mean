#!/usr/bin/env bash

## --- Update OS --- ##
sudo apt-get update
#sudo apt-get upgrade -y

## --- Install programming essential bundles --- ##
cd ~
sudo apt-get install build-essential -y

## --- Install NodeJS v6.x --- ###
sudo curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs

## --- Install PM2 Process Manager --- ###
sudo npm install -g pm2
# automate PM2 service to start at startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

## --- Install NGINX web server --- ##
sudo apt-get install -y nginx
# copy webserver file over
sudo cp /vagrant/.provision/default /etc/nginx/sites-available
# restart NGINX service
sudo systemctl restart nginx
# allow NGINX through firewall
sudo ufw allow 'Nginx Full'

## --- Install MongoDB Community Edition --- ##
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
## --- Create DB Directory --- ##
cd /
sudo mkdir data
sudo mkdir data/db

## --- Install Sympm to link node modules properly --- ##
## uncomment this section only if you cannot run this script in admin/superuser mode ##
## sudo npm install -g sympm

## --- Install NPM Global libraries --- ##
sudo npm install -g bower gulp rimraf
