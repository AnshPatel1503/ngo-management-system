import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


import DonationForm from "../../components/admin/DonationForm";

import {
    createDonation
} from "../../api/donationApi";


export default function DonationCreate(){


    const navigate = useNavigate();


    const [loading,setLoading] = useState(false);



    async function saveDonation(data){


        try{


            setLoading(true);


            await createDonation(data);


            toast.success(
                "Donation created successfully."
            );


            navigate("/admin/donations");


        }

        catch{


            toast.error(
                "Failed to create donation."
            );


        }

        finally{


            setLoading(false);


        }

    }



    return (

        <div className="container py-4">


            <h2 className="mb-4">

                Add Donation

            </h2>



            <DonationForm

                onSubmit={saveDonation}

                loading={loading}

            />


        </div>

    );


}