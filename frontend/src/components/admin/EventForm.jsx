import { useState } from "react";

export default function EventForm({
    onSubmit,
    loading,
    initialData = null,
}) {

    const [title, setTitle] = useState(initialData?.title || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [location, setLocation] = useState(initialData?.location || "");
    const [eventDate, setEventDate] = useState(initialData?.event_date || "");
    const [eventTime, setEventTime] = useState(initialData?.event_time || "");
    const [status, setStatus] = useState(initialData?.status ?? 1);

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState(
        initialData
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
        formData.append("event_date", eventDate);
        formData.append("event_time", eventTime);
        formData.append("status", status);

        if (image) {
            formData.append("image", image);
        }

        onSubmit(formData);

    }

    return (

        <form onSubmit={submit}>

            <div className="mb-3">
                <label className="form-label">Title</label>

                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required={!initialData}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>

                <textarea
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required={!initialData}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Location</label>

                <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    required={!initialData}
                />
            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Event Date

                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={eventDate}
                        onChange={(e)=>setEventDate(e.target.value)}
                        required={!initialData}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Event Time

                    </label>

                    <input
                        type="time"
                        className="form-control"
                        value={eventTime}
                        onChange={(e)=>setEventTime(e.target.value)}
                    />

                </div>

            </div>

            <div className="mb-3">

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

            <div className="mb-3">

                <label className="form-label">

                    Image

                </label>

                <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImage}
                    required={!initialData}
                />

            </div>

            {
                preview && (

                    <img
                        src={preview}
                        alt="Preview"
                        width="200"
                        className="mb-3 rounded border"
                    />

                )
            }

            <button
                className="btn btn-success"
                disabled={loading}
            >

                {
                    loading
                        ? "Saving..."
                        : "Save Event"
                }

            </button>

        </form>

    );

}