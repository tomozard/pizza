import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import productApi from "../../services/api/productApi";
// Material UI
import { Button, Container } from "@material-ui/core";

interface Props {}

const Index = (props: Props) => {
  const [products, loading, error, fetchData] = useApi(
    productApi.getProduct,
    []
  );

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      {loading ? (
        <div>fetching...</div>
      ) : error ? (
        <div>Fetch Error</div>
      ) : (
        <ul>
          {products.map((product, index) => 
            <li key={index}>{product.product_name_th}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Index;
