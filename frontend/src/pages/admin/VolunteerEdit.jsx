import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import VolunteerForm from "../../components/admin/VolunteerForm";

import {
    getVolunteerById,
    updateVolunteer,
} from "../../api/volunteerApi";


export default function VolunteerEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [volunteer, setVolunteer] = useState(null);

    const [loading, setLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(true);


    useEffect(() => {

        loadVolunteer();

    }, [id]);


    async function loadVolunteer() {

        try {

            setPageLoading(true);

            const response = await getVolunteerById(id);

            setVolunteer(response.data.data);

        }

        catch {

            toast.error(
                "Failed to load volunteer."
            );

        }

        finally {

            setPageLoading(false);

        }

    }


    async function saveVolunteer(data) {

        try {

            setLoading(true);

            await updateVolunteer(id, data);

            toast.success(
                "Volunteer updated successfully."
            );

            navigate("/admin/volunteers");

        }

        catch {

            toast.error(
                "Failed to update volunteer."
            );

        }

        finally {

            setLoading(false);

        }

    }


    if (pageLoading) {

        return (

            <div className="container py-5">

                <h4 className="text-center">

                    Loading volunteer...

                </h4>

            </div>

        );

    }


    if (!volunteer) {

        return (

            <div className="container py-5">

                <div className="alert alert-danger">

                    Volunteer not found.

                </div>

            </div>

        );

    }


    return (

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Edit Volunteer

                </h2>

            </div>


            <div className="card shadow">

                <div className="card-header">

                    <h5 className="mb-0">

                        Edit Volunteer Information

                    </h5>

                </div>


                <div className="card-body">

                    <VolunteerForm

                        initialData={volunteer}

                        onSubmit={saveVolunteer}

                        loading={loading}

                    />

                </div>

            </div>

        </div>

    );

}