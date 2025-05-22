import {
	HomeOutline,
	PieChartOutline,
	NotificationsOutline,
	SettingsOutline,
	LogOutOutline,
} from "react-ionicons";

import "./Sidebar.css";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Home",
			icon: <HomeOutline color="#555" width="22px" height="22px" />,
			active: true,
		},
		{
			title: "Dashboard",
			icon: <PieChartOutline color="#555" width="22px" height="22px" />,
			active: false,
		},
		{
			title: "Notifications",
			icon: <NotificationsOutline color="#555" width="22px" height="22px" />,
			active: false,
		},
		{
			title: "Settings",
			icon: <SettingsOutline color="#555" width="22px" height="22px" />,
			active: false,
		},
	];

	return (
		<div className="sidebar-container">
			<div className="sidebar-header">
				<span className="logo-full">Logo.</span>
				<span className="logo-short">L.</span>
			</div>

			<div className="sidebar-links">
				{navLinks.map((link) => (
					<div
						key={link.title}
						className={`sidebar-link ${link.active ? "active" : ""}`}
					>
						{link.icon}
						<span className="link-title">{link.title}</span>
					</div>
				))}

				<div className="logout-button">
					<LogOutOutline color="#000" width="22px" height="22px" />
					<span className="link-title">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
