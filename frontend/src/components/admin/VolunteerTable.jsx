import { Link } from "react-router-dom";

export default function VolunteerTable({
    volunteers,
    onDelete,
}) {

    return (

        <div className="table-responsive">

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>City</th>

                        <th>Occupation</th>

                        <th>Status</th>

                        <th width="220">

                            Action

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {volunteers.map((item) => (

                        <tr key={item.id}>

                            <td>

                                {item.id}

                            </td>

                            <td>

                                {item.name}

                            </td>

                            <td>

                                {item.email || "-"}

                            </td>

                            <td>

                                {item.phone || "-"}

                            </td>

                            <td>

                                {item.city || "-"}

                            </td>

                            <td>

                                {item.occupation || "-"}

                            </td>

                            <td>

                                {item.status ? (

                                    <span className="badge bg-success">

                                        Active

                                    </span>

                                ) : (

                                    <span className="badge bg-secondary">

                                        Inactive

                                    </span>

                                )}

                            </td>

                            <td>

                                <Link
                                    to={`/admin/volunteers/view/${item.id}`}
                                    className="btn btn-info btn-sm me-1"
                                >
                                    View
                                </Link>

                                <Link
                                    to={`/admin/volunteers/edit/${item.id}`}
                                    className="btn btn-warning btn-sm me-1"
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

                    ))}

                </tbody>

            </table>

        </div>

    );

}