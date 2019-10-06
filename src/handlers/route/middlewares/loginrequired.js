import jwt from 'jsonwebtoken'

export function loginRequired(req, res, next) {
  try {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
      if (err) throw err;
      if (payload) {
        if (payload.hasOwnProperty("userId")) {
          req.userId = payload.userId;
          return next();
        }
      } else {
        return next({
          status: 401,
          message: "Please log in first"
        });
      }
    });
  } catch (error) {
    console.log(error);
    return next({
      status: 401,
      message: "Please log in first"
    });
  }
}
