import React, { useState, useEffect } from "react";
import "../styles/productsStyle.css";
import Card from "../components/Card";

const ProductsPage = () => {
  const [data, setData] = useState(null);
  const [proData, setProData] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:5000/product/getAllProducts")
      .then((response) => {
        if (response.ok) {
          console.log("response", response);
          return response.json();
        }
      })
      .then((result) => {
        console.log("result", result);
        setProData(result.data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="blah">
      <section className="products__container container__prod">
        <div className="container__prod">
          <div>
            <div className="product">
              {proData &&
                proData.map((item) => {
                  return (
                    <div onClick={() => setData(item)}>
                      <div>
                        <Card productData={item} key={item.id} />
                        <span>
                          <div class="wrapper">
                            <div class="box">
                              <a class="button" href="#view">
                                View Details
                              </a>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div id="view" className="overlay">
              <div className="popup">
                <img src={data && data.imgUrl} alt="" />
                <a className="close" href="#">
                  &otimes;
                </a>
                <p className="content">
                  <h4 className="detail__title">{data && data.title}</h4>
                  <p className="detail__description">
                    {data && data.description}
                  </p>
                  <p className="detail__availability">
                    {data && data.availability}
                  </p>
                  <div className="box">
                    <a className="button" href="tel:+96176744184">
                      Call Us
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
