import { updatePublication } from "../../models/publicationModel.js";

export async function updatePublicationController(req, res){
    const { id } = req.params;
    const publication = req.body;

    const result = await updatePublication(publication, +id)

    return res.json({
        message: "Publicação atualizada com sucesso",
        publication: result
    })
}