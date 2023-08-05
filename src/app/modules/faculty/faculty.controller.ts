import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { studentFilterableFields } from '../student/student.constant'
import { IFaculty } from './faculty.interface'
import { FacultyService } from './faculty.services'

const getAllFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, studentFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await FacultyService.getAllFacultys(
      filters,
      paginationOptions
    )

    sendResponse<IFaculty[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Facultys retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await FacultyService.getSingleFaculty(id)

    sendResponse<IFaculty>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Faculty retrieved successfully',
      data: result,
    })
  }
)

const updateFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await FacultyService.updateFaculty(id, updatedData)

    sendResponse<IFaculty>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Faculty update successfully',
      data: result,
    })
  }
)

const deleteFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await FacultyService.deleteFaculty(id)

    sendResponse<IFaculty>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Faculty deleted successfully',
      data: result,
    })
  }
)

export const FacultyController = {
  getSingleFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty,
}
