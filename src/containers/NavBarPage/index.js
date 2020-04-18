import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

class NavBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "about",
    };
  }

  handleItemClick = (e, { name }) => {
    const { history } = this.props;
    this.setState({ activeItem: name });
    history.push(`${name}`)
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <NavBar
          activeItem={activeItem}
          handleItemClick={this.handleItemClick}
        />
      </div>
    );
  }
}

export default NavBarPage;
