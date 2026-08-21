import SectionTitle from "../common/SectionTitle";

export default function PartnerSection() {

    const partners = [

        "UNICEF",
        "WHO",
        "Red Cross",
        "UNDP",
        "Smile Foundation",
        "Goonj"

    ];

    return (

        <section className="py-5 bg-white">

            <div className="container">

                <SectionTitle
                    title="Our Partners"
                    subtitle="Organizations supporting our mission"
                />

                <div className="row">

                    {

                        partners.map((partner, index) => (

                            <div
                                key={index}
                                className="col-md-4 col-lg-2 mb-4"
                            >

                                <div className="card text-center p-3 shadow-card">

                                    <h6 className="mb-0">

                                        {partner}

                                    </h6>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}