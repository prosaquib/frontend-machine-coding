import { ColorRing } from "react-loader-spinner";
import "./App.css";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, page, setPage, totalPages, loading } = useProducts();

  const setPageHandler = (selectedPage) => {
    if (selectedPage <= 0 || selectedPage > totalPages) return;
    setPage(selectedPage);
  };

  return (
    <div>
      {loading && (
        <div className="loader">
          <ColorRing
            visible={loading}
            height="80"
            width="80"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      {products.length > 0 && (
        <div className="products__container">
          {products.map((product) => (
            <span className="product__single" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => setPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination_disabled"}
          >
            {" "}
            ◀️{" "}
          </span>
          {[...Array(totalPages).keys()].map((_, i) => {
            return (
              <span
                key={i}
                className={`pagination__number ${
                  page === i + 1 && "pagination__number--active"
                }`}
                onClick={() => setPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => setPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination_disabled"}
          >
            {" "}
            ▶️{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
