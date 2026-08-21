import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import GalleryForm from "../../components/admin/GalleryForm";

import {
    getGalleryById,
    updateGallery,
} from "../../api/galleryApi";

export default function GalleryEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [gallery, setGallery] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        loadGallery();

    }, []);

    async function loadGallery() {

        const response = await getGalleryById(id);

        setGallery(response.data.data);

    }

    async function saveGallery(formData) {

        try {

            setLoading(true);

            await updateGallery(id, formData);

            alert("Gallery Updated Successfully");

            navigate("/admin/gallery");

        }

        catch (error) {

            console.log(error);

            alert("Update Failed");

        }

        finally {

            setLoading(false);

        }

    }

    if (!gallery) {

        return <h3 className="text-center mt-5">Loading...</h3>;

    }

    return (

        <div className="container py-5">

            <h2 className="mb-4">

                Edit Gallery

            </h2>

            <GalleryForm

                initialData={gallery}

                onSubmit={saveGallery}

                loading={loading}

            />

        </div>

    );

}