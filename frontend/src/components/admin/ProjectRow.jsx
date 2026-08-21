import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";

export default function ProjectRow({

    project,

    onDelete,

    onToggleStatus

}) {

    return (

        <tr>

            <td>

                {project.id}

            </td>

            <td>

                <img

                    src={`${import.meta.env.VITE_STORAGE_URL}/${project.image}`}

                    alt={project.title}

                    width="80"

                    height="60"

                    className="rounded"

                    style={{ objectFit: "cover" }}

                    onError={(e) => {

                        e.target.onerror = null;

                        e.target.src = "https://picsum.photos/80/60";

                    }}

                />

            </td>

            <td>

                {project.title}

            </td>

            <td>

                {project.location}

            </td>

            <td>

                ₹ {project.budget}

            </td>

            <td>

                 <StatusBadge

                    status={project.status}

                    onClick={() => onToggleStatus(project.id)}

                />

            </td>

            <td>                
                <Link

                    to={`/admin/projects/view/${project.id}`}

                    className="btn btn-info btn-sm me-2"

                >

                    View

                </Link>
                <Link

                    to={`/admin/projects/edit/${project.id}`}

                    className="btn btn-warning btn-sm me-2"

                >

                    Edit

                </Link>
                <button

                    className="btn btn-danger btn-sm"

                    onClick={()=>onDelete(project.id)}

                >

                    Delete

                </button>

            </td>

        </tr>

    );

}