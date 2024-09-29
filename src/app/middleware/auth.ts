import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import config from '../../config'
import ApiError from '../../errors/ApiError'
import { jwtHelpers } from '../../helpers/jwtHelpers'

const auth =
  (...requireRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized')
      }
      let verifiedUser = null

      verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.refresh_secret as Secret
      )

      req.user = verifiedUser

      if (requireRoles.length && !requireRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden')
      }

      next()
    } catch (error) {
      next(error)
    }
  }

export default auth
