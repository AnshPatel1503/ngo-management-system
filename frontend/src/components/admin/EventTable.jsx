import EventRow from "./EventRow";

export default function EventTable({

    events,

    onDelete,

}) {

    return (

        <table className="table table-bordered table-hover align-middle">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Image</th>

                    <th>Title</th>

                    <th>Location</th>

                    <th>Date</th>

                    <th>Status</th>

                    <th width="230">

                        Action

                    </th>

                </tr>

            </thead>

            <tbody>

                {

                    events.map(event=>(

                        <EventRow

                            key={event.id}

                            event={event}

                            onDelete={onDelete}

                        />

                    ))

                }

            </tbody>

        </table>

    );

}