import { useEffect, useState } from "react";
import api from "../../services/api";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {

        try {

            const response = await api.get("/projects");


            const projectsData = response.data?.data?.data;

            if (Array.isArray(projectsData)) {
                setProjects(projectsData.slice(0, 6));
                
            } else {
                setProjects([]);
            }

        } catch (error) {

            console.error("Projects Error:", error);

        }

    }

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <h2 className="mb-5 text-center">
                    Latest Projects
                </h2>

                <div className="row">

                    {projects.map((project) => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}