import { Link } from "react-router-dom";

export default function LatestProjectTable({ projects }) {

    return (

        <div className="card shadow">

            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center  border-0">

                <h5 className="mb-0">

                    Latest Projects

                </h5>

                <Link

                    to="/admin/projects"

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

                            <th>Description</th>

                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            projects.length === 0

                            ?

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center py-4"
                                >

                                    No Projects Found

                                </td>

                            </tr>

                            :

                            projects.map((item) => (

                                <tr key={item.id}>

                                    <td>

                                        <img
                                            src={`${import.meta.env.VITE_STORAGE_URL}/${item.image}`}
                                            alt={item.title}
                                            width="70"
                                            height="70"
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                            }}
                                            onError={(e) => {

                                                e.target.onerror = null;

                                                e.target.src =
                                                    "https://picsum.photos/70";

                                            }}
                                        />

                                    </td>

                                    <td>

                                        {item.title}

                                    </td>

                                    <td>

                                        {

                                            item.description?.length > 60

                                            ?

                                            item.description.substring(0, 60) + "..."

                                            :

                                            item.description

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