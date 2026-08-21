import SectionTitle from "../common/SectionTitle";

export default function WhyChooseUs(){

    return(

        <section className="py-5 bg-white">

            <div className="container">

                <SectionTitle
                    title="Why Choose Us"
                    subtitle="We work with transparency and dedication."
                />

                <div className="row g-4">

                    <div className="col-md-4">

                        <div className="card shadow-card p-4 text-center">

                            <div className="icon-circle">
                                ❤️
                            </div>

                            <h4 className="mt-4">
                                Trusted NGO
                            </h4>

                            <p>

                                Helping people through education,
                                healthcare and food support.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow-card p-4 text-center">

                            <div className="icon-circle">
                                🤝
                            </div>

                            <h4 className="mt-4">
                                Dedicated Team
                            </h4>

                            <p>

                                Our volunteers work across
                                villages and cities.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow-card p-4 text-center">

                            <div className="icon-circle">
                                🌍
                            </div>

                            <h4 className="mt-4">
                                Nationwide Reach
                            </h4>

                            <p>

                                Running social welfare
                                projects across India.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}