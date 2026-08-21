import { useState } from "react";

export default function DonationForm({

    onSubmit,

    loading,

    initialData = null

}) {


    const [donorName,setDonorName] = useState(
        initialData?.donor_name || ""
    );

    const [email,setEmail] = useState(
        initialData?.email || ""
    );

    const [phone,setPhone] = useState(
        initialData?.phone || ""
    );

    const [amount,setAmount] = useState(
        initialData?.amount || ""
    );

    const [paymentMethod,setPaymentMethod] = useState(
        initialData?.payment_method || "UPI"
    );

    const [message,setMessage] = useState(
        initialData?.message || ""
    );

    const [status,setStatus] = useState(
        initialData?.status ?? 1
    );


    function submit(e){

        e.preventDefault();


        const formData = {

            donor_name: donorName,

            email,

            phone,

            amount,

            payment_method: paymentMethod,

            message,

            status

        };


        onSubmit(formData);

    }



    return (

        <form onSubmit={submit}>


            <div className="mb-3">

                <label className="form-label">

                    Donor Name

                </label>


                <input

                    type="text"

                    className="form-control"

                    value={donorName}

                    onChange={(e)=>setDonorName(e.target.value)}

                    required

                />

            </div>



            <div className="row">


                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Email

                    </label>


                    <input

                        type="email"

                        className="form-control"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                </div>



                <div className="col-md-6 mb-3">

                    <label className="form-label">

                        Phone

                    </label>


                    <input

                        type="text"

                        className="form-control"

                        value={phone}

                        onChange={(e)=>setPhone(e.target.value)}

                    />

                </div>


            </div>



            <div className="mb-3">


                <label className="form-label">

                    Amount

                </label>


                <input

                    type="number"

                    className="form-control"

                    value={amount}

                    onChange={(e)=>setAmount(e.target.value)}

                    required

                />


            </div>




            <div className="mb-3">


                <label className="form-label">

                    Payment Method

                </label>


                <select

                    className="form-select"

                    value={paymentMethod}

                    onChange={(e)=>setPaymentMethod(e.target.value)}

                >

                    <option value="UPI">

                        UPI

                    </option>


                    <option value="Cash">

                        Cash

                    </option>


                    <option value="Bank">

                        Bank Transfer

                    </option>


                </select>


            </div>




            <div className="mb-3">


                <label className="form-label">

                    Message

                </label>


                <textarea

                    className="form-control"

                    rows="4"

                    value={message}

                    onChange={(e)=>setMessage(e.target.value)}

                />


            </div>



            <div className="mb-3">


                <label className="form-label">

                    Status

                </label>


                <select

                    className="form-select"

                    value={status}

                    onChange={(e)=>setStatus(e.target.value)}

                >


                    <option value="1">

                        Active

                    </option>


                    <option value="0">

                        Inactive

                    </option>


                </select>


            </div>



            <button

                className="btn btn-success"

                disabled={loading}

            >

                {

                    loading

                    ?

                    "Saving..."

                    :

                    "Save Donation"

                }


            </button>


        </form>

    );

}