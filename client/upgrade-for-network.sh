#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd)

cd $SCRIPT_DIR


cp template/tutorial-network/lib/logic.js tutorial-network/lib/
cp template/tutorial-network/models/org.acme.mynetwork.cto tutorial-network/models/
cp template/tutorial-network/permissions.acl tutorial-network/
cp template/tutorial-network/example_node_0.0.2.js tutorial-network/

cd tutorial-network


sed -i -e 's/"version": "0.0.1"/"version": "0.0.2"/' package.json

composer archive create -t dir -n .


composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.2.bna

sleep 2
composer network start --networkName tutorial-network --networkVersion 0.0.2 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
sleep 2
composer network upgrade -c peeradmin@hlfv1 -n tutorial-network -V 0.0.2


echo "success inital client installation!"


