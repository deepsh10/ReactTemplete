import React from "react";

class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Table Content : {this.props.tablename}</h1>
        <table>

        </table>
      </div>
    );
  }
}

export default Table;
