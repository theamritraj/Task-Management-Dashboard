import React from "react";
import "./Dashboard.css";
import TaskColumn from "../TaskColumn/TaskColumn";

const Dashboard = () => {
	const columns = ["To Do", "In Progress", "Done"];

	return (
		<div className="dashboard-container">
			<h2 className="dashboard-heading">Welcome back, Amrit 👋</h2>
			<div className="columns-container">
				{columns.map((title) => (
					<TaskColumn key={title} title={title} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
