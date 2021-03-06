import React from 'react';

import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const SessionContainer = ({ children, user, location }) => {
  if (!user) {
    const childrenWithProps = React.Children.map(children,
      child => React.cloneElement(child, {
        pathname: location.pathname
      })
    );

    console.log(location.pathname);

    return (
      <div>
        <h2>Session container.</h2>

        {childrenWithProps}
      </div>
    );
  }

  // if (location.pathname !== '/') {
  return <Redirect push to="/" />;
  // }

  return null;
};


const mapStateToProps = (state) => {
  const { user } = state.session;

  return {
    user
  };
};

export default connect(mapStateToProps)(withRouter(SessionContainer));
