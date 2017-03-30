#!/usr/bin/env bash

## --- Start MongoDB Community Edition --- ##
sudo service mongod start

## --- Install Node Modules --- ##
## use sympm if unable to run script in admin/superuser mode ##
cd /vagrant
## sudo sympm install
sudo npm install

## --- Install Bower Libraries --- ##
cd /vagrant
bower install --allow-root

## --- Start up Server Process --- ##
cd /vagrant
sudo pm2 start server.ts --watch
sudo pm2 save
