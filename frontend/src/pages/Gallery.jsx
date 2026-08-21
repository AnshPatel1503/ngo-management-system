import {useEffect,useState} from "react";

import {getGallery} from "../api/galleryApi";

import GalleryCard from "../components/gallery/GalleryCard";

export default function Gallery(){

    const [gallery,setGallery]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        loadGallery(); 

    },[]);

    async function loadGallery(){

        try{

            const response=await getGallery();

            setGallery(response.data.data);

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

                NGO Gallery

            </h2>

            <div className="row">

                {

                    gallery.map(item=>(

                        <GalleryCard

                            key={item.id}

                            item={item}

                        />

                    ))

                }

            </div>

        </section>

    );

}