import styled from "styled-components";

const CustomerSatisfactionWrapper = styled.div`
	padding: 2rem;
	background-color: #e7f5fe;
	border: none;
	min-width: 370px;
	h4 {
		color: #2979f2;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 0.2rem;
	}
	span {
		font-size: 12px;
		color: #79869f;
	}

	p {
		font-size: 12px;
		color: #2979f2;
		margin-bottom: 0.2rem;
	}

	h5 {
		font-weight: 700;
		font-size: 20px;
	}

	span.icon {
		color: white;
		padding: 0 0.05rem;
	}
	span.positive {
		color: #3b99fc;
	}
	span.neutral {
		color: #ffca00;
	}
	span.negative {
		color: #fa5f1c;
	}
`;

export default CustomerSatisfactionWrapper;
