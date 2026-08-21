import { motion } from "motion/react";

export default function CounterSection() {
  const stats = [
    {
      number: "5000+",
      title: "Families Helped",
    },
    {
      number: "250+",
      title: "Volunteers",
    },
    {
      number: "120+",
      title: "Projects",
    },
    {
      number: "50+",
      title: "Cities",
    },
  ];

  return (
    <section className="py-5 bg-success text-white">
      <div className="container">

        <div className="row">

          {stats.map((item, index) => (

            <div
              className="col-md-3 mb-4"
              key={index}
            >

              <motion.div
                className="text-center"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
              >

                <h1 className="display-4 fw-bold">
                  {item.number}
                </h1>

                <h5>
                  {item.title}
                </h5>

              </motion.div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}