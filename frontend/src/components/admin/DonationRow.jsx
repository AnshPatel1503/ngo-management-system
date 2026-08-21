import { Link } from "react-router-dom";

export default function DonationRow({

    donation,

    onDelete,

}) {

    return (

        <tr>

            <td>

                {donation.id}

            </td>

            <td>

                {donation.donor_name}

            </td>

            <td>

                {donation.email || "-"}

            </td>

            <td>

                ₹ {donation.amount}

            </td>

            <td>

                {donation.payment_method}

            </td>

            <td>

                {

                    donation.status

                    ?

                    "Active"

                    :

                    "Inactive"

                }

            </td>

            <td width="230">


                <Link

                    to={`/admin/donations/view/${donation.id}`}

                    className="btn btn-info btn-sm me-2"

                >

                    View

                </Link>


                <Link

                    to={`/admin/donations/edit/${donation.id}`}

                    className="btn btn-warning btn-sm me-2"

                >

                    Edit

                </Link>


                <button

                    className="btn btn-danger btn-sm"

                    onClick={()=>onDelete(donation.id)}

                >

                    Delete

                </button>


            </td>

        </tr>

    );

}