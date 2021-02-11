// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",

	maximumFractionDigits: 0,
});

const columns = [
	{
		name: "",
		selector: "",
		cell: (row) => <img src={row.logo} alt="logo" />,
		width: "4rem",
	},

	{
		name: "Company name",
		selector: "company_name",
		sortable: true,
		cell: (row) => <span className="company-name">{row.company_name}</span>,
		minWidth: "9rem",
	},

	{
		name: "Company size",
		selector: "company_size",
		sortable: true,
		minWidth: "8rem",
	},

	{
		name: "Yrs of inc.",
		selector: "year_inc",
		sortable: true,
		minWidth: "7rem",
	},

	{
		name: "Revenue",
		selector: "revenue",
		sortable: true,
		cell: (row) => (
			<span className="company-name">
				{formatter.format(row.revenue)}
			</span>
		),
		minWidth: "8rem",
	},
	{
		name: "",
		selector: "status",
		sortable: true,
		cell: (row) =>
			row.status.toLowerCase() === "approved" ? (
				<div className="status approved">
					<span>Approved</span>
				</div>
			) : row.status.toLowerCase() === "declined" ? (
				<div className="status declined">
					<span>Declined</span>
				</div>
			) : (
				<div className="status pending">
					<span>Pending</span>
				</div>
			),
		minWidth: "9rem",
	},
];

export default columns;
