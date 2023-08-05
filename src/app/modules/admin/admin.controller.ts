import { Request, RequestHandler, Response } from 'express'
import status from 'http-status'
import { paginationList } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { adminFilterableFields } from './admin.constant'
import { IAdmin } from './admin.interface'
import { AdminService } from './admin.services'

const getAllAdmins: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, adminFilterableFields)
    const paginationOptions = pick(req.query, paginationList)

    const result = await AdminService.getAllAdmins(filters, paginationOptions)

    sendResponse<IAdmin[]>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Admins retrieved successfully',
      meta: result.meta,
      data: result.data,
    })
  }
)

const getSingleAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await AdminService.getSingleAdmin(id)

    sendResponse<IAdmin>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Admin retrieved successfully',
      data: result,
    })
  }
)

const updateAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AdminService.updateAdmin(id, updatedData)

    sendResponse<IAdmin>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Admin update successfully',
      data: result,
    })
  }
)

const deleteAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await AdminService.deleteAdmin(id)

    sendResponse<IAdmin>(res, {
      statusCode: status.OK,
      success: true,
      message: 'Admin deleted successfully',
      data: result,
    })
  }
)

export const AdminController = {
  getSingleAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
}
