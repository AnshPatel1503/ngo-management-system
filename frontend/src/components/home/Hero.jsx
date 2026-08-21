export default function Hero() {
    return (

        <section className="bg-success text-white py-5">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <h1 className="display-4 fw-bold">
                            Welcome To NGO Management System
                        </h1>

                        <p className="lead mt-3">
                            Together we can make a better future.
                        </p>

                        <button className="btn btn-light btn-lg">
                            Donate Now
                        </button>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img
                            src="https://picsum.photos/600/350"
                            className="img-fluid rounded"
                            alt="Hero"
                        />

                    </div>

                </div>

            </div>

        </section>

    );
}