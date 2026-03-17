import express from 'express'   
import { createPublicationController } from '../controllers/publication/createPublicationController.js'
import { updatePublicationController } from '../controllers/publication/updatePublicationController.js'
import { patchPublicationController } from '../controllers/publication/patchPublicationController.js'
import { deletePublicationController } from '../controllers/publication/deletePublicationController.js'
import { getPublicationController } from '../controllers/publication/getPublicationController.js'


const router = express.Router()

router.get('/', getPublicationController)
router.post('/', createPublicationController)
router.put('/', updatePublicationController)
router.patch('/', patchPublicationController)
router.delete('/', deletePublicationController)

export default router 