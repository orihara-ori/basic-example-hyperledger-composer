# はじめに
- このリポジトリは、以下の tutorial をコード化して、簡単に hyperledger composer を始められるようにしたものです
  - https://hyperledger.github.io/composer/latest/installing/development-tools.html

# 利用の前提条件
- Mac: 10.12
- xocde: 9.2
- Docker Engine: Version 18.03.0
- Docker-Compose: Version 1.20.1
- npm: 5.6.0
- git: 2.x

# 利用手順
## ダウンロード
```
git clone https://github.com/orihara-ori/basic-example-hyperledger-composer.git
```
## server install(Hyperledger Fablic)
```
./server/initial-server-install.sh
```

## client install(Hyperledger Composer And Tools)
```
./client/initial-client-install.sh
```
### 質問の回答
```
Business network name: tutorial-network
Description: this is turorial network
Author name:  your name
Author email: youer-mail-address
License: Apache-2.0
Namespace: org.acme.mynetwork
```


## rest api server
### start rest api server
```
composer-rest-server
```

#### 質問の回答
```
? Enter the name of the business network card to use: admin@tutorial-network
? Specify if you want namespaces in the generated REST API: never use namespaces
? Specify if you want to enable authentication for the REST API using Passport:
No
? Specify if you want to enable event publication over WebSockets: Yes
? Specify if you want to enable TLS security for the REST API: No
```

# 動作検証
## server ()

