import {useEffect,useState} from "react";

import {getProjects} from "../api/projectApi";

import ProjectsCard from "../components/ProjectsCard";

export default function Projects(){

    const [projects,setProjects]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        loadProjects(); 

    },[]); 

    async function loadProjects(){

        try{

            const response=await getProjects();
			console.log(response);
            setProjects(response.data.data.data);

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    }

    if(loading){

        return(

            <div className="text-center p-5">

                Loading...

            </div>

        );

    }

    return(

        <section className="container py-5">

            <h2 className="mb-4">

                NGO Projects

            </h2>

            <div className="row">

                {

                    projects.map(item=>(

                        <ProjectsCard

                            key={item.id}

                            item={item}

                        />

                    ))

                }

            </div>

        </section>

    );

}