
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const connection = new BusinessNetworkConnection();

function sleep (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`----sleep:${time / 1000}sec`)
      resolve();
    }, time);
  });
}

async function start() {
  console.log("start")
  let connectdef = await connection.connect('admin@tutorial-network2')
  console.log(await connection.ping())
  const a = await connection.assetRegistryExists('org.acme.mynetwork2.Commodity');
  console.log(`${a}`)
  let b = await connection.getAllAssetRegistries();
  for (let idx in b) {
    console.log(`${b[idx].name}`)
  }
  let c = await connection.getAssetRegistry('org.acme.mynetwork2.Commodity');
  let c_list = await c.getAll();
  for (let idx in c_list) {
    console.log(`${c_list[idx].tradingSymbol}`)
    console.log(`${c_list[idx].description}`)
    console.log(`${c_list[idx].owner}`)
  }

  console.log('event-listen-start');
  await connection.on('event', (event) => {
    // event: { "$class": "org.namespace.BasicEvent", "eventId": "0000-0000-0000-000000#0" }
    console.log(event);
  });
  console.log('start-sleep');
  await sleep(100000)
  console.log('end-sleep');

  /*
  return connection.connect('admin@tutorial-network2')
    .then(function (definition) {
      // Connected
      console.log("success-connected")
      const a = await connection.assetRegistryExists('org.acme.SampleAsset');
      console.log(`${a}`)
      //let commodity2 = connection.getRegistry('org.acme.mynetwork2.Commodity2');
      //const data = commodity2.getAll();
      //console.log(`${data}`)
      console.log("start2")
      //connection.getAllAssetRegistries()
      //  .then(function (result) {
      //    console.log(`${a}`)
      //    console.log("end2")
      //  })
    });
  */
  /*
  let businessNetworkDefinition = await connection.connect("admin@tutorial-network2");
  console.log(businessNetworkDefinition.getName())
  //console.log(businessNetworkDefinition.getMetadata())

  let commodity = await connection.getRegistry('org.acme.mynetwork2.Commodity2');
  const data = commodity.getAll();
  console.log(JSON.stringify(data))
  //console.log(JSON.stringify(data.length))
  //console.log(Object.getOwnPropertyNames(businessNetworkDefinition))
  //console.log(Object.getOwnPropertyNames(commodity.bnc.cardStore))
  */
}
start().then(value => {
  console.log("end")
  process.exit(0)
})



