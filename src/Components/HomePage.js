import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct]=useState("");

 useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchProduct}`)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchProduct]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const handleSearch = (event) => {
    setSearchProduct(event.target.value);
  };

  return (
    <>
      <div className="container mt-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border rounded">
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Filter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Price
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Rating
                      </a>
                    </li>
                  </ul>
                </li>
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
            </div>
          </div>
        </nav>
      </div>
      <div className="d-flex flex-wrap container">
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
              <button className="btn btn-danger">
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
