
interface Project {
  id: string 
  name: string
  project: string
  team: string
}

interface ProjectListProps {
  projects: Project[]
  handleDelete: (id: string) => void
}

export default function ProjectList({ projects, handleDelete }: ProjectListProps) {
  return (
    <ul>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.project}</h2>
          <button onClick={() => handleDelete(project.id)}>Delete</button>
        </div>
      ))}
    </ul>
  )
}
