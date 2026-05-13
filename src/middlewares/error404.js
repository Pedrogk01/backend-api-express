export const error404 = (req, res) => {
    return res.status(404).json({ message: `Rota ${req.path} não encontrada` })
}