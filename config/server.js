const crypto = require('crypto');

// Generate a random key
const generateKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Example usage
const keyA = generateKey();
const keyB = generateKey();


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  server: {
    keys: [generateKey(), generateKey()]
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
