import SectionTitle from "../common/SectionTitle";

export default function EventPreview(){

    const events=[

        {

            title:"Blood Donation Camp",

            date:"15 August 2026"

        },

        {

            title:"Tree Plantation",

            date:"20 August 2026"

        },

        {

            title:"Education Drive",

            date:"5 September 2026"

        }

    ];

    return(

        <section className="py-5 bg-light">

            <div className="container">

                <SectionTitle

                    title="Upcoming Events"

                    subtitle="Join our upcoming activities"

                />

                <div className="row">

                    {

                        events.map((event,index)=>(

                            <div
                                key={index}
                                className="col-lg-4 mb-4"
                            >

                                <div className="card shadow-card p-4">

                                    <h4>

                                        {event.title}

                                    </h4>

                                    <p className="text-muted">

                                        {event.date}

                                    </p>

                                    <button
                                        className="btn btn-success"
                                    >
                                        Register

                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}