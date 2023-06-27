import express from 'express'
import { AcademicFacultyRoutes } from '../app/modules/academicFaculty/academicFaculty.route'
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../app/modules/user/user.route'

const router = express.Router()
router.use('/user', UserRoutes)
router.use('/academic-semester', AcademicSemesterRoutes)
router.use('/academic-faculty', AcademicFacultyRoutes)

export default router
