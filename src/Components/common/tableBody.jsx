import React, { Component } from "react";
import _ from "lodash";
import Like from "../common/like";

class TableBody extends Component {
  renderContent = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{this.renderContent(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
