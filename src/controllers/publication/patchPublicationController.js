import { updateTitle, validatePublication } from "../../models/publicationModel.js";

export async function patchPublicationController(req, res){
    const { id } = req.params;
    const publication = req.body;
    publication.id = +id;

    const { success, error, data:publicationValidated } = validatePublication(publication)

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await updatePublication(publicationValidated, publicationValidated.id)

    return res.json({
        message: "Título atualizado com sucesso",
        publication: result
    })
}