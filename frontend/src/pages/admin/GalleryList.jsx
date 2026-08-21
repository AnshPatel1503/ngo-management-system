import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import {
    getGallery,
    deleteGallery,
} from "../../api/galleryApi";

import GalleryTable from "../../components/admin/GalleryTable";
import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";

export default function GalleryList() {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        loadGallery();

    }, []);

    async function loadGallery() {

        try {

            setLoading(true);

            const response = await getGallery();

            setGallery(response.data.data || []);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load gallery.");

        } finally {

            setLoading(false);

        }

    }

    async function removeGallery(id) {

        const result = await Swal.fire({

            title: "Delete Gallery?",

            text: "You won't be able to recover this record.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#198754",

            cancelButtonColor: "#dc3545",

            confirmButtonText: "Yes, Delete"

        });

        if (!result.isConfirmed) return;

        try {

            await deleteGallery(id);

            toast.success("Gallery deleted successfully.");

            loadGallery();

        } catch (error) {

            console.error(error);

            toast.error("Delete failed.");

        }

    }

    const filteredGallery = gallery.filter((item) =>

        item.title
            ?.toLowerCase()
            .includes(search.toLowerCase())

    );

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="mb-0">

                    Gallery Management

                </h2>

                <Link

                    to="/admin/gallery/create"

                    className="btn btn-success"

                >

                    + Add Gallery

                </Link>

            </div>

            <div className="mb-4">

                <input

                    type="text"

                    className="form-control"

                    placeholder="Search by title..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>

            {

                filteredGallery.length === 0

                    ?

                    <EmptyState

                        message="No Gallery Found"

                    />

                    :

                    <GalleryTable

                        gallery={filteredGallery}

                        onDelete={removeGallery}

                    />

            }

        </div>

    );

}