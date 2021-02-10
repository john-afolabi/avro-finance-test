import styled from "styled-components";

const ChartWrapper = styled.div`
	font-size: 13px;

	.form-control {
		font-size: 13px;
	}
	div.d-flex > div {
		span:first-of-type {
			&:before {
				display: inline-block;
				content: "";
				border-radius: 0.2rem;
				height: 0.4rem;
				width: 0.4rem;
				margin-right: 0.4rem;
				background-color: #2979f2;
			}
		}

		span:nth-of-type(2) {
			&:before {
				display: inline-block;
				content: "";
				border-radius: 0.2rem;
				height: 0.4rem;
				width: 0.4rem;
				margin-right: 0.4rem;
				background-color: #fa5f1c;
			}
		}
	}
`;

export default ChartWrapper;
