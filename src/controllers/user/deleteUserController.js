import { deleteUser, validateUser } from '../../models/userModel.js'

export async function deleteUserController(req, res){
    const  id  = req.params.id

    const {sucess, error, data} = validateUser({id: +id}, {name: true, avatar: true, pass: true, email: true})
    if(!sucess){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrorserror: error.flatten().fieldErrors
        })
    }

    const result = await deleteUser(data.id) 
    //operador + para converter string para número

    return res.json({
        message: "Usuário deletado com sucesso", 
        user: result
    })
}