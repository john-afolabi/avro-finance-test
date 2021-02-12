import styled from "styled-components";

const SideBarWrapper = styled.div`
	background-color: #f4f5fa;
	height: 100vh;
	padding: unset;
	.nav-link {
		color: #637381;
		font-weight: 700;
		span:nth-of-type(2) {
			vertical-align: middle;
			margin-left: 1rem;
		}
	}
	.nav-item {
		margin: 0.2rem 0;
	}
	.nav-item:first-of-type {
		margin-top: 5rem;
	}

	.nav-item:last-of-type {
		margin-bottom: 2rem;
	}

	.nav-item.active {
		background-color: #eaeffd;
		border-right: 0.2rem solid #2979f2;
		.nav-link {
			color: #2979f2;
		}
	}
`;

export default SideBarWrapper;
