import { Router } from 'express';
import { getCreateDbController } from '../controllers/getCreateDbController';
import { getUpdateClientTypeNameController } from '../controllers/getUpdateClientTypeNameController';
import { getUpdateIndividualNameController } from '../controllers/getUpdateIndividualNameController';

const router = Router();

router.post('/create', getCreateDbController);
router.post('/account/update/clientTypeName', getUpdateClientTypeNameController);
router.post('/account/update/individualName', getUpdateIndividualNameController);

export default router;