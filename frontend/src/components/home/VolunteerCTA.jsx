import { Link } from "react-router-dom";

export default function VolunteerCTA(){

    return(

        <section className="volunteer-section py-5">

            <div className="container text-center">

                <h2 className="text-white">

                    Become A Volunteer

                </h2>

                <p className="text-white mt-3">

                    Join our mission and help thousands of people.

                </p>

                <Link
                    to="/contact"
                    className="btn btn-warning btn-lg mt-3"
                >

                    Join Now

                </Link>

            </div>

        </section>

    );

}