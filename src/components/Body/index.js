// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-bar-section">
              <h1 className="nav-bar-heading">Left Navbar Menu</h1>
              <ul className="left-list-section">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-section">
              <h1 className="nav-bar-heading">Content</h1>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-bar-section">
              <h1 className="nav-bar-heading">Right Navbar Menu</h1>
              <div className="boxes-section">
                <p className="boxes">Ad 1</p>
                <p className="boxes">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
