import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import {
    getSettings,
    updateSettings,
} from "../../api/settingsApi";


export default function Settings() {

    const [settings, setSettings] = useState({

        site_name: "",

        email: "",

        phone: "",

        address: "",

        facebook: "",

        instagram: "",

        twitter: "",

        youtube: "",

        about: "",

        logo: null,

    });


    const [logoPreview, setLogoPreview] = useState(null);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);


    useEffect(() => {

        loadSettings();

    }, []);


    async function loadSettings() {

        try {

            const response = await getSettings();

            const data = response.data.data;

            setSettings({

                site_name: data.site_name || "",

                email: data.email || "",

                phone: data.phone || "",

                address: data.address || "",

                facebook: data.facebook || "",

                instagram: data.instagram || "",

                twitter: data.twitter || "",

                youtube: data.youtube || "",

                about: data.about || "",

                logo: null,

            });


            if (data.logo) {

                setLogoPreview(
                    `/storage/${data.logo}`
                );

            }

        }

        catch {

            toast.error(
                "Failed to load settings."
            );

        }

        finally {

            setLoading(false);

        }

    }


    function handleChange(e) {

        const { name, value } = e.target;

        setSettings((previous) => ({

            ...previous,

            [name]: value,

        }));

    }


    function handleLogo(e) {

        const file = e.target.files[0];

        if (!file) return;


        setSettings((previous) => ({

            ...previous,

            logo: file,

        }));


        setLogoPreview(
            URL.createObjectURL(file)
        );

    }


    async function handleSubmit(e) {

        e.preventDefault();

        setSaving(true);


        try {

            const formData = new FormData();


            formData.append(
                "site_name",
                settings.site_name
            );

            formData.append(
                "email",
                settings.email
            );

            formData.append(
                "phone",
                settings.phone
            );

            formData.append(
                "address",
                settings.address
            );

            formData.append(
                "facebook",
                settings.facebook
            );

            formData.append(
                "instagram",
                settings.instagram
            );

            formData.append(
                "twitter",
                settings.twitter
            );

            formData.append(
                "youtube",
                settings.youtube
            );

            formData.append(
                "about",
                settings.about
            );


            if (settings.logo) {

                formData.append(
                    "logo",
                    settings.logo
                );

            }


            await updateSettings(formData);


            toast.success(
                "Settings updated successfully."
            );

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update settings."
            );

        }

        finally {

            setSaving(false);

        }

    }


    if (loading) {

        return (

            <div className="container py-5">

                <h4>

                    Loading settings...

                </h4>

            </div>

        );

    }


    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Website Settings

            </h2>


            <form onSubmit={handleSubmit}>

                <div className="card shadow mb-4">

                    <div className="card-header">

                        <h5 className="mb-0">

                            General Information

                        </h5>

                    </div>


                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Site Name

                                </label>

                                <input
                                    type="text"
                                    name="site_name"
                                    className="form-control"
                                    value={settings.site_name}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={settings.email}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Phone

                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={settings.phone}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Address

                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={settings.address}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-12 mb-3">

                                <label className="form-label">

                                    About NGO

                                </label>

                                <textarea
                                    name="about"
                                    rows="5"
                                    className="form-control"
                                    value={settings.about}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                <div className="card shadow mb-4">

                    <div className="card-header">

                        <h5 className="mb-0">

                            Social Media

                        </h5>

                    </div>


                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Facebook

                                </label>

                                <input
                                    type="text"
                                    name="facebook"
                                    className="form-control"
                                    value={settings.facebook}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Instagram

                                </label>

                                <input
                                    type="text"
                                    name="instagram"
                                    className="form-control"
                                    value={settings.instagram}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Twitter

                                </label>

                                <input
                                    type="text"
                                    name="twitter"
                                    className="form-control"
                                    value={settings.twitter}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    YouTube

                                </label>

                                <input
                                    type="text"
                                    name="youtube"
                                    className="form-control"
                                    value={settings.youtube}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                <div className="card shadow mb-4">

                    <div className="card-header">

                        <h5 className="mb-0">

                            Website Logo

                        </h5>

                    </div>


                    <div className="card-body">

                        {logoPreview && (

                            <div className="mb-3">

                                <img
                                    src={
                                        logoPreview.startsWith("blob:")
                                            ? logoPreview
                                            : `http://127.0.0.1:8000${logoPreview}`
                                    }
                                    alt="Logo"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "contain",
                                    }}
                                    className="border rounded p-2"
                                />

                            </div>

                        )}


                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={handleLogo}
                        />

                    </div>

                </div>


                <button
                    type="submit"
                    className="btn btn-success"
                    disabled={saving}
                >

                    {saving
                        ? "Saving..."
                        : "Save Settings"
                    }

                </button>

            </form>

        </div>

    );

}