import express from 'express'
import { sendPokeNea, sendPokeNeaImage } from '../controllers/sendPokeNeaController.js'

const router = express.Router()

router.get('/', sendPokeNea)
router.get('/image', sendPokeNeaImage)

export default router