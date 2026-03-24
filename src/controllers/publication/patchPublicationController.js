import { updateTitle } from "../../models/publicationModel.js";

export async function patchPublicationController(req, res){
    const { id } = req.params;
    const { title } = req.body;

    const result = await updateTitle(title, +id)

    return res.json({
        message: "Título atualizado com sucesso",
        publication: result
    })
}