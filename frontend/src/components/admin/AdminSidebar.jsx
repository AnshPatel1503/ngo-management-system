import { NavLink } from "react-router-dom";

export default function AdminSidebar() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{
                width: "250px",
                minHeight: "100vh",
            }}
        >

            <h3 className="mb-4">

                NGO Admin

            </h3>

            <NavLink
                to="/admin/dashboard"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Dashboard
            </NavLink>

            <NavLink
                to="/admin/gallery"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Gallery
            </NavLink>

            <NavLink
                to="/admin/projects"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Projects
            </NavLink>

            <NavLink
                to="/admin/events"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Events
            </NavLink>

            <NavLink
                to="/admin/donations"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Donations
            </NavLink>
            <NavLink
                to="/admin/volunteers"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Volunteers
            </NavLink>
            <NavLink
                to="/admin/contacts"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Contacts
            </NavLink>
            <NavLink
                to="/admin/settings"
                className="btn btn-dark w-100 text-start mb-2"
            >
                Settings
            </NavLink>
            
        </div>

    );

}