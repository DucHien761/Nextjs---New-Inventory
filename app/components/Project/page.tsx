"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProjectList from "./ProjectList/ProjectList"

interface Project {
  id: string
  name: string
  team: string
  project: string
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/Projects')
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data = await response.json()
    
        setProjects(data)
      } catch (error) {
      }
    }
    fetchProjects()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, { method: "DELETE" })
      if (!response.ok) {
        throw new Error("Failed to delete project")
      }
      setProjects(prev => prev.filter(project => project.id !== id))
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  return (
    <div>
      <h1>Project List</h1>
      <ProjectList projects={projects} handleDelete={handleDelete} />
      <Link href="/components/Project/addProject">Add New Project</Link>
    </div>
  )
}
