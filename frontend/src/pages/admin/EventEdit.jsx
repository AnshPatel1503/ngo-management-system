import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import EventForm from "../../components/admin/EventForm";

import {
    getEventById,
    updateEvent,
} from "../../api/eventApi";

export default function EventEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [event, setEvent] = useState(null);

    useEffect(() => {

        loadEvent();

    }, []);

    async function loadEvent() {

        try {

            const response = await getEventById(id);

            setEvent(response.data.data);

        }

        catch {

            toast.error("Failed to load event.");

        }

    }

    async function saveEvent(formData) {

        try {

            setLoading(true);

            await updateEvent(id, formData);

            toast.success("Event updated successfully.");

            navigate("/admin/events");

        }

        catch {

            toast.error("Update failed.");

        }

        finally {

            setLoading(false);

        }

    }

    if (!event) {

        return <h4 className="text-center mt-5">Loading...</h4>;

    }

    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Edit Event

            </h2>

            <EventForm

                initialData={event}

                onSubmit={saveEvent}

                loading={loading}

            />

        </div>

    );

}