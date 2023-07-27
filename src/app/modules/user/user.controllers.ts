import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { UserServices } from './user.services'

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body
    const result = await UserServices.createStudent(student, userData)

    sendResponse<IUser>(res, {
      statusCode: status.OK,
      success: true,
      message: 'User Created Successfully!',
      data: result,
    })
  }
)

export const UserController = { createStudent }
