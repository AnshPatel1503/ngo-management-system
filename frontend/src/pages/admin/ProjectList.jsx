import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";
import ProjectTable from "../../components/admin/ProjectTable";
import Pagination from "../../components/admin/Pagination";
import { toggleProjectStatus } from "../../api/projectApi";

import {
    getProjects,
    deleteProject,
} from "../../api/projectApi";

export default function ProjectList() {

    const [pagination, setPagination] = useState(null);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [projects, setProjects] = useState([]);

    async function loadProjects(pageNumber = 1) {

        try {

            setLoading(true);

            const response = await getProjects(pageNumber);

            setProjects(response.data.data.data);

            setPagination(response.data.data);

        }

        catch {

            toast.error("Failed to load projects.");

        }

        finally {

            setLoading(false);

        }

    }
    function changePage(pageNumber) {

        setPage(pageNumber);

    }
    useEffect(() => {

        loadProjects(page);

    }, [page]);

    async function removeProject(id) {

        const result = await Swal.fire({

            title: "Delete Project?",

            text: "You won't be able to recover it.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#198754",

            cancelButtonColor: "#dc3545",

            confirmButtonText: "Yes, Delete"

        });

        if (!result.isConfirmed) return;

        try {

            await deleteProject(id);

            toast.success("Project deleted.");

            loadProjects();

        }

        catch {

            toast.error("Delete failed.");

        }

    }
    async function changeStatus(id) {

        try {

            await toggleProjectStatus(id);

            toast.success("Status updated.");

            loadProjects(page);

        }

        catch {

            toast.error("Failed to update status.");

        }

    }
    const filteredProjects = projects.filter(project =>

        project.title.toLowerCase().includes(search.toLowerCase())

    );

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Project Management

                </h2>

                <Link

                    to="/admin/projects/create"

                    className="btn btn-success"

                >

                    Add Project

                </Link>

            </div>

            <input

                className="form-control mb-4"

                placeholder="Search project..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

            />

            {
                filteredProjects.length === 0 ? (

                    <EmptyState message="No Projects Found" />

                ) : (

                    <>

                        <ProjectTable
                            projects={filteredProjects}
                            onDelete={removeProject}
                            onToggleStatus={changeStatus}
                        />

                        <Pagination
                            pagination={pagination}
                            onPageChange={changePage}
                        />

                    </>

                )
            }

        </div>

    );

}