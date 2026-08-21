import { Link } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="cta-section py-5">

            <div className="container text-center">

                <h2 className="text-white">

                    Every Donation Makes a Difference

                </h2>

                <p className="text-white mt-3">

                    Join us in creating a better future.

                </p>

                <Link
                    to="/donate"
                    className="btn btn-warning btn-lg mt-3"
                >
                    Donate Now
                </Link>

            </div>

        </section>

    );

}