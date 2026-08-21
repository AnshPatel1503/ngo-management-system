import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getEventById } from "../../api/eventApi";

export default function EventView() {

    const { id } = useParams();

    const [event, setEvent] = useState(null);

    useEffect(() => {

        loadEvent();

    }, []);

    async function loadEvent() {

        try {

            const response = await getEventById(id);

            setEvent(response.data.data);

        }

        catch {

            toast.error("Failed to load event.");

        }

    }

    if (!event) {

        return <h3 className="text-center mt-5">Loading...</h3>;

    }

    return (

        <div className="container py-4">

            <div className="card shadow">

                <div className="card-header">

                    <h3>{event.title}</h3>

                </div>

                <div className="card-body">

                    <img

                        src={`${import.meta.env.VITE_STORAGE_URL}/${event.image}`}

                        className="img-fluid rounded mb-4"

                        alt={event.title}

                        onError={(e)=>{

                            e.target.src="https://picsum.photos/900/400";

                        }}

                    />

                    <table className="table">

                        <tbody>

                            <tr>

                                <th width="200">

                                    Title

                                </th>

                                <td>

                                    {event.title}

                                </td>

                            </tr>

                            <tr>

                                <th>

                                    Location

                                </th>

                                <td>

                                    {event.location}

                                </td>

                            </tr>

                            <tr>

                                <th>

                                    Date

                                </th>

                                <td>

                                    {event.event_date}

                                </td>

                            </tr>

                            <tr>

                                <th>

                                    Time

                                </th>

                                <td>

                                    {event.event_time || "-"}

                                </td>

                            </tr>

                            <tr>

                                <th>

                                    Status

                                </th>

                                <td>

                                    {event.status ? "Active" : "Inactive"}

                                </td>

                            </tr>

                            <tr>

                                <th>

                                    Description

                                </th>

                                <td>

                                    {event.description}

                                </td>

                            </tr>

                        </tbody>

                    </table>

                    <Link

                        to="/admin/events"

                        className="btn btn-secondary"

                    >

                        Back

                    </Link>

                </div>

            </div>

        </div>

    );

}