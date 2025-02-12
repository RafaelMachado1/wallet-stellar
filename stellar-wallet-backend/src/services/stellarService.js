/*
Lógica de negócios e comunicação com outros serviços

services/: Esta pasta contém a lógica de negócios da sua aplicação. Cada arquivo representa um serviço que encapsula uma funcionalidade específica.
Por exemplo, stellarService.js conterá a lógica para interagir com a rede Stellar.
*/

// services/stellarService.js

import StellarSdk from '@stellar/stellar-sdk';
import stellarConfig from '../config/stellar.js';

const server = new StellarSdk.Server(stellarConfig.horizonUrl); // Conecta ao Horizon

const generateKeys = () => {
  const pair = StellarSdk.Keypair.random(); // Gera um par de chaves aleatório
  return {
    publicKey: pair.publicKey(),
    privateKey: pair.secret(),
  };
};

// Outras funções para interagir com a rede Stellar...

export default { generateKeys, /* outras funções */ };