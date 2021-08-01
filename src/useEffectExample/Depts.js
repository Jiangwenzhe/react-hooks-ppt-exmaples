import { useState, useEffect, useCallback } from "react";

const fetchFunc = (id) => {
  return Promise.resolve(id);
};

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [productId, setProductId] = useState(0);

  // const fetchProduct = useCallback(async (productId) => {
  //   console.log("into fetchProduct");
  //   await fetchFunc(productId);
  //   setProduct(1);
  // }, [])

  async function fetchProduct() {
    console.log("into fetchProduct");
    await fetchFunc(productId);
    setProduct(1);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <button onClick={() => setProductId(productId + 1)}>
        更新 productId
      </button>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>
          更新 count
        </button>
      </div>
    </>
  );
}
