
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function EditProject() {
  const [name, setName] = useState("")
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => setName(data.name))
    }
  }, [id])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
    router.push("/")
  }

  return (
    <div>
      <h1>Edit Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}
