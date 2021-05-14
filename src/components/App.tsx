import * as React from 'react';

import img from '../public/img/whoa.jpg';
import { Navbar } from './Navbar';

type AppProps = {};

export const App: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="img-container">
          <img src={img} />
        </div>
        <br />
        <h4>hi</h4>
      </main>
    </>
  );
};
