
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";

import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  async function handleAddProject(newProject) {
    const response = await fetch(
      "http://localhost:3001/projects",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add project");
    }

    const savedProject = await response.json();

    setProjects((previousProjects) => [
      ...previousProjects,
      savedProject,
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Header />

      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                projects={filteredProjects}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            }
          />

          <Route
            path="/add-project"
            element={
              <AddProject onAddProject={handleAddProject} />
            }
          />

          <Route
            path="/projects/:id"
            element={
              <ProjectDetails projects={projects} />
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
