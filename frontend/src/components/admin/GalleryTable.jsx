import { Link } from "react-router-dom";

export default function GalleryTable({
    gallery,
    onDelete,
}) {

    return (

        <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

                <thead className="table-dark">

                    <tr>

                        <th width="60">ID</th>

                        <th width="110">Image</th>

                        <th>Title</th>

                        <th>Description</th>

                        <th width="100">Status</th>

                        <th width="180">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        gallery.map((item) => (

                            <tr key={item.id}>

                                <td>

                                    {item.id}

                                </td>

                                <td>

                                    <img

                                        src={`${import.meta.env.VITE_STORAGE_URL}/${item.image}`}

                                        alt={item.title}

                                        width="80"

                                        height="80"

                                        style={{

                                            objectFit: "cover",

                                            borderRadius: "8px",

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

                                    {item.description}

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

                                    <Link

                                        to={`/admin/gallery/edit/${item.id}`}

                                        className="btn btn-warning btn-sm me-2"

                                    >

                                        Edit

                                    </Link>

                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={() => onDelete(item.id)}

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}