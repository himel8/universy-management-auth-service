import { z } from 'zod'

const createManagementDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is require',
    }),
  }),
})

const updateManagementDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is require',
    }),
  }),
})

export const ManagementDepartmentValidation = {
  createManagementDepartmentZodSchema,
  updateManagementDepartmentZodSchema,
}
