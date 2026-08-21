import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {

    FaProjectDiagram,

    FaImages,

    FaCalendarAlt,

    FaDonate,

    FaUsers

} from "react-icons/fa";

import DashboardCard from "../../components/admin/DashboardCard";
import LatestGalleryTable from "../../components/admin/LatestGalleryTable";
import LatestProjectTable from "../../components/admin/LatestProjectTable";
import DashboardChart from "../../components/admin/DashboardChart";
import RecentActivity from "../../components/admin/RecentActivity";
import DashboardHeader from "../../components/admin/DashboardHeader";
import QuickActions from "../../components/admin/QuickActions";
import LatestEventTable from "../../components/admin/LatestEventTable";
import LatestDonationTable from "../../components/admin/LatestDonationTable";
import LatestVolunteerTable from "../../components/admin/LatestVolunteerTable";

import { getDashboard } from "../../api/dashboardApi";

export default function Dashboard() {

    const [latestEvents,setLatestEvents]=useState([]);
    const [latestGallery, setLatestGallery] = useState([]);
    const [latestProjects, setLatestProjects] = useState([]);
    const [activities, setActivities] = useState([]);
    const [latestDonations,setLatestDonations] = useState([]);
    const [latestVolunteers,setLatestVolunteers] = useState([]);

    const [stats, setStats] = useState({

        projects: 0,

        gallery: 0,

        events: 0,

        donations: 0,

        volunteers: 0,

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const response = await getDashboard();

            setStats(response.data.stats);

            setLatestGallery(response.data.latest_gallery);
            setLatestProjects(response.data.latest_projects);
            setLatestEvents(response.data.latest_events);
            setActivities(response.data.activities);
            setLatestDonations(response.data.latest_donations);
            setLatestVolunteers(response.data.latest_volunteers);

        }

        catch {

            toast.error("Failed to load dashboard.");

        }

    }

    const cards = [

        {

            title: "Projects",

            value: stats.projects,

            color: "primary",

            icon: <FaProjectDiagram />

        },

        { 

            title: "Gallery",

            value: stats.gallery,

            color: "success",

            icon: <FaImages />

        },

        {

            title: "Events",

            value: stats.events,

            color: "warning",

            icon: <FaCalendarAlt />

        },

        {

            title: "Donations",

            value: stats.donations,

            color: "danger",

            icon: <FaDonate />

        },
        {
            title:"Donation Amount",

            value: `₹ ${stats.donation_amount ?? 0}`,

            color:"success",

            icon:<FaDonate/>

        },

        {

            title: "Volunteers",

            value: stats.volunteers,

            color: "info",

            icon: <FaUsers />

        }

    ];

    return (
        <>
        <DashboardHeader />
        <div>

            <div className="row">

                {

                    cards.map((item, index) => (

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>

                            <DashboardCard {...item} />

                        </div>

                    ))

                }
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-4" >
                <QuickActions />
                 </div>
            </div>
            <div>

                <DashboardChart

                    stats={stats}

                />

            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="mt-4">

                        <LatestGalleryTable

                            gallery={latestGallery}

                        />

                    </div>
                    <div className="mt-4">

                        <LatestProjectTable

                            projects={latestProjects}

                        />

                    </div>
                    <div className="mt-4">

                        <LatestVolunteerTable

                            volunteers={latestVolunteers}

                        />

                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                
                    <div className="mt-4">

                        <LatestEventTable

                            events={latestEvents}

                        />

                    </div>
                    <div className="mt-4">

                        <RecentActivity

                            activities={activities}

                        />

                    </div>
                    <div className="mt-4">

                        <LatestDonationTable

                            donations={latestDonations}

                        />

                    </div>
                </div>
            </div>

        </div>
        
        </>
    );

}