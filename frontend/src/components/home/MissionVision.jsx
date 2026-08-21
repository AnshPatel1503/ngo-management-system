import SectionTitle from "../common/SectionTitle";

export default function MissionVision() {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                <SectionTitle
                    title="Mission & Vision"
                    subtitle="Our purpose and future goals"
                />

                <div className="row g-4">

                    <div className="col-lg-6">

                        <div className="card shadow-card h-100 p-4">

                            <h3 className="text-success">
                                Our Mission
                            </h3>

                            <p className="mt-3">

                                Our mission is to improve the lives of
                                underprivileged communities through
                                education, healthcare, food distribution,
                                environmental awareness and skill
                                development.

                            </p>

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card shadow-card h-100 p-4">

                            <h3 className="text-primary">
                                Our Vision
                            </h3>

                            <p className="mt-3">

                                We dream of a society where every child
                                gets education, every family has food,
                                every woman has equal opportunities,
                                and every citizen lives with dignity.

                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}