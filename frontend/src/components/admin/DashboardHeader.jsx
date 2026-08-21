import { useEffect, useState } from "react";

export default function DashboardHeader() {

     const [today, setToday] = useState(new Date());


    useEffect(() => {

        const timer = setInterval(() => {

            setToday(new Date());

        }, 1000);


        return () => clearInterval(timer);

    }, []);


    return (

        <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex">
                <span className="h2">Welcome 👋</span>
                <span className="P text-muted">
                    NGO Management Dashboard
                </span>
            </div>
            <div className="text-end">
                <h5>
                    {today.toLocaleDateString()}
                    <small> {today.toLocaleTimeString()}</small>
                </h5>  
            </div>
        </div>
    );

}