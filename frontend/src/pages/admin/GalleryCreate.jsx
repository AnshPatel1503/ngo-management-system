import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GalleryForm from "../../components/admin/GalleryForm";
import { createGallery } from "../../api/galleryApi";

export default function GalleryCreate() {

    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();

    async function saveGallery(formData){

        try{

            setLoading(true);

            await createGallery(formData);

            alert("Gallery Added Successfully");

            navigate("/admin/gallery");

        }

        catch(error){

            console.log(error);

            alert("Upload Failed");

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div className="container py-5">

            <h2 className="mb-4">

                Add Gallery

            </h2>

            <GalleryForm

                onSubmit={saveGallery}

                loading={loading}

            />

        </div>

    );

}