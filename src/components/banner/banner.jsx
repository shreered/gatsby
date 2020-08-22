import React from 'react';
import ReactDOM from 'react-dom';
import './banner.css';

class Banner extends React.Component {
    render() {
      return (
        <div className="wehabs__banner">
          {/* <img className="wehabs__logo" src="https://www.stanford.edu/su-identity/images/brandbar-stanford-logo@2x.png" /> */}
            <h1>Wehab lab</h1>
        </div>
      )
    }
  }

  export default Banner;