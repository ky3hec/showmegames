import React from "react";
import { NavLink } from "react-router-dom";

function Pagination({ itemsCount, currentPage, pageSize, path }) {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount <= 1) return null;
  else {
    return (
      <nav className="navbar navbar-expand-sm justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            {currentPage === 1 ? (
              <div className="nav-link disabled">Prev</div>
            ) : (
              <NavLink
                className="nav-link active text-primary"
                to={`/${path}${currentPage - 1}`}
              >
                Prev
              </NavLink>
            )}
          </li>
          <li className="nav-item">
            <span className="nav-link disabled">
              {currentPage}/{pageCount}
            </span>
          </li>
          <li className="nav-item">
            {currentPage === pageCount ? (
              <div className="nav-link disabled">Next</div>
            ) : (
              <NavLink
                className="nav-link active text-primary"
                to={`/${path}${currentPage + 1}`}
              >
                Next
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
export default Pagination;
