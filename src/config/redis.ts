import { createClient } from 'redis';
import { envConfig } from './env';

const redisClient = createClient({
  url: envConfig.REDIS_URL
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

redisClient.connect();

export default redisClient;