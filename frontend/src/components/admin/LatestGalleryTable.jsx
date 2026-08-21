import { Link } from "react-router-dom";

export default function LatestGalleryTable({ gallery }) {

    return (

        <div className="card shadow">

            <div className="card-header bg-success text-white d-flex justify-content-between  border-0">

                <h5 className="mb-0">

                    Latest Gallery

                </h5>

                <Link

                    to="/admin/gallery"

                    className="btn btn-light btn-sm"

                >

                    View All

                </Link>

            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead>

                        <tr>

                            <th>Image</th>

                            <th>Title</th>

                            <th>Status</th>

                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            gallery.length === 0

                                ?

                                <tr>

                                    <td

                                        colSpan="4"

                                        className="text-center py-4"

                                    >

                                        No Gallery Found

                                    </td>

                                </tr>

                                :

                                gallery.map(item => (

                                    <tr key={item.id}>

                                        <td>

                                            <img

                                                src={`${import.meta.env.VITE_STORAGE_URL}/${item.image}`}

                                                alt={item.title}

                                                width="70"

                                                height="70"

                                                style={{

                                                    objectFit: "cover",

                                                    borderRadius: "8px"

                                                }}
                                                onError={(e) => {

                                                    e.target.onerror = null;

                                                    e.target.src =
                                                        "https://picsum.photos/80";

                                                }}
                                            />

                                        </td>

                                        <td>

                                            {item.title}

                                        </td>

                                        <td>

                                            {

                                                item.status

                                                    ?

                                                    <span className="badge bg-success">

                                                        Active

                                                    </span>

                                                    :

                                                    <span className="badge bg-danger">

                                                        Inactive

                                                    </span>

                                            }

                                        </td>

                                        <td>

                                            {

                                                new Date(item.created_at)

                                                .toLocaleDateString()

                                            }

                                        </td>

                                    </tr>

                                ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}