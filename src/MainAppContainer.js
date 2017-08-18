import React from 'react';

import { Redirect, withRouter } from 'react-router-dom';


const MainAppContainer = ({ children, location }) => {
  // Setting user manually. In the real app, we use redux.
  const user = false;

  if (user) {
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

  // if (location.pathname !== '/login') {
  return <Redirect push to="/login" />;
  // }

  return null;
};


export default withRouter(MainAppContainer);
