import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/moptro.png';

import UserLogo from '../Assets/User.png';
import './UserList.css';
import { FaHome, FaUsers } from 'react-icons/fa';

const UserList = () => {
	const navigate = useNavigate();
	const userList = [
		{ id: 1, name: 'John Doe', dob: '1990-05-15', role: 'Developer' },
		{ id: 2, name: 'Jane Smith', dob: '1985-08-22', role: 'Designer' },
		// Add more user data as needed
	];

	const [searchTerm, setSearchTerm] = useState('');
	const filteredUsers = userList.filter((user) =>
		user.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const redirectToUserList = () => {
		navigate('/user-list');
	};
	const redirectToDashboard = () => {
		navigate('/dashboard');
	};
	return (
		<div className='user-list-container'>
			<div className='dashboard-header'>
				<img src={logo} alt='logo'></img>
			</div>
			<div className='logo-container' onClick={redirectToUserList}>
				<img src={UserLogo} alt='user-logo' />
			</div>
			<div className='search-bar'>
				<input
					className='search-input'
					type='text'
					placeholder='Search by Name'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div className='search-icon'>
					{/* Optional: Replace this with your SVG icon */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<circle cx='11' cy='11' r='8' />
						<line x1='21' y1='21' x2='16.65' y2='16.65' />
					</svg>
				</div>
			</div>
			<div className='user-cards-container'>
				{filteredUsers.map((user) => (
					<div key={user.id} className='user-card'>
						<p>Employment ID: {user.id}</p>
						<p>Name: {user.name}</p>
						<p>DOB: {user.dob}</p>
						<p>Role: {user.role}</p>
					</div>
				))}
			</div>
			<div className='bottom-navigation'>
				<FaHome onClick={redirectToDashboard} size={25} />
				<FaUsers onClick={redirectToUserList} size={25} />
			</div>
		</div>
	);
};

export default UserList;
