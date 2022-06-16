import React from 'react';
import Button from '../../components/Button/Button';

import './NoMatch.scss';

const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="container">
        <div className="not-found">
          <div className="title">404</div>
          <div className="desc">Sorry, page not found</div>
          <div className="btn">
            <Button type="button" size="l" color="green" text="go to homepage" href="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
