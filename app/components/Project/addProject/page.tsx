"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddProject() {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newProject = {
      name,
      project: name,  
    }

    try {
      const response = await fetch('/api/Projects', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      })

      if (response.ok) {
        router.push('/components/Project/addProject')
      } else {
        console.error("Error adding project")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div>
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  )
}
