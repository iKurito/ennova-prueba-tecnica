/* eslint-disable */
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';

const useMultiAsync = (
  asyncFn: () => Promise<PromiseSettledResult<AxiosResponse<any, any>>[]>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((results) => {
      const values = results.map((result) => {
        if (result.status === 'fulfilled') {
          return result.value.data
        };
      });
      if (isActive) successFunction(values);
    });
    return () => {
      if (returnFunction) returnFunction();
      isActive = false;
    };
  }, dependencies);
};

export default useMultiAsync;