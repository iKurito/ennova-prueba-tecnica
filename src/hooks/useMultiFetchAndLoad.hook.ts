/* eslint-disable */
import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { AxiosCalls } from '../models/axios-call.model';

const useMultiFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callMultiEndpoint = async (axiosCall: AxiosCalls<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let results = [] as PromiseSettledResult<AxiosResponse<any, any>>[];
    results = await Promise.allSettled(axiosCall.calls);
    setLoading(false);
    return results;
  };

  const cancelMultiEndpoint = () => {
    setLoading(false);
    if (controller) controller.abort();
  };

  useEffect(() => {
    console.log('useMultiFetchAndLoad');
    return () => {
      console.log('useMultiFetchAndLoad unmount');
      cancelMultiEndpoint();
    };
  }, []);

  return { loading, callMultiEndpoint };
};

export default useMultiFetchAndLoad;
