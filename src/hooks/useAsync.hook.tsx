/* eslint-disable */
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const useAsync = (
	asyncFn: () => Promise<AxiosResponse<any, any>>,
	successFunction: Function,
	returnFunction: Function,
	dependencies: any[] = []
) => {
	useEffect(() => {
		let isActive = true;
		asyncFn().then((result) => {
			if (isActive) successFunction(result.data);
		});
		return () => {
			if (returnFunction) returnFunction();
			isActive = false;
		};
	}, dependencies);
};

export default useAsync;
