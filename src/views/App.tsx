import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';
import img from '../public/img/whoa.jpg';
import { strings } from '../shared';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const authState = useAuth();

  return (
    <>
      <Navbar authState={authState} />
      <main>
        <div className="img-container">
          <img src={img} />
        </div>
        <br />
        <h4>
          {authState.loading
            ? strings.homeLoadingText
            : !!authState.user
            ? strings.homeText
            : strings.homeNoAuthText}
        </h4>
      </main>
    </>
  );
};
