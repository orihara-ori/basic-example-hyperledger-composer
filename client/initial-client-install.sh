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
cp template/tutorial-network/example_node.js tutorial-network/

cd tutorial-network

npm install

composer archive create -t dir -n .


composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna
composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@tutorial-network


echo "success inital client installation!"


