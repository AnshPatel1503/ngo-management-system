import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";

import EmptyState from "../../components/common/EmptyState";

import VolunteerTable from "../../components/admin/VolunteerTable";

import Pagination from "../../components/admin/Pagination";

import {
    getVolunteers,
    deleteVolunteer,
} from "../../api/volunteerApi";


export default function VolunteerList() {

    const [volunteers, setVolunteers] = useState([]);

    const [pagination, setPagination] = useState(null);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);


    async function loadVolunteers(pageNumber = 1, searchValue = search) {

        try {

            setLoading(true);

            const response = await getVolunteers(
                pageNumber,
                searchValue
            );

            setVolunteers(
                response.data.data.data
            );

            setPagination(
                response.data.data
            );

        }

        catch {

            toast.error(
                "Failed to load volunteers."
            );

        }

        finally {

            setLoading(false);

        }

    }


    useEffect(() => {

        loadVolunteers(page, search);

    }, [page]);


    function handleSearch(e) {

        const value = e.target.value;

        setSearch(value);

        setPage(1);

        loadVolunteers(1, value);

    }


    function changePage(pageNumber) {

        setPage(pageNumber);

    }


    async function removeVolunteer(id) {

        const result = await Swal.fire({

            title: "Delete Volunteer?",

            text: "You won't be able to recover it.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#198754",

            cancelButtonColor: "#dc3545",

            confirmButtonText: "Yes, Delete"

        });


        if (!result.isConfirmed) {

            return;

        }


        try {

            await deleteVolunteer(id);

            toast.success(
                "Volunteer deleted successfully."
            );

            loadVolunteers(page, search);

        }

        catch {

            toast.error(
                "Delete failed."
            );

        }

    }


    if (loading) {

        return <Loading />;

    }


    return (

        <div className="container py-4">


            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Volunteer Management

                </h2>


                <Link
                    to="/admin/volunteers/create"
                    className="btn btn-success"
                >

                    Add Volunteer

                </Link>

            </div>


            <input

                type="text"

                className="form-control mb-4"

                placeholder="Search volunteer..."

                value={search}

                onChange={handleSearch}

            />


            {volunteers.length === 0 ? (

                <EmptyState
                    message="No Volunteers Found"
                />

            ) : (

                <>

                    <VolunteerTable

                        volunteers={volunteers}

                        onDelete={removeVolunteer}

                    />


                    <Pagination

                        pagination={pagination}

                        onPageChange={changePage}

                    />

                </>

            )}

        </div>

    );

}