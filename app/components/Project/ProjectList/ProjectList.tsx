import Link from "next/link"

interface TeamMember {
  id: number
  name: string
  role: string
}

interface Project {
  id: string // Assuming MongoDB ObjectId is a string
  name: string
  team: TeamMember[]
}

interface ProjectListProps {
  projects: Project[]
  handleDelete: (id: string) => void
}

export default function ProjectList({ projects, handleDelete }: ProjectListProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <p>Team: {project.team.map((member) => member.name).join(", ")}</p>
          <Link href={`/components/Project/editProject/${project.id}`}>
            Edit
          </Link>
          <button onClick={() => handleDelete(project.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
