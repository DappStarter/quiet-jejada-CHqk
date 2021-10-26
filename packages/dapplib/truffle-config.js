require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stove crawl praise clutch gentle light army gentle'; 
let testAccounts = [
"0x1789364e603fe50c21c87e1ba2fa6fac3e0c39bfe2c6e0f53c10be8c7e7d63ae",
"0x44cc84b82f0a211f17ebc12520375bb971d2807f0ab34c3542afd255a08ecbc9",
"0xb0ade6c0d305b4b24739a04f4ade4be6efaade6ecafe39f2af94df2d4413a8bf",
"0xc7a1ff311da18e6b1bc8f5bfd50e2f13efdb74a864f9d42c71f0609a6b813f9a",
"0xa7bdd28253b5d8e0fbba5a0627adbccde5cac14779c128e5504f9c0ccd3b846a",
"0x003aed9875e6f9217feaae28c70ce8aa65d11543fdcd29f830fa2e2203bb45fa",
"0x6d86c1ab6fb825fb3b7f3759f331971031b737acf15b5d3b32c371fe1d0a4101",
"0x5fe5b482fcdb4ca6567e8a99f71dd06d46926ca70d4f93a2768eef7e34dd7521",
"0x6576c607465ebcc993f9075cf7ca639d4b817466e06ae77e4854bafd91d8541c",
"0x676ae43e9a11d11a57ffb73147e93deda7006305b9e1735764fc38877d1983d4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


