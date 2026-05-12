import { deletePublication, validatePublication } from "../../models/publicationModel.js"

export async function deletePublicationController(req, res){
    const  id  = req.params.id

    const {sucess, error, data} = validatePublication({id: +id})

    if(!sucess){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrorserror: error
        })
    }

    const result = await deletePublication(data.id) 

    return res.json({
        message: "Publicação deletada com sucesso", 
        publication: result
    })
}