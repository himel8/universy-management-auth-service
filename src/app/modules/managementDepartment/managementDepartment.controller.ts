import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { managementDepartmentFilterableFields } from './managementDepartment.constant'
import { IManagementDepartment } from './managementDepartment.interface'
import { ManagementDepartmentService } from './managementDepartment.services'

const createManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...managementDepartmentData } = req.body
    const result = await ManagementDepartmentService.createManagementDepartment(
      managementDepartmentData
    )

    sendResponse<IManagementDepartment>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Management Department is created successfully!',
      data: result,
    })
  }
)

const getAllManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, managementDepartmentFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await ManagementDepartmentService.getAllManagementDepartment(
      filters,
      paginationOptions
    )

    sendResponse<IManagementDepartment[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Management Departments retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result =
      await ManagementDepartmentService.getSingleManagementDepartment(id)

    sendResponse<IManagementDepartment>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Management Department retrieved successfully',
      data: result,
    })
  }
)

const updateManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await ManagementDepartmentService.updateManagementDepartment(
      id,
      updatedData
    )

    sendResponse<IManagementDepartment>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Management Department update successfully',
      data: result,
    })
  }
)
const deleteManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result =
      await ManagementDepartmentService.deleteManagementDepartmenty(id)

    sendResponse<IManagementDepartment>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Management Department deleted successfully',
      data: result,
    })
  }
)

export const ManagementDepartmentController = {
  createManagementDepartment,
  getSingleManagementDepartment,
  getAllManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment,
}
