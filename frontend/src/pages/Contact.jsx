import ContactForm from "../components/home/ContactForm";

export default function Contact() {

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1>

                    Contact Us

                </h1>

                <p className="text-muted">

                    Have a question or want to work with us?
                    Send us a message.

                </p>

            </div>


            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <ContactForm />

                </div>

            </div>

        </div>

    );

}