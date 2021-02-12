import React from "react";
import Search from "../assets/images/svg/search.svg";
import { ReactComponent as Notification } from "../assets/images/svg/notification.svg";
import ProfileImage from "../assets/images/png/profile.png";
import TopBarWrapper from "../assets/styles/TopBarWrapper";

const TopBar = () => {
	return (
		<TopBarWrapper className="navbar navbar-expand-lg navbar-light py-3 px-0">
			<form className="form-inline col-6 col-xl-4 mr-auto px-0">
				<span>
					<img src={Search} alt="search" />
				</span>
				<input
					className="form-control mr-sm-2 w-100"
					type="search"
					aria-label="Search"
					placeholder="Search"
				/>
			</form>

			<div>
				<span className="mr-2 mr-lg-4">
					<Notification />
				</span>
				<img src={ProfileImage} alt="profile" />
			</div>
		</TopBarWrapper>
	);
};

export default TopBar;
