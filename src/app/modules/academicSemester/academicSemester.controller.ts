import { NextFunction, Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
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
    const paginationOptions = pick(req.query, paginationList)

    const result = await AcademicSemesterService.getAllSemester(
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

export const AcademicSemesterController = { createSemester, getAllSemester }
