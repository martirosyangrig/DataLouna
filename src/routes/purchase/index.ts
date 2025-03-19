import { Router } from 'express';
import { PurchaseController } from '../../controllers/purchases';

const router = Router();

router.post('/purchase', PurchaseController.purchaseProduct);

export default router