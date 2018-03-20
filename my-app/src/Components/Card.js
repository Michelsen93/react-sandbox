
import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div className="dropdown-menu">
        <button onClick={this.showMenu} className="dropdown-button">
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <ul>
                <li><button className="dropdown-button"> Menu item 1 </button></li>
                <li><button className="dropdown-button"> Menu item 2 </button></li>
                <li><button className="dropdown-button"> Menu item 3 </button></li>
                </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Card
