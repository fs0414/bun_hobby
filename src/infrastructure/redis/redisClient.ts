import redis from "redis";
import dotenv from "dotenv";
dotenv.config()

export const redisClient = redis.createClient({
    url: process.env.REDIS_URL
  });

(async () => {
  await redisClient.connect();
})();
  
redisClient.on('error', (err) =>
  console.log('Redis Client Error', err)
);