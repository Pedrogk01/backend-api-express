import { deleteUser, validateUser } from '../../models/userModel.js'

export async function deleteUserController(req, res, next){
    try {
        const  id  = req.params.id

        const {sucess, error, data} = validateUser({id: +id}, {name: true, avatar: true, pass: true, email: true})

        if(!sucess){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrorserror: error
            })
        }

        const result = await deleteUser(data.id) 

        return res.json({
            message: "Usuário deletado com sucesso", 
            user: result
        })
    }catch (error){
        if (error.code === 'P2025'){
            console.log(error.message);
            return res.status(404).json({
                message: "Usuário não encontrado para ser deletado",
            })
        }
        next(error)
    }
}