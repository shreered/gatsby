import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';

class Header extends React.Component {
    render() {
      return (
        <div className="wehabs__header">
          <img 
          className="wehabs__logo" 
          src="https://www.stanford.edu/su-identity/images/brandbar-stanford-logo@2x.png" 
          />
        </div>
      )
    }
  }

  export default Header;