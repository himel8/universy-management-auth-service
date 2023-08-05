import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { UserController } from './user.controllers'
import { UserValidation } from './user.validation'

const router = express.Router()
router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
)
router.post(
  '/create-student',
  validateRequest(UserValidation.createStudentZodSchema),
  UserController.createStudent
)
router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculty
)

export const UserRoutes = router
