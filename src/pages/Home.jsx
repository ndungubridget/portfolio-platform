
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

function Home({ projects, searchTerm, onSearchChange }) {
  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>My Creative Portfolio</h1>
        <p>
          Explore my work, projects, and creative ideas.
        </p>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}

export default Home;
