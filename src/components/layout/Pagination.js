import React from "react";

function Pagination() {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="/">
            Prev
          </a>
        </li>
        <li>
          <a className="page-link" href="/">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
