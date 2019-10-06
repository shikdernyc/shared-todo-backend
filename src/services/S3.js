const { AWS } = require('./aws')
const s3 = new AWS.S3()
const multer = require('multer')
const multerS3 = require('multer-s3')
const { ITEM_IMAGE_BUCKET } = require('../config')

const multerS3Uploader = (metadata, key) => {
  return multer({
    storage: multerS3({
      s3: s3,
      bucket: ITEM_IMAGE_BUCKET,
      acl: 'public-read',
      metadata: metadata,
      key: key
    })
  })
}

module.exports = { multerS3Uploader }