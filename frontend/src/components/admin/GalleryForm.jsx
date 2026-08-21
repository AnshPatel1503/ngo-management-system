import { useEffect, useState } from "react";

export default function GalleryForm({
    onSubmit,
    loading,
    initialData = null,
}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (initialData) {

            setTitle(initialData.title || "");

            setDescription(initialData.description || "");

            setStatus(initialData.status ?? 1);

            if (initialData.image) {

                setPreview(
                    `${import.meta.env.VITE_STORAGE_URL}/${initialData.image}`
                );

            }

        }

    }, [initialData]);

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
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Description

                </label>

                <textarea
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Status

                </label>

                <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option value={1}>

                        Active

                    </option>

                    <option value={0}>

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

                    <div className="mb-3">

                        <img
                            src={preview}
                            alt="Preview"
                            width="220"
                            className="img-thumbnail"
                        />

                    </div>

                )

            }

            <button
                type="submit"
                className="btn btn-success"
                disabled={loading}
            >

                {

                    loading

                        ? "Saving..."

                        : initialData

                            ? "Update Gallery"

                            : "Save Gallery"

                }

            </button>

        </form>

    );

}