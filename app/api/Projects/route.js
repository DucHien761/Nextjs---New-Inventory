'use server'

import { connectToDatabase } from '../../../config/database'
import Project from '../../models/project' 


async function getDb() {
  await connectToDatabase()
}


export async function GET() {
  
  try {
    await getDb()
    const projects = await Project.find({}) 
    // console.log('Fetched Projects:', projects)
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching projects' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}


export async function POST(request) {
  await getDb()
  
  try {
    const body = await request.json() 
    const project = new Project(body)
    const savedProject = await project.save() 
    return new Response(JSON.stringify(savedProject), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating project' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
