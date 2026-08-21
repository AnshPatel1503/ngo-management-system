import SectionTitle from "../common/SectionTitle";

export default function TestimonialSection(){

    const testimonials=[

        {

            name:"Rahul Sharma",

            message:"Wonderful NGO. Very transparent and honest."

        },

        {

            name:"Priya Singh",

            message:"Happy to contribute to children's education."

        },

        {

            name:"Amit Kumar",

            message:"Excellent volunteers and management."

        }

    ];

    return(

        <section
            className="py-5 bg-light"
            data-aos="fade-up"
        >

            <div className="container">

                <SectionTitle

                    title="Testimonials"

                    subtitle="What our supporters say"

                />

                <div className="row">

                    {

                        testimonials.map((item,index)=>(

                            <div
                                className="col-lg-4 mb-4"
                                key={index}
                            >

                                <div className="card shadow-card p-4 h-100">

                                    <p>

                                        "{item.message}"

                                    </p>

                                    <hr/>

                                    <h5>

                                        {item.name}

                                    </h5>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}