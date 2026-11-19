
import { useParams, Link } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id.toString() === id
  );

  if (!project) {
    return (
      <main className="details-page">
        <h2>Project not found</h2>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <Link to="/">Back to Home</Link>

      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
      />

      <h3>{project.category}</h3>

      <p>{project.description}</p>

      <h2>Project Details</h2>
      <p>{project.details}</p>
    </main>
  );
}

export default ProjectDetails;
