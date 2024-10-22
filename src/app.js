import express from 'express' 
import connectDB from './config/db.js'
import workshopRouter from './routers/workshopRouter.js'
import vehicleRouter from './routers/vehicleRouter.js'
import maintenanceRouter from './routers/maintenanceRouter.js'


connectDB()

const app = express()
app.use(express.json())

app.use('/Workshop', workshopRouter)
app.use('/Vehicle', vehicleRouter)
app.use('/Maintenance', maintenanceRouter)

app.listen(3000, () => console.log('Server running on port 3000'));