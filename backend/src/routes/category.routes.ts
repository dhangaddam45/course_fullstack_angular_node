import { Router } from "express"
import { getCategories } from "../controller/category.controller";

const router = Router();


router.get('/', getCategories);
router.get('/xyz/abc', getCategories);
//router.post('/' addCategory);

export default router;