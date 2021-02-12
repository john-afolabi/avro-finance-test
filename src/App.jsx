import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import SummaryCards from "./components/SummaryCards";
import Chart from "./components/Chart";
import Table from "./components/Table/Index";
import CustomerSatisfaction from "./components/CustomerSatisfaction";
import Messages from "./components/Messages";

const App = () => {
	return (
		<main className="row">
			<div className="sidebar">
				<SideBar />
			</div>

			<div className="main-content col">
				<TopBar />
				<SummaryCards />
				<Chart />

				<div className="row mt-5">
					<div className="col col-xl-8">
						<Table />
					</div>
					<div className="col-6 col-xl-4 mt-5 mt-xl-0">
						<CustomerSatisfaction />
						<Messages />
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
