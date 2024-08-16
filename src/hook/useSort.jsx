import { useState, useEffect } from "react";

const useSort = (baseURL, sortOption) => {
	const [sortedUrl, setSortedUrl] = useState(baseURL);

	useEffect(() => {
		let url = baseURL;
		if (sortOption) {
			url += `?sortBy=${sortOption}&order=asc`;
		}
		setSortedUrl(url);
	}, [sortOption, baseURL]);

	return sortedUrl;
};

export default useSort;
