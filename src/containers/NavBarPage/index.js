import React, { Component } from "react";
import NavBarDesktop from "../../components/NavBar/NavBarDesktop";
import NavBarMobile from "../../components/NavBar/NavBarMobile";
import { Responsive, Menu } from "semantic-ui-react";

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
    history.push(`/portfolio/${name}`);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        {/* Desktop NavBar */}
        <Responsive as={Menu.Item} minWidth={Responsive.onlyComputer.minWidth}>
          <NavBarDesktop
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
        </Responsive>

        {/* Mobile NavBar */}
        <Responsive
          as={Menu.Item}
          {...Responsive.onlyMobile}
          minWidth={Responsive.onlyMobile.minWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <NavBarMobile
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
        </Responsive>
      </div>
    );
  }
}

export default NavBarPage;
