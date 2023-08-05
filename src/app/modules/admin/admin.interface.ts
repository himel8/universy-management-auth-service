import { Model, Types } from 'mongoose'
import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface'

export type IUserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type IAdmin = {
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
  managementDepartment: Types.ObjectId | IManagementDepartment
  designation: string
  profileImage?: string
}

export type AdminModel = Model<IAdmin, Record<string, unknown>>

export type IAdminFilters = {
  searchTerm?: string
  id?: string
  bloodGroup?: string
  email?: string
  contactNo?: string
  emergencyContactNo?: string
}
