#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd)

cd $SCRIPT_DIR

npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo
npm install -g composer-playground

yo hyperledger-composer:businessnetwork

cp template/tutorial-network/lib/logic.js tutorial-network/lib/
cp template/tutorial-network/models/org.acme.mynetwork.cto tutorial-network/models/
cp template/tutorial-network/permissions.acl tutorial-network/


echo "success inital client installation!"


