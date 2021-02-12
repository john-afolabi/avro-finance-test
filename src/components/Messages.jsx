import React from "react";
import MessagesWrapper from "../assets/styles/MessagesWrapper";
import cregital from "../assets/images/png/companies/cregital.png";
import intelia from "../assets/images/png/companies/intelia.png";
import imperialsoft from "../assets/images/png/companies/imperialsoft.png";
import altechma from "../assets/images/png/companies/altechma.png";
import talosmart from "../assets/images/png/companies/talosmart.png";

const messaages = [
	{
		logo: cregital,
		name: "Cregital",
		message: "Hey, don't forget to clear server cache!",
		time: "25mins ago",
	},
	{
		logo: intelia,
		name: "Intelia",
		message: "Hey, don't forget to clear server cache!",
		time: "25mins ago",
	},
	{
		logo: talosmart,
		name: "Talosmart",
		message: "Hey, don't forget to clear server cache!",
		time: "25mins ago",
	},
	{
		logo: imperialsoft,
		name: "Imperialsoft",
		message: "Hey, don't forget to clear server cache!",
		time: "25mins ago",
	},
	{
		logo: altechma,
		name: "Altechma",
		message: "Hey, don't forget to clear server cache!",
		time: "25mins ago",
	},
];
const Messages = () => {
	return (
		<MessagesWrapper>
			<div className="d-flex align-items-center">
				<h4 className="mr-auto">Messages</h4>
				<button class="btn btn-primary">
					<span>New Message</span>
				</button>
			</div>
			<div className="mt-4">
				{messaages.map((item, index) => {
					return (
						<div
							className="d-flex align-items-start message"
							key={index}
						>
							<img src={item.logo} alt="logo" />
							<div className="message-t">
								<h6>{item.name}</h6>
								<p>{item.message}</p>
								<span>{item.time}</span>
							</div>
							<div className="ml-auto">&#10247;</div>
						</div>
					);
				})}
			</div>
		</MessagesWrapper>
	);
};

export default Messages;
