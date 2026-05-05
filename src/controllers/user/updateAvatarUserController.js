import { updateAvatar, validateUser } from "../../models/userModel.js";

export async function updateAvatarUserController(req, res){
    const { id } = req.params;
    const user = req.body;
    user.id = +id;

    const { success, error, data:userValidated } = validateUser({id: +id, avatar: user.avatar}, {id: true, avatar: true})

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await updateAvatar(userValidated.avatar, userValidated.id)

    return res.json({
        message: "Avatar atualizado com sucesso",
        avatar: result
    })
}