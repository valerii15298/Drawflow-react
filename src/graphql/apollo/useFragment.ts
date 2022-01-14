import { DataProxy, OperationVariables, useApolloClient } from "@apollo/client";
import { useState, useEffect } from "react";
import deepEqual from "fast-deep-equal";

export const useFragment = (
  options: DataProxy.Fragment<OperationVariables, any>,
  optimistic?: boolean
) => {
  const client = useApolloClient();
  //@ts-ignore
  const cacheData = client?.cache?.data;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(
    () => {
      setLoading(true);
      const newData = client.readFragment(options, optimistic);
      if (!deepEqual(newData, data)) {
        setData(newData);
      }
      setLoading(false);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [cacheData, options, optimistic]
  );

  return {
    loading,
    data,
  };
};
