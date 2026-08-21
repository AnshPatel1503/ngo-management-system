import { useEffect, useState } from "react";

import {
    Link,
    useParams,
} from "react-router-dom";

import { toast } from "react-toastify";

import {
    getContactById,
} from "../../api/contactApi";


export default function ContactView() {

    const { id } = useParams();

    const [contact, setContact] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        loadContact();

    }, [id]);


    async function loadContact() {

        try {

            setLoading(true);

            const response = await getContactById(id);

            setContact(response.data.data);

        }

        catch {

            toast.error(
                "Failed to load contact."
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

                    Loading contact...

                </h4>

            </div>

        );

    }


    if (!contact) {

        return (

            <div className="container py-5">

                <div className="alert alert-danger">

                    Contact not found.

                </div>

                <Link
                    to="/admin/contacts"
                    className="btn btn-secondary"
                >

                    Back

                </Link>

            </div>

        );

    }


    return (

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Contact Details

                </h2>


                <div>

                    <Link
                        to={`/admin/contacts/edit/${contact.id}`}
                        className="btn btn-warning me-2"
                    >

                        Edit

                    </Link>

                    <Link
                        to="/admin/contacts"
                        className="btn btn-secondary"
                    >

                        Back

                    </Link>

                </div>

            </div>


            <div className="card shadow">

                <div className="card-header">

                    <h5 className="mb-0">

                        Contact Information

                    </h5>

                </div>


                <div className="card-body">

                    <table className="table table-bordered">

                        <tbody>

                            <tr>

                                <th width="220">

                                    ID

                                </th>

                                <td>

                                    {contact.id}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Name

                                </th>

                                <td>

                                    {contact.name}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Email

                                </th>

                                <td>

                                    {contact.email}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Phone

                                </th>

                                <td>

                                    {contact.phone || "-"}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Subject

                                </th>

                                <td>

                                    {contact.subject || "-"}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Message

                                </th>

                                <td>

                                    {contact.message}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Status

                                </th>

                                <td>

                                    {contact.status ? (

                                        <span className="badge bg-success">

                                            Read

                                        </span>

                                    ) : (

                                        <span className="badge bg-warning text-dark">

                                            New

                                        </span>

                                    )}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Created At

                                </th>

                                <td>

                                    {contact.created_at
                                        ? new Date(
                                            contact.created_at
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

    );

}