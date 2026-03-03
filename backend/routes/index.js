import { Router } from 'express'
import bookingsRoutes from './bookings.js'
import staffRoutes from './staff.js'
import servicesRoutes from './services.js'
import availabilityRoutes from './availability.js'

const router = Router()

router.use('/bookings', bookingsRoutes)
router.use('/staff', staffRoutes)
router.use('/services', servicesRoutes)
router.use('/availability', availabilityRoutes)

export default router
