import { NextFunction, Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterFilterableFields } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.services'

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    })
    next()
  }
)

const getAllSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await AcademicSemesterService.getAllSemester(
      filters,
      paginationOptions
    )

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semesters retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
    next()
  }
)

const getSingleSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await AcademicSemesterService.getSingleSemester(id)

    sendResponse<IAcademicSemester>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester retrieved successfully',
      data: result,
    })
    next()
  }
)

const updateSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AcademicSemesterService.updateSemester(id, updatedData)

    sendResponse<IAcademicSemester>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester update successfully',
      data: result,
    })
    next()
  }
)
const deleteSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await AcademicSemesterService.deleteSemester(id)

    sendResponse<IAcademicSemester>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester deleted successfully',
      data: result,
    })
    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
  getSingleSemester,
  getAllSemester,
  updateSemester,
  deleteSemester,
}
