import { Router } from 'express'
import { loginUser, signupUser } from 'handlers/route/auth'

const router = Router()

router.route('/login').post(loginUser)
router.route('/signup').post(signupUser)

export default router