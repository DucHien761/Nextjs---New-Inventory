import { Schema, models, model } from 'mongoose'

const projectSchema = new Schema({
  project: { type: String, required: true },
  team: { type: String, required: true },
  start_date: { type: Date, required: true },
  number_of_team: { type: Number, required: true }
})

export default models.Project || model('Project', projectSchema)
