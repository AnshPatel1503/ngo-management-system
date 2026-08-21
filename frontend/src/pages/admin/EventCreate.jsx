import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import EventForm from "../../components/admin/EventForm";

import { createEvent } from "../../api/eventApi";

export default function EventCreate() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    async function saveEvent(formData) {

        try {

            setLoading(true);

            await createEvent(formData);

            toast.success("Event created successfully.");

            navigate("/admin/events");

        }

        catch {

            toast.error("Failed to create event.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Create Event

            </h2>

            <EventForm

                onSubmit={saveEvent}

                loading={loading}

            />

        </div>

    );

}