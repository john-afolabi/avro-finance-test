import React from "react";
import { ReactComponent as Dashboard } from "../assets/images/svg/dashboard.svg";
import { ReactComponent as Companies } from "../assets/images/svg/companies.svg";
import { ReactComponent as Projects } from "../assets/images/svg/projects.svg";
import { ReactComponent as Messages } from "../assets/images/svg/messages.svg";
import { ReactComponent as Settings } from "../assets/images/svg/settings.svg";
import SideBarWrapper from "../assets/styles/SideBarWrapper";

const SideBar = () => {
	return (
		<SideBarWrapper>
			<div className="sticky-top h-100">
				<ul class="nav flex-column h-100">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							<span>
								<Dashboard />
							</span>
							<span>Dashboard</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span>
								<Companies />
							</span>
							<span>Companies</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span>
								<Projects />
							</span>
							<span>Projects</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span>
								<Messages />
							</span>
							<span>Messages</span>
						</a>
					</li>

					<li className="nav-item mt-auto">
						<a className="nav-link" href="/">
							<span>
								<Settings />
							</span>
							<span>Settings</span>
						</a>
					</li>
				</ul>
			</div>
		</SideBarWrapper>
	);
};

export default SideBar;
