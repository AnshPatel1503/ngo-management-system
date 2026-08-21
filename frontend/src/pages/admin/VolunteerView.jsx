import { useEffect, useState } from "react";

import {
    Link,
    useParams,
} from "react-router-dom";

import { toast } from "react-toastify";

import {
    getVolunteerById,
} from "../../api/volunteerApi";


export default function VolunteerView() {

    const { id } = useParams();

    const [volunteer, setVolunteer] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        loadVolunteer();

    }, [id]);


    async function loadVolunteer() {

        try {

            setLoading(true);

            const response = await getVolunteerById(id);

            setVolunteer(response.data.data);

        }

        catch {

            toast.error(
                "Failed to load volunteer."
            );

        }

        finally {

            setLoading(false);

        }

    }


    if (loading) {

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

                <Link
                    to="/admin/volunteers"
                    className="btn btn-secondary"
                >

                    Back to Volunteers

                </Link>

            </div>

        );

    }


    return (

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Volunteer Details

                </h2>


                <div>

                    <Link
                        to={`/admin/volunteers/edit/${volunteer.id}`}
                        className="btn btn-warning me-2"
                    >

                        Edit

                    </Link>


                    <Link
                        to="/admin/volunteers"
                        className="btn btn-secondary"
                    >

                        Back

                    </Link>

                </div>

            </div>


            <div className="card shadow">

                <div className="card-header">

                    <h5 className="mb-0">

                        Volunteer Information

                    </h5>

                </div>


                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered">

                            <tbody>

                                <tr>

                                    <th width="220">

                                        ID

                                    </th>

                                    <td>

                                        {volunteer.id}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Name

                                    </th>

                                    <td>

                                        {volunteer.name}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Email

                                    </th>

                                    <td>

                                        {volunteer.email || "-"}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Phone

                                    </th>

                                    <td>

                                        {volunteer.phone || "-"}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        City

                                    </th>

                                    <td>

                                        {volunteer.city || "-"}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Occupation

                                    </th>

                                    <td>

                                        {volunteer.occupation || "-"}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Message

                                    </th>

                                    <td>

                                        {volunteer.message || "-"}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Status

                                    </th>

                                    <td>

                                        {volunteer.status ? (

                                            <span className="badge bg-success">

                                                Active

                                            </span>

                                        ) : (

                                            <span className="badge bg-secondary">

                                                Inactive

                                            </span>

                                        )}

                                    </td>

                                </tr>


                                <tr>

                                    <th>

                                        Created At

                                    </th>

                                    <td>

                                        {volunteer.created_at
                                            ? new Date(
                                                volunteer.created_at
                                            ).toLocaleString()
                                            : "-"
                                        }

                                    </td>

                                </tr>


                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}