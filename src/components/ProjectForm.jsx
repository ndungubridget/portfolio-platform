
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      category,
      description,
      image,
      details,
    };

    onAddProject(newProject);

    setTitle("");
    setCategory("");
    setDescription("");
    setImage("");
    setDetails("");
  }

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h2>Add a New Project</h2>

      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Project category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <input
        type="url"
        placeholder="Project image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <textarea
        placeholder="More project details"
        value={details}
        onChange={(event) => setDetails(event.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
