import { Schema, model } from 'mongoose'
import {
  IManagementDepartment,
  ManagementDepartmentModal,
} from './managementDepartment.interface'

const managementDepartmentSchema = new Schema<
  IManagementDepartment,
  ManagementDepartmentModal
>(
  {
    title: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const ManagementDepartment = model<
  IManagementDepartment,
  ManagementDepartmentModal
>('ManagementDepartment', managementDepartmentSchema)
