require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom problem brown turtle chaos rare remain clump hunt deputy flat gift'; 
let testAccounts = [
"0x8b7144137a942f22aefae7d36753ff91bd8bf2b8cee664d7e99217ef1a8b96e0",
"0x8c496e6c724cd5eed235158c09b0e3591e6c55e7b0747d150ba81bc3d84200ae",
"0x1c0c3f770ac62f2f1d4594337a458fa4bd21b5c01c6d66e6fa2c7c00deefcd18",
"0xfdd69665a7c06a5d78e8e71aade58a7ce3fadc125a8b0e01a41bde12f9d24679",
"0x67401d5bd09d3dff2d2f996191421af758a2cc30664a790291c2bba3c5e3fe1e",
"0xed06115b959ee814a1afb31691be22a026a8d5017aefc61cca5d85381b4afad7",
"0x40ef58895c8ba30f562f4b9d95c267c7e3590775d771208844becbd591f800bf",
"0xf9653418013ef15348d16866a6d75a8d398010fb3e8ccb82f0341b7e2b7a392d",
"0xb52ae0cad6742de963e3e3995b4cfaca047d59933b497c8d4e7f4effe95def30",
"0x376e89e0ff11d2548de5889c37bffb3f6e24889e92c18c20078440f910b8f146"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


