import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import NotesPage from "./pages/NotesPage/NotesPage";

function App() {
	return (
		<div className="main">
			<div className="header"> Your Notes </div>
			<NotesPage />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
