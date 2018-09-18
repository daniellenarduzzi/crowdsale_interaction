var Web3 = require('web3');
var GenericToken = require('./build/contracts/GenericTokenCrowdsale.json').abi
//let web3ws = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8546"));
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var user = "0x44751576b07eee07de3d8d5bfb9c8dd77add1744"
var to = "0x956c9d3498c15c5F16C1dda9cF3958682fe4e35E";
const oracleInstance = new web3.eth.Contract(GenericToken, to)
/*var address = "0xd9D440f04A6dF6eE6401DBa6979513f951746985";

// listening request event
(async () => {
  console.log("caldsn"+await balanceOf());
})()

// Helpler functions

async function balanceOf() {
  try {
  let balance = await oracleInstance.methods.mintingFinished().call()
  return balance  
  } catch (error) {
    console.log("csdsavasva"+error);
  }
}

/**
 *  usage:
 * node tx.js <account> <pass>
 */
web3.eth.personal.unlockAccount("0x44751576b07eee07de3d8d5bfb9c8dd77add1744", "hunter2");
(async () => {
  try {
  let abi = await oracleInstance.methods
    .buyTokens(user)
    .encodeABI()
    let result = await web3.eth.sendTransaction({
      from: user,
      to: to,
      data: abi,
      value: "0x1"
    })
    console.log(result.transactionHash);
  } catch (error) {
    console.log(error);
  }
})()
/*
async function createEncodedTx (id , currencyValues){
  const oracleInstance = await new web3.eth.Contract(OracleContract, address)
  let abi = await oracleInstance.methods
    .updateCurrency(
      id,
      currencyValues.value_avg.toString(),
      currencyValues.value_sell.toString(),
      currencyValues.value_buy.toString()
    )
    .encodeABI()
    return abi
}

async function fiatRequest(currency) {
  try {
    var res = await fetch('http://api.bluelytics.com.ar/v2/latest')
    const json = await res.json();
    switch (currency) {
      case "dollar":
        return json.oficial
        break;
      case "euro":
        return json.oficial_euro
        break;  
      default:
        break;
    }

  } catch (error) {
    console.log(error)
  }
}

async function btcRequest() {
  try {
    var res = await fetch('https://bitex.la/api-v1/rest/btc_ars/market/ticker')
    const json = await res.json();
    let obj = {
      value_avg :( (json.ask + json.bid )/2),
      value_sell: json.ask,
      value_buy: json.bid,
    }
    return obj
  } catch (error) {
    console.log(error)
  }
}*/