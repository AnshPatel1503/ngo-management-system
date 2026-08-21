import SectionTitle from "../common/SectionTitle";

export default function StatsSection(){

    return(

        <section className="py-5">

            <div className="container">

                <SectionTitle
                    title="Our Impact"
                    subtitle="Together we are changing lives."
                />

                <div className="row g-4">

                    <div className="col-md-3">

                        <div className="stat-box">

                            <div className="stat-number">
                                250+
                            </div>

                            <h5>Volunteers</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="stat-box">

                            <div className="stat-number">
                                100+
                            </div>

                            <h5>Projects</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="stat-box">

                            <div className="stat-number">
                                5000+
                            </div>

                            <h5>Families Helped</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="stat-box">

                            <div className="stat-number">
                                ₹50L+
                            </div>

                            <h5>Donations</h5>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}