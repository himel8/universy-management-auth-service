import { Schema, model } from 'mongoose'
import {
  AcademicDepartmentModal,
  IAcademicDepartment,
} from './academicDepartment.interfaces'

const AcademicDepartmentSchema = new Schema<
  IAcademicDepartment,
  AcademicDepartmentModal
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export const AcademicDepartment = model<
  IAcademicDepartment,
  AcademicDepartmentModal
>('AcademicDepartment', AcademicDepartmentSchema)
