const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = {
  get(key) {
    return cache.get(key);
  },
  set(key, value, ttl) {
    cache.set(key, value, ttl);
  },
};
