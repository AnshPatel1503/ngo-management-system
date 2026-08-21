import { useState } from "react";
import { toast } from "react-toastify";

import { createContact } from "../../api/contactApi";

export default function ContactForm() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",

    });

    const [loading, setLoading] = useState(false);


    function handleChange(e) {

        const { name, value } = e.target;

        setForm((previous) => ({

            ...previous,

            [name]: value,

        }));

    }


    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            await createContact(form);

            toast.success(
                "Your message has been sent successfully."
            );

            setForm({

                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",

            });

        }

        catch (error) {

            const errors = error.response?.data?.errors;

            if (errors) {

                Object.values(errors)
                    .flat()
                    .forEach((message) => {

                        toast.error(message);

                    });

            } else {

                toast.error(
                    error.response?.data?.message ||
                    "Failed to send message."
                );

            }

        }

        finally {

            setLoading(false);

        }

    }


    return (

        <div className="card shadow">

            <div className="card-body p-4">

                <h3 className="mb-4">

                    Get In Touch

                </h3>


                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Name *

                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Email *

                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Phone

                            </label>

                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Enter phone number"
                                value={form.phone}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Subject

                            </label>

                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Enter subject"
                                value={form.subject}
                                onChange={handleChange}
                            />

                        </div>

                    </div>


                    <div className="mb-3">

                        <label className="form-label">

                            Message *

                        </label>

                        <textarea
                            name="message"
                            className="form-control"
                            rows="6"
                            placeholder="Write your message..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={loading}
                    >

                        {loading
                            ? "Sending..."
                            : "Send Message"
                        }

                    </button>

                </form>

            </div>

        </div>

    );

}