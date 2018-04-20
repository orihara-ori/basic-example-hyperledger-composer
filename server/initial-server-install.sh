#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd)

cd $SCRIPT_DIR

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
./downloadFabric.sh
sleep 2
./startFabric.sh
sleep 2
./createPeerAdminCard.sh


echo "success inital server installation!"
