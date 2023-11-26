import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logo from '../Assets/moptro.png';
import UserLogo from '../Assets/User.png';

const Dashboard = () => {
	const navigate = useNavigate();

	const progressData = {
		Monday: 4,
		Tuesday: 60,
		Wednesday: 40,
		Thursday: 90,
		Friday: 75,
		Saturday: 50,
	};

	const redirectToUserList = () => {
		navigate('/user-list');
	};

	return (
		<div className='main-dashboard'>
			<div className='logo-container' onClick={redirectToUserList}>
				<img src={UserLogo} alt='user-logo' />
			</div>
			<div className='dashboard-header'>
				<img src={logo} alt='logo'></img>
			</div>
			<div className='dashboard'>
				<h3>Employee Productivity Dashboard:</h3>
				{Object.entries(progressData).map(([day, progress]) => (
					<div key={day} className='progress-bar-container'>
						<div className='day'>
							<h4>Productivity on {day}:</h4>
							<h5>{progress}%</h5>
						</div>
						<div className='progress-bar'>
							<div className='progress' style={{ width: `${progress}%` }}></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
