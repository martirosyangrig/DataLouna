import type { Request , Response } from 'express';
import redisClient from "../../config/redis";
import getMinPrices from "../../services/skinport";

export class PricesController {
  static async getMinPrices (req: Request, res: Response) {
    try {
      const cachedData = await redisClient.get('minPrices');
      if (cachedData) {
        return res.status(200).json(JSON.parse(cachedData));
      }

      const items = await getMinPrices();
      await redisClient.setEx('minPrices', 600, JSON.stringify(items));
      return res.status(200).json(items);
    } catch (err: any) {
      res.status(500).json({err: err.message})
    }
  }
}
