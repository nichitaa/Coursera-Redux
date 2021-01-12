import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Row,
	Col,
	Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

export default function ContactForm() {
	const handleSubmit = (values) => {
		console.log("Current state of the form: ", values);
		alert("Current form state is: " + JSON.stringify(values));
	};

	return (
		<LocalForm onSubmit={(values) => handleSubmit(values)}>
			<Row className="form-group">
				<Label htmlFor="firstname" md={2}>
					First Name
				</Label>
				<Col md={10}>
					<Control.text
						model=".firstname"
						id="firstname"
						name="firstname"
						placeholder="First Name"
						className="form-control"
					/>
				</Col>
			</Row>
			<Row className="form-group">
				<Label htmlFor="lastname" md={2}>
					Last Name
				</Label>
				<Col md={10}>
					<Control.text
						model=".lastname"
						id="lastname"
						name="lastname"
						placeholder="Last Name"
						className="form-control"
					/>
				</Col>
			</Row>
			<Row className="form-group">
				<Label htmlFor="telnum" md={2}>
					Contact Tel.
				</Label>
				<Col md={10}>
					<Control.text
						model=".telnum"
						id="telnum"
						name="telnum"
						placeholder="Tel. Number"
						className="form-control"
					/>
				</Col>
			</Row>
			<Row className="form-group">
				<Label htmlFor="email" md={2}>
					Email
				</Label>
				<Col md={10}>
					<Control.text
						model=".email"
						id="email"
						name="email"
						placeholder="Email"
						className="form-control"
					/>
				</Col>
			</Row>
			<Row className="form-group">
				<Col md={{ size: 6, offset: 2 }}>
					<div className="form-check">
						<Label check>
							<Control.checkbox
								model=".agree"
								name="agree"
								className="form-check-input"
							/>{" "}
							<strong>May we contact you?</strong>
						</Label>
					</div>
				</Col>
				<Col md={{ size: 3, offset: 1 }}>
					<Control.select
						model=".contactType"
						name="contactType"
						className="form-control"
					>
						<option>Tel.</option>
						<option>Email</option>
					</Control.select>
				</Col>
			</Row>
			<Row className="form-group">
				<Label htmlFor="message" md={2}>
					Your Feedback
				</Label>
				<Col md={10}>
					<Control.textarea
						model=".message"
						id="message"
						name="message"
						rows="12"
						className="form-control"
					/>
				</Col>
			</Row>
			<Row className="form-group">
				<Col md={{ size: 10, offset: 2 }}>
					<Button type="submit" color="primary">
						Send Feedback
					</Button>
				</Col>
			</Row>
		</LocalForm>
	);
}
