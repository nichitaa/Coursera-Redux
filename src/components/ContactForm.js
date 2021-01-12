import React from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import Loading from "./Loading";
// redux actions
import { formSubmit, fetchData } from "../redux/actionCreators";

// validator functions
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const ContactForm = ({ formSubmit, fetchData, loading, fetchedData }) => {
	const handleSubmit = (values) => {
		console.log("Current state of the form: ", values);
		const firstname = values.firstname;
		const lastname = values.lastname;
		const telnum = values.telnum;
		const email = values.email;
		formSubmit(firstname, lastname, telnum, email);
	};

	console.log(loading);
	console.log(fetchedData);

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
						validators={{
							required,
							minLength: minLength(3),
							maxLength: maxLength(15),
						}}
					/>
					<Errors
						className="text-danger"
						model=".firstname"
						show="touched"
						messages={{
							required: "Required First Name",
							minLength: "Must be grater than 2 characters",
							maxLength: "Must be 15 characters or less",
						}}
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
						validators={{
							required,
							minLength: minLength(3),
							maxLength: maxLength(15),
						}}
					/>
					<Errors
						className="text-danger"
						model=".lastname"
						show="touched"
						messages={{
							required: "Required Last Name",
							minLength: "Must be grater than 2 characters",
							maxLength: "Must be 15 characters or less",
						}}
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
						validators={{
							required,
							minLength: minLength(4),
							maxLength: maxLength(15),
							isNumber,
						}}
					/>
					<Errors
						className="text-danger"
						model=".telnum"
						show="touched"
						messages={{
							required: "Required First Name",
							minLength: "Must be grater than 2 numbers",
							maxLength: "Must be 15 numbers or less",
							isNumber: "Must be a tel. Number",
						}}
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
						validators={{
							required,
							validEmail,
						}}
					/>
					<Errors
						className="text-danger"
						model=".email"
						show="touched"
						messages={{
							required: "Required First Name",
							validEmail: "Must be a valid Email",
						}}
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
			<Row className="form-group">
				<Col md={{ size: 10, offset: 2 }}>
					<Button type="button" color="primary" onClick={fetchData}>
						Fetch Data
					</Button>
				</Col>
			</Row>

			{loading ? (
				<Loading />
			) : (
				<Row className="form-group">
					<Col md={{ size: 10, offset: 2 }}>
						<Label>{fetchedData}</Label>
					</Col>
				</Row>
			)}
		</LocalForm>
	);
};

const mapStateToProps = (state) => ({
	loading: state.app.loading,
	fetchedData: state.thunk.data,
});

const mapDispatchToProps = (dispatch) => ({
	// componentFunctionName: (props) => dispatch((actionCreator(props)))
	formSubmit: (firstname, lastname, telnum, email) =>
		dispatch(formSubmit(firstname, lastname, telnum, email)),
	fetchData: () => {
		dispatch(fetchData());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
