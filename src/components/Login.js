import GoogleLogin from 'react-google-login'
import { GoogleLogin as GoogleOauth } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'
import { FaUserClock } from 'react-icons/fa'
import shared from '../assets/share.mp4'
import logowhite from '../assets/logowhite.png'
import { json, useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
function Login() {

  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log('response', response);
  }
  const handleLogin = (response) => {
    const user = jwt(response.credential)
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home', { preventScrollReset: true });
  }
  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <div className='relative h-full w-full'>
        <video
          src={shared}
          type="video/mp4"
          autoPlay={true}
          controls={false}
          muted
          loop
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0'>
        <div className='p-5'>
          <img src={logowhite} width='130px' alt='logo' />
        </div>
        {false && (<div className='shadow-2xl'>
          <GoogleLogin
            clientId={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
            render={renderProps => (
              <button
                className='bg-white p-3 cursor-pointer rounded-xl flex justify-center items-center'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}>
                <FcGoogle className='mr-3'></FcGoogle>Sign in with Google
              </button>
            )}
            // buttonText='Sign in with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
            scope="profile"
          />
        </div>)}
        <div className='shadow-2xl mt-3'>
          <GoogleOauth
            onSuccess={handleLogin}
            onError={handleLogin}
            text='signin_with'
            type='standard'
            size='medium'
          />
        </div>
      </div>
    </div>
  )
}

export default Login
