import express from 'express';
import { getLista } from "../controllers/listasdesejo.js"

const router = express.Router()

router.get('/', getLista)

export default router