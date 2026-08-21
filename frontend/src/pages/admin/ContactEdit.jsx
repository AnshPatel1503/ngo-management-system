import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import { toast } from "react-toastify";

import {
    getContactById,
    updateContact,
} from "../../api/contactApi";


export default function ContactEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [contact, setContact] = useState(null);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);


    useEffect(() => {

        loadContact();

    }, [id]);


    async function loadContact() {

        try {

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


    function handleChange(e) {

        const { name, value } = e.target;

        setContact((previous) => ({

            ...previous,

            [name]: value,

        }));

    }


    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setSaving(true);

            await updateContact(id, {

                name: contact.name,

                email: contact.email,

                phone: contact.phone,

                subject: contact.subject,

                message: contact.message,

                status: Number(contact.status),

            });

            toast.success(
                "Contact updated successfully."
            );

            navigate("/admin/contacts");

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update contact."
            );

        }

        finally {

            setSaving(false);

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

            </div>

        );

    }


    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Edit Contact

            </h2>


            <div className="card shadow">

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label className="form-label">

                                Name

                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={contact.name}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">

                                Email

                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={contact.email}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">

                                Phone

                            </label>

                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={contact.phone || ""}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">

                                Subject

                            </label>

                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                value={contact.subject || ""}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">

                                Message

                            </label>

                            <textarea
                                name="message"
                                className="form-control"
                                rows="5"
                                value={contact.message}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">

                                Status

                            </label>

                            <select
                                name="status"
                                className="form-select"
                                value={Number(contact.status)}
                                onChange={handleChange}
                            >

                                <option value="0">

                                    New

                                </option>

                                <option value="1">

                                    Read

                                </option>

                            </select>

                        </div>


                        <button
                            type="submit"
                            className="btn btn-success me-2"
                            disabled={saving}
                        >

                            {saving
                                ? "Updating..."
                                : "Update Contact"
                            }

                        </button>


                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                                navigate("/admin/contacts")
                            }
                        >

                            Cancel

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}