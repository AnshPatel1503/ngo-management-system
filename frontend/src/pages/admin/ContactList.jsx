import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";

import EmptyState from "../../components/common/EmptyState";

import ContactTable from "../../components/admin/ContactTable";

import Pagination from "../../components/admin/Pagination";

import {
    getContacts,
    deleteContact,
} from "../../api/contactApi";


export default function ContactList() {

    const [contacts, setContacts] = useState([]);

    const [pagination, setPagination] = useState(null);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);


    async function loadContacts(
        pageNumber = 1,
        searchValue = search
    ) {

        try {

            setLoading(true);

            const response = await getContacts(
                pageNumber,
                searchValue
            );

            setContacts(
                response.data.data.data
            );

            setPagination(
                response.data.data
            );

        }

        catch {

            toast.error(
                "Failed to load contacts."
            );

        }

        finally {

            setLoading(false);

        }

    }


    useEffect(() => {

        loadContacts(page, search);

    }, [page]);


    function handleSearch(e) {

        const value = e.target.value;

        setSearch(value);

        setPage(1);

        loadContacts(1, value);

    }


    function changePage(pageNumber) {

        setPage(pageNumber);

    }


    async function removeContact(id) {

        const result = await Swal.fire({

            title: "Delete Contact?",

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

            await deleteContact(id);

            toast.success(
                "Contact deleted successfully."
            );

            loadContacts(page, search);

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

                    Contact Management

                </h2>

            </div>


            <input

                type="text"

                className="form-control mb-4"

                placeholder="Search contact..."

                value={search}

                onChange={handleSearch}

            />


            {contacts.length === 0 ? (

                <EmptyState
                    message="No Contacts Found"
                />

            ) : (

                <>

                    <ContactTable

                        contacts={contacts}

                        onDelete={removeContact}

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