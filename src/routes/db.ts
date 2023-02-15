import { Router } from 'express';
import { getCreateDbController } from '../controllers/getCreateDbController';
import { getUpdateAccountController } from '../controllers/getUpdateAccountController';

const router = Router();

router.post('/create', getCreateDbController);

router.post('/account/update', getUpdateAccountController)

export default router;