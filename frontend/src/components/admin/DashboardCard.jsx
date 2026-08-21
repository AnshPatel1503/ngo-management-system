import { motion } from "motion/react";

export default function DashboardCard({

    title,
    value,
    icon,
    color

}) {

    return (

        <motion.div

            whileHover={{ scale: 1.04 }}

            transition={{ duration: 0.2 }}

            className={`dashboard-card bg-gradient-${color} shadow-lg p-3`}

        >

            <div className="d-flex justify-content-between align-items-center h-100">

                <div>

                    <p className="dashboard-title mb-2">

                        {title}

                    </p>

                    <h2 className="dashboard-value mb-0">

                        {value}

                    </h2>

                </div>

                <div className="dashboard-icon">

                    {icon}

                </div>

            </div>

        </motion.div>

    );

}