import { useState } from "react";

export default function ProjectForm({

    onSubmit,

    loading,

    initialData = null

}) {

    const [title, setTitle] = useState(initialData?.title || "");

    const [description, setDescription] = useState(initialData?.description || "");

    const [location, setLocation] = useState(initialData?.location || "");

    const [projectDate, setProjectDate] = useState(
        initialData?.project_date || ""
    );

    const [budget, setBudget] = useState(initialData?.budget || "");

    const [status, setStatus] = useState(initialData?.status ?? 1);

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState(
        initialData?.image
            ? `${import.meta.env.VITE_STORAGE_URL}/${initialData.image}`
            : ""
    );

    function handleImage(e) {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(URL.createObjectURL(file));

    }

    function submit(e) {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);

        formData.append("description", description);

        formData.append("location", location);

        formData.append("project_date", projectDate);

        formData.append("budget", budget);

        formData.append("status", status);

        if (image) {

            formData.append("image", image);

        }

        onSubmit(formData);

    }

    return (

        <form onSubmit={submit}>

            <div className="mb-3">

                <label className="form-label">

                    Title

                </label>

                <input

                    className="form-control"

                    value={title}

                    onChange={(e)=>setTitle(e.target.value)}

                    required

                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Description

                </label>

                <textarea

                    rows="4"

                    className="form-control"

                    value={description}

                    onChange={(e)=>setDescription(e.target.value)}

                    required

                />

            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Location

                    </label>

                    <input

                        className="form-control"

                        value={location}

                        onChange={(e)=>setLocation(e.target.value)}

                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Project Date

                    </label>

                    <input

                        type="date"

                        className="form-control"

                        value={projectDate}

                        onChange={(e)=>setProjectDate(e.target.value)}

                    />

                </div>

            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Budget

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        value={budget}

                        onChange={(e)=>setBudget(e.target.value)}

                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Status

                    </label>

                    <select

                        className="form-select"

                        value={status}

                        onChange={(e)=>setStatus(e.target.value)}

                    >

                        <option value="1">

                            Active

                        </option>

                        <option value="0">

                            Inactive

                        </option>

                    </select>

                </div>

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Image

                </label>

                <input

                    type="file"

                    accept="image/*"

                    className="form-control"

                    onChange={handleImage}

                />

            </div>

            {

                preview &&

                <img

                    src={preview}

                    alt="Preview"

                    width="180"

                    className="mb-3 rounded border"

                />

            }

            <button

                className="btn btn-success"

                disabled={loading}

            >

                {

                    loading

                    ?

                    "Saving..."

                    :

                    "Save Project"

                }

            </button>

        </form>

    );

}