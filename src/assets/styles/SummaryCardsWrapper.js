import styled from "styled-components";

const SummaryCardWrapper = styled.div`
	h2 {
		font-weight: 700;
		font-size: 25px;
	}
	.summary-card {
		padding: 1.5rem 1.5rem;
		margin-bottom: 2rem;

		h5 {
			font-weight: 700;
		}

		p.pos-change {
			font-size: 13px;
			color: #50b83c;
			span {
				vertical-align: middle;
				color: #50b83c;
			}
		}

		p.neg-change {
			font-size: 13px;
			color: #f52d56;
			span {
				vertical-align: middle;
				color: #f52d56;
			}
		}

		span {
			color: #919eab;
			font-size: 12px;
		}
	}
	.col:first-of-type {
		.summary-card {
			background-color: #fdece2;
		}
	}
	.col:nth-of-type(2) {
		.summary-card {
			background-color: #eaeffd;
		}
	}

	.col:nth-of-type(3) {
		.summary-card {
			background-color: #fff3c5;
		}
	}

	.col:nth-of-type(4) {
		.summary-card {
			background-color: #e7f5fe;
		}
	}
`;

export default SummaryCardWrapper;
