import {

    FaImages,
    FaProjectDiagram,
    FaSignInAlt

} from "react-icons/fa";

export default function RecentActivity({ activities }) {

    function getIcon(type) {

        switch (type) {

            case "gallery":

                return <FaImages className="text-success" />;

            case "project":

                return <FaProjectDiagram className="text-primary" />;

            case "login":

                return <FaSignInAlt className="text-warning" />;

            default:

                return <FaProjectDiagram />;

        }

    }

    return (

        <div className="card shadow">

            <div className="card-header bg-secondary text-white  border-0">

                Recent Activity

            </div>

            <div className="card-body">

                {

                    activities.length === 0

                    ?

                    <p className="text-muted">

                        No recent activity.

                    </p>

                    :

                    <ul className="list-group list-group-flush">

                        {

                            activities.map((item, index) => (

                                <li

                                    key={index}

                                    className="list-group-item d-flex justify-content-between align-items-center"

                                >

                                    <div>

                                        {getIcon(item.type)}

                                        <span className="ms-2">

                                            {item.title}

                                        </span>

                                    </div>

                                    <small className="text-muted">

                                        {item.time}

                                    </small>

                                </li>

                            ))

                        }

                    </ul>

                }

            </div>

        </div>

    );

}