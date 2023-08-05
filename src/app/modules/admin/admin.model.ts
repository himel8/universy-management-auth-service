import { Schema, model } from 'mongoose'
import { BloodGroup, Gender } from '../student/student.constant'
import { AdminModel, IAdmin } from './admin.interface'

export const adminSchema = new Schema<IAdmin, AdminModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      required: true,
      type: {
        firstName: {
          type: String,
          require: true,
        },
        middleName: {
          type: String,
        },
        lastName: {
          type: String,
          require: true,
        },
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: Gender,
    },
    bloodGroup: {
      type: String,
      enum: BloodGroup,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contactNo: {
      type: String,
      unique: true,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    managementDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'ManagementDepartment',
      required: true,
    },
    designation: {
      type: String,
    },
    profileImage: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Admin = model<IAdmin, AdminModel>('Admin', adminSchema)
