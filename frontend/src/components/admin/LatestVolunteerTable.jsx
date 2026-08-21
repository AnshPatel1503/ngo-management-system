import { Link } from "react-router-dom";
export default function LatestVolunteerTable({

    volunteers

}) {

    return (

        <div className="card shadow">

            <div className="card-header bg-info text-white d-flex justify-content-between  border-0">

                <h5 className="mb-0">

                    Latest Volunteers

                </h5>
                <Link

                    to="/admin/Volunteers"

                    className="btn btn-light btn-sm"

                >

                    View All

                </Link>


            </div>


            <div className="card-body">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>

                            <th>

                                Name

                            </th>

                            <th>

                                Email

                            </th>


                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>


                    <tbody>

                    {

                        volunteers.map(item => (

                            <tr key={item.id}>

                                <td>

                                    {item.name}

                                </td>


                                <td>

                                    {item.email}

                                </td>


                               

                                <td>

                                {

                                    item.status

                                    ?

                                    "Success"

                                    :

                                    "Pending"

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