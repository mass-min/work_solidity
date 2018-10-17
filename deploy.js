const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
  'liar collect embody excite tourist where honey depend reveal often poet lava',
  'https://rinkeby.infura.io/v3/117a40da5deb43728a98da8cb66aef77'
)
const web3 = new Web3(provider)