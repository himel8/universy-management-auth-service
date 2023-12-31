import { Schema, model } from 'mongoose'
import { BloodGroup, Gender } from '../student/student.constant'
import { FacultyModel, IFaculty } from './faculty.interface'

export const facultySchema = new Schema<IFaculty, FacultyModel>(
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
    guardian: {
      required: true,
      type: {
        fatherName: {
          type: String,
          require: true,
        },
        fatherOccupation: {
          type: String,
          require: true,
        },
        fatherContactNo: {
          type: String,
          require: true,
        },
        motherName: {
          type: String,
          require: true,
        },
        motherOccupation: {
          type: String,
          require: true,
        },
        motherContactNo: {
          type: String,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
      },
    },
    localGuardian: {
      required: true,
      type: {
        name: {
          type: String,
          require: true,
        },
        occupation: {
          type: String,
          require: true,
        },
        contactNo: {
          type: String,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
      },
    },
    profileImage: {
      type: String,
      // required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      required: true,
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Faculty = model<IFaculty, FacultyModel>('Faculty', facultySchema)
