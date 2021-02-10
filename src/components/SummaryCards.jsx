import React from "react";
import { ReactComponent as Up } from "../assets/images/svg/up.svg";
import { ReactComponent as Down } from "../assets/images/svg/down.svg";
import SummaryCardWrapper from "../assets/styles/SummaryCardsWrapper";

const data = [
	{
		name: "Registered companies",
		value: 849,
		change: +5.25,
	},
	{
		name: "New application",
		value: 508,
		change: -1.23,
	},
	{
		name: "Total project done",
		value: 1043,
		change: -1.23,
	},
	{
		name: "New projects",
		value: 38,
		change: +5.25,
	},
];

const SummaryCards = () => {
	return (
		<SummaryCardWrapper>
			<h2 className="my-3">Overview</h2>

			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
				{data.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="summary-card">
								<p>{item.name}</p>
								<h5>{item.value}</h5>
								{item.change > 0 ? (
									<p className="pos-change mb-1">
										<Up /> <span>{item.change}%</span>
									</p>
								) : (
									<p className="neg-change mb-1">
										<Down />{" "}
										<span>{Math.abs(item.change)}%</span>
									</p>
								)}
								<span>Since last week</span>
							</div>
						</div>
					);
				})}
			</div>
		</SummaryCardWrapper>
	);
};

export default SummaryCards;
