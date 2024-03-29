import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let apiUrl = "https://dummyjson.com/products";
    if (searchProduct) {
      apiUrl += `/search?q=${searchProduct}`;
    }

    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchProduct]);

  const handleSearch = (event) => {
    setSearchProduct(event.target.value);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleFilterSelect = (filter) => {
    if (filter === "minToMax") {
      const sortedProducts = [...products].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setProducts(sortedProducts);
    } else if (filter === "maxToMin") {
      const sortedProducts = [...products].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setProducts(sortedProducts);
    }
  };

  const handleCategorySelect = (category) => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-2 sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border  rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Shoper
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="dropdown">
                  <button className="btn navbtn">Price</button>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleFilterSelect("minToMax")}>
                      Min to Max
                    </a>
                    <a href="#" onClick={() => handleFilterSelect("maxToMin")}>
                      Max to Min
                    </a>
                  </div>
                </div>
                <div className="dropdown ms-2">
                  <button className="btn navbtn">Categories</button>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleCategorySelect("smartphones")}>
                      Smartphones
                    </a>
                    <a href="#" onClick={() => handleCategorySelect("laptops")}>
                      Laptops
                    </a>
                    <a href="#" onClick={() => handleCategorySelect("fragrances")}>
                      Fragrances
                    </a>
                    <a href="#" onClick={() => handleCategorySelect("skincare")}>
                      Skincare
                    </a>
                    <a href="#" onClick={() => handleCategorySelect("groceries")}>
                      Groceries
                    </a>
                    <a href="#" onClick={() => handleCategorySelect("home-decoration")}>
                      Home Decoration
                    </a>
                  </div>
                </div>
              </ul>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search product"
                  aria-label="Search"
                  value={searchProduct}
                  onChange={handleSearch}
                />
              </form>
              <button className="btn btn-secondary ms-2 me-2">
                <span className="bi bi-cart4"></span>
                {cartCount > 0 && (
                  <span className="badge bg-primary">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="d-flex flex-wrap justify-content-aside container mt-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="card m-2 p-2"
            style={{ width: "250px", height: "400px" }}
          >
            <img
              src={product.images[0]}
              className="card-img-top"
              height="120"
              alt="Product"
            />
            <div className="card-header">
              <p>{product.title}</p>
            </div>
            <div className="card-body">
              <dl>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>
                  <span className="bi bi-star-fill text-success"></span>{" "}
                  {product.rating}
                </dd>
              </dl>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={handleAddToCart}>
                <span className="bi bi-cart4"></span> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
