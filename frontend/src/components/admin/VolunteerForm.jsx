import { useState } from "react";

export default function VolunteerForm({
    onSubmit,
    loading,
    initialData = null,
}) {

    const [name, setName] = useState(
        initialData?.name || ""
    );

    const [email, setEmail] = useState(
        initialData?.email || ""
    );

    const [phone, setPhone] = useState(
        initialData?.phone || ""
    );

    const [city, setCity] = useState(
        initialData?.city || ""
    );

    const [occupation, setOccupation] = useState(
        initialData?.occupation || ""
    );

    const [message, setMessage] = useState(
        initialData?.message || ""
    );

    const [status, setStatus] = useState(
        initialData?.status ?? 1
    );


    function submit(e) {

        e.preventDefault();

        const data = {

            name,

            email,

            phone,

            city,

            occupation,

            message,

            status: Number(status),

        };

        onSubmit(data);

    }


    return (

        <form onSubmit={submit}>

            {/* Name */}

            <div className="mb-3">

                <label className="form-label">

                    Name

                </label>

                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

            </div>


            {/* Email */}

            <div className="mb-3">

                <label className="form-label">

                    Email

                </label>

                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>


            {/* Phone */}

            <div className="mb-3">

                <label className="form-label">

                    Phone

                </label>

                <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

            </div>


            <div className="row">

                {/* City */}

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        City

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                </div>


                {/* Occupation */}

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Occupation

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={occupation}
                        onChange={(e) =>
                            setOccupation(e.target.value)
                        }
                    />

                </div>

            </div>


            {/* Message */}

            <div className="mb-3">

                <label className="form-label">

                    Message

                </label>

                <textarea
                    className="form-control"
                    rows="4"
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                />

            </div>


            {/* Status */}

            <div className="mb-3">

                <label className="form-label">

                    Status

                </label>

                <select
                    className="form-select"
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                >

                    <option value="1">

                        Active

                    </option>

                    <option value="0">

                        Inactive

                    </option>

                </select>

            </div>


            {/* Submit */}

            <button
                type="submit"
                className="btn btn-success"
                disabled={loading}
            >

                {loading
                    ? "Saving..."
                    : "Save Volunteer"
                }

            </button>

        </form>

    );

}