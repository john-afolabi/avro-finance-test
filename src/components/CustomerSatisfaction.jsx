import React from "react";
import CustomerSatisfactionWrapper from "../assets/styles/CustomerSatisfactionWrapper";

const data = {
	positive: 60,
	neutral: 20,
	negative: 20,
};

const icon = (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z"
			fill="currentColor"
		/>
	</svg>
);

const CustomerSatisfaction = () => {
	return (
		<CustomerSatisfactionWrapper className="card">
			<h4>Customer Satisfaction</h4>
			<span className="mb-4">Across help desk this month</span>

			<p>Response received</p>
			<h5>390</h5>

			<div className="ratings">
				<div className="positive row align-items-end mb-2">
					<span className="col-3">Positive</span>
					<div className="col-7 p-0">
						{[...Array(Math.round((data.positive / 100) * 10))].map(
							(e, i) => (
								<span className="icon positive" key={i}>
									{icon}
								</span>
							)
						)}

						{[
							...Array(
								10 - Math.round((data.positive / 100) * 10)
							),
						].map((e, i) => (
							<span className="icon" key={i}>
								{icon}
							</span>
						))}
					</div>
					<span className="col-2 ">{`${data.positive}%`}</span>
				</div>

				<div className="neutral row align-items-end mb-2">
					<span className="col-3">Neutral</span>
					<div className="col-7 p-0">
						{[...Array(Math.round((data.neutral / 100) * 10))].map(
							(e, i) => (
								<span className="icon neutral" key={i}>
									{icon}
								</span>
							)
						)}
						{[
							...Array(
								10 - Math.round((data.neutral / 100) * 10)
							),
						].map((e, i) => (
							<span className="icon" key={i}>
								{icon}
							</span>
						))}
					</div>
					<span className="col-2"> {`${data.neutral}%`}</span>
				</div>

				<div className="negative row align-items-end">
					<span className="col-3">Negative</span>
					<div className="col-7 p-0">
						{[...Array(Math.round((data.negative / 100) * 10))].map(
							(e, i) => (
								<span className="icon negative" key={i}>
									{icon}
								</span>
							)
						)}
						{[
							...Array(
								10 - Math.round((data.negative / 100) * 10)
							),
						].map((e, i) => (
							<span className="icon" key={i}>
								{icon}
							</span>
						))}
					</div>
					<span className="col-2"> {`${data.negative}%`}</span>
				</div>
			</div>
		</CustomerSatisfactionWrapper>
	);
};

export default CustomerSatisfaction;
