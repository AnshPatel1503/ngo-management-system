import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";
import Events from "../pages/Events";
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import GalleryList from "../pages/admin/GalleryList";
import GalleryCreate from "../pages/admin/GalleryCreate";
import GalleryEdit from "../pages/admin/GalleryEdit";
import Dashboard from "../pages/admin/Dashboard";
import ProjectList from "../pages/admin/ProjectList";
import ProjectCreate from "../pages/admin/ProjectCreate";
import ProjectEdit from "../pages/admin/ProjectEdit";
import ProjectView from "../pages/admin/ProjectView";
import EventList from "../pages/admin/EventList";
import EventCreate from "../pages/admin/EventCreate";
import EventEdit from "../pages/admin/EventEdit";
import EventView from "../pages/admin/EventView";
import DonationList from "../pages/admin/DonationList";
import DonationCreate from "../pages/admin/DonationCreate";
import DonationEdit from "../pages/admin/DonationEdit";
import DonationView from "../pages/admin/DonationView";
import VolunteerList from "../pages/admin/VolunteerList";
import VolunteerCreate from "../pages/admin/VolunteerCreate";
import VolunteerEdit from "../pages/admin/VolunteerEdit";
import VolunteerView from "../pages/admin/VolunteerView";
import ContactList from "../pages/admin/ContactList";
import ContactView from "../pages/admin/ContactView";
import ContactEdit from "../pages/admin/ContactEdit";
import Settings from "../pages/admin/Settings";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="projects" element={<Projects />} />

                    <Route path="gallery" element={<Gallery />} />

                    <Route path="events" element={<Events />} />

                    <Route path="donate" element={<Donate />} />

                    <Route path="contact" element={<Contact />} />

                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>

                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="gallery" element={<GalleryList />} />

                    <Route path="gallery/create" element={<GalleryCreate />} />

                    <Route path="gallery/edit/:id" element={<GalleryEdit />} />

                    <Route path="projects" element={<ProjectList />} />

                    <Route path="projects/create" element={<ProjectCreate />} />

                    <Route path="projects/edit/:id" element={<ProjectEdit />} />

                    <Route path="projects/view/:id" element={<ProjectView />} />

                    <Route path="events" element={<EventList />} />

                    <Route path="events/create" element={<EventCreate />} />

                    <Route path="events/edit/:id" element={<EventEdit />} />

                    <Route path="events/view/:id" element={<EventView />} />

                    <Route path="donations" element={<DonationList />} />

                    <Route path="donations/create" element={<DonationCreate />} />

                    <Route path="donations/edit/:id" element={<DonationEdit />} />

                    <Route path="donations/view/:id" element={<DonationView />} />

                    <Route path="volunteers" element={<VolunteerList />} />

                    <Route path="volunteers/create" element={<VolunteerCreate />} />

                    <Route path="volunteers/edit/:id" element={<VolunteerEdit />} />

                    <Route path="volunteers/view/:id" element={<VolunteerView />} />

                    <Route path="contacts" element={<ContactList />}/>

                    <Route path="contacts/view/:id" element={<ContactView />}/>

                    <Route path="contacts/edit/:id" element={<ContactEdit />}/>

                    <Route path ="settings"  element={<Settings />} />

                </Route>               
                
            </Routes>


        </BrowserRouter>

    );

}