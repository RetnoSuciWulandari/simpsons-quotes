import React, { Component } from "react";

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.on
      //.on is a boolean property; any value that is put in as a property means true in this scenario
    };
  }

  //This is an alternative of using merely State, without sending Props in a Constructor
  //state = { on: this.props.on };

  //Props is what has been sent in to a property and is mutable, so it is a read-only thing
  //State is what the data that is stored inside the class component and is internal; it is changeable through setState()
  handleClick = () => {
    //console.log(`Button clicked`);
    this.setState({ on: !this.state.on });
  };
  render() {
    //const light = this.state.on ? "on" : "off";
    //console.log(this.state.on);

    const light = this.props.on ? "on" : "off";

    return (
      <div className="Lamp">
        <button onClick={this.handleClick} className={light}>
          {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;
