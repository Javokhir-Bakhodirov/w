import { useEffect, useState } from "react";
import apiAxios from "../api/axios";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadData() {
			try {
				setLoading(true);
				const res = await apiAxios(url);
				setData(res.data.recipes);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, [url]);
	console.log(data);

	return { data, loading, error };
};

export default useFetch;
