import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";

import { getProjectById } from "../../api/projectApi";

export default function ProjectView() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [project, setProject] = useState(null);

    useEffect(() => {

        loadProject();

    }, []);

    async function loadProject() {

        try {

            const response = await getProjectById(id);

            setProject(response.data.data);

        }

        catch {

            toast.error("Failed to load project.");

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="container py-4">

            <div className="card shadow">

                <img

                    src={`${import.meta.env.VITE_STORAGE_URL}/${project.image}`}

                    alt={project.title}

                    className="card-img-top"

                    style={{ height: "350px", objectFit: "cover" }}

                    onError={(e) => {

                        e.target.onerror = null;

                        e.target.src = "https://picsum.photos/900/350";

                    }}

                />

                <div className="card-body">

                    <h2>

                        {project.title}

                    </h2>

                    <hr />

                    <p>

                        <strong>Description :</strong>

                        {project.description}

                    </p>

                    <p>

                        <strong>Location :</strong>

                        {project.location}

                    </p>

                    <p>

                        <strong>Budget :</strong>

                        ₹ {project.budget}

                    </p>

                    <p>

                        <strong>Date :</strong>

                        {project.project_date}

                    </p>

                    <p>

                        <strong>Status :</strong>

                        {

                            project.status

                            ?

                            "Active"

                            :

                            "Inactive"

                        }

                    </p>

                    <Link

                        to="/admin/projects"

                        className="btn btn-secondary mt-3"

                    >

                        Back

                    </Link>

                </div>

            </div>

        </div>

    );

}