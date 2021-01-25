import React from 'react';
import Router from 'next/router';


const login = '/?redirected=true'; // Define your login route address.

const checkUserAuthentication = () => {

  if (typeof window !== "undefined") {
    const token = localStorage.getItem('@pm-gamification:token');
    const user = localStorage.getItem('@pm-gamification:user');
    console.log({token});

        if (token && user) {
          return { auth: true };
        } else {
          return { auth: null };
        }
  }
   // change null to { isAdmin: true } for test it.
};

const WrappedComponent = () => {


  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default WrappedComponent;
