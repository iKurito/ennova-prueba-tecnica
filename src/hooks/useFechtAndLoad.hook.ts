/* eslint-disable */
import { useEffect, useState } from "react"
import { AxiosCall } from "../models";
import { AxiosResponse } from "axios";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      return err.response;
    }
    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    if (controller) controller.abort();
  };


  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
}

export default useFetchAndLoad;