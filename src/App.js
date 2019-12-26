import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./table.js";
import Form from "./Form.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: true };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    const bio = this.state.displayBio ? (
      <p>
        Name is : <NameChanger firstName={this.props.name}></NameChanger>
      </p>
    ) : null;

    return (
      <div>
        <p>{bio}</p>
        <button onClick={this.toggleDisplayBio}> Read More </button>
        <Table tablename="Catalog"></Table>
        <Form></Form>
      </div>
    );
  }
}

App.defaultProps = {
  name: "Ruchik"
};

class NameChanger extends React.Component {
  render() {
    return (
      <div>
        <label> {this.props.firstName} Shah</label>
      </div>
    );
  }
}

export default App;
