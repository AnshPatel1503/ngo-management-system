import { useNavigate } from "react-router-dom";

import { logout as apiLogout } from "../../api/authApi";

import { logout } from "../../utils/auth";

export default function AdminNavbar() {

    const navigate = useNavigate();

    async function handleLogout() {

        try {

            await apiLogout();

        }

        catch {

        }

        logout();

        navigate("/login");

    }

    return (

        <nav className="navbar navbar-light bg-light shadow-sm px-4">

            <h4>

                NGO Admin

            </h4>

            <button

                className="btn btn-danger"

                onClick={handleLogout}

            >

                Logout

            </button>

        </nav>

    );

}