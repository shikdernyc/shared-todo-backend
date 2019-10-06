import { userSchema } from './schemas'
import Model from './model'
import { User } from 'models'
import { hash, validateHash } from './utils/encryption'

export default class UserModel extends Model {
  constructor(userInstance) {
    super(User, userInstance)
  }

  /**
   * Creates a user
   * @param {Object} userData user info in userSchema
   * @returns {UserModel} created user model
   */
  static async Create(userData) {
    try {
      await userSchema.validateAsync(userData) // validates userData format
      // TODO: Validate that no other user exists with the same email
      // TODO: hash user's password using the hash method

      const userInstance = await Model.Create(User, userData)
      return new UserModel(userInstance)
    } catch (error) {
      throw error
    }
  }

  /**
   * validate user
   * @param {string} email users email
   * @param {string} password users password
   * @reutrns {UserModel} if valid. Error if invalid
   */
  static async validate(email, password) {
    try {
      // TODO: Validate user's email and password

    } catch (error) {
      throw error
    }
  }

  // setters
  set fullName(fullName) {
    this._instance.fullName = fullName
  }

  toJSON() {
    return {
      fullName: this._instance.fullName,
      email: this._instance.email
    }
  }
}