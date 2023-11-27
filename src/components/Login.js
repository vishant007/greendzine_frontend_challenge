import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../Assets/logo2x.png';

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		navigate('/dashboard');
	};

	return (
		<div className='login-box'>
			<div className='login-header'>
				<h2>Login</h2>

				<img src={logo} alt='logo'></img>
				<h4 className='login-subheader'>We Go Electric</h4>
			</div>
			<form>
				<div className='user-box'>
					<input type='text' name='' required />
					<label>Username</label>
				</div>
				<div className='user-box'>
					<input type='password' name='' required />
					<label>Password</label>
				</div>
				<button className='login-btn' onClick={handleLogin}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
