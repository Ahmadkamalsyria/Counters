import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalMovies, pageSize, pageChange, currentPage } = this.props;
    const pageCount = Math.ceil(totalMovies / pageSize);
    const pages = _.range(1, pageCount + 1);
    const { props } = this;
    console.log(totalMovies, pages, pageSize, this.props, currentPage);
    if (pageCount === 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => pageChange(page)}
                currentPage={currentPage}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
