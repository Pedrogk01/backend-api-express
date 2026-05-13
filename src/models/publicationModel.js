import {prisma} from '../helpers/dbConnection.js';
import { z } from "zod";
import { createValidator } from "../helpers/createValidator.js";
const publicationSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
      .positive("Id deve ser um valor numérico positivo"),
    title: z.string("Título deve ser uma string")
      .min(3, "Título deve ter no mínimo 3 caracteres")
      .max(255, "Título deve ter no máximo 255 caracteres"),
    description: z.string("Descrição deve ser uma string")
      .max(500, "Descrição deve ter no máximo 500 caracteres")
})

export const validatePublication = createValidator(publicationSchema)

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    })
}

export const getPublication = async (title) => {
    return await prisma.publication.findMany(
        title ? { 
            where: { 
                title: { 
                    contains: title
                }
            } 
        } : {}
    )
}

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {
            id
        }
    })
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }
    })
}

export const updateTitle = async (title, id) => {
    return await prisma.publication.update({
        data: { title },
        where: {
            id
        }
    })
}