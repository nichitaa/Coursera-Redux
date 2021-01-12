import React from "react";
import { Spinner } from "reactstrap";

export default function Loading() {
	return (
		<div className="col-12">
			<Spinner color="primary" />
			<p>Loading . . .</p>
		</div>
	);
}
