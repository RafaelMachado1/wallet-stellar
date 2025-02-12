/*
configuração da rede stellar

config/: Esta pasta contém arquivos de configuração, como configurações do banco de dados (se você precisar de um no futuro), da rede Stellar, etc.
*/

// config/stellar.js

// config/stellar.js

import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const stellarConfig = {
  network: process.env.STELLAR_NETWORK || 'testnet', // 'testnet' ou 'mainnet'
  horizonUrl: process.env.HORIZON_URL || 'https://horizon-testnet.stellar.org', // URL do Horizon para testnet
};

export default stellarConfig;