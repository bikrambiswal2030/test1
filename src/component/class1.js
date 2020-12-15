import React, { component } from "react";

export default class class1 extends component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bikram"
    };
  }
  render() {
    return (
      <div>
        <span>hello {this.state.name} </span>
      </div>
    );
  }
}
