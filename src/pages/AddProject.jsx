
import { useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";

function AddProject({ onAddProject }) {
  const navigate = useNavigate();

  async function handleAddProject(project) {
    await onAddProject(project);
    navigate("/");
  }

  return (
    <main className="add-project-page">
      <h1>Add a New Project</h1>
      <ProjectForm onAddProject={handleAddProject} />
    </main>
  );
}

export default AddProject;
