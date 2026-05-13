import { getPublication } from "../../models/publicationModel.js"

export async function getPublicationController(req, res){
    const { title } = req.query

    const result = await getPublication(title)

    res.json({
        message: "Publicações listadas com sucesso", 
        publications: result
    })
}