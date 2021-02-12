import styled from "styled-components";

const MessagesWrapper = styled.div`
	margin-top: 2em;
	padding: 2em;
	border: 1px solid #e3eded;
	border-radius: 2px;
	h4 {
		color: #2979f2;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 0.2rem;
	}
	button.btn-primary {
		font-size: 13px;
		border-radius: 2px;
		padding: 0.5rem 1.5rem;
		span {
			&:before {
				content: "+";
				margin-right: 0.4rem;
			}
		}
	}
	.d-flex.message {
		margin-bottom: 0.5rem;
		.message-t {
			margin: 0 0.5rem;
			h6 {
				color: #2979f2;
				font-size: 13px;
				font-weight: 700;
				margin-bottom: 0.1rem;
			}
			p {
				font-size: 12px;
				margin-bottom: -0.4rem;
			}
			span {
				font-size: 11px;
			}
		}
	}

	.d-flex.message:not(:last-of-type) {
		border-bottom: 1px solid #e3eded;
	}
`;

export default MessagesWrapper;
