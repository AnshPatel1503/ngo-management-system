import {useEffect,useState} from "react";

import {getEvents} from "../api/eventApi";

import EventsCard from "../components/EventsCard";

export default function Events(){

    const [events,setEvents]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        loadEvents(); 

    },[]); 

    async function loadEvents(){

        try{

            const response=await getEvents();
			console.log(response);
            setEvents(response.data.data.data);

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

                NGO Events

            </h2>

            <div className="row">

                {

                    events.map(item=>(

                        <EventsCard

                            key={item.id}

                            item={item}

                        />

                    ))

                }

            </div>

        </section>

    );

}