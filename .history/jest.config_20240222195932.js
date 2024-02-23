module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'], // Ignora a pasta node_modules durante a observação
};
