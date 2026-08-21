import DonationRow from "./DonationRow";

export default function DonationTable({

    donations,

    onDelete,

}) {

    return (

        <table className="table table-bordered table-hover align-middle">


            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Donor</th>

                    <th>Email</th>

                    <th>Amount</th>

                    <th>Payment</th>

                    <th>Status</th>

                    <th width="230">

                        Action

                    </th>

                </tr>

            </thead>


            <tbody>

                {

                    donations.map(item=>(

                        <DonationRow

                            key={item.id}

                            donation={item}

                            onDelete={onDelete}

                        />

                    ))

                }

            </tbody>


        </table>

    );

}