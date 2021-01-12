import React from "react";
import { connect, Provider } from "react-redux";
import { StoreConfigs } from "./redux/StoreConfigs";
import ContactForm from "./components/ContactForm";
import TabNav from "./components/TabNav";

function App() {
	const store = StoreConfigs();

	return (
		<Provider store={store}>
			<div className="container">
				<h2>React-Redux</h2>
				<ContactForm />
				<TabNav />
			</div>
		</Provider>
	);
}

export default App;
