import { Model, Types } from 'mongoose'
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interfaces'
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'
import { IAcademicSemester } from '../academicSemester/academicSemester.interface'

export type IUserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type IGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
  address: string
}
export type ILocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type IFaculty = {
  id: string
  name: IUserName
  dateOfBirth: string
  gender: 'male' | 'female'
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  permanentAddress: string
  guardian: IGuardian
  localGuardian: ILocalGuardian
  profileImage?: string
  academicSemester: Types.ObjectId | IAcademicSemester
  academicDepartment: Types.ObjectId | IAcademicDepartment
  academicFaculty: Types.ObjectId | IAcademicFaculty
}

export type FacultyModel = Model<IFaculty, Record<string, unknown>>
