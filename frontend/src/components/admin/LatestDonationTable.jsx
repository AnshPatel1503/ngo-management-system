import { Link } from "react-router-dom";
export default function LatestDonationTable({

    donations

}) {

    return (

        <div className="card shadow">

            <div className="card-header bg-danger text-white d-flex justify-content-between  border-0">

                <h5 className="mb-0">

                    Latest Donations

                </h5>
                <Link

                    to="/admin/donations"

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

                                Donor

                            </th>

                            <th>

                                Amount

                            </th>

                            <th>

                                Method

                            </th>

                            <th>

                                Status

                            </th>

                        </tr>

                    </thead>


                    <tbody>

                    {

                        donations.map(item => (

                            <tr key={item.id}>

                                <td>

                                    {item.donor_name}

                                </td>


                                <td>

                                    ₹ {item.amount}

                                </td>


                                <td>

                                    {item.payment_method}

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