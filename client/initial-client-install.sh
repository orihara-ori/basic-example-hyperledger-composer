#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd)

cd $SCRIPT_DIR

npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo
npm install -g composer-playground

yo hyperledger-composer:businessnetwork


cd tutorial-network

npm install

composer archive create -t dir -n .


composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna

sleep 2
composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
sleep 2
composer card import --file networkadmin.card
sleep 2
composer network ping --card admin@tutorial-network


echo "success inital client installation!"


