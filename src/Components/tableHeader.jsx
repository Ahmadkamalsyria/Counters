import React, { Component } from "react";

class TableHeader extends Component {
  onSort = path => {
    const sortedColumn = { ...this.props.sortColumn };
    if (sortedColumn.path === path)
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };

  getSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <li className="fa fa-sort-asc" />;
    return <li className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return (
              <th onClick={() => this.onSort(column.path)}>
                {column.label}
                {this.getSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
