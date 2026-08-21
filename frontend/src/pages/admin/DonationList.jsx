import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "react-toastify";


import Loading from "../../components/common/Loading";

import EmptyState from "../../components/common/EmptyState";

import Pagination from "../../components/admin/Pagination";

import DonationTable from "../../components/admin/DonationTable";


import {

    getDonations,

    deleteDonation

} from "../../api/donationApi";



export default function DonationList(){


    const [donations,setDonations]=useState([]);

    const [pagination,setPagination]=useState(null);

    const [page,setPage]=useState(1);

    const [loading,setLoading]=useState(true);

    const [search,setSearch]=useState("");



    useEffect(()=>{

        loadDonations(page);

    },[page]);



    async function loadDonations(pageNumber=1){


        try{


            setLoading(true);


            const response = await getDonations(pageNumber);


            setDonations(response.data.data.data);


            setPagination(response.data.data);


        }

        catch{


            toast.error("Failed to load donations.");

        }

        finally{


            setLoading(false);


        }

    }



    function changePage(pageNumber){

        setPage(pageNumber);

    }



    async function removeDonation(id){


        const result = await Swal.fire({

            title:"Delete Donation?",

            text:"You won't be able to recover it.",

            icon:"warning",

            showCancelButton:true,

            confirmButtonText:"Yes, Delete",

            confirmButtonColor:"#198754",

            cancelButtonColor:"#dc3545"

        });



        if(!result.isConfirmed) return;



        try{


            await deleteDonation(id);


            toast.success("Donation deleted.");


            loadDonations(page);


        }

        catch{


            toast.error("Delete failed.");

        }


    }



    const filteredDonations = donations.filter(item =>

        item.donor_name

        .toLowerCase()

        .includes(search.toLowerCase())

    );



    if(loading){

        return <Loading/>;

    }



    return(


        <div className="container py-4">


            <div className="d-flex justify-content-between mb-4">


                <h2>

                    Donation Management

                </h2>


                <Link

                    to="/admin/donations/create"

                    className="btn btn-success"

                >

                    Add Donation

                </Link>


            </div>



            <input

                className="form-control mb-4"

                placeholder="Search donor..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />



            {

                filteredDonations.length===0

                ?

                <EmptyState message="No Donations Found"/>


                :


                <>


                    <DonationTable

                        donations={filteredDonations}

                        onDelete={removeDonation}

                    />


                    <Pagination

                        pagination={pagination}

                        onPageChange={changePage}

                    />


                </>


            }



        </div>


    );


}