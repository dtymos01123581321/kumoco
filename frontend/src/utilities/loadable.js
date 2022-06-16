import React from 'react';

export const loadable = {
  Users: React.lazy(() => import('../pages/Users/Users')),
  NoMatch: React.lazy(() => import('../pages/404/NoMatch')),
};
