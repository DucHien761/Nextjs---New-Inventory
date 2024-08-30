"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProjectList from "./ProjectList/ProjectList"

interface TeamMember {
  id: number
  name: string
  role: string
}

interface Project {
  id: string 
  name: string
  team: TeamMember[]
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/Projects')
        if (!response.ok) {
          throw new Error("Network response was not okkkkkkkkkkkkkk")
        }
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }
    
    fetchProjects()
  }, [])
  
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, { method: "DELETE" })
      if (!response.ok) {
        throw new Error("Network response was not ok")
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
