import React from 'react'
import _ from "lodash"


const Pagination = ({ pagesize, currentpage, totalcount, handlepage }) => {
    const pageCount = Math.ceil(totalcount / pagesize);
    const pages = _.range(1, pageCount + 1)
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li className={currentpage === page ? "page-item active" : "page-item"} key={page}>
                        <a className="page-link" style={{ cursor: "pointer" }} onClick={() => handlepage(page)}>{page}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default Pagination