export default function ProjectCard({ project }) {
 
    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow">

                <img
                    src="https://picsum.photos/400/250"
                    className="card-img-top"
                    alt=""
                />

                <div className="card-body">

                    <h5>{project.title}</h5>

                    <p>

                        {project.description.substring(0,120)}...

                    </p>

                    <span className="badge bg-success">

                        {project.status}

                    </span>

                </div>

            </div>

        </div>

    );

}