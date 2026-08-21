import { Link } from "react-router-dom";
export default function LatestEventTable({

    events

}){

    return(

        <div className="card shadow border-0">

            <div className="card-header bg-warning text-white d-flex justify-content-between  border-0">

                <h5 className="mb-0">

                    Latest Events

                </h5>
                <Link

                    to="/admin/events"

                    className="btn btn-light btn-sm"

                >

                    View All

                </Link>


            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Title</th>

                            <th>Date</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            events.map(item=>(

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

                                    <td>{item.title}</td>

                                    <td>{item.event_date}</td>

                                    <td>

                                        {

                                            item.status

                                            ?

                                            "Active"

                                            :

                                            "Inactive"

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