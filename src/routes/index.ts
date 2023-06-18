import express from 'express'
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../app/modules/user/user.route'

const router = express.Router()
router.use('/user', UserRoutes)
router.use('/academic-semester', AcademicSemesterRoutes)

export default router
