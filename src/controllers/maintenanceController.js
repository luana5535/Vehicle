import Maintenance from '../models/maintenanceModel.js'

export const store = async (req, res) => {
    try{
        const maintenance = await Maintenance.create(req, body)
        return res.status(200).json(maintenance)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const index = async (req,res) => {
    try{
        const maintenances = await Maintenance.find().exec()
        return res.status(200).json(maintenances)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const update = async (req, res) => {
    try{
        const maintenance = await Maintenance.findByIdUpdate (req.params.id, res.body).exec()
        return res.status(200).json(maintenance)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}

export const destroy = async (req, res) => {
    try{
        const maintenance = await Maintenance.findByIdDelete (req.params.id).exec()
        return res.status(200).json(maintenance)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}
