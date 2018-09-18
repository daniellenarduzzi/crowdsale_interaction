/**
 *  usage:
 * node tx.js <account> <pass>
 */
var Web3 = require('web3');
var GenericToken = require('./build/contracts/GenericTokenCrowdsale.json').abi
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var user = process.argv[2]
var to = "0x956c9d3498c15c5F16C1dda9cF3958682fe4e35E";
const oracleInstance = new web3.eth.Contract(GenericToken, to)
web3.eth.personal.unlockAccount(user, process.argv[3]);
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
