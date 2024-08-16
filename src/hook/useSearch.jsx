import { useState, useEffect } from "react";

const useSearch = (endpoint, query) => {
	const [searchUrl, setSearchUrl] = useState(endpoint);

	useEffect(() => {
		let url = endpoint;
		if (query) {
			url += `/search?q=${query}`;
		}
		setSearchUrl(url);
	}, [query, endpoint]);

	return searchUrl;
};

export default useSearch;
