import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "react-toastify";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";
import Pagination from "../../components/admin/Pagination";
import EventTable from "../../components/admin/EventTable";

import {

    getEvents,

    deleteEvent,

} from "../../api/eventApi";

export default function EventList() {

    const [loading,setLoading]=useState(true);

    const [events,setEvents]=useState([]);

    const [pagination,setPagination]=useState(null);

    const [page,setPage]=useState(1);

    const [search,setSearch]=useState("");

    useEffect(()=>{

        loadEvents(page);

    },[page]);

    async function loadEvents(pageNumber=1){

        try{

            setLoading(true);

            const response=await getEvents(pageNumber);

            setEvents(response.data.data.data);

            setPagination(response.data.data);

        }

        catch{

            toast.error("Failed to load events.");

        }

        finally{

            setLoading(false);

        }

    }

    async function removeEvent(id){

        const result=await Swal.fire({

            title:"Delete Event?",

            text:"You won't be able to recover it.",

            icon:"warning",

            showCancelButton:true,

            confirmButtonColor:"#198754",

            cancelButtonColor:"#dc3545",

            confirmButtonText:"Yes, Delete"

        });

        if(!result.isConfirmed) return;

        try{

            await deleteEvent(id);

            toast.success("Event deleted.");

            loadEvents(page);

        }

        catch{

            toast.error("Delete failed.");

        }

    }

    function changePage(pageNumber){

        setPage(pageNumber);

    }

    const filteredEvents=events.filter(item=>

        item.title.toLowerCase().includes(search.toLowerCase())

    );

    if(loading){

        return <Loading/>;

    }

    return(

        <div className="container py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Event Management

                </h2>

                <Link

                    to="/admin/events/create"

                    className="btn btn-success"

                >

                    Add Event

                </Link>

            </div>

            <input

                className="form-control mb-4"

                placeholder="Search Event..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {

                filteredEvents.length===0

                ?

                <EmptyState

                    message="No Events Found"

                />

                :

                <>

                    <EventTable

                        events={filteredEvents}

                        onDelete={removeEvent}

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