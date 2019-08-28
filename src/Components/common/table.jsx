import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "../tableHeader";

const Table = props => {
  return (
    <table className="table">
      <TableHeader
        columns={props.columns}
        onSort={props.onSort}
        sortColumn={props.sortColumn}
      />
      <TableBody data={props.data} columns={props.columns} />
    </table>
  );
};

export default Table;
