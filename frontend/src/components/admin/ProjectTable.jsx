import ProjectRow from "./ProjectRow";

export default function ProjectTable({

    projects,

    onDelete,

    onToggleStatus

}) {

    return (

        <table className="table table-bordered table-hover align-middle shadow-sm">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Image</th>

                    <th>Title</th>

                    <th>Location</th>

                    <th>Budget</th>

                    <th>Status</th>

                    <th width="240">

                        Action

                    </th>

                </tr>

            </thead>

            <tbody>

                {

                    projects.map(project=>(

                        <ProjectRow

                            key={project.id}

                            project={project}

                            onDelete={onDelete}

                            onToggleStatus={onToggleStatus}


                        />

                    ))

                }

            </tbody>

        </table>

    );

}