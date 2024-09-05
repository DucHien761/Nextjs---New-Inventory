import { connectToDatabase } from '../../../../config/database' 
import Project from '../../../models/project' 


async function getDb() {
  await connectToDatabase()
}

export async function GET(request, { params }) {
  await getDb()
  
  try {
    const project = await Project.findById(params.id)
    if (!project) {
      return new Response("Project not found", { status: 404 })
    }
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error retrieving project' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function PUT(request, { params }) {
  await getDb()
  
  try {
    const body = await request.json()
    const updatedProject = await Project.findByIdAndUpdate(params.id, body, { new: true })
    if (!updatedProject) {
      return new Response(null, { status: 404 })
    }
    return new Response(JSON.stringify(updatedProject), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating project' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function DELETE(request, { params }) {
  await getDb()
  
  try {
    const result = await Project.findByIdAndDelete(params.id)
    if (!result) {
      return new Response(null, { status: 404 })
    }
    return new Response(null, { status: 204 })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting project' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
