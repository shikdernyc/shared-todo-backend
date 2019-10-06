import { Router } from 'express'
import authRouter from './auth'

const router = Router()

router.use('/auth', authRouter)

router.route('/').get((req, res, next) => {
  res.status(200).json({ message: "Hello World" })
})

export default router