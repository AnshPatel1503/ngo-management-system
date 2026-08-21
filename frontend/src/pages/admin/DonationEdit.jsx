import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import DonationForm from "../../components/admin/DonationForm";

import {
    getDonationById,
    updateDonation,
} from "../../api/donationApi";


export default function DonationEdit(){

    const { id } = useParams();

    const navigate = useNavigate();

    const [donation,setDonation] = useState(null);

    const [loading,setLoading] = useState(false);


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


    async function saveDonation(formData){

        console.log(id,formData);
        try{

            setLoading(true);


            await updateDonation(id,formData);


            toast.success(
                "Donation updated successfully."
            );


            navigate("/admin/donations");


        }

        catch{

            toast.error(
                "Donation update failed."
            );

        }

        finally{

            setLoading(false);

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


            <h2 className="mb-4">

                Edit Donation

            </h2>


            <DonationForm

                initialData={donation}

                onSubmit={saveDonation}

                loading={loading}

            />


        </div>

    );

}