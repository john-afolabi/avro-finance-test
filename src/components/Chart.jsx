import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import ChartWrapper from "../assets/styles/ChartWrapper";

const data = [
	{
		name: "January",
		ab: "Jan",
		uv: 800,
		pv: 480,
	},
	{
		name: "February",
		ab: "Feb",
		uv: 600,
		pv: 298,
	},
	{
		name: "March",
		ab: "Mar",
		uv: 500,
		pv: 653,
	},
	{
		name: "April",
		ab: "Apr",
		uv: 893,
		pv: 145,
	},
	{
		name: "May",
		ab: "May",
		uv: 534,
		pv: 280,
	},
	{
		name: "June",
		ab: "Jun",
		uv: 689,
		pv: 430,
	},
	{
		name: "July",
		ab: "Jul",
		uv: 104,
		pv: 43,
	},
	{
		name: "August",
		ab: "Aug",
		uv: 568,
		pv: 345,
	},
	{
		name: "September",
		ab: "Sep",
		uv: 854,
		pv: 653,
	},
	{
		name: "October",
		ab: "Oct",
		uv: 380,
		pv: 32,
	},
	{
		name: "November",
		ab: "Nov",
		uv: 97,
		pv: 452,
	},
	{
		name: "December",
		ab: "Dec",
		uv: 123,
		pv: 589,
	},
];

let tooltip;
const CustomTooltip = ({ active, payload }) => {
	if (!active || !tooltip || !payload) return null;
	for (const bar of payload)
		if (bar.dataKey === tooltip)
			return (
				<div className="text-center card py-2 px-3">
					<h6>{bar.value.toFixed(2)}</h6>
					<span className="text-muted">New applications</span>
				</div>
			);
	return null;
};

const Chart = () => {
	return (
		<ChartWrapper>
			<div className="d-flex mb-4 align-items-center">
				<div className="mr-auto">
					<select className="form-control">
						<option>Monthly</option>
						<option>Yearly</option>
					</select>
				</div>

				<div>
					<span className="mr-4">Projects done</span>
					<span>New applications</span>
				</div>
			</div>
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart strokeWidth={0.5} data={data}>
					<defs>
						<linearGradient
							id="colorUv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#ed6029"
								stopOpacity={0.2}
							/>
							<stop
								offset="95%"
								stopColor="#ed6029"
								stopOpacity={0}
							/>
						</linearGradient>
						<linearGradient
							id="colorPv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#2979f2"
								stopOpacity={0.2}
							/>
							<stop
								offset="95%"
								stopColor="#2979f2"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="ab" dy={15} />
					<YAxis dx={-15} />
					<Tooltip content={<CustomTooltip />} />
					<Area
						type="linear"
						dataKey="uv"
						stroke="#ed6029"
						strokeWidth={3}
						fillOpacity={1}
						fill="url(#colorUv)"
						name="Name"
						onMouseOver={() => (tooltip = "uv")}
					/>
					<Area
						type="linear"
						dataKey="pv"
						stroke="#2979f2"
						strokeWidth={3}
						fillOpacity={1}
						fill="url(#colorPv)"
						name="Name"
						onMouseOver={() => (tooltip = "pv")}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartWrapper>
	);
};

export default Chart;
