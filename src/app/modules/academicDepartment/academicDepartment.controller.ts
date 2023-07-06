import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicDepartmentFilterableFields } from './academicDepartment.constants'
import { IAcademicDepartment } from './academicDepartment.interfaces'
import { AcademicDepartmentService } from './academicDepartment.services'

const createDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body
    const result = await AcademicDepartmentService.createDepartment(
      academicDepartmentData
    )

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department Created Successfully',
      data: result,
    })
  }
)

const getAllDepatments: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await AcademicDepartmentService.getAllDepatments(
      filters,
      paginationOptions
    )

    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Departments fetched Successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await AcademicDepartmentService.getSingleDepartment(id)

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Department retrieved successfully',
      data: result,
    })
  }
)

const updateDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AcademicDepartmentService.updateDepartment(
      id,
      updatedData
    )

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Department update successfully',
      data: result,
    })
  }
)
const deleteDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await AcademicDepartmentService.deleteDepartment(id)

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Department deleted successfully',
      data: result,
    })
  }
)

export const AcademicDepartmentController = {
  createDepartment,
  getSingleDepartment,
  getAllDepatments,
  updateDepartment,
  deleteDepartment,
}
