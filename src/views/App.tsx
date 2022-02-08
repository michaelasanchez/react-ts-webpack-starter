import * as React from 'react';

import img from '../public/img/whoa.jpg';
import { Navbar } from '../components/Navbar';
import { strings } from '../shared';

interface AppProps {};

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="img-container">
          <img src={img} />
        </div>
        <br />
        <h4>{strings.homeText}</h4>
      </main>
    </>
  );
};
