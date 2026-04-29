
import {prisma} from '../helpers/dbConnection.js';
import * as z from 'zod';

// const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     pass: 'securepassword',
//     avatar: 'https://example.com/avatar.jpg',
// }

const userSchema = z.object({
    id: z.int("id deve ser um valor numerico")
    .positive("id deve ser um valor numerico positivo"),
    avatar: z.string("avatar deve ser uma string").url("avatar deve ser url valida").max(500,"url deve ter no maximo 500 caracteres"),
    name: z.string("nome deve ser uma string").min(3, "nome deve ter no minimo 3 caracteres").max(255, "nome deve ter no maximo 255 caracteres"),
    email: z.string(em).email(),
    pass: z.string().min(6).max(255),
    
})

export const validateUser = (user, partial = false) => {
    if (partial) {
        return userSchema.partial().safeParse(user)
    }
    return userSchema.safeParse(user)
}  


export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.user.findMany()
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        data: user,
        where: {
            id
        }
    })
}

export const updateAvatar = async (avatar, id) => {
    return await prisma.user.update({
        data: { avatar },
        where: {
            id
        }
    })
}