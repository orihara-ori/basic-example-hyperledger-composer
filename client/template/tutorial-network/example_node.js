
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
  let connectdef = await connection.connect('admin@tutorial-network')
  console.log(await connection.ping())
  const a = await connection.assetRegistryExists('org.acme.mynetwork.Commodity');
  console.log(`${a}`)
  let b = await connection.getAllAssetRegistries();
  for (let idx in b) {
    console.log(`${b[idx].name}`)
  }
  let c = await connection.getAssetRegistry('org.acme.mynetwork.Commodity');
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

}
start().then(value => {
  console.log("end")
  process.exit(0)
})



