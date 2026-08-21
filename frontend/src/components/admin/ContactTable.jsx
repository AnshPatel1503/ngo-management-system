import { Link } from "react-router-dom";

export default function ContactTable({
    contacts,
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

                        <th>Subject</th>

                        <th>Status</th>

                        <th width="220">

                            Action

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {contacts.map((item) => (

                        <tr key={item.id}>

                            <td>

                                {item.id}

                            </td>

                            <td>

                                {item.name}

                            </td>

                            <td>

                                {item.email}

                            </td>

                            <td>

                                {item.phone || "-"}

                            </td>

                            <td>

                                {item.subject || "-"}

                            </td>

                            <td>

                                {item.status ? (

                                    <span className="badge bg-success">

                                        Read

                                    </span>

                                ) : (

                                    <span className="badge bg-warning text-dark">

                                        New

                                    </span>

                                )}

                            </td>

                            <td>

                                <Link
                                    to={`/admin/contacts/view/${item.id}`}
                                    className="btn btn-info btn-sm me-1"
                                >
                                    View
                                </Link>

                                <Link
                                    to={`/admin/contacts/edit/${item.id}`}
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