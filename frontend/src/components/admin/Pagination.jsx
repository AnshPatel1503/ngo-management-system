export default function Pagination({

    pagination,

    onPageChange

}) {

    if (!pagination) return null;

    return (

        <nav className="mt-4">

            <ul className="pagination justify-content-center">

                <li
                    className={`page-item ${
                        pagination.current_page === 1 ? "disabled" : ""
                    }`}
                >

                    <button
                        className="page-link"
                        onClick={() =>
                            onPageChange(
                                pagination.current_page - 1
                            )
                        }
                    >

                        Previous

                    </button>

                </li>

                {

                    [...Array(pagination.last_page)].map((_, index) => (

                        <li

                            key={index}

                            className={`page-item ${
                                pagination.current_page === index + 1
                                    ? "active"
                                    : ""
                            }`}

                        >

                            <button

                                className="page-link"

                                onClick={() => onPageChange(index + 1)}

                            >

                                {index + 1}

                            </button>

                        </li>

                    ))

                }

                <li

                    className={`page-item ${
                        pagination.current_page === pagination.last_page
                            ? "disabled"
                            : ""
                    }`}

                >

                    <button

                        className="page-link"

                        onClick={() =>
                            onPageChange(
                                pagination.current_page + 1
                            )
                        }

                    >

                        Next

                    </button>

                </li>

            </ul>

        </nav>

    );

}