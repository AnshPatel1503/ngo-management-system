import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function QuickActions() {
    return (
        <div className="card shadow border-0">
            <div className="card-header bg-primary text-white">
                Quick Actions
            </div>

            <div className="card-body">

                <Link to="/admin/gallery/create" className="btn btn-success me-2 mb-2">
                    <FaPlus /> Gallery
                </Link>

                <Link to="/admin/projects/create" className="btn btn-primary me-2 mb-2">
                    <FaPlus /> Project
                </Link>

                <Link to="/admin/events/create" className="btn btn-warning me-2 mb-2">
                    <FaPlus /> Event
                </Link>

                <Link to="/admin/donations/create" className="btn btn-secondary me-2 mb-2">
                    <FaPlus /> Donation
                </Link>
                <Link to="/admin/volunteers/create" className="btn btn-dark mb-2">
                    <FaPlus /> Volunteer
                </Link>

            </div>

        </div>

    );

}