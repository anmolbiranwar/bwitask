import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <>
      <div className="container mt-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Shoper
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Filter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
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
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Price
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Rating
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
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
            />
            <div className="card-header">
              <p>{product.title}</p>
            </div>
            <div className="card-body">
              <dl>
                <dt>Price</dt>
               <dd> {product.price}</dd>
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
