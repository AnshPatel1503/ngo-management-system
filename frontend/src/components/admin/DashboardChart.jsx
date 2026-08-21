import { useEffect, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

import {
    Bar,
    Pie,
    Line,
} from "react-chartjs-2";

import { getAnalytics } from "../../api/dashboardApi";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);


export default function DashboardChart({ stats }) {


    const [lineData, setLineData] = useState({
        labels: [],
        datasets: []
    });


    const [hiddenBars, setHiddenBars] = useState([]);


    const barLabels = [
        "Projects",
        "Gallery",
        "Events",
        "Donations",
    ];


    const barColors = [
        "#4F46E5",
        "#10B981",
        "#F59E0B",
        "#EF4444",
    ];


    useEffect(() => {

        loadAnalytics();

    }, []);



async function loadAnalytics() {

    try {

        const response = await getAnalytics();


        setLineData({

            labels: response.data.labels,


            datasets: [

                {
                    label: "Projects",

                    data: response.data.projects,

                    borderColor: "#4F46E5",

                    backgroundColor: "#4F46E5",

                    tension: 0.4,

                    fill: false,

                },


                {
                    label: "Gallery",

                    data: response.data.gallery,

                    borderColor: "#10B981",

                    backgroundColor: "#10B981",

                    tension: 0.4,

                    fill: false,

                },


                {
                    label: "Events",

                    data: response.data.events,

                    borderColor: "#F59E0B",

                    backgroundColor: "#F59E0B",

                    tension: 0.4,

                    fill: false,

                },


                {
                    label: "Donations",

                    data: response.data.donations,

                    borderColor: "#EF4444",

                    backgroundColor: "#EF4444",

                    tension: 0.4,

                    fill: false,

                }

            ]

        });


    }

    catch(error){

        console.log(error);

    }

}



    const barValues = [

        stats?.projects ?? 0,

        stats?.gallery ?? 0,

        stats?.events ?? 0,

        stats?.donations ?? 0,

    ];



    const barData = {


        labels: barLabels,


        datasets: [

            {

                label: "Records",


                data: barValues.map((value,index)=>

                    hiddenBars.includes(index)
                    ? 0
                    : value

                ),


                backgroundColor: barColors,


                borderRadius: 8,


                barPercentage:0.6,

                categoryPercentage:0.7,

            }

        ]

    };



    const toggleBar = (index)=>{


        setHiddenBars(prev=>


            prev.includes(index)

            ? prev.filter(i=>i!==index)

            : [...prev,index]


        );

    };



    const pieData = {


        labels: barLabels,


        datasets: [

            {

                data: barValues,


                backgroundColor: barColors,

            }

        ]

    };



    return (

        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card shadow">
                        <div className="card-header">
                            <h5>Statistics</h5>
                        </div>
                        <div className="card-body">
                            {/* Custom Legend */}
                            <div className="d-flex justify-content-center gap-1 flex-wrap">
                                {
                                barLabels.map((name,index)=>(
                                    <div 
                                        className="small text-muted"
                                        key={index} onClick={()=>toggleBar(index)}
                                        style={{
                                            cursor:"pointer",
                                            fontSize:"12px",
                                            opacity:
                                            hiddenBars.includes(index)
                                            ?0.4
                                            :1
                                        }}
                                    ><span 
                                        style={{
                                            display:"inline-block",
                                            width:"12px",
                                            height:"12px",
                                            backgroundColor:
                                            barColors[index],
                                            borderRadius:"3px",
                                            marginRight:"5px"
                                        }}
                                        ></span>
                                        {name}
                                    </div>
                                ))
                                }
                            </div>
                            <div className="chart-box">
                                <Bar
                                    data={barData}
                                    options={{
                                        maintainAspectRatio:false,
                                        responsive:true,
                                        plugins:{
                                            legend:{
                                                display:false
                                            }
                                        },
                                        scales:{
                                            y:{
                                                beginAtZero:true
                                            }
                                        }
                                    }}
                                />

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card shadow">
                        <div className="card-header">
                            <h5>Monthly Projects</h5>
                        </div>
                        <div className="card-body">
                            <div className="chart-box">

                                <Line
                                    data={lineData}
                                    options={{
                                        maintainAspectRatio:false,
                                        responsive:true,
                                        plugins:{
                                            legend:{
                                                display:true,
                                                position:"top",
                                            }
                                        },
                                        scales:{
                                            y:{
                                                beginAtZero:true
                                            }
                                        }
                                    }}
                                />

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card shadow">
                        <div className="card-header">
                            <h5> Distribution</h5>
                        </div>
                        <div className="card-body">
                            <div className="chart-box">
                                <Pie
                                    data={pieData}
                                    options={{
                                        maintainAspectRatio:false,
                                        responsive:true,
                                        plugins:{
                                            legend:{
                                                display:true,
                                                position:"top",
                                            }
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>  
                

            </div>

        </>

    );

}
