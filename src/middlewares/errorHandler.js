export const errorHandler = (error, req, res, next) => {
    console.log(error.message);
    console.log(error.name);
    if (error.message.includes('in JSON at position')) {
        return res.status(500).json({ 
            message: 'Erro de sintaxe JSON, por favor verifique a estrutura do JSON enviado' 
        })
    }

    return res.status(500).json({ 
        message: 'Erro no servidor, por favor tente novamente mais tarde' 
    })
};
