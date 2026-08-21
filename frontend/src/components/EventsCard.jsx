export default function EventsCard({item}){

    return(
 
        <div className="col-lg-4 col-md-6 mb-4">

            <div className="card shadow">

                <img
                  src={`http://127.0.0.1:8000/storage/${item.image}`}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://picsum.photos/400/250";
                  }}
                  alt={item.title}
                />

                <div className="card-body">

                    <h4>

                        {item.title}

                    </h4>

                    <p>

                        {item.description}

                    </p>

                </div>

            </div>

        </div>

    );

}