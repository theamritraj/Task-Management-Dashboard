import {
	ChevronDown,
	NotificationsOutline,
	PersonCircle,
	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
} from "react-ionicons";
import { useSearch } from "../../context/SearchContext";
import "./Navbar.css";

const Navbar = () => {
	const { setQuery } = useSearch();

	return (
		<div className="navbar-container">
			<div className="navbar-left">
				<PersonCircle color="#fb923c" width="28px" height="28px" />
				<span className="navbar-title">Task Manager</span>
				<ChevronDown color="#fb923c" width="16px" height="16px" />
			</div>

			<div className="navbar-search">
				<SearchOutline color="#999" />
				<input
					type="text"
					placeholder="Search"
					className="search-input"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

			<div className="navbar-right">
				<div className="icon-button">
					<ShareSocialOutline color="#444" width="22px" height="22px" />
				</div>
				<div className="icon-button">
					<SettingsOutline color="#444" width="22px" height="22px" />
				</div>
				<div className="icon-button">
					<NotificationsOutline color="#444" width="22px" height="22px" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
