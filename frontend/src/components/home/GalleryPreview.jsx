import { useEffect, useState } from "react";
import { getGallery } from "../../api/galleryApi";
import SectionTitle from "../common/SectionTitle";

export default function GalleryPreview() {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGallery();
    }, []);

    async function loadGallery() {

        try {

            const response = await getGallery();

            const data = response.data.data;

            if (Array.isArray(data)) {
                setGallery(data.slice(0, 6));
            } else {
                setGallery([]);
            }

        } catch (error) {

            console.log("Gallery Preview Error:", error);
            setGallery([]);

        } finally {

            setLoading(false);

        }

    }

    return (

        <section className="py-5">

            <div className="container">

                <SectionTitle
                    title="Gallery"
                    subtitle="Our recent activities"
                />

                {loading ? (

                    <div className="text-center">
                        Loading...
                    </div>

                ) : (

                    <div className="row">

                        {gallery.length > 0 ? (

                            gallery.map((item) => (

                                <div
                                    className="col-md-4 mb-4"
                                    key={item.id}
                                >

                                    <img
                                        src={
                                            item.image
                                                ? `http://127.0.0.1:8000/storage/${item.image}`
                                                : "https://picsum.photos/500/350"
                                        }
                                        alt={item.title || "Gallery"}
                                        className="img-fluid rounded shadow"
                                        style={{
                                            width: "100%",
                                            height: "250px",
                                            objectFit: "cover"
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://picsum.photos/500/350";
                                        }}
                                    />

                                </div>

                            ))

                        ) : (

                            <div className="col-12 text-center">
                                <p>No gallery images found.</p>
                            </div>

                        )}

                    </div>

                )}

            </div>

        </section>

    );
}