import User from 'handlers/model/user'
import { SECRET_KEY } from 'config'
import jwt from 'jsonwebtoken'

function createToken(user) {
  const token = jwt.sign(
    {
      userId: user.id
    },
    SECRET_KEY
  );
  return token;
}

export async function loginUser(req, res, next) {
  try {
    // TODO: Login user

  } catch (error) {
    return next({ status: 401, message: "Invalid email" })
  }
}

export async function signupUser(req, res, next) {
  try {
    const userData = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
    }
    const user = await User.Create(userData)
    const token = createToken(user);
    return res.status(200).json({
      ...user.toJSON(),
      token
    });
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
}