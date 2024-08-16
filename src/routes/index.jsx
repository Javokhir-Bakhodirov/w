import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./home/Home"));
const Menu = lazy(() => import("./menu/Menu"));
const SinglePage = lazy(() => import("./single-page/SinglePage"));

const RouteController = () => {
	return useRoutes([
		{
			path: "/",
			element: (
				<Suspense fallback={<p>Loading...</p>}>
					{" "}
					<Home />
				</Suspense>
			),
		},
		{
			path: "/menu",
			element: (
				<Suspense fallback={<p>Loading...</p>}>
					{" "}
					<Menu />
				</Suspense>
			),
		},
		{
			path: "/recipes/:id",
			element: (
				<Suspense fallback={<p>Loading...</p>}>
					<SinglePage />
				</Suspense>
			),
		},
	]);
};

export default RouteController;
