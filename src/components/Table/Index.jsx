import React from "react";
import DataTable from "react-data-table-component";
import SDT from "../../assets/styles/StyledDataTable";
import data from "./data";
import columns from "./columns";

const Table = () => {
	return (
		<SDT>
			<div className="d-flex align-items-center mb-2">
				<div className="mr-auto">
					<span className="px-4 py-2 active">All</span>
					<span className="px-4 py-2">Approved</span>
					<span className="px-4 py-2">Pending</span>
					<span className="px-4 py-2">Declined</span>
				</div>

				<div>
					<select className="form-control">
						<option>Sort</option>
					</select>
				</div>
			</div>
			<DataTable
				columns={columns}
				data={data}
				pagination
				selectableRows={true}
				responsive={true}
			/>
		</SDT>
	);
};

export default Table;
