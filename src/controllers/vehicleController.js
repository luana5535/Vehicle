import Vehicle from '../models/vehicleModel.js'

export const store = async (req, res) => {
    try{
        const vehicle = await Vehicle.create(req, body)
        return res.status(200).json(vehicle)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const index = async (req,res) => {
    try{
        const vehicles = await Vehicle.find().exec()
        return res.status(200).json(vehicles)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const update = async (req, res) => {
    try{
        const vehicle = await Vehicle.findByIdUpdate (req.params.id, res.body).exec()
        return res.status(200).json(vehicle)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}

export const destroy = async (req, res) => {
    try{
        const vehicle = await Vehicle.findByIdDelete (req.params.id).exec()
        return res.status(200).json(vehicle)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}
