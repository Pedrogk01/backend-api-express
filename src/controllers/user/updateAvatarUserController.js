import { updateAvatar } from "../../models/userModel.js";

export async function updateAvatarUserController(req, res){
    const { id } = req.params;
    const avatar = req.body;

    const result = await updateAvatar(avatar, +id)

    return res.json({
        message: "Avatar atualizado com sucesso",
        avatar: result
    })
}