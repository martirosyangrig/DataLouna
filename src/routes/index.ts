import { Router } from 'express';
import PricesRouter from './prices/index';
import PurchaseRouter from './purchase/index';

const router = Router();

router.use('/api', PricesRouter);
router.use('/api', PurchaseRouter);

export default router;