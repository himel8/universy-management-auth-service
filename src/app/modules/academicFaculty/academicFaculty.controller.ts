import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicFacultyFilterableFields } from './academicFaculty.constant'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicFacultyService } from './academicFaculty.services'

const createFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicFacultyData } = req.body
    const result = await AcademicFacultyService.createFaculty(
      academicFacultyData
    )

    sendResponse<IAcademicFaculty>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Faculty is created successfully!',
      data: result,
    })
  }
)

const getAllFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicFacultyFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await AcademicFacultyService.getAllFaculty(
      filters,
      paginationOptions
    )

    sendResponse<IAcademicFaculty[]>(res, {
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
    const result = await AcademicFacultyService.getSingleFaculty(id)

    sendResponse<IAcademicFaculty>(res, {
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
    const result = await AcademicFacultyService.updateFaculty(id, updatedData)

    sendResponse<IAcademicFaculty>(res, {
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

    const result = await AcademicFacultyService.deleteFaculty(id)

    sendResponse<IAcademicFaculty>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Faculty deleted successfully',
      data: result,
    })
  }
)

export const AcademicFacultyController = {
  createFaculty,
  getSingleFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty,
}
