import styled from "styled-components";

const StyledDataTable = styled.div`
	padding: 2rem;
	border: 1px solid #e3eded;
	border-radius: 2px;
	font-size: 13px;
	select {
		font-size: 13px;
	}
	div.mr-auto {
		span {
			border: 1px solid #e3eded;
			cursor: pointer;
		}
		span.active {
			border: unset;
			background-color: #eaeffd;
			box-shadow: 0px -4px 0px #2979f2 inset;
		}
		span:nth-of-type(2):before {
			display: inline-block;
			content: "";
			border-radius: 50%;
			height: 0.5rem;
			width: 0.5rem;
			margin-right: 0.4rem;
			background-color: #50b83c;
		}

		span:nth-of-type(3):before {
			display: inline-block;
			content: "";
			border-radius: 50%;
			height: 0.5rem;
			width: 0.5rem;
			margin-right: 0.4rem;
			background-color: #ffca00;
		}

		span:nth-of-type(4):before {
			display: inline-block;
			content: "";
			border-radius: 50%;
			height: 0.5rem;
			width: 0.5rem;
			margin-right: 0.4rem;
			background-color: #fa5f1c;
		}
	}

	.rdt_TableHeadRow,
	.rdt_TableRow {
		border-bottom-color: #e3eded;
	}
	.rdt_Pagination {
		border-top-color: #e3eded;
	}
	.rdt_TableCol {
		color: #637381;
		font-weight: 700;
	}

	.rdt_TableRow {
		color: #110b56;
		&:hover {
			background-color: #eaeffd;
		}
	}

	.status {
		padding: 0.3rem 1rem;
		border-radius: 20px;

		span:before {
			display: inline-block;
			content: "";
			border-radius: 50%;
			height: 0.5rem;
			width: 0.5rem;
			margin-right: 0.4rem;
		}
	}

	.approved {
		background-color: #e3f1df;
		color: #50b83c;
		span:before {
			background-color: #50b83c;
		}
	}

	.pending {
		background-color: #fffae8;
		color: #ffca00;
		span:before {
			background-color: #ffca00;
		}
	}

	.declined {
		background-color: #fdece2;
		color: #fa5f1c;
		span:before {
			background-color: #fa5f1c;
		}
	}
`;

export default StyledDataTable;
