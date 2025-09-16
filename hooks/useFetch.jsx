"use client";

import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {successDto} from "@/dto/successDto";

function useFetch(fetchFunction, shouldFetch, config = {toastOnError: false, transform: undefined}, ...args) {
  const {toastOnError, transform} = config;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetch(...args) {
    return new Promise((resolve, reject) => {
      let errorMessage = "";
      setLoading(true);
      setError(null);
      fetchFunction(...args)
        .then((response) => {
          setLoading(false);
          let transformedData = response.Data;

          if (transform) {
            transformedData = transform(response.Data);
          }

          const dto = successDto(transformedData);
          setData(dto);
          resolve(dto);
        })
        .catch((err) => {
          setLoading(false);
          if (!err?.status) {
            errorMessage = "Something unexpected happened, please try again";
            setError(errorMessage);
          } else {
            const detail =
              err?.response?.data?.Message||
              err?.response?.data?.Data?.errors ||
              err?.response?.data?.Data?.Messages ||
              err?.response?.data?.Data?.result ||
              err?.response?.data?.Data

            if (Array.isArray(detail)) {
              errorMessage = detail[0];
              setError(detail[0]);
            } else {
              errorMessage = detail;
              setError(detail);
            }
          }

          if (toastOnError) {
            if (typeof errorMessage !== "string") {
              errorMessage = "Couldn't complete your action. Please try again later.";
            }
            toast.error(errorMessage);
          }
          reject({err, text: errorMessage});
        });
    });
  }

  useEffect(() => {
    if (shouldFetch) {
      fetch(...args);
    }
  }, [shouldFetch, fetchFunction, ...args]);

  return {fetch, data, loading, error};
}

export default useFetch;
