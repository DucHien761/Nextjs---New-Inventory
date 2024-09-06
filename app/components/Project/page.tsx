"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { ProjectList } from "../Project/ProjectList/ProjectList"

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
        console.error("Error fetching projects:", error)
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
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Project List</h1>
      <ul className="list-none p-0 mb-6">
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between items-center p-4 bg-gray-100 mb-4 rounded-md shadow-sm">
            <span>{project.name}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link
        href="/components/Project/addProject"
        className="bg-green-500 text-white px-6 py-2 rounded-md no-underline"
      >
        Add New Project
      </Link>
    </div>
  )
}
