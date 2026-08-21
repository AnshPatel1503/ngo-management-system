import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import VolunteerForm from "../../components/admin/VolunteerForm";

import {
    createVolunteer,
} from "../../api/volunteerApi";


export default function VolunteerCreate() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);


    async function saveVolunteer(data) {

        try {

            setLoading(true);

            await createVolunteer(data);

            toast.success(
                "Volunteer created successfully."
            );

            navigate("/admin/volunteers");

        }

        catch (error) {

            toast.error(
                "Failed to create volunteer."
            );

        }

        finally {

            setLoading(false);

        }

    }


    return (

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Create Volunteer

                </h2>

            </div>


            <div className="card shadow">

                <div className="card-header">

                    <h5 className="mb-0">

                        Volunteer Information

                    </h5>

                </div>


                <div className="card-body">

                    <VolunteerForm

                        onSubmit={saveVolunteer}

                        loading={loading}

                    />

                </div>

            </div>

        </div>

    );

}