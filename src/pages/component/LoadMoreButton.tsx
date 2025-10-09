import { useEffect, useState } from "react";

interface product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  [key: string]: unknown;
}
interface apiData {
  products: product[];
  total: number;
  skip: number;
  limit: number;
  [key: string]: unknown;
}
const LoadMoreButton = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const [skip, setSkip] = useState<number>(0);

  const fetchProducts = async (skip: number): Promise<apiData> => {
    const res = fetch(`https://dummyjson.com/products?skip=${skip}&limit=10`);
    if (!(await res).ok) {
      console.error("Something went wrong");
    }
    return (await res).json();
  };

  const getProducts = async (loadMore = false) => {
    try {
      setLoading(true);
      setError(false);
      const result = await fetchProducts(skip);
      if (loadMore) {
        setProducts((prev) => [...prev, ...result.products]);
      } else {
        setProducts(result?.products);
      }
      setSkip((prev) => prev + 10);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* cards */}
      <div>
        {products?.map((item, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h5>{item?.category}</h5>
            <img src={item?.images[0]} alt="img" />
          </div>
        ))}
        {!loading && products.length < 194 && (
          <button
            onClick={() => getProducts(true)}
            className="h-10 w-36 cursor-pointer rounded-2xl bg-black text-white"
          >
            Load More Button
          </button>
        )}
        {products.length >= 100 && <p className="mt-4">You reached the end</p>}
      </div>
      {/*Load More button  */}
    </div>
  );
};

export default LoadMoreButton;
