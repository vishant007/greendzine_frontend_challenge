import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
	// Assuming you have data for each day's progress (in percentage)
	const progressData = {
		Monday: 4,
		Tuesday: 60,
		Wednesday: 40,
		Thursday: 90,
		Friday: 75,
		Saturday: 50,
	};

	return (
		<div className='dashboard'>
			<h2>Employee Productivity Dashboard:</h2>
			{Object.entries(progressData).map(([day, progress]) => (
				<div key={day} className='progress-bar-container'>
					<h4>
						Productivity on {day}: {progress}%
					</h4>
					<div className='progress-bar'>
						<div className='progress' style={{ width: `${progress}%` }}></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
