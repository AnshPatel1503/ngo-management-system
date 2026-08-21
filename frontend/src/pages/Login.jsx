import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { login } from "../api/authApi";

import { saveAuth } from "../utils/auth";

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        email: "",

        password: ""

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function submit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await login(form);

            saveAuth(

                response.data.token,

                response.data.user

            );

            toast.success("Login Successful");

            navigate("/admin/dashboard");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="mb-4">

                                Admin Login

                            </h2>

                            <form onSubmit={submit}>

                                <div className="mb-3">

                                    <label>

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        name="email"

                                        className="form-control"

                                        value={form.email}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label>

                                        Password

                                    </label>

                                    <input

                                        type="password"

                                        name="password"

                                        className="form-control"

                                        value={form.password}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <button

                                    className="btn btn-success w-100"

                                    disabled={loading}

                                >

                                    {

                                        loading

                                        ?

                                        "Logging in..."

                                        :

                                        "Login"

                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}