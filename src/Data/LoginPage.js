import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { auth, providerGoogle, providerFacebook } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage({ handleCloseClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`Welcome back, ${user.email}!`);
    } catch (error) {
      setMessage('Invalid email or password.');
      console.error('Email login error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      const user = result.user;
      setMessage(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error('Google login error:', error);
      setMessage('Google login failed. Please try again.');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, providerFacebook);
      const user = result.user;
      setMessage(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error('Facebook login error:', error);
      setMessage('Facebook login failed. Please try again.');
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: 'auto', padding: 20, position: 'relative', backgroundColor: '#fff', borderRadius: 8 }}>
      <div
        onClick={handleCloseClick}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          cursor: 'pointer',
          fontSize: 24,
          color: 'black'
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <h2 style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Sign in with</h2>

    <div className='signin ' style={{
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  marginBottom: 20,
  flexWrap: 'wrap'
}}>
  <img
    src="assets/img/facebook.svg"
    alt="Facebook login"
    onClick={handleFacebookLogin}
    style={{ width: '45%', maxWidth: 150, cursor: 'pointer' }}
  />
  <img
    src="assets/img/google.webp"
    alt="Google login"
    onClick={handleGoogleLogin}
    style={{ width: '45%', maxWidth: 150, cursor: 'pointer' }}
  />
</div>


      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <label>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 8, fontSize: 16, backgroundColor: 'rgba(242, 242, 240, 0.98)', border: '1px solid #ccc', borderRadius: 4, width: '93%' }}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 8, fontSize: 16, backgroundColor: 'rgba(242, 242, 240, 0.98)', border: '1px solid #ccc', borderRadius: 4, width: '93%' }}
          />
        </label>

        <button
          type="submit"
          style={{ padding: 10, fontSize: 16, cursor: 'pointer', borderRadius: 5, border: 'none', backgroundColor: '#007bff', color: 'white' }}
        >
          SIGN IN
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 10, color: message.includes('Welcome') ? 'green' : 'red', textAlign: 'center' }}>
          {message}
        </p>
      )}
    </div>
  );
}
