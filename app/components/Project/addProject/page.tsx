"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddProject() {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newProject = { name, team: [] }

    await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })

    router.push("/components/Project")
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
