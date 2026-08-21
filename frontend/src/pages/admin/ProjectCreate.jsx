import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import ProjectForm from "../../components/admin/ProjectForm";

import { createProject } from "../../api/projectApi";

export default function ProjectCreate(){

    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);

    async function saveProject(formData){

        try{

            setLoading(true);

            await createProject(formData);

            toast.success("Project created successfully.");

            navigate("/admin/projects");

        }

        catch(error){

            console.log(error);

            toast.error("Failed to create project.");

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div className="container py-4">

            <h2 className="mb-4">

                Add Project

            </h2>

            <ProjectForm

                onSubmit={saveProject}

                loading={loading}

            />

        </div>

    );

}