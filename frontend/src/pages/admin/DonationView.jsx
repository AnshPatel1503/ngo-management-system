import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import {
    getDonationById
} from "../../api/donationApi";


export default function DonationView(){

    const { id } = useParams();

    const [donation,setDonation] = useState(null);


    useEffect(()=>{

        loadDonation();

    },[]);



    async function loadDonation(){

        try{

            const response = await getDonationById(id);

            setDonation(response.data.data);

        }

        catch{

            toast.error("Failed to load donation.");

        }

    }


    if(!donation){

        return (

            <h4 className="text-center mt-5">

                Loading...

            </h4>

        );

    }


    return (

        <div className="container py-4">


            <div className="card shadow">


                <div className="card-header">

                    <h3>

                        Donation Details

                    </h3>

                </div>



                <div className="card-body">


                    <table className="table table-bordered">


                        <tbody>


                            <tr>

                                <th>

                                    Donor Name

                                </th>

                                <td>

                                    {donation.donor_name}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Email

                                </th>

                                <td>

                                    {donation.email || "-"}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Phone

                                </th>

                                <td>

                                    {donation.phone || "-"}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Amount

                                </th>

                                <td>

                                    ₹ {donation.amount}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Payment Method

                                </th>

                                <td>

                                    {donation.payment_method}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Message

                                </th>

                                <td>

                                    {donation.message || "-"}

                                </td>

                            </tr>


                            <tr>

                                <th>

                                    Status

                                </th>

                                <td>

                                    {

                                    donation.status

                                    ?

                                    "Active"

                                    :

                                    "Inactive"

                                    }

                                </td>

                            </tr>


                        </tbody>


                    </table>


                    <Link

                        to="/admin/donations"

                        className="btn btn-secondary"

                    >

                        Back

                    </Link>


                </div>


            </div>


        </div>

    );

}