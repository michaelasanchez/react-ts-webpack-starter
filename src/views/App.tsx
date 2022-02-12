import * as React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import img from '../public/img/whoa.jpg';
import { Navbar } from '../components/Navbar';
import { strings } from '../shared';

interface AppProps {};

const refreshTokenSetup = (res: any) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    console.log('new auth token', newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };
};

const onSuccess = (response: any) => {
  console.log('[Login success] res:', response);

  refreshTokenSetup(response);
};

const onFailure = (response: any) => {
  console.log('[Login failed] res:', response);
};

export const App: React.FC<AppProps> = ({}) => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const handleSuccess = (response: any) => {
    setSuccess(true);
    onSuccess(response);
  };
  const handleFailure = (response: any) => {
    setSuccess(false);
    onFailure(response);
  };
  
  return (
    <>
      <Navbar />
      <main>
        <div className="img-container">
          <img src={img} />
        </div>
        <br />
        <h4>{success ? strings.homeText : 'oh no'}</h4>
        <GoogleLogin
          clientId="761782415642-dmpa7o13ppv0h3qa0su755368jd72qfu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <GoogleLogout
          clientId="761782415642-dmpa7o13ppv0h3qa0su755368jd72qfu.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => setSuccess(false)}
        />
      </main>
    </>
  );
};
