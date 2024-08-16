import "./App.css";
import Nav from "./components/nav/Nav";
import RouteController from "./routes";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation;
	return (
		<>
			<Nav />
			<RouteController />
		</>
	);
}

export default App;
