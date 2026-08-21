import { useEffect,useState } from "react";

export default function BackToTop(){

    const[visible,setVisible]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            if(window.scrollY>300){

                setVisible(true);

            }else{

                setVisible(false);

            }

        };

        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    return(

        visible&&(

            <button

                className="btn btn-success back-top"

                onClick={()=>window.scrollTo({

                    top:0,

                    behavior:"smooth"

                })}

            >

                ↑

            </button>

        )

    );

}