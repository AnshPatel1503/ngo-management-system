import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";

import ProjectForm from "../../components/admin/ProjectForm";

import {

    getProjectById,

    updateProject,

} from "../../api/projectApi";

export default function ProjectEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

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

    async function saveProject(formData) {

        try {

            setSaving(true);

            await updateProject(id, formData);

            toast.success("Project updated successfully.");

            navigate("/admin/projects");

        }

        catch {

            toast.error("Failed to update project.");

        }

        finally {

            setSaving(false);

        }

    }

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Edit Project

            </h2>

            <ProjectForm

                initialData={project}

                onSubmit={saveProject}

                loading={saving}

            />

        </div>

    );

}