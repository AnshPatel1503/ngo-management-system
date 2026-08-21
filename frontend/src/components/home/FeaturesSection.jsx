import { motion } from "motion/react";
import SectionTitle from "../common/SectionTitle";

export default function FeaturesSection() {

    const features = [

        {
            icon: "🎓",
            title: "Education",
            description: "Providing quality education to children from underprivileged families."
        },

        {
            icon: "🍛",
            title: "Food Support",
            description: "Distributing meals and ration kits to families in need."
        },

        {
            icon: "🏥",
            title: "Healthcare",
            description: "Free medical camps, medicines and health awareness programs."
        },

        {
            icon: "🌱",
            title: "Environment",
            description: "Tree plantation and awareness campaigns for a greener future."
        }

    ];

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <SectionTitle
                    title="Our Services"
                    subtitle="How we help society"
                />

                <div className="row">

                    {

                        features.map((item,index)=>(

                            <div
                                className="col-lg-3 col-md-6 mb-4"
                                key={index}
                            >

                                <motion.div

                                    className="card service-card p-4 h-100 text-center"

                                    initial={{opacity:0,y:40}}

                                    whileInView={{opacity:1,y:0}}

                                    transition={{duration:.5,delay:index*.2}}

                                    viewport={{once:true}}

                                >

                                    <div className="display-4">

                                        {item.icon}

                                    </div>

                                    <h4 className="mt-3">

                                        {item.title}

                                    </h4>

                                    <p>

                                        {item.description}

                                    </p>

                                </motion.div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}