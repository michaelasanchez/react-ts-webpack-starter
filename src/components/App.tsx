import * as React from 'react';
import img from '../public/img/whoa.jpg';

type AppProps = {};

export const App: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <div className="img-container">
        <img src={img} />
      </div>
      <br />
      <h4>hi</h4>
    </>
  );
};
