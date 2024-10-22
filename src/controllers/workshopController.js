import Workshop from '../models/workshopModel.js'

export const store = async (req, res) => {
    try{
        const workshop = await Workshop.create(req, body)
        return res.status(200).json(workshop)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const index = async (req,res) => {
    try{
        const workshops = await Workshop.find().exec()
        return res.status(200).json(workshops)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const update = async (req, res) => {
    try{
        const workshop = await Workshop.findByIdUpdate (req.params.id, res.body).exec()
        return res.status(200).json(workshop)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}

export const destroy = async (req, res) => {
    try{
        const workshop = await Workshop.findByIdDelete (req.params.id).exec()
        return res.status(200).json(workshop)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}
