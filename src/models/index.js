import mongoose from 'mongoose'
import { DATABASE_URL } from 'config'
import User from './User'

mongoose.Promise = global.Promise

class DB {
  static async connect() {
    // creates a mongoose singleton
    if (!DB.mongoose) {
      try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to Database")
        DB.mongoose = mongoose
      } catch (error) {
        console.log(error)
        console.log("Unable to connect to Database")
        throw error
      }
    }
    return DB.mongoose
  }
}

DB.connect()

export {
  User
}