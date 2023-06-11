import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  // default password

  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createUser
}

export default { createUser }
