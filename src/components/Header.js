import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="ms auto">
          <div className="nav-left">
            <a className="brand" href="#">
                ALX PORTFOLIO PROJECT
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://yemmytech.com">Task Management App by IBRAHIM ADEYEMI</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;