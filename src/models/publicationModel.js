import {prisma} from '../helpers/dbConnection.js';

// const publication = {
//     title: 'My First Publication',
//     description: 'This is the description of my first publication.',
//     author: 'John Doe',
// }

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    })
}

export const getPublication = async () => {
    return await prisma.publication.findMany()
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