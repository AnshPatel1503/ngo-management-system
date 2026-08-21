import { Link } from "react-router-dom";

export default function EventRow({

    event,

    onDelete,

}) {

    return (

        <tr>

            <td>{event.id}</td>

            <td>

                <img

                    src={`${import.meta.env.VITE_STORAGE_URL}/${event.image}`}

                    alt={event.title}

                    width="80"

                    className="rounded"

                    onError={(e)=>{

                        e.target.onerror=null;

                        e.target.src="https://picsum.photos/80/60";

                    }}

                />

            </td>

            <td>{event.title}</td>

            <td>{event.location}</td>

            <td>{event.event_date}</td>

            <td>

                {

                    event.status

                    ?

                    "Active"

                    :

                    "Inactive"

                }

            </td>

            <td width="230">

                <Link

                    to={`/admin/events/view/${event.id}`}

                    className="btn btn-info btn-sm me-2"

                >

                    View

                </Link>

                <Link

                    to={`/admin/events/edit/${event.id}`}

                    className="btn btn-warning btn-sm me-2"

                >

                    Edit

                </Link>

                <button

                    className="btn btn-danger btn-sm"

                    onClick={()=>onDelete(event.id)}

                >

                    Delete

                </button>

            </td>

        </tr>

    );

}