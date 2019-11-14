import mongoose from "mongoose"

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
})

export default class VehicleService {
  get repository() {
    return mongoose.model('vehicle', _model)
  }
}