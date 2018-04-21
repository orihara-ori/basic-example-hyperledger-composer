
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const connection = new BusinessNetworkConnection();


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
}
start().then(value => {
  console.log("end")
  process.exit(0)
})



