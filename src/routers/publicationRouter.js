import express from 'express'   
import { createPublicationController } from '../controllers/publication/createPublicationController.js'
import { updatePublicationController } from '../controllers/publication/updatePublicationController.js'
import { patchPublicationController } from '../controllers/publication/patchPublicationController.js'
import { deletePublicationController } from '../controllers/publication/deletePublicationController.js'
import { getPublicationController } from '../controllers/publication/getPublicationController.js'


const router = express.Router()

router.get('/', getPublicationController)
router.post('/', createPublicationController)
router.put('/:id', updatePublicationController)
router.patch('/:id', patchPublicationController)
router.delete('/:id', deletePublicationController)

export default router 