let AWS = require('aws-sdk');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY } = require('../config')

const cred = new AWS.Credentials(ACCESS_KEY_ID, SECRET_ACCESS_KEY)
AWS.config.credentials = cred


module.exports = { AWS }