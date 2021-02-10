import { useState, useEffect } from "react";
import { IProduct } from "../interfaces";

const UseApi = (
  method: Function,
  params: any[],
  autofetch: boolean = true
): [IProduct[], boolean, boolean, () => void] => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setData(await method(...params));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autofetch) {
      fetchData();
    }
  }, []);

  return [data, loading, error, fetchData];
};

export default UseApi;
