import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true
  },
  team: {
    type: [String], 
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  number_of_team: {
    type: Number,
    required: true
  }
});


const Project = mongoose.model('Project', projectSchema)

export default Project
