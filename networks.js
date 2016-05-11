'use strict';

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};
var hexReverse = function(hex) {
  return buffertools.reverse(new Buffer(hex, 'hex'));
};

exports.livenet = {
  name: 'livenet',
  magic: hex('bf0c6bbd'),
  addressVersion: 0x4c,
  privKeyVersion: 204,
  P2SHVersion: 16,
  hkeyPublicVersion: 0x02fe52f8,
  hkeyPrivateVersion: 0x02fe52cc,
  genesisBlock: {
    hash: hexReverse('00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6'),
    merkle_root: hexReverse('e0028eb9648db56b1ac77cf090b99048a8007e2bb64b68f092c03c7f56a662c7'),
    height: 0,
    nonce: 28917698,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390095618,
    bits: 504365040,
  },
  dnsSeeds: [
    'dnsseed.darkcoin.io',
    'dnsseed.darkcoin.qa',
    'dnsseed.masternode.io',
    'dnsseed.dashpay.io'
  ],
  defaultClientPort: 9999
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('cee2caff'),
  addressVersion: 0x8c,
  privKeyVersion: 239,
  P2SHVersion: 19,
  hkeyPublicVersion: 0x3a8061a0,
  hkeyPrivateVersion: 0x3a805837,
  genesisBlock: {
    hash: hexReverse('00000bafbc94add76cb75e2ec92894837288a481e5c005f6563d91623bf8bc2c'),
    merkle_root: hexReverse('e0028eb9648db56b1ac77cf090b99048a8007e2bb64b68f092c03c7f56a662c7'),
    height: 0,
    nonce: 3861367235,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390666206,
    bits: 504365040,
  },
  dnsSeeds: [
    'testnet-seed.darkcoin.io',
    'testnet-seed.darkcoin.qa',
    'test.dnsseed.masternode.io'
  ],
  defaultClientPort: 19999
};
