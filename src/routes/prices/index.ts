import { Router } from 'express';
import { PricesController } from '../../controllers/minPrices';

const router = Router();

router.get('/min-prices', PricesController.getMinPrices);

export default router