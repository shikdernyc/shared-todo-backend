import { MODEL_DNE } from 'variables/errors/model'

export default class Model {
  constructor(ModelClass, instance) {
    if (!instance) {
      throw MODEL_DNE
    }
    this._ModelClass = ModelClass
    this._instance = instance
  }

  static async Create(ModelClass, modelSchema) {
    try {
      let model = await ModelClass.create(modelSchema)
      return model
    } catch (error) {
      throw error
    }
  }

  /**
   * Save all changes added to udpate stack
   * @memberof Model
   */
  async save() {
    try {
      await this._instance.save()
    } catch (error) {
      throw error
    }
  }

  async destroy() {
    try {
      await this._ModelClass.deleteOne({ _id: this.instance._id });
      delete this
    } catch (error) {
      throw error
    }
  }
}