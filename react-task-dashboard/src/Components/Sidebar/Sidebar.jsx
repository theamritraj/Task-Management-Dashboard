import { NavLink } from "react-router-dom";
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
      title: "Dashboard",
      icon: <PieChartOutline color="#555" width="22px" height="22px" />,
      path: "/dashboard",
    },
    {
      title: "Tasks",
      icon: <NotificationsOutline color="#555" width="22px" height="22px" />,
      path: "/tasks",
    },
    {
      title: "Settings",
      icon: <SettingsOutline color="#555" width="22px" height="22px" />,
      path: "/settings",
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
          <NavLink
            to={link.path}
            key={link.title}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {link.icon}
            <span className="link-title">{link.title}</span>
          </NavLink>
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
