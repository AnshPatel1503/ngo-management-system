import { useEffect } from "react";

import AOS from "aos";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import "./assets/css/admin.css";

export default function App() {

    useEffect(() => {

        AOS.init({

            duration:1000,

            once:true

        });

    },[]);

    return<>
		    <AppRoutes/>
		    <ToastContainer

	            position="top-right"

	            autoClose={3000}

	            theme="colored"

	        />
        </>
    ;
    return (

	    <AuthProvider>

	        <AppRoutes />

	        <ToastContainer
	            position="top-right"
	            autoClose={3000}
	            theme="colored"
	        />

	    </AuthProvider>

	);

}