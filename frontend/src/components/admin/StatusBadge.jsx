export default function StatusBadge({

    status,

    onClick

}) {

    return (

        <button

            className={`btn btn-sm ${
                status
                    ? "btn-success"
                    : "btn-secondary"
            }`}

            onClick={onClick}

        >

            {

                status

                ?

                "Active"

                :

                "Inactive"

            }

        </button>

    );

}