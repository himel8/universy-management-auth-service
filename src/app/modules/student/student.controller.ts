import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { studentFilterableFields } from './student.constant'
import { IStudent } from './student.interface'
import { StudentService } from './student.services'

const getAllStudents: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, studentFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await StudentService.getAllStudents(
      filters,
      paginationOptions
    )

    sendResponse<IStudent[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Students retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await StudentService.getSingleStudent(id)

    sendResponse<IStudent>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    })
  }
)

const updateStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await StudentService.updateStudent(id, updatedData)

    sendResponse<IStudent>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student update successfully',
      data: result,
    })
  }
)

const deleteStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await StudentService.deleteStudent(id)

    sendResponse<IStudent>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  }
)

export const StudentController = {
  getSingleStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
}
